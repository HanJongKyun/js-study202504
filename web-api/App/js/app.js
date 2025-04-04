// 전체를 하나의 객체로 받아내는 법
// import * as vendor from './vendor.js'

import {
  $userInput,
  $addBtn,
  $subtractBtn,
  $multiplyBtn,
  $divideBtn,
  $currentResultOutput,
  $currentCalculationOutput,
  $logEntries,
  currentResult,
  logArray,
  seq,
} from './vendor.js';

// 계산 기능을 담당하는 함수
const calculate = (type) => {
  // +, -, x, /
  // 입력창에 입력된 숫자를 읽자.
  // 브라우저에서 가져오는 입력값 등은 대부분 string
  const enteredNumber = $userInput.value;

  if (!enteredNumber || enteredNumber === 0) {
    alert('연산이 불가능한 값입니다.');
    return;
  }

  // type에 들어있는 기호에 따라 연산을 진행.
  // 연산의 결과를 두번째 section에 렌더링.
  // 다음 연산을 위해 입력창을 비워주면 좋겠다.
  switch (type) {
    case $addBtn:
      enteredNumber + enteredNumber;
      break;
    case $subtractBtn:
      enteredNumber - enteredNumber;
      break;
    case $multiplyBtn:
      enteredNumber * enteredNumber;
      break;
    case $divideBtn:
      enteredNumber / enteredNumber;
      break;
    default:
      break;
  }
};

document.getElementById('calc-actions').addEventListener('click', (e) => {
  if (!e.target.matches('button')) return;
  calculate(e.target.textContent);
});

// 이벤트 핸들러 등록 자리에 함수 호출문을 써 버리면 함수의 호출 결과를 이벤트로 등록하겠다고 인식해요.
// 그래서 이벤트와 상관없이 일단 함수가 바로 호출이 되어 버립니다.
/*
$addBtn.addEventListener(`click`, calculate('ADD'));
$subtractBtn.addEventListener(`click`, calculate('SUB'));
$multiplyBtn.addEventListener(`click`, calculate('MULTI'));
$divideBtn.addEventListener(`click`, calculate('DIVIDE'));
*/
