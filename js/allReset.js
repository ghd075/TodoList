const allReset = document.querySelector('#reset')


function handleReset(event){
    console.log('리셋',event)
    localStorage.clear();
    window.location.reload()
}

allReset.addEventListener('click', handleReset)