$('.head').mousemove(e => {
    e.target.style.setProperty('--xpos', `${e.pageX}px`);
    e.target.style.setProperty('--ypos', `${e.pageY}px`);
    $('.light').css('left', `${e.pageX}px`);
    $('.light').css('top', `${e.pageY}px`);
})

