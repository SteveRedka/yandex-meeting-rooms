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
