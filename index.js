document.addEventListener('DOMContentLoaded' ,function() {
    var s = window.screen;  //Переменная для выясняющая размер вашего экрана
    var width = bg.width = window.outerWidth;

    var height = bg.height =  window.outerHeight
    var letters = Array(128).join(1).split('');

    var draw = function () {
        bg.getContext('2d').fillStyle='rgba(0,0,0,.05)'; //Тут цвет фона
        bg.getContext('2d').fillRect(0,0,width,height);
        bg.getContext('2d').fillStyle='#0F0'; //Тут цвет букв
        letters.map(function(y_pos, index){
            text = String.fromCharCode(65+Math.random()*33);
            x_pos = index *16;
            bg.getContext('2d').fillText(text, x_pos, y_pos);
            letters[index] = (y_pos > 758 + Math.random() * 1e4) ? 0 : y_pos + 10;
        });
    };

    RunMatrix();

    function RunMatrix() {
        if (typeof Game_Interval != "undefined") clearInterval(
            Game_Interval);
        Game_Interval = setInterval(draw, 50);
    }

    // function StopMatrix() {
    //     clearInterval(Game_Interval);
    // }
    // setTimeout(() => {StopMatrix()}, 3000)

});
setTimeout(() => {
    document.querySelector('.mainContainer').style.display = 'flex'
}, 50)