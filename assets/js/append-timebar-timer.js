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
