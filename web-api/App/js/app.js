// 전체를 하나의 객체로 받아내는 법
// import * as vendor from './vendor.js';

import {
  $userInput,
  $addBtn,
  $subtractBtn,
  $multiplyBtn,
  $divideBtn,
  $currentResultOutput,
  $currentCalculationOutput,
  $logEntries,
  logArray,
} from './vendor.js';

// 현재 계산기에 그려질 숫자
let currentResult = 0;

// 로그 번호
let seq = 0;

// 계산 기능을 담당하는 함수
const calculate = (type) => {
  // +, -, x, /
  // 입력창에 입력된 숫자를 읽자.
  // 브라우저에서 가져오는 입력값 등은 대부분 string
  const enteredNumber = +$userInput.value;

  // 지금까지의 연산 결과를 따로 기억
  const originalResult = currentResult;

  if (!enteredNumber || enteredNumber === 0) {
    alert('연산이 불가능한 값입니다.');
    return;
  }

  // type에 들어있는 기호에 따라 연산을 진행.
  if (type === '+') currentResult += enteredNumber;
  else if (type === '-') currentResult -= enteredNumber;
  else if (type === 'x') currentResult *= enteredNumber;
  else currentResult /= enteredNumber;

  currentResult = Math.round(currentResult * 100) / 100;

  // 연산의 결과를 두번째 section에 렌더링.
  $currentCalculationOutput.textContent = `${originalResult} ${type} ${enteredNumber}`;
  $currentResultOutput.textContent = currentResult;

  // 다음 연산을 위해 입력창을 비워주면 좋겠다.
  $userInput.value = '';
  $userInput.focus(); // 입력창으로 커서 이동

  // 화면에 로그를 li로 표현하는 함수를 호출!
  writeToLog(type, originalResult, enteredNumber);
};

// 로그 이력을 만드는 함수
const writeToLog = (type, originalResult, enteredNumber) => {
  // 계산 결과를 객체로 포장해서 배열에 저장.
  // 변수의 값으로 프로퍼티를 만들 때 키 값이 변수명과 동일하다면 굳이 같은 이름 두번 얘기할 필요 없음!
  // 변수의 이름이 키가 됩니다.
  const logObject = {
    mark: type,
    originalResult, //'originalResult': originalResult -> 이렇게 굳이 쓸 필요 없다.
    enteredNumber,
    currentResult,
  };

  // 로그를 모아놓는 배열에 객체를 추가
  // 화면에 렌더링하는 것과 별개로, 연산에 사용됐던 값을 따로 보관을 해서
  // 추후에 필요한 경우 배열에서 가져올 용도로 사용.
  logArray.push(logObject);
  console.log(logArray);

  // 화면에 로그를 li로 렌더링하는 함수 호출
  renderToLog(logObject);
};

const renderToLog = ({
  // 함수 매개변수 자리에 디스트럭쳐링 적용, 프로퍼티 키 이름도 변경 가능.
  mark,
  originalResult: prevResult,
  enteredNumber: number,
  currentResult: result,
}) => {
  const $newLi = document.createElement('li');
  $newLi.textContent = `${++seq}. ${prevResult} ${mark} ${number} = ${result}`;
  $newLi.classList.add('log-entries-item');

  $logEntries.appendChild($newLi);
};

document.getElementById('calc-actions').addEventListener('click', (e) => {
  if (!e.target.matches('button')) return;
  calculate(e.target.textContent);
});

// 이벤트 핸들러 등록 자리에 함수 호출문을 써 버리면 함수의 호출 결과를 이벤트로 등록하겠다고 인식해요.
// 그래서 이벤트와 상관없이 일단 함수가 바로 호출이 되어 버립니다.
/*
$addBtn.addEventListener('click', calculate('ADD'));
$subtractBtn.addEventListener('click', calculate('SUB'));
$multiplyBtn.addEventListener('click', calculate('MULTI'));
$divideBtn.addEventListener('click', calculate('DIVIDE'));
*/
