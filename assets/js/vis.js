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
  }
};

// Create a Timeline
var timeline = new vis.Timeline(container, items, groups, options);
