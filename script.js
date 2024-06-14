function growFlower() {
    document.querySelector('.stem').style.height = '150px';
    document.querySelectorAll('.petal').forEach(petal => {
        petal.style.width = '50px';
        petal.style.height = '50px';
    });
}