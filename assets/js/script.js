$(document).ready(function () {
    
    let LiveMoment = moment().format("dddd MMMM Do");
    let TodayDate = document.getElementById("currentDay");
    TodayDate.innerHTML = LiveMoment;
    let liveHour = moment().format("HH");

 
 $("#resetInfoButton").click(function (event) {
    event.preventDefault;
    $("infoloc").val("");
    localStorage.clear();
  });

  