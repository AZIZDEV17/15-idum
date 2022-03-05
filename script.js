function testKeyCode(e) {
  var keycode;
  if (window.event) keycode = window.event.keyCode;
  else if (e) keycode = e.which;
  var e = e || window.event;
            if (e.ctrlKey &&
                    (e.keyCode === 67 ||
                    e.keyCode === 86 ||
                    e.keyCode === 85 ||
                    e.keyCode === 73 ||
                    e.keyCode === 74 ||
                    e.keyCode === 83 ||
                    e.keyCode === 117)) {
      alert('This website is protected against attempts to clone. Your IP has been duly recorded on our server and if you persist it will be forwarded to the competent authorities');
    return false;
    } else {
      return true;
    }
  }
  document.onkeydown = testKeyCode;
$(function() {
    $t = "slide";
    $f = 1000,
    $s = 1000,
    $d = 5000;
    $n = $('.slide').length;
    $w = $('.slide').width();
    $c = $('.container').width();
    $ss = $n * $w;
      function timer() {
        $('.timer').animate({"width":$w}, $d);
        $('.timer').animate({"width":0}, 0);
    }
    function fadeInOut() {
      timer();
        $i = 0;    
        var setCSS = {
            'position' : 'absolute',
            'top' : '0',
            'left' : '0'
        }        
        $('.slide').css(setCSS);
        $('.slide').eq($i).show();
        setInterval(function() {
          timer();
            $('.slide').eq($i).fadeOut($f);
            if ($i == $n - 1) {
                $i = 0;
            } else {
                $i++;
            }
            $('.slide').eq($i).fadeIn($f, function() {
                $('.timer').css({'width' : '0'});
            });
        }, $d);
    }
    function slide() {
      timer();
        var setSlideCSS = {
            'float' : 'left',
            'display' : 'inline-block',
            'width' : $c
        }
        var setSlideShowCSS = {
            'width' : $ss
        }
        $('.slide').css(setSlideCSS);
        $('.slideshow').css(setSlideShowCSS); 
        setInterval(function() {
            timer();
            $('.slideshow').animate({"left": -$w}, $s, function(){
                $('.slideshow').css('left',0).append( $('.slide:first'));
            });
        }, $d);
    }
    if ($t == "fade") {
        fadeInOut();
    } if ($t == "slide") {
        slide();
    } else {
    }
});
var slideIndex = 0;
showSlides();
function showSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}
    slides[slideIndex-1].style.display = "block";
    setTimeout(showSlides, 5000);
}
document.addEventListener("DOMContentLoaded", () => {
    var i = 0;
    var speed = 50;
    var txt = document.getElementById("typed-text").textContent;
    function typeWriter() {
        if (i < txt.length) {
            document.getElementById("demo").innerHTML += txt.charAt(i);
            i++;
            setTimeout(typeWriter, speed);
        }
    }
    typeWriter();
    function counter(id, start, end, duration) {
    let obj = document.getElementById(id),
        current = start,
        range = end - start,
        increment = end > start ? 1 : -1,
        step = Math.abs(Math.floor(duration / range)),
        timer = setInterval(() => {
        current += increment;
        obj.textContent = current;
        if (current == end) {
            clearInterval(timer);
            obj.textContent += " ta";
        }
        }, step);
    }
    counter("count1", 0, 100, 3000);
    counter("count1_1", 0, 90, 3000);
    counter("count1_2", 0, 10, 3000);
    counter("count2", 0, 700, 4000);
    counter("count2_1", 0, 300, 4000);
    counter("count2_2", 0, 400, 4000);
    counter("count3", 0, 100, 5000);
    counter("count3_1", 0, 10, 5000);
    counter("count3_2", 0, 90, 5000);
  });
var menu_me = document.getElementById("menu_link");
var mobile_menu = document.getElementById("mobile_menu");
function menu() {
    mobile_menu.style.display = "flex";
    menu_me.style.display = "none";
}
function menu_close() {
    mobile_menu.style.display = "none";
    menu_me.style.display = "block";
}