Twitter = {};
Twitter.search = function(query){
document.body.insert("<script src='http://search.twitter.com/search.json?q="+escape(query)+"&callback=TwitterSlurp'>")
}

function TwitterSlurp(data){
var container = $('all-tweets');
tweets = data.results;

data.results.each(function(e){
 
 container.insert(buildCube(
   e.text
 ))
 
})

}

Twitter.search('#jazzfest')

function buildCube(content){
  return new Element('div',{'class':'generic twotwenty'}).insert(content)
}

/*
generic twotwenty

*/
