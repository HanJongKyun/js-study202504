// export한 데이터를 별칭을 붙여서 사용하는 것이 가능합니다.
// default가 아닌 export 데이터를 import 할 때는 중괄호 사용하여 import 해야 합니다.
// 쓰고 싶은 데이터만 골라서 import는 가능합니다.
import { $btn } from './getDom.js';

// default로 export된 데이터는 같은 이름을 써도 되지만,
// 애초에 변수명 자체를 import하는 쪽에서 새로 작성해서 받아도 됩니다.
import clickFunc from './event.js';

// default로 export된 데이터 -> 객체 형태
// 일단 변수로 import를 하고, 디스트럭쳐링을 통해 각각의 변수로 분해 가능.
import calFunc from './operate.js';

const { pow, add } = calFunc;

$btn.addEventListener('click', clickFunc);
