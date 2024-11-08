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
            x_pos = index *10;
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

});


document.getElementById('MAIN_CONTAINER').style.display = 'block'

document.getElementById('CASE_1').addEventListener('click', createCaseModal1)

document.getElementById('CLOSE_CASE_MODAL_BTN1').addEventListener('click', closeCaseModal1)
document.getElementById('CASE_2').addEventListener('click', createCaseModal2)

document.getElementById('CLOSE_CASE_MODAL_BTN2').addEventListener('click', closeCaseModal2)
document.getElementsByTagName('body')[0].addEventListener('click', function () {
    closeCaseModal1()
    closeCaseModal2()
    closeSolutionModal()
})
document.getElementsByTagName('body')[0].addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
        closeCaseModal1()
        closeCaseModal2()
        closeSolutionModal()
    }
})
document.getElementById('CASE_MODAL1').addEventListener('click', function (e) {
    e.stopPropagation()
})
document.getElementById('CASE_MODAL2').addEventListener('click', function (e) {
    e.stopPropagation()
})
document.getElementById('SOLUTION').addEventListener('click', function (e) {
    e.stopPropagation()
    document.getElementById('SOLUTION_FRAME').style.display = 'block'
})
function createCaseModal1(e) {
    e.stopPropagation()
    document.getElementById('CASE_MODAL1').style.display = 'flex'
}
function closeCaseModal1() {
    document.getElementById('CASE_MODAL1').style.display = 'none'
}
function createCaseModal2(e) {
    e.stopPropagation()
    document.getElementById('CASE_MODAL2').style.display = 'flex'
}
function closeCaseModal2() {
    document.getElementById('CASE_MODAL2').style.display = 'none'
}
function closeSolutionModal() {
    document.getElementById('SOLUTION_FRAME').style.display = 'none'
}