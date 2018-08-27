// create a data set with groups
var groups = new vis.DataSet();

// Stores
groups.add([
  {
    id: 7,
    value: 1,
    content: "7 этаж",
    nestedGroups: [71,72,73,74],
    className: 'timeline-store'
  },
  {
    id: 6,
    value: 2,
    content: "6 этаж",
    nestedGroups: [61,62,63,64,65],
    className: 'timeline-store'
  }
]);

// Rooms
groups.add([
  {
    id: 71,
    content: "<h4>Ржавый Фред</h4><span>3-6 человек</span>",
    className: "timeline-room-disabled"
  },
  {
    id: 72,
    content: "<h4>Прачечная</h4><span>До 10 человек</span>",
    className: "timeline-room-normal"
  },
  {
    id: 73,
    content: "<h4>Желтый дом</h4><span>До 10 человек</span>",
    className: "timeline-room-normal"
  },
  {
    id: 74,
    content: "<h4>Оранжевый тюльпан</h4><span>3-6 человек</span>",
    className: "timeline-room-disabled"
  },
  {
    id: 61,
    content: "<h4>Джокер</h4><span>3-6 человек</span>",
    className: "timeline-room-normal"
  },
  {
    id: 62,
    content: "<h4>Мариванна</h4><span>До 10 человек</span>",
    className: "timeline-room-normal"
  },
  {
    id: 63,
    content: "<h4>Тонкий Боб</h4><span>До 10 человек</span>",
    className: "timeline-room-normal"
  },
  {
    id: 64,
    content: "<h4>Черная вдова</h4><span>3-6 человек</span>",
    className: "timeline-room-normal"
  },
  {
    id: 65,
    content: "<h4>Белорусский ликёр</h4><span>3-6 человек</span>",
    className: "timeline-room-normal"
  }
]);

// Create a DataSet (allows two way data-binding)
var items = new vis.DataSet();

items.add([
  {start: '2015-12-15 06:00:00', end: '2015-12-15 11:00:00', group: 71, className: "time-slot busy"},
  {start: '2015-12-15 12:00:00', end: '2015-12-15 22:00:00', group: 71, className: "time-slot busy"},
  {start: '2015-12-15 06:00:00', end: '2015-12-15 08:05:00', group: 72, className: "time-slot busy"},
  {start: '2015-12-15 10:15:00', end: '2015-12-15 12:00:00', group: 72, className: "time-slot busy"},
  {start: '2015-12-15 13:00:00', end: '2015-12-15 16:00:00', group: 72, className: "time-slot busy"},
  {start: '2015-12-15 06:00:00', end: '2015-12-15 07:00:00', group: 73, className: "time-slot busy"},
  {start: '2015-12-15 08:30:00', end: '2015-12-15 10:00:00', group: 73, className: "time-slot busy"},
  {start: '2015-12-15 06:00:00', end: '2015-12-15 08:45:00', group: 74, className: "time-slot busy"},
  {start: '2015-12-15 09:15:00', end: '2015-12-15 13:00:00', group: 74, className: "time-slot busy"},
]);

items.add([
  {start: '2015-12-15 07:15:00', end: '2015-12-15 11:45:00', group: 61, className: "time-slot busy"},
  {start: '2015-12-15 12:30:00', end: '2015-12-15 17:00:00', group: 62, className: "time-slot busy"},
  {start: '2015-12-15 17:00:00', end: '2015-12-15 21:05:00', group: 62, className: "time-slot busy"},
  {start: '2015-12-15 07:30:00', end: '2015-12-15 12:15:00', group: 63, className: "time-slot busy"},
  {start: '2015-12-15 07:30:00', end: '2015-12-15 11:45:00', group: 64, className: "time-slot busy"},
  {start: '2015-12-15 13:15:00', end: '2015-12-15 13:30:00', group: 64, className: "time-slot busy"},
  {start: '2015-12-15 15:20:00', end: '2015-12-15 16:55:00', group: 64, className: "time-slot busy"},
  {start: '2015-12-15 07:30:00', end: '2015-12-15 11:55:00', group: 65, className: "time-slot busy"},
  {start: '2015-12-15 12:40:00', end: '2015-12-15 16:55:00', group: 65, className: "time-slot busy"},
]);
