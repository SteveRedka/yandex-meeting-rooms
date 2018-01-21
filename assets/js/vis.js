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
  min: new Date('2015-12-15 6:00:00'),
  // max: new Date('2015-12-15 23:00:00'),
  // maxZoom: '1000 * 60 * 60 * 24',
  // minZoom: '1000 * 60 * 60 * 24'
  width: "1242px",
  hiddenDates: [
      {start: '2015-12-16 00:00:00', end: '2015-12-18 00:00:00', repeat: 'weekly'},
      {start: '2015-12-15 22:00:00', end: '2013-03-30 06:00:00', repeat: 'daily'}
  ],
};

// Create a Timeline
var timeline = new vis.Timeline(container, items, groups, options);

var customDate = new Date('2015-12-15 11:05:00');
timeline.addCustomTime(customDate, 'current-time-bar');

timeline.on("rangechange", modifyLabelsetClass)

function modifyLabelsetClass() {
  console.log('ss')
}
