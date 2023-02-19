$(document).ready(function () {
 
  $("#0900AM .itemforthehour").val(localStorage.getItem("0900AM"));
  $("#1000AM .itemforthehour").val(localStorage.getItem("10h"));
  $("#1100AM .itemforthehour").val(localStorage.getItem("11h"));
  $("#1200PM .itemforthehour").val(localStorage.getItem("12h"));
  $("#1300PM .itemforthehour").val(localStorage.getItem("13h"));
  $("#1400PM .itemforthehour").val(localStorage.getItem("14h"));
  $("#1500PM .itemforthehour").val(localStorage.getItem("15h"));
  $("#1600PM .itemforthehour").val(localStorage.getItem("16h"));
  $("#1700PM .itemforthehour").val(localStorage.getItem("17h"));  

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

  //check each hour block and change the background to the relative colour
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

  // $(".timeinrow").each(function () {
  //   var hourdiv = $(this).attr("id").split("-")[1];
    
  //   if (liveHour == hourdiv) {
  //     $(this).addClass("now");
  //     $(this).children(".description").addClass("whitefont");
  //   } else if (liveHour < hourdiv) {
  //     $(this).removeClass("now");
  //     $(this).addClass("forward");
  //   } else if (liveHour > hourdiv) {
  //     $(this).removeClass("forward");
  //     $(this).addClass("back");
  //   }
  // });

  // $(".saveInfoButton").click(function (event) {
  //   event.preventDefault();
  //   var value = $(this).siblings(".itemforthehour").val();
  //   var time = $(this).parent().attr("id").split("-")[1];
  //   localStorage.setItem(time, value);
  // });

  $(".saveInfoButton").on("click", function(){

    var value = $(this).siblings(".itemforthehour").val();
    var time = $(this).parent().attr("id");
    var saved = $("#saved");
    console.log(time + " " + value);
    localStorage.setItem(time, value);

//     document.getElementById("saved").innerHTML = "Saved!";

// setTimeout(function(){
//     document.getElementById("saved").innerHTML = '';
// }, 3000);
    
// save text area into the local storage
$(".saveInfoButton").on("click", function (event) {
  var calendarItem =
      event.target.parentElement.previousElementSibling.children[0].value;
  localStorage.setItem(event.target.attributes[0].value, calendarItem);
});
    
    });

  
});