Twitter = {
  _callbacks:[]
};
Twitter.search = function(opts){
//opts.q
//opts.callback
var len = Twitter._callbacks.push(function(data){
    opts.callback(data); 
  })
document.body.insert("<script src='http://search.twitter.com/search.json?q="+escape(opts.q)+"&callback=Twitter._callbacks["+(len-1).toString()+"]'>")
}

Twitter.Slurp=function (data){
var container = $('all-tweets');
tweets = data.results;

data.results.each(function(e){
 
 container.insert(buildCube(
   e.text
 ))
 
})

}

Twitter.search({q:'#jazzfest',callback:Twitter.Slurp})

function buildCube(content){
  return new Element('div',{'class':'generic twotwenty'}).insert(content)
}

/*
generic twotwenty

*/
