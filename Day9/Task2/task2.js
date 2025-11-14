function show(img) {
    let imgSrc = img.getAttribute('src');
    let bigImage = document.getElementById('final');

    bigImage.setAttribute('src', imgSrc);
    bigImage.style.display = 'block';
}

function hide() {
    let bigImage = document.getElementById('final');
    bigImage.style.display = 'none';
}