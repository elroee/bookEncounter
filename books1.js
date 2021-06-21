// var classnames = ['.trending', '.requestedbooks', '.mostsearched', '.editorschoice', '.biography', '.thinking']

// for(var j=0; j<classnames.length; j++)
// {
//     document.querySelector(classnames[j]+' .prev').addEventListener('click', function(){
//         var i=7;
//         var bef, rep, bef1, rep1, bef2, rep2
//         rep=document.querySelector(classnames[j]+' .book_'+i).innerHTML
//         rep1=document.querySelector(classnames[j]+' .title .book_'+i).innerHTML
//         rep2=document.querySelector(classnames[j]+' .author .book_'+i).innerHTML
//         while(i>=1){
            
//             if(parseInt(i)-parseInt(1)!=0){
//                 bef=document.querySelector(classnames[j]+' .book_'+(parseInt(i)-parseInt(1))).innerHTML
//                 bef1=document.querySelector(classnames[j]+' .title .book_'+(parseInt(i)-parseInt(1))).innerHTML
//                 bef2=document.querySelector(classnames[j]+' .author .book_'+(parseInt(i)-parseInt(1))).innerHTML
//                 document.querySelector(classnames[j]+' .book_'+(parseInt(i)-parseInt(1))).innerHTML = rep
//                 document.querySelector(classnames[j]+' .title .book_'+(parseInt(i)-parseInt(1))).innerHTML = rep1
//                 document.querySelector(classnames[j]+' .author .book_'+(parseInt(i)-parseInt(1))).innerHTML = rep2
//                 rep=bef
//                 rep1=bef1
//                 rep2=bef2
//             }
//             else{
    
//                 document.querySelector(classnames[j]+' .book_7').innerHTML = rep;
//                 document.querySelector(classnames[j]+' .title .book_7').innerHTML = rep1;
//                 document.querySelector(classnames[j]+' .author .book_7').innerHTML = rep2;
//             }
//             i--;
//         }
    
//     })
// }

var links = document.querySelectorAll(".links a");
links.forEach(link => {
    link.textContent = link.textContent.toUpperCase();
})


document.querySelector('.trending'+' .prev').addEventListener('click', function(){
    var i=7;
    var bef, rep, bef1, rep1, bef2, rep2
    rep=document.querySelector('.trending'+' .book_'+i).innerHTML
    rep1=document.querySelector('.trending'+' .title .book_'+i).innerHTML
    rep2=document.querySelector('.trending'+' .author .book_'+i).innerHTML
    while(i>=1){
        
        if(parseInt(i)-parseInt(1)!=0){
            bef=document.querySelector('.trending'+' .book_'+(parseInt(i)-parseInt(1))).innerHTML
            bef1=document.querySelector('.trending'+' .title .book_'+(parseInt(i)-parseInt(1))).innerHTML
            bef2=document.querySelector('.trending'+' .author .book_'+(parseInt(i)-parseInt(1))).innerHTML
            document.querySelector('.trending'+' .book_'+(parseInt(i)-parseInt(1))).innerHTML = rep
            document.querySelector('.trending'+' .title .book_'+(parseInt(i)-parseInt(1))).innerHTML = rep1
            document.querySelector('.trending'+' .author .book_'+(parseInt(i)-parseInt(1))).innerHTML = rep2
            rep=bef
            rep1=bef1
            rep2=bef2
        }
        else{

            document.querySelector('.trending'+' .book_7').innerHTML = rep;
            document.querySelector('.trending'+' .title .book_7').innerHTML = rep1;
            document.querySelector('.trending'+' .author .book_7').innerHTML = rep2;
        }
        i--;
    }

})

