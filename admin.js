document.getElementById('submit').addEventListener('click', function () {
   var title = document.getElementById('title').textContent
   var author = document.getElementById('author').textContent
   var topic = document.getElementById('topic').textContent
   var desc = document.getElementById('desc').textContent

   var cast = {
       "title" : title,
       "author" : author,
       "topic" : topic,
       "desc" : desc
   };

   localStorage.setItem("cast", JSON.stringify(cast));

})

document.getElementById('retrieve').addEventListener('click', function () {
  
 
    var cast = JSON.parse(localStorage.getItem("cast"))
 
    // document.getElementById('title').textContent = cast.title
    // document.getElementById('author').textContent = cast.author
    // document.getElementById('topic').textContent = cast.topic
    document.getElementById('desc').textContent = cast
 
 })

 var links = document.querySelectorAll(".links a");
 links.forEach(link => {
     link.textContent = link.textContent.toUpperCase();
 })