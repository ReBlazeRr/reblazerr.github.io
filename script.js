
const buyButton = document.querySelector('.buy-button');

buyButton.addEventListener('mouseover', () => {
  buyButton.textContent = "Встать на волну хайпа x2";
});

buyButton.addEventListener('mouseout', () => {
  buyButton.textContent = "Купить токен";
});
