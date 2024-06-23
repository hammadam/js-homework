# js-homework

## Mission-0

[바로가기](https://github.com/hammadam/js-homework/blob/main/mission01/naver_login/js/main.js)

- [x] **문제:** 객체에서 특정 키의 값을 안전하게 가져오는 함수를 작성하세요.

```javascript
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
```

- [x] **문제:** 배열에서 특정 인덱스의 값을 안전하게 가져오는 함수를 작성하세요.

```javascript
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
```

---

## Mission-1

[바로가기](https://github.com/hammadam/js-homework/blob/main/mission01/naver_login/js/main.js)

- [x] **문제:** 일치하는 아이디와 비밀번호를 입력했을 경우 welcome 페이지로 이동하는 코드 로직을 작성해주세요.

### 🍀 제공된 코드

```javascript
const user = {
  id: "asd@naver.com",
  pw: "spdlqj123!@",
};

function emailReg(text) {
  const re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  return re.test(String(text).toLowerCase());
}

function pwReg(text) {
  const re = /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^*+=-]).{6,16}$/;
  return re.test(String(text).toLowerCase());
}
```

### 🍀 문제풀이

**1. 이메일 체크**

- 이메일 형식이 올바른지 체크
- 올바르면 input에 클래스 `is--invalid` 삭제
- 올바르지 않으면 input에 클래스 `is--invalid` 추가

```javascript
const userEmailInput = document.getElementById("userEmail");

userEmailInput.addEventListener("input", function () {
  const email = userEmailInput.value;
  if (emailReg(email)) {
    userEmailInput.classList.remove("is--invalid");
  } else {
    userEmailInput.classList.add("is--invalid");
  }
});
```

**2. 비밀번호 체크**

- 비밀번호 형식이 올바른지 체크
- 올바르면 input에 클래스 `is--invalid` 삭제
- 올바르지 않으면 input에 클래스 `is--invalid` 추가

```javascript
const userPasswordInput = document.getElementById("userPassword");

userPasswordInput.addEventListener("input", function () {
  const password = userPasswordInput.value;
  if (pwReg(password)) {
    userPasswordInput.classList.remove("is--invalid");
  } else {
    userPasswordInput.classList.add("is--invalid");
  }
});
```

**3. 로그인 버튼 클릭 이벤트**

- 로그인 버튼 클릭시 addEventListener 동작
- user.id의 값과 input에 작성된 `email` 값 비교
- user.pw의 값과 input에 작성된 `password` 값 비교
- 값이 일치하면 welcome.html 페이지로 이동
- 값이 일치하지 않으면 alert으로 알림

```javascript
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
```

### 🍀 리뷰

**🙃 아쉬운 부분**

> 🥲 고백합니다. 챗지피티의 도움을 받아서 코드를 작성했습니다. 흡... ㅠㅠ

**새롭게 알게된 것**

> 사용자가 email이나 password를 작성할 때마다 이벤트가 발생해야하니 키보드 관련 이벤트를 사용해야 할까 고민했었는데, 챗지피티가 도와줘서 작성하게 된 코드를 보니 `input` 이라는 이벤트를 사용한 것이 보였습니다.

**`input` 이벤트**

- 사용자가 값을 수정할 때마다 발생.
- 키보드 이벤트와 달리 마우스, 키보드, 음성인식 등 어떤 방법으로든 값을 입력, 변경할 때 발생.
- 수정이 일어날 때마다 이벤트를 실행하고 싶다면 가장 적절
- 화살표 `<-` `->` 키와 같이 값을 변경시키지 않는 키보드 입력이나 동작에는 반응하지 않음
- `event.preventDefault()` 를 사용해서 기본동작을 막더라도 값이 수정되면 그 즉시 `input` 이벤트가 발생하기 때문에 `event.preventDefault()` 를 써봤자 아무런 효과가 없음
