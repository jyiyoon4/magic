//컴포넌트 > 이름이 대문자로 시작해야 인식됨

//

import Child from './Child';
import { ClassComp, FunctionComp, ArrowFuntionComp } from './Components';

function Hello() {
  return <h1>Hello</h1>;
}

function App() {
  return (
    // // <h1>이러면</h1>
    // // <h2>오류남</h2>

    // <>
    //   <h1>이러면</h1>
    //   <h2>오류 안 남</h2>
    // </>

    <>
      <Hello />
      <h2>World</h2>
      <Child />
      <ClassComp />
      <FunctionComp />
      <ArrowFuntionComp />
      
    </>

  );
}

export default App;
