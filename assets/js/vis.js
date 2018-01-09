// DOM element where the Timeline will be attached
var container = document.getElementById('timeline');

// Configuration for the Timeline
var options = {
  groupOrder: function (a, b) {
    return a.value - b.value;
  },
  zoomable: false,
  orientation: "top",
  margin: {
      item : {
          horizontal : -1
      }
  },
  format: {
    minorLabels: {
      hour: "H"
    }
  },
  onInitialDrawComplete: appendTimebarTimer
};

// Create a Timeline
var timeline = new vis.Timeline(container, items, groups, options);

var customDate = new Date('2015-12-15 11:05:00');
timeline.addCustomTime(customDate, 'current-time-bar');

function appendTimebarTimer() {
  var bar = timeline.customTimes[0];
  bar.bar.childNodes[0].innerHTML += "<div class='timebar-timer'>" +
                                     customDate.toTimeString().replace(/.*(\d{2}:\d{2}):.*/, "$1"); +
                                     "</div>";

  timeline.on('timechange', function (properties) {
    var timer = document.getElementsByClassName('timebar-timer')[0];
    var time = bar.customTime;
    timer.innerHTML = time.toTimeString().replace(/.*(\d{2}:\d{2}):.*/, "$1");
  });
};

