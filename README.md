# js-homework

### Mission-0

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

<!-- - [ ] Mission-1 [바로가기](https://github.com/hammadam/js-homework) -->
