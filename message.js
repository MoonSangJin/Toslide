const openButton = document.getElementById('open');
const modal = document.querySelector('.modal');
const overlay = modal.querySelector('.md_overlay');
const closeButton = modal.querySelector('button');
console.log(modal);
//동작함수
const openModal = () => {
  modal.classList.remove('hidden');
};
const closeModal = () => {
  modal.classList.add('hidden');
};
//클릭 이벤트
openButton.addEventListener('click', openModal);
closeButton.addEventListener('click', closeModal);
