// Скрытие шапки на мобильных устройствах (оставил твою логику, но теперь не нужна с бургер-меню)
function hideHeaderOnMobile() {
  if (window.innerWidth < 768 || /Mobi|Android|iPhone/i.test(navigator.userAgent)) {
    // document.getElementById("header").style.display = "none"; // Убрал, т.к. теперь бургер-меню
  }
}

// Выполнить при загрузке страницы
window.onload = hideHeaderOnMobile;

// Выполнить при изменении размера окна
window.onresize = hideHeaderOnMobile;

// Звук и смена текста для кнопки "Купить токен"
const hoverOnBuyButtonSound = new Audio("./sounds/yanenormis.mp3");
hoverOnBuyButtonSound.volume = 0.3;

const buyButton = document.querySelector(".buy-button");

if (buyButton) {
  let isHovering = false;

  buyButton.addEventListener("mouseenter", () => {
    if (!isHovering && buyButton.querySelector('span').textContent === "Купить токен") {
      hoverOnBuyButtonSound.play();
      isHovering = true;
      const span = buyButton.querySelector('span');
      if (span) {
        span.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
        span.style.opacity = 0;
        span.style.transform = 'translateY(-10px)';
        setTimeout(() => {
          span.textContent = "Оседлать волну хайпа";
          span.style.opacity = 1;
          span.style.transform = 'translateY(0)';
        }, 300);
      }
    }
  });

  buyButton.addEventListener("mouseleave", () => {
    if (isHovering && buyButton.querySelector('span').textContent === "Оседлать волну хайпа") {
      hoverOnBuyButtonSound.pause();
      hoverOnBuyButtonSound.currentTime = 0;
      isHovering = false;
      const span = buyButton.querySelector('span');
      if (span) {
        span.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
        span.style.opacity = 0;
        span.style.transform = 'translateY(10px)';
        setTimeout(() => {
          span.textContent = "Купить токен";
          span.style.opacity = 1;
          span.style.transform = 'translateY(0)';
        }, 300);
      }
    }
  });
}

// Звуки для основателей
const oselSound = new Audio("./sounds/osel.mp3");
const stanislavSound = new Audio("./sounds/stanislav.mp3");
const bombunSound = new Audio("./sounds/bombun.mp3");

oselSound.volume = 0.2;
stanislavSound.volume = 0.3;
bombunSound.volume = 0.3;

const founders = document.querySelectorAll('.founder');

founders.forEach(founder => {
  let isHovering = false; // Флаг для отслеживания наведения

  founder.addEventListener('mouseenter', () => {
    if (!isHovering) { // Проигрываем звук только при первом входе
      isHovering = true;
      const founderImg = founder.querySelector('img');
      if (founderImg.src.includes('Osel.png')) {
        oselSound.play();
      } else if (founderImg.src.includes('Stanislav.png')) {
        stanislavSound.play();
      } else if (founderImg.src.includes('Bombun.png')) {
        bombunSound.play();
      }
    }
  });

  founder.addEventListener('mouseleave', () => {
    isHovering = false; // Сбрасываем флаг при выходе
    oselSound.pause();
    oselSound.currentTime = 0;
    stanislavSound.pause();
    stanislavSound.currentTime = 0;
    bombunSound.pause();
    bombunSound.currentTime = 0;
  });
});

// Эффект изменения отступов при скролле
window.addEventListener('scroll', function() {
  const header = document.querySelector('header');
  const logo = document.querySelector('.logo');
  const nav = document.querySelector('nav');
  const scrollY = window.scrollY;

  if (scrollY > 50) {
    logo.style.marginLeft = '10%';
    nav.style.marginRight = '3%';
  } else {
    logo.style.marginLeft = '25%';
    nav.style.marginRight = '20%';
  }
});

// Бургер-меню для мобильных устройств
document.addEventListener('DOMContentLoaded', () => {
  const nav = document.querySelector('nav ul');
  const header = document.querySelector('header');

  // Создаём бургер-кнопку
  const burger = document.createElement('div');
  burger.className = 'burger';
  burger.innerHTML = '☰';
  burger.style.cursor = 'pointer';
  burger.style.fontSize = '24px';
  burger.style.color = '#FFFFFF';
  burger.style.padding = '10px';
  header.appendChild(burger);

  // Обработчик клика по бургеру
  burger.addEventListener('click', () => {
    nav.classList.toggle('active');
  });
});
