$(document).ready(function () {
    
    let LiveMoment = moment().format("dddd MMMM Do");
    let TodayDate = document.getElementById("today");
    TodayDate.innerHTML = LiveMoment;
    let liveHour = moment().format("HH");

 
 $("#resetInfoButton").click(function (event) {
    event.preventDefault;
    $("textarea").val("");
    localStorage.clear();
  });

  $(".timeinrow").each(function () {
    var hourdiv = $(this).attr("id").split("-")[1];
    
    if (liveHour == hourdiv) {
      $(this).addClass("now");
      $(this).children(".description").addClass("whitefont");
    } else if (liveHour < hourdiv) {
      $(this).removeClass("now");
      $(this).addClass("forward");
    } else if (liveHour > hourdiv) {
      $(this).removeClass("forward");
      $(this).addClass("back");
    }
  });

  $(".btntosave").click(function (event) {
    event.preventDefault();
    var value = $(this).child(".the-hour").val();
    var time = $(this).parent().attr("id").split("-")[1];
    localStorage.setItem(time, value);
  });


  $("#0900AM .the-hour").val(localStorage.getItem("9h"));
  $("#1000AM .the-hour").val(localStorage.getItem("10h"));
  $("#1100AM .the-hour").val(localStorage.getItem("11h"));
  $("#1200PM .the-hour").val(localStorage.getItem("12h"));
  $("#1300PM .the-hour").val(localStorage.getItem("13h"));
  $("#1400PM .the-hour").val(localStorage.getItem("14h"));
  $("#1500PM .the-hour").val(localStorage.getItem("15h"));
  $("#1600PM .the-hour").val(localStorage.getItem("16h"));
  $("#1700PM .the-hour").val(localStorage.getItem("17h"));
});