const cards = document.querySelectorAll('.card');

cards.forEach(card => {
  card.addEventListener('click', () => {
    if (card.classList.contains('in-progress')) {
      card.classList.remove('in-progress');
      card.classList.add('done');
      card.querySelector('.status').textContent = 'DONE';
    } else if (card.classList.contains('done')) {
      card.classList.remove('done');
      card.classList.add('failed');
      card.querySelector('.status').textContent = 'FAILED';
    } else {
      card.classList.remove('failed');
      card.classList.add('in-progress');
      card.querySelector('.status').textContent = 'IN PROGRESS';
    }
  });
});

function hideHeaderOnMobile() {
    if (window.innerWidth < 768 || /Mobi|Android|iPhone/i.test(navigator.userAgent)) {
        document.getElementById("header").style.display = "none";
    }
}

// Выполнить при загрузке страницы
window.onload = hideHeaderOnMobile;

// Выполнить при изменении размера окна (если вдруг пользователь меняет размер экрана)
window.onresize = hideHeaderOnMobile;

// Загружаем звук
const hoverOnBuyButtonSound = new Audio("./sounds/yanenormis.mp3"); // Укажи путь к файлу

hoverOnBuyButtonSound.volume = 0.4;

const buyButton = document.querySelector(".buy-button");

if (buyButton) {
    buyButton.addEventListener("mouseover", () => {
        hoverOnBuyButtonSound.play(); // Проигрываем звук при наведении
    });

    buyButton.addEventListener("mouseout", () => {
        hoverOnBuyButtonSound.pause();  // Останавливаем звук при уходе курсора
        hoverOnBuyButtonSound.currentTime = 0; // Сбрасываем звук в начало
    });
}
