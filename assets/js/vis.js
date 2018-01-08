// DOM element where the Timeline will be attached
var container = document.getElementById('timeline');

// create a data set with groups
var groups = new vis.DataSet();

groups.add([
  {
    id: 7,
    value: 1,
    content: "7 этаж",
    nestedGroups: [71,72,73,74]
  },
  {
    id: 6,
    value: 2,
    content: "6 этаж",
    nestedGroups: [61,62,63,64,65]
  }
]);

groups.add([
  {
    id: 71,
    content: "Ржавый Фред"
  },
  {
    id: 72,
    content: "Прачечная"
  },
  {
    id: 73,
    content: "Желтый дом"
  },
  {
    id: 74,
    content: "Оранжевый тюльпан"
  },
  {
    id: 61,
    content: "Джокер"
  },
  {
    id: 62,
    content: "Мариванна"
  },
  {
    id: 63,
    content: "Тонкий Боб"
  },
  {
    id: 64,
    content: "Черная вдова"
  },
  {
    id: 65,
    content: "Белорусский ликёр"
  }
]);

// Create a DataSet (allows two way data-binding)
var items = new vis.DataSet();

items.add([
  {start: '2015-12-15 06:00:00', end: '2015-12-15 11:00:00', group: 71},
  {start: '2015-12-15 12:00:00', end: '2015-12-15 22:00:00', group: 71},
  {start: '2015-12-15 06:00:00', end: '2015-12-15 08:05:00', group: 72},
  {start: '2015-12-15 10:15:00', end: '2015-12-15 12:00:00', group: 72},
  {start: '2015-12-15 13:00:00', end: '2015-12-15 16:00:00', group: 72},
  {start: '2015-12-15 06:00:00', end: '2015-12-15 07:00:00', group: 73},
  {start: '2015-12-15 08:30:00', end: '2015-12-15 10:00:00', group: 73},
  {start: '2015-12-15 06:00:00', end: '2015-12-15 08:45:00', group: 74},
  {start: '2015-12-15 09:15:00', end: '2015-12-15 13:00:00', group: 74},
]);

items.add([
  {start: '2015-12-15 07:15:00', end: '2015-12-15 11:45:00', group: 61},
  {start: '2015-12-15 12:30:00', end: '2015-12-15 17:00:00', group: 62},
  {start: '2015-12-15 17:05:00', end: '2015-12-15 21:05:00', group: 62},
  {start: '2015-12-15 07:30:00', end: '2015-12-15 12:15:00', group: 63},
  {start: '2015-12-15 07:30:00', end: '2015-12-15 11:45:00', group: 64},
  {start: '2015-12-15 13:15:00', end: '2015-12-15 13:30:00', group: 64},
  {start: '2015-12-15 15:20:00', end: '2015-12-15 16:55:00', group: 64},
  {start: '2015-12-15 07:30:00', end: '2015-12-15 11:55:00', group: 65},
  {start: '2015-12-15 12:40:00', end: '2015-12-15 16:55:00', group: 65},
]);

// Configuration for the Timeline
var options = {
  groupOrder: function (a, b) {
    return a.value - b.value;
  },
};

// Create a Timeline
var timeline = new vis.Timeline(container, items, groups, options);
