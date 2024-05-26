window.addEventListener("scroll", function() {
    let header = document.querySelector('#cabeca');
    header.classList.toggle('rolagem', window.scrollY > 0);
});