document.querySelector('.requestedbooks'+' .prev').addEventListener('click', function(){
    var i=7;
    var bef, rep, bef1, rep1, bef2, rep2
    rep=document.querySelector('.requestedbooks'+' .book_'+i).innerHTML
    rep1=document.querySelector('.requestedbooks'+' .title .book_'+i).innerHTML
    rep2=document.querySelector('.requestedbooks'+' .author .book_'+i).innerHTML
    while(i>=1){
        
        if(parseInt(i)-parseInt(1)!=0){
            bef=document.querySelector('.requestedbooks'+' .book_'+(parseInt(i)-parseInt(1))).innerHTML
            bef1=document.querySelector('.requestedbooks'+' .title .book_'+(parseInt(i)-parseInt(1))).innerHTML
            bef2=document.querySelector('.requestedbooks'+' .author .book_'+(parseInt(i)-parseInt(1))).innerHTML
            document.querySelector('.requestedbooks'+' .book_'+(parseInt(i)-parseInt(1))).innerHTML = rep
            document.querySelector('.requestedbooks'+' .title .book_'+(parseInt(i)-parseInt(1))).innerHTML = rep1
            document.querySelector('.requestedbooks'+' .author .book_'+(parseInt(i)-parseInt(1))).innerHTML = rep2
            rep=bef
            rep1=bef1
            rep2=bef2
        }
        else{

            document.querySelector('.requestedbooks'+' .book_7').innerHTML = rep;
            document.querySelector('.requestedbooks'+' .title .book_7').innerHTML = rep1;
            document.querySelector('.requestedbooks'+' .author .book_7').innerHTML = rep2;
        }
        i--;
    }

})


document.querySelector('.mostsearched'+' .prev').addEventListener('click', function(){
    var i=7;
    var bef, rep, bef1, rep1, bef2, rep2
    rep=document.querySelector('.mostsearched'+' .book_'+i).innerHTML
    rep1=document.querySelector('.mostsearched'+' .title .book_'+i).innerHTML
    rep2=document.querySelector('.mostsearched'+' .author .book_'+i).innerHTML
    while(i>=1){
        
        if(parseInt(i)-parseInt(1)!=0){
            bef=document.querySelector('.mostsearched'+' .book_'+(parseInt(i)-parseInt(1))).innerHTML
            bef1=document.querySelector('.mostsearched'+' .title .book_'+(parseInt(i)-parseInt(1))).innerHTML
            bef2=document.querySelector('.mostsearched'+' .author .book_'+(parseInt(i)-parseInt(1))).innerHTML
            document.querySelector('.mostsearched'+' .book_'+(parseInt(i)-parseInt(1))).innerHTML = rep
            document.querySelector('.mostsearched'+' .title .book_'+(parseInt(i)-parseInt(1))).innerHTML = rep1
            document.querySelector('.mostsearched'+' .author .book_'+(parseInt(i)-parseInt(1))).innerHTML = rep2
            rep=bef
            rep1=bef1
            rep2=bef2
        }
        else{

            document.querySelector('.mostsearched'+' .book_7').innerHTML = rep;
            document.querySelector('.mostsearched'+' .title .book_7').innerHTML = rep1;
            document.querySelector('.mostsearched'+' .author .book_7').innerHTML = rep2;
        }
        i--;
    }

})

document.querySelector('.editorschoice'+' .prev').addEventListener('click', function(){
    var i=7;
    var bef, rep, bef1, rep1, bef2, rep2
    rep=document.querySelector('.editorschoice'+' .book_'+i).innerHTML
    rep1=document.querySelector('.editorschoice'+' .title .book_'+i).innerHTML
    rep2=document.querySelector('.editorschoice'+' .author .book_'+i).innerHTML
    while(i>=1){
        
        if(parseInt(i)-parseInt(1)!=0){
            bef=document.querySelector('.editorschoice'+' .book_'+(parseInt(i)-parseInt(1))).innerHTML
            bef1=document.querySelector('.editorschoice'+' .title .book_'+(parseInt(i)-parseInt(1))).innerHTML
            bef2=document.querySelector('.editorschoice'+' .author .book_'+(parseInt(i)-parseInt(1))).innerHTML
            document.querySelector('.editorschoice'+' .book_'+(parseInt(i)-parseInt(1))).innerHTML = rep
            document.querySelector('.editorschoice'+' .title .book_'+(parseInt(i)-parseInt(1))).innerHTML = rep1
            document.querySelector('.editorschoice'+' .author .book_'+(parseInt(i)-parseInt(1))).innerHTML = rep2
            rep=bef
            rep1=bef1
            rep2=bef2
        }
        else{

            document.querySelector('.editorschoice'+' .book_7').innerHTML = rep;
            document.querySelector('.editorschoice'+' .title .book_7').innerHTML = rep1;
            document.querySelector('.editorschoice'+' .author .book_7').innerHTML = rep2;
        }
        i--;
    }

})

