var blueAnimation = anime({
    targets: '.blue',
    translateX: 500,
    direction: 'alternate',
    autoplay: false
});

var redAnimation = anime({
    targets: '.red',
    translateX: 500,
    direction: 'alternate',
    autoplay: false
});

var greenAnimation = anime({
    targets: '.green',
    translateX: 500,
    direction: 'alternate',
    autoplay: false
});

blueAnimation.settings.complete = function() {
    greenAnimation.restart();
}

redAnimation.settings.complete = function() {
    blueAnimation.restart();
}

greenAnimation.settings.complete = function() {
    redAnimation.restart();
}

greenAnimation.play();