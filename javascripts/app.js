Twitter = {
  _callbacks:[]
};
Twitter.search = function(opts){
//opts.q
//opts.callback

var callback = function(data){
    opts.callback(data); 
    Twitter._callbacks = Twitter._callbacks.without(callback)
  }
var len = Twitter._callbacks.push(callback)
document.body.insert("<script src='http://search.twitter.com/search.json?q="+escape(opts.q)+"&callback=Twitter._callbacks["+(len-1).toString()+"]'>")
}

Twitter.search({q:'#jazzfest',
  callback: function (data){
    var container = $('all-tweets');
    tweets = data.results;
    tweets.each(function(e){
     container.insert(build_cube(
       link_user(e.from_user) +' '+ link_tweet_text(e.text)
     ))
     
    })
   container.insert(new Element('div',{'class':'end'}))
  }
})

function build_cube(content,opts){
  return new Element('div',{'class':'generic twotwenty'}).insert(content);
}

function link_tweet_text(text){
  return text.gsub(/(http:\/\/[^ ]+)/,'<a href="#{1}">#{1}</a>').gsub(/@([^ ]+)/,function(match){return '@'+link_user(match[1])})
}
function link_user(user_name)
{
return '<a href="http://twitter.com/'+user_name+'">'+user_name+'</a>'
}
/*
generic twotwenty

*/