document.querySelector('.biography'+' .prev').addEventListener('click', function(){
    var i=7;
    var bef, rep, bef1, rep1, bef2, rep2
    rep=document.querySelector('.biography'+' .book_'+i).innerHTML
    rep1=document.querySelector('.biography'+' .title .book_'+i).innerHTML
    rep2=document.querySelector('.biography'+' .author .book_'+i).innerHTML
    while(i>=1){
        
        if(parseInt(i)-parseInt(1)!=0){
            bef=document.querySelector('.biography'+' .book_'+(parseInt(i)-parseInt(1))).innerHTML
            bef1=document.querySelector('.biography'+' .title .book_'+(parseInt(i)-parseInt(1))).innerHTML
            bef2=document.querySelector('.biography'+' .author .book_'+(parseInt(i)-parseInt(1))).innerHTML
            document.querySelector('.biography'+' .book_'+(parseInt(i)-parseInt(1))).innerHTML = rep
            document.querySelector('.biography'+' .title .book_'+(parseInt(i)-parseInt(1))).innerHTML = rep1
            document.querySelector('.biography'+' .author .book_'+(parseInt(i)-parseInt(1))).innerHTML = rep2
            rep=bef
            rep1=bef1
            rep2=bef2
        }
        else{

            document.querySelector('.biography'+' .book_7').innerHTML = rep;
            document.querySelector('.biography'+' .title .book_7').innerHTML = rep1;
            document.querySelector('.biography'+' .author .book_7').innerHTML = rep2;
        }
        i--;
    }

})

document.querySelector('.thinking'+' .prev').addEventListener('click', function(){
    var i=7;
    var bef, rep, bef1, rep1, bef2, rep2
    rep=document.querySelector('.thinking'+' .book_'+i).innerHTML
    rep1=document.querySelector('.thinking'+' .title .book_'+i).innerHTML
    rep2=document.querySelector('.thinking'+' .author .book_'+i).innerHTML
    while(i>=1){
        
        if(parseInt(i)-parseInt(1)!=0){
            bef=document.querySelector('.thinking'+' .book_'+(parseInt(i)-parseInt(1))).innerHTML
            bef1=document.querySelector('.thinking'+' .title .book_'+(parseInt(i)-parseInt(1))).innerHTML
            bef2=document.querySelector('.thinking'+' .author .book_'+(parseInt(i)-parseInt(1))).innerHTML
            document.querySelector('.thinking'+' .book_'+(parseInt(i)-parseInt(1))).innerHTML = rep
            document.querySelector('.thinking'+' .title .book_'+(parseInt(i)-parseInt(1))).innerHTML = rep1
            document.querySelector('.thinking'+' .author .book_'+(parseInt(i)-parseInt(1))).innerHTML = rep2
            rep=bef
            rep1=bef1
            rep2=bef2
        }
        else{

            document.querySelector('.thinking'+' .book_7').innerHTML = rep;
            document.querySelector('.thinking'+' .title .book_7').innerHTML = rep1;
            document.querySelector('.thinking'+' .author .book_7').innerHTML = rep2;
        }
        i--;
    }

})

document.querySelector('.trending'+' .next').addEventListener('click', function(){
    var i=1;
    var bef, rep, bef1, rep1, bef2, rep2
    rep=document.querySelector('.trending'+' .book_'+i).innerHTML
    rep1=document.querySelector('.trending'+' .title .book_'+i).innerHTML
    rep2=document.querySelector('.trending'+' .author .book_'+i).innerHTML
    while(i<=7){
        
        if(parseInt(i)+parseInt(1)!=8){
            bef=document.querySelector('.trending'+' .book_'+(parseInt(i)+parseInt(1))).innerHTML
            bef1=document.querySelector('.trending'+' .title .book_'+(parseInt(i)+parseInt(1))).innerHTML
            bef2=document.querySelector('.trending'+' .author .book_'+(parseInt(i)+parseInt(1))).innerHTML
            document.querySelector('.trending'+' .book_'+(parseInt(i)+parseInt(1))).innerHTML = rep
            document.querySelector('.trending'+' .title .book_'+(parseInt(i)+parseInt(1))).innerHTML = rep1
            document.querySelector('.trending'+' .author .book_'+(parseInt(i)+parseInt(1))).innerHTML = rep2
            rep=bef
            rep1=bef1
            rep2=bef2
        }
        else{

            document.querySelector('.trending'+' .book_1').innerHTML = rep;
            document.querySelector('.trending'+' .title .book_1').innerHTML = rep1;
            document.querySelector('.trending'+' .author .book_1').innerHTML = rep2;
        }
        i++;
    }

})

