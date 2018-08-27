// DOM element where the Timeline will be attached
var container = document.getElementById('timeline');

// These functions will be fired upon initial creation of timeline
afterInitialDrawFunctions = function() {
  addMeetingPopups()
  appendTimebarTimer()
}

// Configuration for the Timeline
var startDate = new Date('2015-12-15 5:55:00');
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
  onInitialDrawComplete: afterInitialDrawFunctions,
  min: startDate,
  max: new Date('2015-12-21 6:00:00'),
  zoomMax: Number('1000 * 60 * 60 * 24'),
  zoomMin: Number('1000 * 60 * 60 * 24'),
  width: 1242,
  hiddenDates: [
      {start: '2015-12-16 00:00:00', end: '2015-12-18 00:00:00', repeat: 'weekly'},
      {start: '2015-12-15 22:00:00', end: '2013-03-30 06:00:00', repeat: 'daily'}
  ],
};

// Create a Timeline
var timeline = new vis.Timeline(container, items, groups, options);

timeline.setWindow(0, 1242);

var customDate = new Date('2015-12-15 11:05:00');
timeline.addCustomTime(customDate, 'current-time-bar');

timeline.on("rangechange", modifyLabelsetClass)

function modifyLabelsetClass() {
  // Unfortunately, there is no documented way to measure offset in vis.js in pixels.
  // Fortunately, fixed zoom is implied in task
  // Thus, offset is measured in hours.
  threeHours = 3 * 1000 * 60 * 60;
  if (timeline.range.start - Number(startDate) > threeHours) {
    $('#timeline .vis-labelset').addClass('vis-labelset-transparent');
    $('#timeline .vis-labelset').removeClass('vis-labelset-normal');
    // $('#timeline .vis-center').css('margin-left', '-181px');
    // $('#timeline .vis-top').css('margin-left', '-181px');
    $('#timeline .vis-left').css('width', '0');
    $('#timeline .vis-left').css('overflow', 'visible');
  } else {
    $('#timeline .vis-labelset').removeClass('vis-labelset-transparent');
    $('#timeline .vis-labelset').addClass('vis-labelset-normal');
    $('#timeline .vis-left').css('width', 'auto');
  }
}


