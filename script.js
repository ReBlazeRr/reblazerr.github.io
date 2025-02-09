// Пример изменения статуса плана
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
