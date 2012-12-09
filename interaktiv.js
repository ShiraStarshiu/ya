$(document).ready(function() {
    /*____________________________________________________/ scrollUp \________________________________________________*/
    $(window).scroll(function(){
        var scroll = $('.scrollup');
        if ($(this).scrollTop() > 100)
            scroll.fadeIn();
        else
            scroll.fadeOut();

    });
    $('.scrollup').click(function(){
        $("body").animate({ scrollTop: 0 }, 600);
    });

    div_question = $('.question'); // все блоки вопросов

    /*____________________________________________/ считаем количество вопросов \_____________________________________*/
    var all_li = $('.qa-list__layout-unit');
    var index = 0;
    var cnt = 0;
    for(var i = 0; i < all_li.length; i++) {
        var parent_elem = (all_li[i].parentNode);
        var parent_index = $('.qa-list__layout').index(parent_elem);
        if(parent_index == index)
            cnt++;
        if(parent_index != index || i == all_li.length-1){
            if(cnt>20 && cnt%10 > 1 && cnt%10 < 5)
                word = 'вопроса';
            else if (cnt<5 && cnt>1 )
                word = 'вопроса';
            else if((cnt>20 && cnt%10==1) || cnt==1)
                word = 'вопрос';
            else
                word = 'вопросов';

            var question_val = div_question[index].innerHTML;
            div_question[index].innerHTML = question_val + '<span class="cnt_question">' + cnt + ' ' + word + '</span>';
            index++;
            cnt=1;
            }
    }

    /*_________________________________________/ дописываем начало вопроса и ответа \_________________________________*/
    var qst_element = $('.question__item');
    var ans_element = $('.answer__item');
    for (var i = 0; i < qst_element.length; i++){
        var qst_val = qst_element[i].innerHTML;
        var ans_val = ans_element[i].innerHTML;
        qst_element[i].innerHTML = '<span class="q-simvol">Q: </span>' + qst_val;
        ans_element[i].innerHTML = '<span class="a-simvol">A: </span>' + ans_val;
    }

    /*____________________________________________________/ аккордеон \_______________________________________________*/
    div_question.click(function(){
        var index = ($('.question').index(this));
        var element_hide = $('.qa-list__layout:eq('+ index +')');
        var vh_questionl = $('.vh_questionl') ;
        if ( element_hide.is(':visible') ) {
            element_hide.slideToggle(300);
            vh_questionl[0].innerHTML = 'показать';
            $('.scrollup').fadeOut()
        }
        else {
            element_hide.slideToggle(300);
            vh_questionl[0].innerHTML = 'скрыть';
        }
    });
    /*__________________________________________________/ скрыть/показать \___________________________________________*/
    div_question.hover(function(){
        var index = (div_question.index(this));
        var all_question = $('.cnt_question');
        var q_val = all_question[index].innerHTML;
        var element_hide = $('.qa-list__layout:eq('+ index +')');
        if ( element_hide.is(':visible') )
             word = 'скрыть';
        else
             word = 'показать';

        all_question[index].innerHTML = '<span class="vh_questionl">' + word + '</span> ' + q_val;
    }, function(){
        $('.vh_questionl').remove();
    });

    /*________________________________________________/ подсветка answer__item \______________________________________*/
    all_li.hover(function(){
        var index = ($('.qa-list__layout-unit').index(this));
        var element_hover = $('.answer__item:eq('+ index +')');
        element_hover.css("background-color","#FFFACF");
    }, function(){
        var element_hover = $('.answer__item');
        element_hover.css("background-color","white");
    });

});
