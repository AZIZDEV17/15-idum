function testKeyCode(e) {
    var keycode;
    if (window.event) keycode = window.event.keyCode;
    else if (e) keycode = e.which;
    var e = e || window.event;
              if (e.ctrlKey &&
                      (e.keyCode === 85 ||
                      e.keyCode === 67 ||
                      e.keyCode === 73 ||
                      e.keyCode === 74 ||
                      e.keyCode === 83)) {
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
  var amountScrolled = 200;
  var amountScrolledNav = 25;
  $(window).scroll(function() {
    if ( $(window).scrollTop() > amountScrolled ) {
      $('button.back-to-top').addClass('show');
  } else {
    $('button.back-to-top').removeClass('show');
    }
  });
  $('button.back-to-top').click(function() {
    $('html, body').animate({
      scrollTop: 0
    }, 800);
    return false;
  });
  $("body").focus(function(){
    $(this).css("background-color", "#cccccc");
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
  var clicked=false;
    function comment() {
        var form=document.getElementById("form");
        var myID = document.getElementById("advertisement");
        myID.className="advertisement hide1";
        form.style.display = "flex";
        clicked=true;
    }
    $(document).scroll(function() {
      myID = document.getElementById("advertisement");
      var myScrollFunc = function () {
          var y = window.scrollY;
          if (y >= 200 && !clicked) {
              myID.className = "advertisement show1"
          } else {
              myID.className = "advertisement hide1"
          }
      };
      window.addEventListener("scroll", myScrollFunc);
  });
  $(document).scroll(function() {
    myID1 = document.getElementById("scroll1");
    news=document.getElementById("news");
    var myScrollFunc1 = function () {
        var y1 = window.scrollY;
        if (y1 >= 200) {
            myID1.className = "scroll1 show2"
            news.className = "scroll1 show2"
        } else {
            myID1.className = "scroll1 hide2"
            news.className = "scroll1 hide2"
        }
    };
    window.addEventListener("scroll", myScrollFunc1);
  });
  $(document).scroll(function() {
    myID2 = document.getElementById("scroll2");
    var myScrollFunc2 = function () {
        var y2 = window.scrollY;
        if (y2 >= 825) {
            myID2.className = "scroll1 show2"
        } else {
            myID2.className = "scroll1 hide2"
        }
    };
    window.addEventListener("scroll", myScrollFunc2);
  });
  $(document).scroll(function() {
    myID3 = document.getElementById("scroll3");
    var myScrollFunc3 = function () {
        var y3 = window.scrollY;
        if (y3 >= 1400) {
            myID3.className = "scroll1 show2"
        } else {
            myID3.className = "scroll1 hide2"
        }
    };
    window.addEventListener("scroll", myScrollFunc3);
  });
  $(document).scroll(function() {
    myID4 = document.getElementById("scroll4");
    var myScrollFunc4 = function () {
        var y4 = window.scrollY;
        if (y4 >= 2050) {
            myID4.className = "scroll1 show2"
        } else {
            myID4.className = "scroll1 hide2"
        }
    };
    window.addEventListener("scroll", myScrollFunc4);
  });
  $(document).scroll(function() {
    myID5 = document.getElementById("theme");
    var myScrollFunc5 = function () {
        var y5 = window.scrollY;
        if (y5 >= 200) {
            myID5.className = "scroll1 show3"
        } else {
            myID5.className = "scroll1 hide3"
        }
    };
    window.addEventListener("scroll", myScrollFunc5);
  });
  $(document).scroll(function() {
    myID6 = document.getElementById("scroll6");
    var myScrollFunc6 = function () {
        var y6 = window.scrollY;
        if (y6 >= 550) {
            myID6.className = "scroll1 show2"
        } else {
            myID6.className = "scroll1 hide2"
        }
    };
    window.addEventListener("scroll", myScrollFunc6);
  });
  $(document).scroll(function() {
    myID7 = document.getElementById("scroll7");
    var myScrollFunc7 = function () {
        var y7 = window.scrollY;
        if (y7 >= 900) {
            myID7.className = "scroll1 show2"
        } else {
            myID7.className = "scroll1 hide2"
        }
    };
    window.addEventListener("scroll", myScrollFunc7);
  });
  $(document).scroll(function() {
    myID8 = document.getElementById("scroll8");
    var myScrollFunc8 = function () {
        var y8 = window.scrollY;
        if (y8 >= 1300) {
            myID8.className = "scroll1 show2"
        } else {
            myID8.className = "scroll1 hide2"
        }
    };
    window.addEventListener("scroll", myScrollFunc8);
  });
  $(document).scroll(function() {
    myID9 = document.getElementById("scroll9");
    var myScrollFunc9 = function () {
        var y9 = window.scrollY;
        if (y9 >= 1650) {
            myID9.className = "scroll1 show2"
        } else {
            myID9.className = "scroll1 hide2"
        }
    };
    window.addEventListener("scroll", myScrollFunc9);
  });
  $(document).scroll(function() {
    myID10 = document.getElementById("scroll10");
    var myScrollFunc10 = function () {
        var y10 = window.scrollY;
        if (y10 >= 2000) {
            myID10.className = "scroll1 show2"
        } else {
            myID10.className = "scroll1 hide2"
        }
    };
    window.addEventListener("scroll", myScrollFunc10);
  });
  var click=false;
  function theme(){
    var body=document.getElementById("body");
    var footer=document.getElementById("footer");
    var ad=document.getElementById("advertisement");
    var telclr=document.getElementById("telclr");
    var homeclr=document.getElementById("homeclr");
    var staffclr=document.getElementById("staffclr");
    var pupilsclr=document.getElementById("pupilsclr");
    var roomsclr=document.getElementById("roomsclr");
    var aboutclr=document.getElementById("aboutclr");
    var name=document.getElementById("name");
    var contact=document.getElementById("contact");
    var comment=document.getElementById("comment");
    var mobile_menu=document.getElementById("mobile_menu");
    var mobile_menu1=document.getElementById("mobile_menu1");
    var mobile_menu2=document.getElementById("mobile_menu2");
    var mobile_menu3=document.getElementById("mobile_menu3");
    var mobile_menu4=document.getElementById("mobile_menu4");
    var mobile_menu5=document.getElementById("mobile_menu5");
    var menu_line1=document.getElementById("menu_line1");
    var menu_line2=document.getElementById("menu_line2");
    var menu_line3=document.getElementById("menu_line3");
    var menud=document.getElementById("menud");
    if(click==false){
      $(':root').css('--color', '#ffffff');
      $(':root').css('--bgcolor', 'rgba(0, 0, 0, 0.9)');
      $(':root').css('--shcolor', 'rgba(255, 255, 255, 0.25)');
      menu_line1.style.backgroundColor="white";
      menud.style.backgroundColor="rgba(0, 0, 0, 0.9)";
      menu_line2.style.backgroundColor="white";
      menu_line3.style.backgroundColor="white";
      mobile_menu.style.backgroundColor="rgba(0, 0, 0, 0.9)";
      mobile_menu1.style.color="white";
      mobile_menu2.style.color="white";
      mobile_menu3.style.color="white";
      mobile_menu4.style.color="white";
      mobile_menu5.style.color="white";
      body.style.backgroundColor="black";
      body.style.color="white";
      homeclr.style.color="white";
      staffclr.style.color="white";
      pupilsclr.style.color="white";
      roomsclr.style.color="white";
      aboutclr.style.color="white";
      name.style.color="white";
      contact.style.color="white";
      comment.style.color="white";
      name.style.backgroundColor="black";
      contact.style.backgroundColor="black";
      comment.style.backgroundColor="black";
      ad.style.backgroundColor="black";
      ad.style.color="white";
      ad.style.boxShadow="0 0 10px 1px rgba(255, 255, 255, 0.5)";
      telclr.style.color="white";
      footer.style.backgroundColor="black";
      footer.style.color="white";
      click=true;
    }else{
      $(':root').css('--color', '#000000');
      $(':root').css('--bgcolor', 'rgba(255, 255, 255, 0.9)');
      $(':root').css('--shcolor', 'rgba(0, 0, 0, 0.25)');
      menud.style.backgroundColor="rgba(255, 255, 255 , 0.9)";
      menu_line1.style.backgroundColor="black";
      menu_line2.style.backgroundColor="black";
      menu_line3.style.backgroundColor="black";
      mobile_menu.style.backgroundColor="rgba(255, 255, 255, 0.9)";
      mobile_menu1.style.color="black";
      mobile_menu2.style.color="black";
      mobile_menu3.style.color="black";
      mobile_menu4.style.color="black";
      mobile_menu5.style.color="black";
      body.style.backgroundColor="white";
      body.style.color="black";
      homeclr.style.color="black";
      staffclr.style.color="black";
      pupilsclr.style.color="black";
      roomsclr.style.color="black";
      aboutclr.style.color="black";
      name.style.color="black";
      contact.style.color="black";
      comment.style.color="black";
      name.style.backgroundColor="white";
      contact.style.backgroundColor="white";
      comment.style.backgroundColor="white";
      ad.style.backgroundColor="white";
      ad.style.color="black";
      ad.style.boxShadow="0 0 10px 1px rgba(0, 0, 0, 0.5)";
      telclr.style.color="black";
      footer.style.backgroundColor="rgb(213, 255, 205)";
      footer.style.color="black";
      click=false;
    }
  }
  function class1(){
    var con=document.getElementById("class1");
    con.style.display="flex";
  }
  function class2(){
    var con=document.getElementById("class2");
    con.style.display="flex";
  }
  function class3(){
    var con=document.getElementById("class3");
    con.style.display="flex";
  }
  function class4(){
    var con=document.getElementById("class4");
    con.style.display="flex";
  }
  function class5(){
    var con=document.getElementById("class5");
    con.style.display="flex";
  }
  function class6(){
    var con=document.getElementById("class6");
    con.style.display="flex";
  }
  function class7(){
    var con=document.getElementById("class7");
    con.style.display="flex";
  }
  function class8(){
    var con=document.getElementById("class8");
    con.style.display="flex";
  }
  function class9(){
    var con=document.getElementById("class9");
    con.style.display="flex";
  }
  function class10(){
    var con=document.getElementById("class10");
    con.style.display="flex";
  }
  function class11(){
    var con=document.getElementById("class11");
    con.style.display="flex";
  }
  function uzoqova_lola(){
    var show_con=document.getElementById("uzoqova_lola");
    show_con.style.display="flex";
  }
  function Login(){
    var form=document.getElementById("login_in");
    form.style.display="flex";
  }
  function Register(){
    var form=document.getElementById("register");
    form.style.display="flex";
  }
  function showMenu(){
    var menu=document.getElementById("menu");
    var com=document.getElementById("form");
    var uzoqova_lola=document.getElementById("uzoqova_lola");
    menu.style.display="block";
    com.style.display="none";
    uzoqova_lola.style.display="none";
  }
  document.getElementById("name").addEventListener("click", function(){
    document.getElementById("name").style.borderColor="#767676";
  })
  document.getElementById("comment").addEventListener("click", function(){
    document.getElementById("comment").style.borderColor="#767676";
  })
  function validateForm() {
    var x=document.forms["comment_form"]["name"].value;
    var y=document.forms["comment_form"]["comment"].value;
    if (x.trim()=="" && y.trim()=="") {
      document.getElementById("name").style.borderColor="red";
      document.getElementById("comment").style.borderColor="red";
      return false;
    } else if(x.trim()==""){
      document.getElementById("name").style.borderColor="red";
      document.getElementById("comment").style.borderColor="#767676";
      return false;
    } else if(y.trim()==""){
      document.getElementById("comment").style.borderColor="red";
      document.getElementById("name").style.borderColor="#767676";
      return false;
    } else{
      document.getElementById("comment").style.borderColor="#767676";
      document.getElementById("name").style.borderColor="#767676";
      return true;
    }
  }
  document.getElementById("log").addEventListener("click", function(){
    document.getElementById("log").style.borderColor="#767676";
  })
  document.getElementById("pas").addEventListener("click", function(){
    document.getElementById("pas").style.borderColor="#767676";
  })
  function validateLogin() {
    var x=document.forms["login_in"]["log"].value;
    var y=document.forms["login_in"]["pas"].value;
    if (x.trim()=="" && y.trim()=="") {
      document.getElementById("log").style.borderColor="red";
      document.getElementById("pas").style.borderColor="red";
      return false;
    } else if(x.trim()==""){
      document.getElementById("log").style.borderColor="red";
      document.getElementById("pas").style.borderColor="#767676";
      return false;
    } else if(y.trim()==""){
      document.getElementById("pas").style.borderColor="red";
      document.getElementById("log").style.borderColor="#767676";
      return false;
    } else{
      document.getElementById("pas").style.borderColor="#767676";
      document.getElementById("log").style.borderColor="#767676";
      return true;
    }
  }
  document.getElementById("fname").addEventListener("click", function(){
    document.getElementById("fname").style.borderColor="#767676";
  })
  document.getElementById("lname").addEventListener("click", function(){
    document.getElementById("lname").style.borderColor="#767676";
  })
  document.getElementById("login").addEventListener("click", function(){
    document.getElementById("login").style.borderColor="#767676";
  })
  document.getElementById("password").addEventListener("click", function(){
    document.getElementById("password").style.borderColor="#767676";
  })
  function validateRegister() {
    var x=document.forms["register"]["fname"].value;
    var y=document.forms["register"]["lname"].value;
    var a=document.forms["register"]["login"].value;
    var b=document.forms["register"]["password"].value;
    if (x.trim()=="" && y.trim()=="" && a.trim()=="" && b.trim()=="") {
      document.getElementById("fname").style.borderColor="red";
      document.getElementById("lname").style.borderColor="red";
      document.getElementById("login").style.borderColor="red";
      document.getElementById("password").style.borderColor="red";
      return false;
    }
    else if(x.trim()=="" && y.trim()=="" && a.trim()==""){
      document.getElementById("fname").style.borderColor="red";
      document.getElementById("lname").style.borderColor="red";
      document.getElementById("login").style.borderColor="red";
      document.getElementById("password").style.borderColor="#767676";
      return false;
    }
    else if(x.trim()=="" && y.trim()=="" && b.trim()==""){
      document.getElementById("fname").style.borderColor="red";
      document.getElementById("lname").style.borderColor="red";
      document.getElementById("login").style.borderColor="#767676";
      document.getElementById("password").style.borderColor="red";
      return false;
    }
    else if(x.trim()=="" && a.trim()=="" && b.trim()==""){
      document.getElementById("fname").style.borderColor="red";
      document.getElementById("lname").style.borderColor="#767676";
      document.getElementById("login").style.borderColor="red";
      document.getElementById("password").style.borderColor="red";
      return false;
    }
    else if(y.trim()=="" && a.trim()=="" && b.trim()==""){
      document.getElementById("fname").style.borderColor="#767676";
      document.getElementById("lname").style.borderColor="red";
      document.getElementById("login").style.borderColor="red";
      document.getElementById("password").style.borderColor="red";
      return false;
    }
    else if(x.trim()=="" && y.trim()==""){
      document.getElementById("fname").style.borderColor="red";
      document.getElementById("lname").style.borderColor="red";
      document.getElementById("login").style.borderColor="#767676";
      document.getElementById("password").style.borderColor="#767676";
      return false;
    }
    else if(x.trim()=="" && a.trim()==""){
      document.getElementById("fname").style.borderColor="red";
      document.getElementById("lname").style.borderColor="#767676";
      document.getElementById("login").style.borderColor="red";
      document.getElementById("password").style.borderColor="#767676";
      return false;
    }
    else if(x.trim()=="" && b.trim()==""){
      document.getElementById("fname").style.borderColor="red";
      document.getElementById("lname").style.borderColor="#767676";
      document.getElementById("login").style.borderColor="#767676";
      document.getElementById("password").style.borderColor="red";
      return false;
    }
    else if(y.trim()=="" && a.trim()==""){
      document.getElementById("fname").style.borderColor="#767676";
      document.getElementById("lname").style.borderColor="red";
      document.getElementById("login").style.borderColor="red";
      document.getElementById("password").style.borderColor="#767676";
      return false;
    }
    else if(y.trim()=="" && b.trim()==""){
      document.getElementById("fname").style.borderColor="#767676";
      document.getElementById("lname").style.borderColor="red";
      document.getElementById("login").style.borderColor="#767676";
      document.getElementById("password").style.borderColor="red";
      return false;
    }
    else if(a.trim()=="" && b.trim()==""){
      document.getElementById("fname").style.borderColor="#767676";
      document.getElementById("lname").style.borderColor="#767676";
      document.getElementById("login").style.borderColor="red";
      document.getElementById("password").style.borderColor="red";
      return false;
    }
    else if(x.trim()==""){
      document.getElementById("fname").style.borderColor="red";
      document.getElementById("lname").style.borderColor="#767676";
      document.getElementById("login").style.borderColor="#767676";
      document.getElementById("password").style.borderColor="#767676";
      return false;
    }
    else if(y.trim()==""){
      document.getElementById("fname").style.borderColor="#767676";
      document.getElementById("lname").style.borderColor="red";
      document.getElementById("login").style.borderColor="#767676";
      document.getElementById("password").style.borderColor="#767676";
      return false;
    }
    else if(a.trim()==""){
      document.getElementById("fname").style.borderColor="#767676";
      document.getElementById("lname").style.borderColor="#767676";
      document.getElementById("login").style.borderColor="red";
      document.getElementById("password").style.borderColor="#767676";
      return false;
    }
    else if(b.trim()==""){
      document.getElementById("fname").style.borderColor="#767676";
      document.getElementById("lname").style.borderColor="#767676";
      document.getElementById("login").style.borderColor="#767676";
      document.getElementById("password").style.borderColor="red";
      return false;
    }
    else{
      document.getElementById("fname").style.borderColor="#767676";
      document.getElementById("lname").style.borderColor="#767676";
      document.getElementById("login").style.borderColor="#767676";
      document.getElementById("password").style.borderColor="#767676";
      return true;
    }
  }