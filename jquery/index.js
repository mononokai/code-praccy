$(document).ready(() => {
    $('#about').click(e => {
        if ($(e.target).html() === 'you clicked me!') {
            $(e.target).html('clicked me again!');
        }
        else {
            $(e.target).html('you clicked me!');
        }
    });
    $('#about').hover(e => {
        $(e.target).css('background-color','lightblue');
    });
    $('#about').mouseleave(e => {
        $(e.target).css('background-color','lightgreen');
    });
    $('#show').click(() => {
        $('#about').show();
    });
    $('#hide').click(() => {
        $('#about').hide();
    });
    $('#toggle').click(() => {
        $('#about').toggle();
    });
    $('.power').keyup(e => {
        $('#about').html($(e.target).val());
    });
    $('#getjson').click(() => {
        $.ajax({url: 'games.json', success: result => {
            $('#about').html(JSON.stringify(result,null,4));
        }});
    });
    $('#getgame').click(() => {
        $.ajax({url: 'games.json', success: result => {
            const game = result.games[0].title;
            $('#about').html(game);
        }});
    })
});