document.querySelector('.requestedbooks'+' .next').addEventListener('click', function(){
    var i=1;
    var bef, rep, bef1, rep1, bef2, rep2
    rep=document.querySelector('.requestedbooks'+' .book_'+i).innerHTML
    rep1=document.querySelector('.requestedbooks'+' .title .book_'+i).innerHTML
    rep2=document.querySelector('.requestedbooks'+' .author .book_'+i).innerHTML
    while(i<=7){
        
        if(parseInt(i)+parseInt(1)!=8){
            bef=document.querySelector('.requestedbooks'+' .book_'+(parseInt(i)+parseInt(1))).innerHTML
            bef1=document.querySelector('.requestedbooks'+' .title .book_'+(parseInt(i)+parseInt(1))).innerHTML
            bef2=document.querySelector('.requestedbooks'+' .author .book_'+(parseInt(i)+parseInt(1))).innerHTML
            document.querySelector('.requestedbooks'+' .book_'+(parseInt(i)+parseInt(1))).innerHTML = rep
            document.querySelector('.requestedbooks'+' .title .book_'+(parseInt(i)+parseInt(1))).innerHTML = rep1
            document.querySelector('.requestedbooks'+' .author .book_'+(parseInt(i)+parseInt(1))).innerHTML = rep2
            rep=bef
            rep1=bef1
            rep2=bef2
        }
        else{

            document.querySelector('.requestedbooks'+' .book_1').innerHTML = rep;
            document.querySelector('.requestedbooks'+' .title .book_1').innerHTML = rep1;
            document.querySelector('.requestedbooks'+' .author .book_1').innerHTML = rep2;
        }
        i++;
    }

})

document.querySelector('.mostsearched'+' .next').addEventListener('click', function(){
    var i=1;
    var bef, rep, bef1, rep1, bef2, rep2
    rep=document.querySelector('.mostsearched'+' .book_'+i).innerHTML
    rep1=document.querySelector('.mostsearched'+' .title .book_'+i).innerHTML
    rep2=document.querySelector('.mostsearched'+' .author .book_'+i).innerHTML
    while(i<=7){
        
        if(parseInt(i)+parseInt(1)!=8){
            bef=document.querySelector('.mostsearched'+' .book_'+(parseInt(i)+parseInt(1))).innerHTML
            bef1=document.querySelector('.mostsearched'+' .title .book_'+(parseInt(i)+parseInt(1))).innerHTML
            bef2=document.querySelector('.mostsearched'+' .author .book_'+(parseInt(i)+parseInt(1))).innerHTML
            document.querySelector('.mostsearched'+' .book_'+(parseInt(i)+parseInt(1))).innerHTML = rep
            document.querySelector('.mostsearched'+' .title .book_'+(parseInt(i)+parseInt(1))).innerHTML = rep1
            document.querySelector('.mostsearched'+' .author .book_'+(parseInt(i)+parseInt(1))).innerHTML = rep2
            rep=bef
            rep1=bef1
            rep2=bef2
        }
        else{

            document.querySelector('.mostsearched'+' .book_1').innerHTML = rep;
            document.querySelector('.mostsearched'+' .title .book_1').innerHTML = rep1;
            document.querySelector('.mostsearched'+' .author .book_1').innerHTML = rep2;
        }
        i++;
    }

})

