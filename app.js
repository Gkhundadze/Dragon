const applauseButton = document.querySelector('.applause-play')
const screamButton = document.querySelector('.scream-play')
let applauseSound = new Audio('sounds/Applause.mp3')
let screamSound = new Audio('sounds/scream.m4a')




applauseButton.addEventListener('click', (e) => {
    e.stopImmediatePropagation
    if(applauseButton.classList.contains('stopped')){
        applauseButton.classList.remove('stopped')
        applauseButton.classList.add('playing')
        applauseSound.play();
        setTimeout(()=> {
            if(applauseSound.ended) {
                applauseButton.classList.remove('playing')
                applauseButton.classList.add('stopped')
            }
        }, 7500)
    }else {
        applauseButton.classList.remove('playing')
        applauseButton.classList.add('stopped')
        applauseSound.pause();
    }
})

screamButton.addEventListener('click', (e) => {
    e.stopImmediatePropagation
    if(screamButton.classList.contains('stopped')){
        screamButton.classList.remove('stopped')
        screamButton.classList.add('playing')
        screamSound.play();
        setTimeout(()=> {
            if(screamSound.ended) {
                screamButton.classList.remove('playing')
                screamButton.classList.add('stopped')
            }
        }, 3000)
    }else {
        screamButton.classList.remove('playing')
        screamButton.classList.add('stopped')
        screamSound.pause();
    }
})
