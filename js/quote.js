const quotes = [
    {
        quote: "저는 위대한 프로그래머가 아닙니다. 단지 훌륭한 습관을 가진 좋은 프로그래머일 뿐입니다.",
        author: "켄트 벡",
    },
    {
        quote: "문제를 먼저 해결하세요. 그리고 나서 코드를 작성하세요.",
        author: "존 존슨",
    },
    {
        quote: "코드 라인 수로 프로그래밍 진척도를 측정하는 것은 항공기 제작 진척도를 무게로 측정하는 것과 같습니다.",
        author: "빌 게이츠",
    },
    {
        quote: "컴퓨터 과학에서 어려운 두 가지는 캐시 무효화, 이름 짓기, 그리고 오프바이원 오류입니다.",
        author: "리언 밤브릭",
    },
    {
        quote: "아홉 사람이 한 달 안에 아기를 낳을 수 없습니다.",
        author: "프레드 브룩스",
    },
    {
        quote: "디버깅이 버그를 제거하는 과정이라면, 프로그래밍은 그것들을 넣는 과정이어야 합니다.",
        author: "에츠허르 다이크스트라",
    },
    {
        quote: "아무리 바보라도 컴퓨터가 이해할 수 있는 코드를 작성할 수 있습니다. 좋은 프로그래머는 사람이 이해할 수 있는 코드를 작성합니다.",
        author: "마틴 파울러",
    },
    {
        quote: "물 위를 걷는 것과 명세서대로 소프트웨어를 개발하는 것은 둘 다 얼어붙으면 쉽습니다.",
        author: "에드워드 V. 베라드",
    },
    {
        quote: "호프스태터의 법칙을 고려하더라도 항상 예상보다 오래 걸립니다.",
        author: "작자 미상",
    },
    {
        quote: "코드를 작성할 때는 항상 그 코드를 유지보수하게 될 사람이 당신이 사는 곳을 아는 폭력적인 정신병자일 것처럼 작성하세요.",
        author: "릭 오즈번",
    },
    {
        quote: "이론적으로는 이론과 실제 간에 차이가 없지만, 실제로는 차이가 있습니다.",
        author: "얀 L. A. 반 데 스네프슈이트",
    }
];

console.log(quotes)

// first-child나 last-child를 활용해 자식요소 태그를 선택할 수 있다.
// Math.random()은 0.0 ~ 1.0 사이의 난수를 반환한다.
const quote = document.querySelector('#quote span:first-child');
const author = document.querySelector('#quote span:last-child');
const todayQuote = quotes[Math.floor(Math.random() * quotes.length)]

quote.innerText = todayQuote.quote;
author.innerText = todayQuote.author;