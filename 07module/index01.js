/*
* 모듈 익스포트, 임포트

- 모듈은 JS의 ES6의 미리작성해 놓은 스크립트 파일입니다.
- 변수, 함수, 클래스 등의 정의되어 있습니다.

- 모듈을 내보내는 방식
- 여러값을 내보낼때는 named export
- 단일값을 내보낼때는 default export방식

*/

export const name = "이순신";
export const age = 20;

export const info = () => {
    console.log("이름:" + name + ",나이:" + age);
}

let addr = "서울시";
let myInfo = () => {
    console.log(addr);
}

export {addr, myInfo};