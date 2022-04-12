const calcButtons = document.querySelector('.calc')
const result = document.querySelector('#resultTable')
const oneStepBack = document.getElementById('oneStepBack')


const pushValueToTable = (event) => {
    if (event.target.className.includes('calc__button') && !event.target.id.includes('oneStepBack')) {
        const content = event.target.innerHTML

        // switch (content) {
        //     case 'C':
        //         result.innerHTML = ''
        //         break
        //     case '=':
        //         result.innerHTML = eval(result.innerHTML)
        //         break
        //     case '%':
        //         result.innerHTML = eval(result.innerHTML)/100
        //         break
        //     case '+/-':
        //         result.innerHTML = eval(result.innerHTML)*(-1)
        //         break
        //     default:
        //         result.innerHTML += content
        // }

        if (content === 'C') result.innerHTML = ''
        else if (content === '=') result.innerHTML = eval(result.innerHTML)
        else if (content === '%') result.innerHTML = eval(result.innerHTML)/100
        else if (content === '+/-') result.innerHTML = eval(result.innerHTML)*(-1)
        else result.innerHTML += content
    }
}

const cleanStep = () => {
    result.innerHTML = result.innerText.substring(0, result.innerHTML.length - 1)
    // result.innerHTML = result.innerText.slice(0, result.innerHTML.length - 2)
}





calcButtons.addEventListener('click', (pushValueToTable))
oneStepBack.addEventListener('click', (cleanStep))
