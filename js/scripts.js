
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
      $("#cover1").show();
    }).mouseout(function () {
      $("#cover1").hide();
    });
  });

  $(document).ready(function () {
    $("#work2").mouseover(function () {
      $("#cover2").show();
    }).mouseout(function () {
      $("#cover2").hide();
    });
  });
  $(document).ready(function () {
    $("#work3").mouseover(function () {
      $("#cover3").show();
    }).mouseout(function () {
      $("#cover3").hide();
    });
  });
  $(document).ready(function () {
    $("#work4").mouseover(function () {
      $("#cover4").show();
    }).mouseout(function () {
      $("#cover4").hide();
    });
  });

  $(document).ready(function () {
    $("#work5").mouseover(function () {
      $("#cover5").show();
    }).mouseout(function () {
      $("#cover5").hide();
    });
    $("#work6").mouseover(function () {
      $("#cover6").show();
    }).mouseout(function () {
      $("#cover6").hide();
    });
    $("#work7").mouseover(function () {
      $("#cover7").show();
    }).mouseout(function () {
      $("#cover7").hide();
    });
    $("#work8").mouseover(function () {
      $("#cover8").show();
    }).mouseout(function () {
      $("#cover8").hide();
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
