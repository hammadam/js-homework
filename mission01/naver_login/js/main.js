const user = {
  id: "asd@naver.com",
  pw: "spdlqj123!@",
};

/*

1. email 정규표현식을 사용한 validation
2. pw 정규표현식을 사용한 validation
3. 상태 변수 관리
4. 로그인 버튼을 클릭시 조건처리

*/

function emailReg(text) {
  const re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  return re.test(String(text).toLowerCase());
}

function pwReg(text) {
  const re = /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^*+=-]).{6,16}$/;
  return re.test(String(text).toLowerCase());
}

//Mission-0

/*
**문제:** 객체에서 특정 키의 값을 안전하게 가져오는 함수를 작성하세요.

**설명:** 객체와 키를 인수로 받아, 객체에 해당 키가 존재하면 그 키에 해당하는 값을 반환하고, 존재하지 않으면 에러를 발생시키는 함수를 작성하세요.

*/

const person = {
  name: "Alice",
  age: 25,
  city: "Wonderland",
};

function getValueAtObject(obj, key) {
  if (obj && obj.hasOwnProperty(key)) {
    return obj[key];
  } else {
    throw new Error(
      `Error ! getValueAtObject 함수에는 알맞은 key를 입력해주세요. person에는 ${key}의 값이 없습니다.`
    );
    //console.log(`Error ! getValueAtObject 함수에는 알맞은 key를 입력해주세요. person에는 ${key}의 값이 없습니다.`);
  }
}

console.log(getValueAtObject(person, "name")); // 'Alice'
console.log(getValueAtObject(person, "age")); // 25
console.log(getValueAtObject(person, "city")); // 'Wonderland'
console.log(getValueAtObject(person, "country")); // Error !

/*
**문제:** 배열에서 특정 인덱스의 값을 안전하게 가져오는 함수를 작성하세요.

**설명:** 배열과 인덱스를 인수로 받아, 인덱스가 배열의 유효한 범위 내에 있으면 그 인덱스에 해당하는 값을 반환하고, 유효하지 않은 인덱스일 경우 에러 메시지를 반환하는 함수를 작성하세요.

추가설명
- 배열의 인덱스는 0부터 시작하며, 주어진 인덱스가 배열의 유효한 범위 내에 있는지 확인해야 합니다.
- 인수로 받은 대상이 배열이 아닐 경우 에러를 생성하고 생성한 에러를 반환해야 합니다.
- 유효한 인덱스일 경우 해당 인덱스의 값을 반환하고, 그렇지 않으면  에러를 생성하고 생성한 에러를 반환해야 합니다.
*/
console.log("--문제2--");
const numbers = [10, 20, 30, 40, 50];

function getNumberAtArray(arr, index) {
  if (arr && index < arr.length && index > 0) {
    for (let i = 0; i < numbers.length; i++) {
      return arr[index];
    }
  } else {
    throw new Error(`Error ! numbers 배열에는 ${index}번째 값이 없습니다.`);
    //console.log(`Error ! numbers 배열에는 ${index}번째 값이 없습니다.`);
  }
}

console.log(getNumberAtArray(numbers, 2)); // 30
console.log(getNumberAtArray(numbers, 4)); // 50
console.log(getNumberAtArray(numbers, 5)); // Error!
console.log(getNumberAtArray(numbers, -1)); // Error!
