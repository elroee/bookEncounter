var links = document.querySelectorAll(".links a");
links.forEach(link => {
    link.textContent = link.textContent.toUpperCase();
})