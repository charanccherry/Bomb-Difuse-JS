let timerEl = document.getElementById('timer')
let defuserEl = document.getElementById('defuser')

let countdown = 10
let intervalId = setInterval(function() {
    countdown = countdown - 1
    timerEl.textContent = countdown
    if (countdown === 0) {
        timerEl.textContent = 'BOOM!!!!!'
        timerEl.style.color = 'red'
        clearInterval(intervalId)
    }
}, 1000)

defuserEl.addEventListener('keydown', function() {
    let bombDefuserText = defuserEl.value
    if (event.key == 'Enter' && bombDefuserText == 'defuse me' && countdown !== 0) {
        timerEl.textContent = 'You Did It!!!'
        timerEl.style.color = 'green'
        clearInterval(intervalId)
    }
})
