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
  onInitialDrawComplete: appendTimebarTimer,
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
  console.log('ss')
}
