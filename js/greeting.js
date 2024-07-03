const writeForm = document.querySelector('#login-form');
const loginInput = document.querySelector('#login-form input');
const h1 = document.querySelector('#greeting');


function handleWriteName(event){
    event.preventDefault();
    const username = loginInput.value;
    if(username.length === 0){
       alert('이름을 적어주세요!')
    }else{
    writeForm.style.display = 'none';
    localStorage.setItem("username", username);
    greeting(username);
    }
}

function greeting(username){
    h1.innerText = `${username}님. 행운을 빕니다.`
    h1.classList.remove('hide')
}

const savedUsername = localStorage.getItem('username')

if(savedUsername === null){
    writeForm.addEventListener('submit',handleWriteName)
}else{
    greeting(savedUsername)
    writeForm.style.display = 'none';
}
