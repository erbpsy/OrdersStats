$(document).ready(function () {






    $('.navigation-drop').click(function () {
        $(this).toggleClass('list-opened');
        $(this).find('.drop-list').closest('ul').toggleClass('open-drop-list');
    });
    $('.navigation-icon').click(function () {
        $('body').toggleClass('navigation-close');
    });
    $('.burger-icon').click(function () {
        $('body').toggleClass('navigation-slide-out');
    });
    $('.view-dropdown').click(function () {
        $(this).next('.menu-drop').show();
    });
    $('.profile-info').click(function () {
        $(this).next('.view-profile-info').show();
    });
    $(document).mouseup(function (e) {
        var container = $(".menu-drop");
        if (!container.is(e.target) && container.has(e.target).length === 0) {
            container.hide();
        }
        var container = $(".view-profile-info");
        if (!container.is(e.target) && container.has(e.target).length === 0) {
            container.hide();
        }
    });


    $('.popup-hide-btn').on('click', function () {
        $('.select-popup-body').hide();
        $(".hide-linechart").addClass("hide-chart");
        $(".hide-barchart").addClass("hide-chart");
        $(".hide-candlestickchart").addClass("hide-chart");
    });


    $('.navigation-drop .drop-list li a').on('click', function () {
        let currrentElement = $(this).html();
        if (currrentElement == "Show line chart") {
            $(".hide-linechart").removeClass("hide-chart");
            $(".hide-barchart").addClass("hide-chart");
            $(".hide-candlestickchart").addClass("hide-chart");
        }
        else if (currrentElement == "Show barchart") {
            $(".hide-linechart").addClass("hide-chart");
            $(".hide-barchart").removeClass("hide-chart");
            $(".hide-candlestickchart").addClass("hide-chart");
        }
        else if (currrentElement == "Show candlestick chart") {
            $(".hide-linechart").addClass("hide-chart");
            $(".hide-barchart").addClass("hide-chart");
            $(".hide-candlestickchart").removeClass("hide-chart");
        }

        $('.main-poup-body h2').html(currrentElement);
        $('.select-popup-body').show();
    });



    $('.switch-theame').on('click', function () {
        $(this).toggleClass('gear-slide');
        $('.select-theme-sidebar').toggleClass('theme-sidebar-slide-in');
    });

    $('#dark-theme').change(function () {
        if ($(this).is(":checked")) {
            $('body').removeClass('light-theme-active');
            $('body').addClass('dark-theme-active');
        }
        else {
            $('body').removeClass('dark-theme-active');
        }
    });
    $('#light-theme').change(function () {

        if ($(this).is(":checked")) {
            $('body').removeClass('dark-theme-active');
            $('body').addClass('light-theme-active');
        }
        else {
            $('body').removeClass('light-theme-active');
        }
    });

    $("#open-draggable").click(function(){
      $("#draggable-div").show();
    });

    $(".close-draggable").click(function(){
        $("#draggable-div").hide();
    });
 

 // bar chart code starts
 var ctx = document.getElementById("barChart");
 var barChart = new Chart(ctx, {
     type: 'bar',
     data: {
         labels: ["2015-01", "2015-02", "2015-03", "2015-04", "2015-05", "2015-06", "2015-07", "2015-08", "2015-09", "2015-10", "2015-11", "2015-12"],
         datasets: [{
             label: '# of Tomatoes',
             data: [12, 19, 3, 5, 2, 3, 20, 3, 5, 6, 2, 1],
             backgroundColor: [
                 'rgba(255, 99, 132, 0.2)',
                 'rgba(54, 162, 235, 0.2)',
                 'rgba(255, 206, 86, 0.2)',
                 'rgba(75, 192, 192, 0.2)',
                 'rgba(153, 102, 255, 0.2)',
                 'rgba(255, 159, 64, 0.2)',
                 'rgba(255, 99, 132, 0.2)',
                 'rgba(54, 162, 235, 0.2)',
                 'rgba(255, 206, 86, 0.2)',
                 'rgba(75, 192, 192, 0.2)',
                 'rgba(153, 102, 255, 0.2)',
                 'rgba(255, 159, 64, 0.2)'
             ],
             borderColor: [
                 'rgba(255,99,132,1)',
                 'rgba(54, 162, 235, 1)',
                 'rgba(255, 206, 86, 1)',
                 'rgba(75, 192, 192, 1)',
                 'rgba(153, 102, 255, 1)',
                 'rgba(255, 159, 64, 1)',
                 'rgba(255,99,132,1)',
                 'rgba(54, 162, 235, 1)',
                 'rgba(255, 206, 86, 1)',
                 'rgba(75, 192, 192, 1)',
                 'rgba(153, 102, 255, 1)',
                 'rgba(255, 159, 64, 1)'
             ],
             borderWidth: 1
         }]
     },
     options: {
         responsive: false,
         scales: {
             xAxes: [{
                 ticks: {
                     maxRotation: 90,
                     minRotation: 80
                 }
             }],
             yAxes: [{
                 ticks: {
                     beginAtZero: true
                 }
             }]
         }
     }
 });

 // bar chart code ends here

 // line chart code starts here
 var ctx = document.getElementById('lineChart').getContext("2d");
 var lineChart = new Chart(ctx, {
     type: 'line',
     data: {
         labels: ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL"],
         datasets: [{
             label: "Data",
             borderColor: "#80b6f4",
             pointBorderColor: "#80b6f4",
             pointBackgroundColor: "#80b6f4",
             pointHoverBackgroundColor: "#80b6f4",
             pointHoverBorderColor: "#80b6f4",
             pointBorderWidth: 10,
             pointHoverRadius: 10,
             pointHoverBorderWidth: 1,
             pointRadius: 3,
             fill: false,
             borderWidth: 4,
             data: [100, 120, 150, 170, 180, 170, 160]
         }]
     },
     options: {
         legend: {
             position: "bottom"
         },
         scales: {
             yAxes: [{
                 ticks: {
                     fontColor: "rgba(0,0,0,0.5)",
                     fontStyle: "bold",
                     beginAtZero: true,
                     maxTicksLimit: 5,
                     padding: 20
                 },
                 gridLines: {
                     drawTicks: false,
                     display: false
                 }

             }],
             xAxes: [{
                 gridLines: {
                     zeroLineColor: "transparent"
                 },
                 ticks: {
                     padding: 20,
                     fontColor: "rgba(0,0,0,0.5)",
                     fontStyle: "bold"
                 }
             }]
         }
     }
 });

 // line chart code ends here


 // caldle stick chart code starts here

 var chart = new CanvasJS.Chart("chartContainer", {
     title: {
         text: "Customized Candle Stick Chart",
         fontFamily: "times new roman"
     },
     zoomEnabled: true,
     exportEnabled: true,
     axisY: {
         includeZero: false,
         title: "Prices",
         prefix: "$ "
     },
     axisX: {
         interval: 2,
         intervalType: "month",
         valueFormatString: "MMM-YY",
         labelAngle: -45
     },
     data: [{
         type: "candlestick",
         risingColor: "green",
         fallingColor: "red",
         dataPoints: [
             { x: new Date(2012, 01, 01), y: [5198, 5629, 5159, 5385] },
             { x: new Date(2012, 02, 01), y: [5366, 5499, 5135, 5295] },
             { x: new Date(2012, 03, 01), y: [5296, 5378, 5154, 5248] },
             { x: new Date(2012, 04, 01), y: [5254, 5279, 4788, 4924] },
             { x: new Date(2012, 05, 01), y: [4910, 5286, 4770, 5278] },
             { x: new Date(2012, 06, 01), y: [5283, 5348, 5032, 5229] },
             { x: new Date(2012, 07, 01), y: [5220, 5448, 5164, 5258] },
             { x: new Date(2012, 08, 01), y: [5276, 5735, 5215, 5703] },
             { x: new Date(2012, 09, 01), y: [5704, 5815, 4888, 5619] },
             { x: new Date(2012, 10, 01), y: [5609, 5885, 5548, 5879] },
             { x: new Date(2012, 11, 01), y: [5878, 5965, 5823, 5905] },
             { x: new Date(2013, 00, 01), y: [5937, 6111, 5935, 6034] },
             { x: new Date(2013, 01, 01), y: [6040, 6052, 5671, 5693] },
             { x: new Date(2013, 02, 01), y: [5702, 5971, 5604, 5682] },
             { x: new Date(2013, 03, 01), y: [5697, 5962, 5477, 5930] },
             { x: new Date(2013, 04, 01), y: [5911, 6229, 5910, 5985] },
             { x: new Date(2013, 05, 01), y: [5997, 6011, 5566, 5842] },
             { x: new Date(2013, 06, 01), y: [5834, 6093, 5675, 5742] },
             { x: new Date(2013, 07, 01), y: [5776, 5808, 5118, 5471] },
             { x: new Date(2013, 08, 01), y: [5480, 6142, 5318, 5735] },
             { x: new Date(2013, 09, 01), y: [5756, 6309, 5700, 6299] },
             { x: new Date(2013, 10, 01), y: [6289, 6342, 5972, 6176] },
             { x: new Date(2013, 11, 01), y: [6171, 6415, 6129, 6304] }
         ]
     }]
 });
 changeBorderColor(chart);
 chart.render();
 function changeBorderColor(chart) {
     var dataSeries;
     for (var i = 0; i < chart.options.data.length; i++) {
         dataSeries = chart.options.data[i];
         for (var j = 0; j < dataSeries.dataPoints.length; j++) {
             dataSeries.dataPoints[j].color = (dataSeries.dataPoints[j].y[0] <= dataSeries.dataPoints[j].y[3]) ? (dataSeries.risingColor ? dataSeries.risingColor : dataSeries.color) : (dataSeries.fallingColor ? dataSeries.fallingColor : dataSeries.color);
         }
     }
 }
 // caldle stick chart code ends here

});

















//Make the DIV element draggagle:
dragElement(document.getElementById("draggable-div"));

function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById(elmnt.id + "header")) {
    /* if present, the header is where you move the DIV from:*/
    document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
  } else {
    /* otherwise, move the DIV from anywhere inside the DIV:*/
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    /* stop moving when mouse button is released:*/
    document.onmouseup = null;
    document.onmousemove = null;
  }
}