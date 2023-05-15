$(function () {
    // document.querySelector('h1').style.display = ('none');
    // $('h1').css({ display: 'none' });
    // $('h1').hide();

    //var--->const,let(숫자에 사용)
    var option = {
        anchors: ['01', '02', '03'],

        afterRender: function () {
            setTimeout(function () { $('.section').eq(0).addClass('on') }, 10)
        },
        // afterRender: function (anchorLink, index) {
        //     $('.section').eq(0).addClass('on');
        // },
        onLeave: function (index, nextIndex, direction) {
            console.log(index, nextIndex, direction);
            $('h1 span').text(nextIndex);
            $('nav li').eq(nextIndex - 1).addClass('on')
                .siblings().removeClass('on');
            $('.section').eq(nextIndex - 1).addClass('on')
                .siblings().removeClass('on');
        },
    }

    $('.main_full').fullpage(option);

    // $('.section').eq(0).addClass('on');

    //.eq몇번째

    // const num = [1, 2, 3];

    // var arry = [1, 2, 3, 3, 3];
    // console.log(arry[1])
})