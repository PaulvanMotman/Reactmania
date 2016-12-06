var blueAnimation = anime({
    targets: '.blue',
    easing: 'easeInOutBack',
    duration: 1000,
    translateX: 500,
    direction: 'alternate',
    loop: true, 
    autoplay: false
})

var redAnimation = anime({
    targets: '.red',
    easing: 'easeInOutBack',
    duration: 1000,
    scale: {
      value: 3,
      delay: 150,
      duration: 850,
      easing: 'easeInOutExpo',
    },
    translateX: 100,
    direction: 'alternate',
    loop: true, 
    autoplay: false
})

var greenAnimation = anime({
    targets: '.green',
    easing: 'easeInOutBack',
    duration: 500,
    translateX: 1000,
    direction: 'alternate',
    loop: true, 
    autoplay: false,
    rotate: {
        value: 7200,
        duration: 500,
        easing: 'easeInOutBack'
    }
})

var clicked = {
    green: false,
    red: false,
    blue: false
}


function click (click, animation) {
    if (!clicked[click]) {
        clicked[click] = true
        animation.play()
    } else {
        clicked[click] = false
        animation.pause()
    }
}

$('.green').click( function () {
    click('green', greenAnimation)

})

$('.blue').click( function () {
    click('blue', blueAnimation)
})

$('.red').click( function () {
    click('red', redAnimation)
    console.log(clicked.red)
})



