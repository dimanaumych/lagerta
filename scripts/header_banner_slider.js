let backgrounds_array = [];
let images_url = $('.header-slider p');
for (let i = 0; i < images_url.length; i++){
    backgrounds_array.push(images_url[i].innerText);
}
function Rotator_cont() {
    var s = 5000;  // Время отображения
    var N= backgrounds_array.length;
    var i =-1;
    Rotator(i);

    function Rotator(i){
        i++; if( i > N - 1){i=0};//alert(i);
        $('.header-wrapper').css('background-image', 'url('+ backgrounds_array[i] +')');
        $(".dot").css('background', 'gray');
        $(".dots-wrapper div:eq("+i+")").css('background', 'lightgray');
        timerId01=setTimeout(function(){Rotator(i)},s);return;}
}
Rotator_cont();