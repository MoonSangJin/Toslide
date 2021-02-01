const keywordTable = document.getElementById('keywordTable');
const keywordPlusButton = document.querySelector('.keywordPlus');
const keywordInput = document.querySelector('.keywordInput');
const keywordInputForm = document.querySelector('.keywordInputForm');
const initialKeyword = document.querySelector('.initialKeyword');
// import { checkKeyWordDeleteButton } from './message.js';

const showKeywordInput = () => {
  keywordPlusButton.classList.add('hidden');
  keywordInput.classList.remove('hidden');
};

const handleSubmitKeywordInput = (e) => {
  e.preventDefault();

  const newKeywordObject = document.createElement('td');
  const newKeyword = document.createElement('div');
  const keywordDeleteImage = document.createElement('img');
  keywordDeleteImage.src = 'asset/img-2021/close_ligh_blue.png';
  keywordDeleteImage.setAttribute('class', 'keywordClose');
  newKeywordObject.setAttribute('class', 'keywordObject');
  newKeyword.setAttribute('class', 'keyword');
  newKeyword.innerHTML = keywordInput.value;
  newKeywordObject.appendChild(newKeyword);
  newKeywordObject.appendChild(keywordDeleteImage);
  keywordTable.insertBefore(newKeywordObject, initialKeyword);
  keywordInputForm.reset();
  // checkKeyWordDeleteButton();
  addDeleteEvent();
  keywordPlusButton.classList.remove('hidden');
  keywordInput.classList.add('hidden');
};

const addDeleteEvent = () => {
  const keywordDeleteButton = document.querySelectorAll('.keywordClose');
  for (let i = 0; i < keywordDeleteButton.length; i++) {
    keywordDeleteButton[i].addEventListener('click', deleteKeyword);
  }
};

const deleteKeyword = (e) => {
  e.target.parentNode.remove();
};

keywordPlusButton.addEventListener('click', showKeywordInput);
keywordInputForm.addEventListener('submit', handleSubmitKeywordInput);

addDeleteEvent();
