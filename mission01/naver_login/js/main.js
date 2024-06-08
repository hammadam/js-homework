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
//문제:객체에서 특정 키의 값을 안전하게 가져오는 함수를 작성하세요.

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
  }
}

console.log(getValueAtObject(person, "name")); // 'Alice'
console.log(getValueAtObject(person, "age")); // 25
console.log(getValueAtObject(person, "city")); // 'Wonderland'
console.log(getValueAtObject(person, "country")); // Error !

//문제:배열에서 특정 인덱스의 값을 안전하게 가져오는 함수를 작성하세요.
const numbers = [10, 20, 30, 40, 50];

function getNumberAtArray(arr, index) {
  if (arr && index < arr.length && index > 0) {
    for (let i = 0; i < numbers.length; i++) {
      return arr[index];
    }
  } else {
    throw new Error(`Error ! numbers 배열에는 ${index}번째 값이 없습니다.`);
  }
}

console.log(getNumberAtArray(numbers, 2)); // 30
console.log(getNumberAtArray(numbers, 4)); // 50
console.log(getNumberAtArray(numbers, 5)); // Error!
console.log(getNumberAtArray(numbers, -1)); // Error!
