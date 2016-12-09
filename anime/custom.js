var path = anime.path('#path1');
var path2 = anime.path('#path2');
var path3 = anime.path('#path3');
var path4 = anime.path('#path4');

var lasttime = 0
var now = 0

var score = 100
var time = 1

function blueAnimation (id) {
    return  anime({
        targets: id,
        translateX: path2,
        translateY: path2,
        rotate: {
            value: 2040,
            duration: 5000,
            easing: 'easeInOutQuad'
        },
        scale: {
            value: 0.5,
            duration: 5000,
            easing: 'easeOutBounce'
        },
        duration: 5000,
        loop: true,
        easing: 'linear',
        autoplay: false,
    });
}

function redAnimation (id) {
    return  anime({
        targets: id,
        translateX: path3,
        translateY: path3,
        rotate: {
            value: 1020,
            duration: 5000,
            easing: 'easeInOutQuad'
        },
        scale: {
            value: 2,
            duration: 5000,
            easing: 'easeOutBounce'
        },
        duration: 5000,
        loop: true,
        easing: 'linear',
        autoplay: false,
    });
}

function greenAnimation (id) {
    return  anime({
        targets: id,
        translateX: path4,
        translateY: path4,
        rotate: {
            value: 2040,
            duration: 3000,
            easing: 'easeInOutQuad'
        },
        scale: {
            value: 4,
            duration: 3000,
            easing: 'easeOutBounce'
        },
        duration: 3000,
        loop: true,
        easing: 'linear',
        autoplay: false,
    });
}

function yellowAnimation (id) {
    return  anime({
        targets: id,
        translateX: path,
        translateY: path,
        rotate: {
            value: 180,
            duration: 10000,
            easing: 'easeInOutQuad'
        },
        scale: {
            value: 0.05,
            duration: 10000,
            easing: 'easeOutBounce'
        },
        duration: 10000,
        loop: true,
        easing: 'linear',
        autoplay: false,
    });
}

// Create timer
// 


function isFalse(element, index, array) { 
    return element.check == false; 
} 


var clicked = []

for (var i = 16 - 1; i >= 0; i--) {
    clicked[i] = {
        check: false,
        number: 0
    }
}

console.log(clicked)


function click (click, animation) {
    if (!clicked[click].check) {
        console.log("hoi")
        console.log(clicked[click])
        clicked[click].check = true
        animation.play()
    } else {
        console.log("doei")
        clicked[click].check = false
        animation.pause()
        score += 10
        $('#score').html(score.toString())

        if (clicked.every(isFalse)) {
            alert("You did it! You're score is " + score)
        }
    }
}

animations = [blueAnimation('#a'), redAnimation('#b'), greenAnimation('#c'), yellowAnimation('#d'), blueAnimation('#e'), redAnimation('#f'), greenAnimation('#g'), yellowAnimation('#h'), blueAnimation('#i'), redAnimation('#j'), greenAnimation('#k'), yellowAnimation('#l'), blueAnimation('#m'), redAnimation('#n'), greenAnimation('#o'), yellowAnimation('#p')]
selectors = ['#a', '#b', '#c', '#d', '#e', '#f', '#g', '#h', '#i', '#j', '#k', '#l', '#m', '#n', '#o', '#p']

function generate_clickfunction(i, j) {
    return function() { 
        click(i, animations[j])
    };
}

for (var i = animations.length -1; i >= 0; i--) {
    $(selectors[i]).click(generate_clickfunction(i,i))          
}

$('#start').click( function () {

    $(this).attr("disabled", 'disabled')

    lasttime = Date.now()/1000
    for (var i = animations.length -1, j = 6400 ; i >= 0, j >= 400; i--, j -= 400) {
        setTimeout(generate_clickfunction(i, i), j)   
    }

    $('#time').html('0:00')
    $('#score').html('100')
   

    setInterval( function () {
        score--
        $('#score').html(score.toString())
        if (score == 0) {
            alert("Game over!")
            $("#container").hide()
            window.location.href = "file:///Users/paulvanmotman/dev/Reactmania/anime/index.html";
        }
    }, 1000)

    setInterval( function () {
        $('#time').html(time.toString() + ':00')
        time++
    }, 1000)

   

})