document.querySelector('.editorschoice'+' .next').addEventListener('click', function(){
    var i=1;
    var bef, rep, bef1, rep1, bef2, rep2
    rep=document.querySelector('.editorschoice'+' .book_'+i).innerHTML
    rep1=document.querySelector('.editorschoice'+' .title .book_'+i).innerHTML
    rep2=document.querySelector('.editorschoice'+' .author .book_'+i).innerHTML
    while(i<=7){
        
        if(parseInt(i)+parseInt(1)!=8){
            bef=document.querySelector('.editorschoice'+' .book_'+(parseInt(i)+parseInt(1))).innerHTML
            bef1=document.querySelector('.editorschoice'+' .title .book_'+(parseInt(i)+parseInt(1))).innerHTML
            bef2=document.querySelector('.editorschoice'+' .author .book_'+(parseInt(i)+parseInt(1))).innerHTML
            document.querySelector('.editorschoice'+' .book_'+(parseInt(i)+parseInt(1))).innerHTML = rep
            document.querySelector('.editorschoice'+' .title .book_'+(parseInt(i)+parseInt(1))).innerHTML = rep1
            document.querySelector('.editorschoice'+' .author .book_'+(parseInt(i)+parseInt(1))).innerHTML = rep2
            rep=bef
            rep1=bef1
            rep2=bef2
        }
        else{

            document.querySelector('.editorschoice'+' .book_1').innerHTML = rep;
            document.querySelector('.editorschoice'+' .title .book_1').innerHTML = rep1;
            document.querySelector('.editorschoice'+' .author .book_1').innerHTML = rep2;
        }
        i++;
    }

})

document.querySelector('.biography'+' .next').addEventListener('click', function(){
    var i=1;
    var bef, rep, bef1, rep1, bef2, rep2
    rep=document.querySelector('.biography'+' .book_'+i).innerHTML
    rep1=document.querySelector('.biography'+' .title .book_'+i).innerHTML
    rep2=document.querySelector('.biography'+' .author .book_'+i).innerHTML
    while(i<=7){
        
        if(parseInt(i)+parseInt(1)!=8){
            bef=document.querySelector('.biography'+' .book_'+(parseInt(i)+parseInt(1))).innerHTML
            bef1=document.querySelector('.biography'+' .title .book_'+(parseInt(i)+parseInt(1))).innerHTML
            bef2=document.querySelector('.biography'+' .author .book_'+(parseInt(i)+parseInt(1))).innerHTML
            document.querySelector('.biography'+' .book_'+(parseInt(i)+parseInt(1))).innerHTML = rep
            document.querySelector('.biography'+' .title .book_'+(parseInt(i)+parseInt(1))).innerHTML = rep1
            document.querySelector('.biography'+' .author .book_'+(parseInt(i)+parseInt(1))).innerHTML = rep2
            rep=bef
            rep1=bef1
            rep2=bef2
        }
        else{

            document.querySelector('.biography'+' .book_1').innerHTML = rep;
            document.querySelector('.biography'+' .title .book_1').innerHTML = rep1;
            document.querySelector('.biography'+' .author .book_1').innerHTML = rep2;
        }
        i++;
    }

})

document.querySelector('.thinking'+' .next').addEventListener('click', function(){
    var i=1;
    var bef, rep, bef1, rep1, bef2, rep2
    rep=document.querySelector('.thinking'+' .book_'+i).innerHTML
    rep1=document.querySelector('.thinking'+' .title .book_'+i).innerHTML
    rep2=document.querySelector('.thinking'+' .author .book_'+i).innerHTML
    while(i<=7){
        
        if(parseInt(i)+parseInt(1)!=8){
            bef=document.querySelector('.thinking'+' .book_'+(parseInt(i)+parseInt(1))).innerHTML
            bef1=document.querySelector('.thinking'+' .title .book_'+(parseInt(i)+parseInt(1))).innerHTML
            bef2=document.querySelector('.thinking'+' .author .book_'+(parseInt(i)+parseInt(1))).innerHTML
            document.querySelector('.thinking'+' .book_'+(parseInt(i)+parseInt(1))).innerHTML = rep
            document.querySelector('.thinking'+' .title .book_'+(parseInt(i)+parseInt(1))).innerHTML = rep1
            document.querySelector('.thinking'+' .author .book_'+(parseInt(i)+parseInt(1))).innerHTML = rep2
            rep=bef
            rep1=bef1
            rep2=bef2
        }
        else{

            document.querySelector('.thinking'+' .book_1').innerHTML = rep;
            document.querySelector('.thinking'+' .title .book_1').innerHTML = rep1;
            document.querySelector('.thinking'+' .author .book_1').innerHTML = rep2;
        }
        i++;
    }

})

