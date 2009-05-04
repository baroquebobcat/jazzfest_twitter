Twitter = {};
Twitter.search = function(query){
document.body.insert("<script src='http://search.twitter.com/search.json?q="+escape(query)+"&callback=TwitterSlurp'>")
}

function TwitterSlurp(data){
var container = $('all-tweets');
data.results.each(function(e){
 container.insert(Object.toJSON(e))
  container.insert('<br>')
})

}

Twitter.search('#jazzfest')
