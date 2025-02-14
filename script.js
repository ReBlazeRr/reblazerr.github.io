const cards = document.querySelectorAll('.card');

cards.forEach(card => {
  card.querySelector('.status').textContent = 'IN PROGRESS';
  
  card.removeEventListener('click', () => {
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

hoverOnBuyButtonSound.volume = 0.3;

const buyButton = document.querySelector(".buy-button");

if (buyButton) {
    buyButton.addEventListener("mouseover", () => {
        hoverOnBuyButtonSound.play(); // Проигрываем звук при наведении
        buyButton.querySelector('span').style.opacity = 0; // Скрываем текущий текст плавно
        setTimeout(() => {
            buyButton.querySelector('span').textContent = "Оседлать волну хайпа"; // Меняем текст
            buyButton.querySelector('span').style.opacity = 1; // Показываем новый текст плавно
        }, 300); // Время перехода должно совпадать с CSS
    });

    buyButton.addEventListener("mouseout", () => {
        hoverOnBuyButtonSound.pause();  // Останавливаем звук при уходе курсора
        hoverOnBuyButtonSound.currentTime = 0; // Сбрасываем звук в начало
        buyButton.querySelector('span').style.opacity = 0; // Скрываем текущий текст плавно
        setTimeout(() => {
            buyButton.querySelector('span').textContent = "Купить токен"; // Меняем текст
            buyButton.querySelector('span').style.opacity = 1; // Показываем новый текст плавно
        }, 300); // Время перехода должно совпадать с CSS
    });
}
// Загружаем звуки
const oselSound = new Audio("./sounds/osel.mp3"); // Укажи путь к файлу
const stanislavSound = new Audio("./sounds/stanislav.mp3"); // Укажи путь к файлу
const bombunSound = new Audio("./sounds/bombun.mp3"); // Укажи путь к файлу

// Устанавливаем громкость (0.0 - 1.0)
oselSound.volume = 0.2;
stanislavSound.volume = 0.3;
bombunSound.volume = 0.3;

const founders = document.querySelectorAll('.founder');

founders.forEach(founder => {
  founder.addEventListener('mouseover', () => {
    const founderImg = founder.querySelector('img');
    if (founderImg.src.includes('Osel.png')) {
      oselSound.play();
    } else if (founderImg.src.includes('Stanislav.png')) {
      stanislavSound.play();
    } else if (founderImg.src.includes('Bombun.png')) {
      bombunSound.play();
    }
  });

  founder.addEventListener('mouseout', () => {
    oselSound.pause();
    oselSound.currentTime = 0;
    stanislavSound.pause();
    stanislavSound.currentTime = 0;
    bombunSound.pause();
    bombunSound.currentTime = 0;
  });
});

window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    const logo = document.querySelector('.logo');
    const nav = document.querySelector('nav');
    const scrollY = window.scrollY;

    // Увеличиваем отступы при прокрутке
    if (scrollY > 50) {
        header.style.padding = '10px 20px'; /* Уменьшаем отступы в header */
        logo.style.marginLeft = '50px'; /* Увеличиваем отступ слева */
        nav.style.marginRight = '50px'; /* Увеличиваем отступ справа */
    } else {
        header.style.padding = '20px'; /* Возвращаем исходные отступы */
        logo.style.marginLeft = '500px'; /* Возвращаем исходный отступ слева */
        nav.style.marginRight = '400px'; /* Возвращаем исходный отступ справа */
    }
});