document.querySelector('.authors'+' .prev').addEventListener('click', function(){
    var i=7;
    var bef, rep, bef1, rep1
    rep=document.querySelector('.authors'+' .book_'+i).innerHTML
    rep1=document.querySelector('.authors'+' .author .book_'+i).innerHTML
    while(i>=1){
        
        if(parseInt(i)-parseInt(1)!=0){
            bef=document.querySelector('.authors'+' .book_'+(parseInt(i)-parseInt(1))).innerHTML
            bef1=document.querySelector('.authors'+' .author .book_'+(parseInt(i)-parseInt(1))).innerHTML
            document.querySelector('.authors'+' .book_'+(parseInt(i)-parseInt(1))).innerHTML = rep
            document.querySelector('.authors'+' .author .book_'+(parseInt(i)-parseInt(1))).innerHTML = rep1
            
            rep=bef
            rep1=bef1
            
        }
        else{

            document.querySelector('.authors'+' .book_7').innerHTML = rep;
            document.querySelector('.authors'+' .author .book_7').innerHTML = rep1;
        }
        i--;
    }

})

document.querySelector('.authors'+' .next').addEventListener('click', function(){
    var i=1;
    var bef, rep, bef1, rep1
    rep=document.querySelector('.authors'+' .book_'+i).innerHTML
    rep1=document.querySelector('.authors'+' .author .book_'+i).innerHTML
   
    while(i<=7){
        
        if(parseInt(i)+parseInt(1)!=8){
            bef=document.querySelector('.authors'+' .book_'+(parseInt(i)+parseInt(1))).innerHTML
            bef1=document.querySelector('.authors'+' .author .book_'+(parseInt(i)+parseInt(1))).innerHTML
            document.querySelector('.authors'+' .book_'+(parseInt(i)+parseInt(1))).innerHTML = rep
            document.querySelector('.authors'+' .author .book_'+(parseInt(i)+parseInt(1))).innerHTML = rep1
            rep=bef
            rep1=bef1
            
        }
        else{

            document.querySelector('.authors'+' .book_1').innerHTML = rep;
            document.querySelector('.authors'+' .author .book_1').innerHTML = rep1;
        }
        i++;
    }

})

//store books in localStorage

var book1 = {
    name: "Risk Is Right",
    author: "John Piper",
    topic: "Wisdom",
    link:""
}
var book2 = {
    name: "Finally Free",
    author: "Heath Lambert",
    topic: "Wisdom",
    link:""
}
var book3 = {
    name: "The Great Divorce",
    author: "C.S Lewis",
    topic: "Wisdom",
    link:""
}
var book4 = {
    name: "Baptist Foundations",
    author: "Mark Dever",
    topic: "Wisdom",
    link:""
}
var book5 = {
    name: "Charles Spurgeon",
    author: "John Piper",
    topic: "Wisdom",
    link:""
}
var book6 = {
    name: "In Christ Alone",
    author: "Sinclair B Ferguson",
    topic: "Wisdom",
    link:""
}
var book7 = {
    name: "A Hunger for God",
    author: "John Piper",
    topic: "Love",
    link:""
}
var book8 = {
    name: "Bridge to Haven",
    author: "Francine Rivers",
    topic: "Love",
    link:""
}
var book9 = {
    name: "You and Me Forever",
    author: "Francis Chan",
    topic: "Love",
    link:""
}
var book10 = {
    name: "A Life",
    author: "Jonathan Edwards",
    topic: "Love",
    link:""
}
var book11 = {
    name: "Being a Dad who Leads",
    author: "John MacArthur",
    topic: "Thinking",
    link:""
}
var book12 = {
    name: "The Future of Justification",
    author: "John Piper",
    topic: "Thinking",
    link:""
}
var book13 = {
    name: "Atheism Remix",
    author: "R. Albert Mohler Jr.",
    topic: "Thinking",
    link:""
}
var book14 = {
    name: "The Compelling Community",
    author: "Mark Dever",
    topic: "Thinking",
    link:""
}
var book15 = {
    name: "Logic",
    author: "Vern S Poythress",
    topic: "Thinking",
    link:""
}
var book16 = {
    name: "Biblical Preaching",
    author: "Haddon W. Robinson",
    topic: "Biography",
    link:""
}
var book17 = {
    name: "Christ Centered Exposition",
    author: "R. Albert Mohler Jr.",
    topic: "Biography",
    link:""
}
var book18 = {
    name: "A Hunger for God",
    author: "John Piper",
    topic: "Biography",
    link:""
}
var book19 = {
    name: "The Problem of Pain",
    author: "C.S Lewis",
    topic: "Biography",
    link:""
}
var book20 = {
    name: "The Canon of Scripture",
    author: "F. F. Bruce",
    topic: "Biography",
    link:""
}
var book21 = {
    name: "God's Wisdom for Navigating Life",
    author: "Timothy Keller",
    topic: "Purpose",
    link:""
}
var book22 = {
    name: "The Trial and Triump of Faith",
    author: "Samuel Rutherford",
    topic: "Purpose",
    link:""
}
var book23 = {
    name: "Delighting in the Trinity",
    author: "Micheal Reeves",
    topic: "Purpose",
    link:""
}
var book24 = {
    name: "The Death of Death",
    author: "John Owen",
    topic: "Purpose",
    link:""
}
var book25 = {
    name: "What are Spiritual Gifts?",
    author: "Vern S Poythress",
    topic: "Purpose",
    link:""
}
var book26 = {
    name: "Dangerous Calling",
    author: "Paul David Tripp",
    topic: "Leadership",
    link:""
}
var book27 = {
    name: "The Miracles of Jesus",
    author: "Vern S Poythress",
    topic: "Leadership",
    link:""
}
var book28 = {
    name: "Shaped by the Gospel",
    author: "Timothy Keller",
    topic: "Leadership",
    link:""
}
var book29 = {
    name: "Surprised by Joy",
    author: "C.S Lewis",
    topic: "Leadership",
    link:""
}
var book30 = {
    name: "The Great Divorce",
    author: "C.S Lewis",
    topic: "Leadership",
    link:""
}

