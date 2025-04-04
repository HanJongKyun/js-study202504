const pow = (n) => n ** 2;
const add = (n1, n2) => n1 + n2;

// 내보낼 데이터가 객체 형태일 때는 프로퍼티 이름을 따로 세팅한 후
// import 하는 쪽에서 디스트럭쳐링을 통해 변수에 할당할 수 있다.

export default { pow: pow, add: add };
