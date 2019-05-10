
$(document).ready(function () {
  $(".start").click(function (){

  // reset
  $("p#you").text("You");
  $("p#pc").text("PC");

  // Start按钮变为灰色不可点击状态。
  $(".start").attr('disabled','');

  // YOU下方骰子旋转3秒
  var countYou = 0;
  var resultYou = 0;
  var timerYou = setInterval(function () {

      var numYou = Math.floor(Math.random() * 6) + 1;
      $(".imgYou").attr('src','images/dice' + numYou + '.png')
                  .css('transform', 'rotate(' + countYou * 60 + 'deg)');
      countYou++;
      if (countYou > 30) {
         resultYou = numYou;
         clearInterval(timerYou);
      }
  }, 50);

  // PC下方骰子旋转3秒
  var countPC = 0;
  var resultPC = 0;
  var timerPC = setInterval(function () {

      var numPC = Math.floor(Math.random() * 6) + 1;
      $(".imgPC").attr('src','images/dice' + numPC + '.png')
                 .css('transform' , "rotate(" + countPC * 60 + 'deg');
      countPC++;
      if (countPC > 30) {
         resultPC = numPC;
         clearInterval(timerPC);
      }
  }, 50);

  // 胜出一方的名字后添加WON!
  if (resultYou > resultPC) {
    $("#you p").text("You Win!");
    var animeYou = setInterval(function () {
      $("#you p").toggleClass('blink');
    }, 200);
  } else {
    $("#pc p").text("PC Win!");
    var animePC = setInterval(function () {
      $("#pc p").toggleClass('blink');
    }, 200);
  }

  // Start按钮恢复为可点击状态
  $(this).removeAttr('disabled');
  });
});