window.localStorage.setItem("book1", JSON.stringify(book1));
window.localStorage.setItem("book2", JSON.stringify(book2));
window.localStorage.setItem("book3", JSON.stringify(book3));
window.localStorage.setItem("book4", JSON.stringify(book4));
window.localStorage.setItem("book5", JSON.stringify(book5));
window.localStorage.setItem("book6", JSON.stringify(book6));
window.localStorage.setItem("book7", JSON.stringify(book7));
window.localStorage.setItem("book8", JSON.stringify(book8));
window.localStorage.setItem("book9", JSON.stringify(book9));
window.localStorage.setItem("book10", JSON.stringify(book10));
window.localStorage.setItem("book11", JSON.stringify(book11));
window.localStorage.setItem("book12", JSON.stringify(book12));
window.localStorage.setItem("book13", JSON.stringify(book13));
window.localStorage.setItem("book14", JSON.stringify(book14));
window.localStorage.setItem("book15", JSON.stringify(book15));
window.localStorage.setItem("book16", JSON.stringify(book16));
window.localStorage.setItem("book17", JSON.stringify(book17));
window.localStorage.setItem("book18", JSON.stringify(book18));
window.localStorage.setItem("book19", JSON.stringify(book19));
window.localStorage.setItem("book20", JSON.stringify(book20));
window.localStorage.setItem("book21", JSON.stringify(book21));
window.localStorage.setItem("book22", JSON.stringify(book22));
window.localStorage.setItem("book23", JSON.stringify(book23));
window.localStorage.setItem("book24", JSON.stringify(book24));
window.localStorage.setItem("book25", JSON.stringify(book25));
window.localStorage.setItem("book26", JSON.stringify(book26));
window.localStorage.setItem("book27", JSON.stringify(book27));
window.localStorage.setItem("book28", JSON.stringify(book28));
window.localStorage.setItem("book29", JSON.stringify(book29));
window.localStorage.setItem("book30", JSON.stringify(book30));


