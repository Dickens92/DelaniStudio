
$(document).ready(function(){
  $("#deve-image").click(function(){
    $("#deve-image").slideDown('1500').hide('1000');
    $("#devep").show('1500');
  });
  $("#devep").click(function(){
    $("#devep").slideUp('1500');
    $("#deve-image").slideDown('1500');
  });
});

$(document).ready(function(){
  $("#des-image").click(function(){
    $("#des-image").slideDown('1500').hide('1000');
    $("#desp").show('1500');
  });
  $("#desp").click(function(){
    $("#desp").slideUp('1500');
    $("#des-image").slideDown('1500');
  });
});

$(document).ready(function(){
  $("#pmanagement-image").click(function(){
    $("#pmanagement-image").slideDown('1500').hide('1000');
    $("#PMp").show('1500');
  });
  $("#PMp").click(function(){
    $("#PMp").slideUp('1500');
    $("#pmanagement-image").slideDown('1500');
  });
});
  $(document).ready(function () {
    $("#work1").mouseover(function () {
      $("#overlay1").show();
    }).mouseout(function () {
      $("#overlay1").hide();
    });
  });

  $(document).ready(function () {
    $("#work2").mouseover(function () {
      $("#overlay2").show();
    }).mouseout(function () {
      $("#overlay2").hide();
    });
  });
  $(document).ready(function () {
    $("#work3").mouseover(function () {
      $("#overlay3").show();
    }).mouseout(function () {
      $("#overlay3").hide();
    });
  });
  $(document).ready(function () {
    $("#work4").mouseover(function () {
      $("#overlay4").show();
    }).mouseout(function () {
      $("#overlay4").hide();
    });
  });

  $(document).ready(function () {
    $("#work5").mouseover(function () {
      $("#overlay5").show();
    }).mouseout(function () {
      $("#overlay5").hide();
    });
    $("#work6").mouseover(function () {
      $("#overlay6").show();
    }).mouseout(function () {
      $("#overlay6").hide();
    });
    $("#work7").mouseover(function () {
      $("#overlay7").show();
    }).mouseout(function () {
      $("#overlay7").hide();
    });
    $("#work8").mouseover(function () {
      $("#overlay8").show();
    }).mouseout(function () {
      $("#overlay8").hide();
    });
  });
  $("form#form").on('submit', function (event) {
    event.preventDefault();
    let name = $("input#name").val();
    let email = $("input#email").val();
    let message = $("textarea#comment").val();

    if ($("input#name").val() && $("input#email").val()) {
      alert("Hello " + name + ", Your message to us is well received. We appreciate you for reaching out to Delani Studios");
    }
    else {
      alert("Kindly enter your name and valid email address!");
    }

  });
