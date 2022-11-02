const head = $('.head');

// function glowControl(m) {
//     const headView = m.target.getBoundingClientRect();
//     const mouseX = m.target.clientX - rect.left;
//     const mouseY = m.target.clientY - rect.top;

//     target.style.setProperty('--mouse-x', `${mouseX}px`);
//     target.style.setProperty('--mouse-y'), `${mouseY}px`
// }

$('.head').mousemove(e => {
    e.target.style.setProperty('--mouse-x', `${e.pageX}px`);
    e.target.style.setProperty('--mouse-y', `${e.pageY}px`);
    console.log(e.target.style('--mouse-x'))
})