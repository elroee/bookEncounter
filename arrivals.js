var openModalLinks = document.querySelectorAll(".openModal");
var closeModalButton = document.querySelector(".close-button");
var overlay = document.getElementById('overlay');

openModalLinks.forEach(link => {
    link.addEventListener('click', function(){
        event.preventDefault();
        var modal = document.querySelector(".modal");   
        openModal(link, modal);
    })
})

closeModalButton.addEventListener('click', function(){
    var modal = document.querySelector(".modal");   
    closeModal(modal);
})

function openModal(link, modal)
{
    if(modal==null) return;
    modal.classList.add('active');
    overlay.classList.add('active');
    var pname = link.closest('div').className;
    // alert('.'+pname);
    var booktitleauthor = document.querySelector(".modal .modal-header .title")
    var imagebox = document.querySelector(".modal .modal-body .cover");
    var desc = document.querySelector(".modal .modal-body .desc p");
    booktitleauthor.textContent = document.querySelector('.'+pname+' .title').textContent +' - '+document.querySelector('.'+pname+' .author').textContent;
    imagebox.innerHTML = document.querySelector('.'+pname+' .cover').innerHTML;
    desc.textContent=document.querySelector('.'+pname+' .desc').textContent;
}

function closeModal(modal)
{
    if(modal==null) return;
    modal.classList.remove('active');
    overlay.classList.remove('active');
}


document.querySelector(".like").addEventListener('click', function(){
    var count= document.querySelector(".like h4").textContent;
   
    var image = document.querySelector(".like");
    if(image.innerHTML.includes("<img src=\"logo/unliked.png\" alt=\"\">"))
    {
        count = parseInt(count)+parseInt(1);
        image.innerHTML = "<img src=\"logo/liked.png\" alt=\"\"><h4 class=\"count\">"+count+"</h4>";
    }
    else{
        count = parseInt(count)-parseInt(1);
        image.innerHTML = "<img src=\"logo/unliked.png\" alt=\"\"><h4 class=\"count\">"+count+"</h4>";
    }
    
})

document.querySelector(".buttons .show").addEventListener('click',function(){
    event.preventDefault();
    var books = document.querySelector(".container .books").innerHTML;
    document.querySelector(".container .books").innerHTML+= books;

})

var links = document.querySelectorAll(".links a");
links.forEach(link => {
    link.textContent = link.textContent.toUpperCase();
})