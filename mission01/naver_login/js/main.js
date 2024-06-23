//Mission-0
//문제:객체에서 특정 키의 값을 안전하게 가져오는 함수를 작성하세요.

/*
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
*/

//Mission-1

//문제:일치하는 아이디와 비밀번호를 입력했을 경우 welcome 페이지로 이동하는 코드 로직을 작성해주세요.

/*
1. email 정규표현식을 사용한 validation
2. pw 정규표현식을 사용한 validation
3. 상태 변수 관리
4. 로그인 버튼을 클릭시 조건처리
*/

/*
요구사항
1. email 정규표현식을 사용한 조건처리 
  - false면 해당 input에 is--invalid 추가
    node.classList.remove('is--invalid')
  - true면 해당 input에 is--invalid 제거
    node.classList.add('is--invalid')
​
2. pw 정규표현식을 사용한 validation
  - false면 해당 input에 is--invalid 추가
    node.classList.remove('is--invalid')
  - true면 해당 input에 is--invalid 제거
    node.classList.add('is--invalid')
​
3. 로그인 버튼을 클릭시 user.id의 값과 input의 값을 비교
  value === user.id
​
4. 로그인 버튼을 클릭시 user.pw의 값과 input의 값을 비교
  value === user.pw

5. 두 값이 일치 한다면 다음 페이지(welcome.html)로 이동
  window.location.href = 'welcome.html'
*/

const user = {
  id: "asd@naver.com",
  pw: "spdlqj123!@",
};
const userEmailInput = document.getElementById("userEmail");
const userPasswordInput = document.getElementById("userPassword");

function emailReg(text) {
  const re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  return re.test(String(text).toLowerCase());
}

function pwReg(text) {
  const re = /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^*+=-]).{6,16}$/;
  return re.test(String(text).toLowerCase());
}

// 이메일 체크
userEmailInput.addEventListener("input", function () {
  const email = userEmailInput.value;
  if (emailReg(email)) {
    userEmailInput.classList.remove("is--invalid");
  } else {
    userEmailInput.classList.add("is--invalid");
  }
});

// 비밀번호 체크
userPasswordInput.addEventListener("input", function () {
  const password = userPasswordInput.value;
  if (pwReg(password)) {
    userPasswordInput.classList.remove("is--invalid");
  } else {
    userPasswordInput.classList.add("is--invalid");
  }
});

// 로그인 버튼 클릭시 조건 처리
document
  .querySelector(".btn-login")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const email = userEmailInput.value;
    const password = userPasswordInput.value;

    if (email === user.id && password === user.pw) {
      window.location.href = "welcome.html";
    } else {
      alert("아이디 또는 비밀번호가 일치하지 않습니다.");
    }
  });
