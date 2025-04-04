import { $pText } from './getDom.js';

// 이벤트 핸들러 함수
const clickHandler = () => {
  alert('버튼 클릭됨!');
  $pText.textContent = '모듈 사용법 익히는 중~!';
};

// 내보낼 데이터가 1개라면 default를 쓸 수 있다.
export default clickHandler;
