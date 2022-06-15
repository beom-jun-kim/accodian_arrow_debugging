const $title = $('.title');
const $desc = $('.content');
const $titleIcon = $('.contentBox i');

$desc.hide();
$title.click(function(){

    if($titleIcon.hasClass('active') !== true || $(this).children('.contentBox i').hasClass('active') === true ){
    $(this).children('.contentBox i').toggleClass('active');
    } else {
    $titleIcon.removeClass('active');
    $(this).children('.contentBox i').toggleClass('active');
    }

    $desc.not($(this).next($desc).slideToggle()).slideUp();
    
});