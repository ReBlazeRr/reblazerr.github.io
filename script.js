// Добавляем интерактивность для кнопки
const buyButton = document.querySelector('.buy-button');

buyButton.addEventListener('mouseover', () => {
  buyButton.textContent = "Встать на волну хайпа";
});

buyButton.addEventListener('mouseout', () => {
  buyButton.textContent = "Купить токен";
});