document.querySelector(".searchbutton").addEventListener('click', function(event){
    event.preventDefault();
    var table = document.querySelector(".searchresult");
    table.innerHTML = " <tr> <th>No</th> <th>Title</th> <th>Author</th> <th>Topic</th> <th> </th> </tr>"
    var index= document.getElementById("index").value; //entered value in search textbox
    var list = document.getElementById("choice"); //"select" id
    var searchBy = list.options[list.selectedIndex].text; //trying to see the selected options
    //alert(localStorage.length);
    if(searchBy==="Topic")
    {
        var cnt=1, found=false;
        for(var i=0; i<localStorage.length; i++)
        {
            if(localStorage.key(i).includes("book")){
                var book = JSON.parse(window.localStorage.getItem(localStorage.key(i)));
                // alert(book.name);
                if(book.topic.toUpperCase().includes(index.toUpperCase())){
                    found=true;
                    var row = table.insertRow();
                    var cell1=row.insertCell(0);
                    var cell2=row.insertCell(1);
                    var cell3=row.insertCell(2);
                    var cell4=row.insertCell(3);
                    var cell5=row.insertCell(4);
    
                    cell1.innerHTML=cnt;
                    cnt++;
                    cell2.innerHTML=book.name;
                    cell3.innerHTML=book.author;
                    cell4.innerHTML=book.topic;
                    cell5.innerHTML="<a href="+book.link+">Open <img src=\"logo/popup.png\" alt=></a></td>";
                }
            }
           
        }
        if(!found)
        {
            table.innerHTML="<center><h2>No Results Found</h2></center>";
        }
    }

    else if(searchBy==="Book Title")
    {
        var cnt=1, found=false;
        for(var i=0; i<localStorage.length; i++)
        {
            if(localStorage.key(i).includes("book")){
                var book = JSON.parse(window.localStorage.getItem(localStorage.key(i)));
                // alert(book.name);
                if(book.name.toUpperCase().includes(index.toUpperCase())){
                    found=true;
                    var row = table.insertRow();
                    var cell1=row.insertCell(0);
                    var cell2=row.insertCell(1);
                    var cell3=row.insertCell(2);
                    var cell4=row.insertCell(3);
                    var cell5=row.insertCell(4);
    
                    cell1.innerHTML=cnt;
                    cnt++;
                    cell2.innerHTML=book.name;
                    cell3.innerHTML=book.author;
                    cell4.innerHTML=book.topic;
                    cell5.innerHTML="<a href="+book.link+">Open <img src=\"logo/popup.png\" alt=></a></td>";
                }
            }
           
        }
        if(!found)
        {
            table.innerHTML="<center><h2>No Results Found</h2></center>";
        }
    }

    else if(searchBy==="Book Author")
    {
        var cnt=1, found=false;
        for(var i=0; i<localStorage.length; i++)
        {
            if(localStorage.key(i).includes("book")){
                var book = JSON.parse(window.localStorage.getItem(localStorage.key(i)));
                // alert(book.name);
                if(book.author.toUpperCase().includes(index.toUpperCase())){
                    found=true;
                    var row = table.insertRow();
                    var cell1=row.insertCell(0);
                    var cell2=row.insertCell(1);
                    var cell3=row.insertCell(2);
                    var cell4=row.insertCell(3);
                    var cell5=row.insertCell(4);
    
                    cell1.innerHTML=cnt;
                    cnt++;
                    cell2.innerHTML=book.name;
                    cell3.innerHTML=book.author;
                    cell4.innerHTML=book.topic;
                    cell5.innerHTML="<a href="+book.link+">Open <img src=\"logo/popup.png\" alt=></a></td>";
                }
            }
           
        }
        if(!found)
        {
            table.innerHTML="<center><h2>No Results Found</h2></center>";
        }
    }
})

var openModalLinks = document.querySelectorAll(".title a");
var closeModalButton = document.querySelector(".close-button");
var overlay = document.getElementById('overlay');

openModalLinks.forEach(link =>{
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
    var cname= link.parentNode.className;
    var pname = link.closest('div').className;
    // alert('.'+pname+' .cover '+cname);
    var booktitleauthor = document.querySelector(".modal .modal-header .title")
    var imagebox = document.querySelector(".modal .modal-body .cover");
    var desc = document.querySelector(".modal .modal-body .desc p");
    booktitleauthor.textContent = document.querySelector('.'+pname+' .title .'+cname+' a').textContent +' - '+ document.querySelector('.'+pname+' .author .'+cname+' a').textContent;
    imagebox.innerHTML = document.querySelector('.'+pname+' .covers .'+cname).innerHTML;
    desc.textContent="Description goes here...";
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
