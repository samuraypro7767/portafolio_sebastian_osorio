const carousel = document.querySelector('.carousel');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
const items = carousel.querySelectorAll('li');

let currentIndex = 0;

prevButton.addEventListener('click', () => {
    hideCurrentItem();
    currentIndex--;
    if (currentIndex < 0) {
        currentIndex = items.length - 1;
    }
    showItem(currentIndex);
});

nextButton.addEventListener('click', () => {
    hideCurrentItem();
    currentIndex++;
    if (currentIndex >= items.length) {
        currentIndex = 0;
    }
    showItem(currentIndex);
});

function hideCurrentItem() {
    items[currentIndex].style.display = 'none';
}

function showItem(index) {
    items[index].style.display = 'block';
}