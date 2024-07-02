const body = document.querySelector("body");

// 가지고 있는 배경사진 갯수
const IMG_NUMBER = 3;

function genRandom() {

  // Math.random()은 1 이하의 실수를 랜덤으로 출력한다 (0.XXXXXX 형태로) 
  // 3을 곱한다해도 숫자 3을 넘지 못하는 실수 형태의 숫자를 출력한다

  // Math.floor()는 소수점 내림을 하여 실수 형태를 정수로 만든다
  // 따라서 Math.floor(Math.random())는 "0"만 출력한다
  // Math.floor(Math.random() * 3)은 "0, 1, 2"까지 출력 가능하다
  // Math.ceil()은 소수점 올림을 한다

  // IMG_NUMBER는 3 이므로
  const number = Math.floor(Math.random() * IMG_NUMBER) + 1;

  // 1, 2, 3 중에 하나를 반환한다
  return number;
}

function paintImage(imgNumber) {

  // <img> 태그를 만들어준다
  const image = new Image();
  // document.createElement('img')와 같은 코드를 나타낸다
 
  // <img src=""> 이미지 파일의 소스를 입력한다 
  // 랜덤 숫자에 +1을 하는 이유는 이미지 파일이 1부터 시작하므로
  image.src = `images/0${imgNumber}.jpg`;
 
  // <img src="" class=""> 이미지 효과를 위해 클래스를 추가한다
  image.classList.add("bgImage");
  
  // <body>에 완성된 <image>를 자식요소로 삽입하기
  body.appendChild(image);
}

function init(){
  const randomNumber = genRandom();
  paintImage(randomNumber);
}

init();

// 5초마다 이미지를 변경
setInterval(init, 5000);