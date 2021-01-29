const openButton = document.getElementById('open');
const modal = document.querySelector('.modal');
const overlay = modal.querySelector('.md_overlay');
const closeButton = modal.querySelector('.modalClose');
const messageInput = modal.querySelector('.modalAnswer');
//const questionDeleteButton = document.getElementById('questionDelete');
const exampleMessage = document.getElementById('msg_table');
const messageSendButton = document.getElementById('messageSend');
const keywordButton = document.getElementById('btnradio1');
const messageButton = document.getElementById('btnradio2');
const keywordRow = document.getElementById('keywordRow');

const openLectureModalButton = document.querySelectorAll('#openLectureModal');
const lectureModal = document.querySelector('.lectureModal');
const lectureOverlay = lectureModal.querySelector('.md_overlay');
const lectureCloseButton = lectureModal.querySelector('.cancelButton');
const lectureMessageInput = lectureModal.querySelector('.modalAnswer');
const lectureMessageSendButton = lectureModal.querySelector('.sendButton');

const openDeleteAllModalButton = document.getElementById('openDeleteAllModal');
const deleteAllModal = document.querySelector('.deleteAllModal');
const deleteAllOverlay = deleteAllModal.querySelector('.md_overlay');
const deleteAllCloseButton = deleteAllModal.querySelector('.cancelButton');
const deleteAllMessageInput = deleteAllModal.querySelector('.modalAnswer');
const deleteAllMessageSendButton = deleteAllModal.querySelector('.sendButton');

const openDeleteModalButton = document.getElementById('openDeleteModal');
const deleteModal = document.querySelector('.deleteModal');
const deleteOverlay = deleteModal.querySelector('.md_overlay');
const deleteCloseButton = deleteModal.querySelector('.cancelButton');
const deleteMessageInput = deleteModal.querySelector('.modalAnswer');
const deleteMessageSendButton = deleteModal.querySelector('.sendButton');

const openDeleteModalButton2 = document.querySelectorAll('.keywordClose');

const mobileSendButton = document.getElementById('mobileSendButton');
const pcSendButton = document.querySelector('.pcSendButton');
const messageSaveButton = document.getElementById('messageSave');

const messageObject = document.querySelectorAll('.messageObject');

const prevButton = document.getElementById('prevButton');
const nextButton = document.getElementById('nextButton');

let messageClicked = false;
const changeMessageObjectBackground = (i) => {
  messageObject.forEach((a) => {
    a.classList.remove('clicked');
    messageClicked = false;
  });

  messageClicked
    ? `${messageObject[i].classList.remove(
        'clicked'
      )}${(messageClicked = false)}`
    : `${messageObject[i].classList.add('clicked')}${(messageClicked = true)}`;
};

let messageNumber = 0;
prevButton.addEventListener('click', () => selectMessageObject(-1));
nextButton.addEventListener('click', () => selectMessageObject(1));

const selectMessageObject = (i) => {
  messageObject[messageNumber].classList.add('clicked');
  messageNumber += i;
};
//동작함수
const openModal = () => {
  modal.classList.remove('hidden');
};
const closeModal = () => {
  modal.classList.add('hidden');
};

const checkDelete = () => {
  openDeleteModal();
};

const sendMessage = () => {
  closeModal();
  closeLectureModal();
};

const showKeyword = () => {
  console.log('showKeyword');
  exampleMessage.classList.add('hidden');
  keywordRow.classList.remove('hidden');
};

const showMessage = () => {
  console.log('showMessage');
  exampleMessage.classList.remove('hidden');
  keywordRow.classList.add('hidden');
};

const openLectureModal = () => {
  lectureModal.classList.remove('hidden');
};
const closeLectureModal = () => {
  lectureModal.classList.add('hidden');
};

const openDeleteAllModal = () => {
  deleteAllModal.classList.remove('hidden');
};
const closeDeleteAllModal = () => {
  deleteAllModal.classList.add('hidden');
};

const openDeleteModal = () => {
  deleteModal.classList.remove('hidden');
};
const closeDeleteModal = () => {
  deleteModal.classList.add('hidden');
};

//클릭 이벤트
openButton.addEventListener('click', openModal);
closeButton.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);
//questionDeleteButton.addEventListener('click', checkDelete);
messageSendButton.addEventListener('click', sendMessage);
keywordButton.addEventListener('click', showKeyword);
messageButton.addEventListener('click', showMessage);

//openLectureModalButton.addEventListener('click', openLectureModal);

for (let i = 0; i < openLectureModalButton.length; i++) {
  openLectureModalButton[i].addEventListener('click', openLectureModal);
}

lectureCloseButton.addEventListener('click', closeLectureModal);
lectureOverlay.addEventListener('click', closeLectureModal);
lectureMessageSendButton.addEventListener('click', sendMessage);

openDeleteAllModalButton.addEventListener('click', openDeleteAllModal);
deleteAllCloseButton.addEventListener('click', closeDeleteAllModal);
deleteAllOverlay.addEventListener('click', closeDeleteAllModal);

deleteCloseButton.addEventListener('click', closeDeleteModal);
deleteOverlay.addEventListener('click', closeDeleteModal);

for (let i = 0; i < messageObject.length; i++) {
  messageObject[i].addEventListener('click', () =>
    changeMessageObjectBackground(i)
  );
}

for (let i = 0; i < openDeleteModalButton2.length; i++) {
  openDeleteModalButton2[i].addEventListener('click', openDeleteModal);
}

function is_mobile() {
  if (
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    )
  ) {
    mobileSendButton.classList.remove('hidden');
    pcSendButton.classList.add('hidden');
    messageSaveButton.classList.add('hidden');
    return true;
  }

  if (typeof window.orientation !== 'undefined') {
    return true;
  }

  var iOSios =
    !!navigator.platform && /iPad|iPhone|iPod/.test(navigator.platform);
  if (iOSios) return true;

  return false;
}

is_mobile();
