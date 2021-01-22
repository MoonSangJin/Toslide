const openButton = document.getElementById('open');
const modal = document.querySelector('.modal');
const overlay = modal.querySelector('.md_overlay');
const closeButton = modal.querySelector('button');
const questionDeleteButton = document.getElementById('questionDelete');
//동작함수
const openModal = () => {
  modal.classList.remove('hidden');
};
const closeModal = () => {
  modal.classList.add('hidden');
};

const checkDelete = () => {
  const deleteResult = confirm('정말 삭제하시겠습니까?');
  if (deleteResult) {
    console.log('삭제');
  } else {
    console.log('삭제안함');
  }
};
//클릭 이벤트
openButton.addEventListener('click', openModal);
closeButton.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);
questionDeleteButton.addEventListener('click', checkDelete);
