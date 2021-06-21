document.getElementById('submit').addEventListener('click',function(){
    event.preventDefault();
    if(checkEmpty()){
        alert('Please fill out every question on form!');
    }
    else{
        //store request here...
        alert("Request Recieved! Thank you!");
        clear();
    }
    
})

function clear(){
    var input = document.querySelectorAll('.text');
    input.forEach(inp => {
        inp.value = "";
    })
    document.getElementById('tarea').value = "";
}

//I had to add this function since 'required' attribute isn't working for me
function checkEmpty(){
    var empty = false;
    var input = document.querySelectorAll('.text');
    input.forEach(inp => {
        if(inp.value = "")
        {
            empty = true;
            return empty;
        }
    })
    if(document.getElementById('tarea').value = ""){
        empty = true;
        return empty;
    }
    return empty;
}

var links = document.querySelectorAll(".links a");
links.forEach(link => {
    link.textContent = link.textContent.toUpperCase();
})