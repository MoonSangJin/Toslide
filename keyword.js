const keywordTable = document.getElementById('keywordTable');
const keywordPlusButton = document.querySelector('.keywordPlus');
const keywordInput = document.querySelector('.keywordInput');
const keywordInputForm = document.querySelector('.keywordInputForm');
const initialKeyword = document.querySelector('.initialKeyword');
import { checkKeyWordDeleteButton } from './message.js';

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
  checkKeyWordDeleteButton();
  keywordPlusButton.classList.remove('hidden');
  keywordInput.classList.add('hidden');
  //새로운 키워드만들고, +버튼 보이게하고 ,input 초기화 및 사라지게
};

keywordPlusButton.addEventListener('click', showKeywordInput);
keywordInputForm.addEventListener('submit', handleSubmitKeywordInput);
