import React, { Component } from 'react';

//오래됨. 요즘은 잘 사용 X
class ClassComp extends Component {
  render() {
    return <p>Class Comp</p>;
  }
}

//일반적인 형태
function FunctionComp() {
  return <p>Function Comp</p>;
}

//화살표함수 형태
const ArrowFuntionComp = () => {
  return <p>Arrow Function Comp</p>;
};

export { ClassComp, FunctionComp, ArrowFuntionComp };
