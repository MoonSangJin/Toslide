const lectureMode = document.getElementById('lectureMode');
const lectrueModeIcon = document.getElementById('lectureModeIcon');
const testMode = document.getElementById('testMode');
const testModeIcon = document.getElementById('testModeIcon');

const selectLectureMode = () => {
  let background = getComputedStyle(lectureMode);
  if (background.backgroundColor == 'rgba(0, 0, 0, 0)') {
    lectureMode.style.backgroundColor = '#4535F3';
    lectureMode.style.color = 'white';
    lectrueModeIcon.src = '../asset/img-2021/lecture_mode_white.png';
  } else {
    lectureMode.style.backgroundColor = 'rgba(0, 0, 0, 0)';
    lectureMode.style.color = 'black';
    lectrueModeIcon.src = '../asset/img-2021/lecture_mode_black.png';
  }
};

const selectTestMode = () => {
  let background = getComputedStyle(testMode);
  if (background.backgroundColor == 'rgba(0, 0, 0, 0)') {
    testMode.style.backgroundColor = '#4535F3';
    testMode.style.color = 'white';
    testModeIcon.src = '../asset/img-2021/test_mode_white.png';
  } else {
    testMode.style.backgroundColor = 'rgba(0, 0, 0, 0)';
    testMode.style.color = 'black';
    testModeIcon.src = '../asset/img-2021/test_mode_black.png';
  }
};

lectureMode.addEventListener('click', selectLectureMode);
testMode.addEventListener('click', selectTestMode);
