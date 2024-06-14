const messages = [
    "You're my baby, You always lighten my days",
    "Your smile brightens my day, Your beauty is immeasurable.",
    "Your love is like a gentle breeze.",
    "You make my heart race, Walang makakapantay sayo.",
    "With you, life is always in full bloom. "
];

function growFlower() {
    document.querySelector('.stem').style.height = '150px';
    const petals = document.querySelectorAll('.petal');
    petals.forEach((petal, index) => {
        setTimeout(() => {
            petal.style.width = '50px';
            petal.style.height = '50px';
            showMessage(index);
        }, index * 1000);
    });
}

function showMessage(index) {
    const messageContainer = document.getElementById('messages');
    const message = document.createElement('div');
    message.innerText = messages[index];
    messageContainer.appendChild(message);
}