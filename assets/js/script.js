$(document).ready(function () {
 
  $("#0900AM .itemforthehour").val(localStorage.getItem("0900AM"));
  $("#1000AM .itemforthehour").val(localStorage.getItem("1000AM"));
  $("#1100AM .itemforthehour").val(localStorage.getItem("1100AM"));
  $("#1200PM .itemforthehour").val(localStorage.getItem("1200PM"));
  $("#1300PM .itemforthehour").val(localStorage.getItem("1300PM"));
  $("#1400PM .itemforthehour").val(localStorage.getItem("1400PM"));
  $("#1500PM .itemforthehour").val(localStorage.getItem("1500PM"));
  $("#1600PM .itemforthehour").val(localStorage.getItem("1600PM"));
  $("#1700PM .itemforthehour").val(localStorage.getItem("1700PM"));  

    let LiveMoment = moment().format("dddd MMMM Do");
    let TodayDate = document.getElementById("today");
    TodayDate.innerHTML = LiveMoment;
    let liveHour = parseInt(moment().format("H"));
    var timeBlock = $(".1hourcolumn");

 
 $("#resetInfoButton").click(function (event) {
    event.preventDefault;
    $("textarea").val("");
    localStorage.clear();
  });

  
$.each(timeBlock, function () {
    var hourId = parseInt($(this).attr("id"));
    console.log(liveHour)
    console.log(parseInt($(this).attr("id")));
    // for events at the current hour, set the colour to red.
    if (hourId === liveHour) {
        $(this).next().addClass("now");
        console.log("1")
    // for past events set the colour to grey
    } else if (hourId < liveHour) {
        $(this).next().addClass("back");
        console.log("2")
    // for future events set the colour to green
    } else if (hourId > liveHour) {
        $(this).next().addClass("forward");
        console.log("3")
    }
});

   $(".saveInfoButton").on("click", function(){

    var value = $(this).siblings(".itemforthehour").val();
    var time = $(this).parent().attr("id");
    var saved = $("#saved");
    console.log(time + " " + value);
    localStorage.setItem(time, value);

$(".saveInfoButton").on("click", function (event) {
  var calendarItem =
      event.target.parentElement.previousElementSibling.children[0].value;
  localStorage.setItem(event.target.attributes[0].value, calendarItem);
});
    
    });

  
});