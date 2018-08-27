dialog = $( "#dialog-meeting-created" ).dialog({
  modal: true,
  resizable: false,
  position: { at: "bottom"}
});
$("#dialog-meeting-created-ok").click(function() { dialog.dialog( "close" ) });

  $( function() {
    $( "#vis-tooltip" ).dialog();
  } );

var tooltip = $( "#vis-tooltip" ).dialog({
  modal: true,
  resizable: false,
  autoOpen: false,
  open: function() {
      $('.ui-widget-overlay').bind('click', function() {

          $('#vis-tooltip').dialog('close');
      })
  }
});
$(".ui-dialog-titlebar").hide();

openTooltip = function () {
  tooltip.dialog( "open" )
}

addMeetingPopups = function() {
    $('#timeline .time-slot').click(function (event, properties) {
      tooltip = $( "#vis-tooltip" )

      meetingData = this['timeline-item'].data;
      start = meetingData.start
      end = meetingData.end
      room = groups.get(meetingData.group)

      $(tooltip).find('.vis-tooltip-date')[0].innerHTML = moment(start).format('DD MMMM')
      $(tooltip).find('.vis-tooltip-time-start')[0].innerHTML = moment(start).format('HH:mm')
      $(tooltip).find('.vis-tooltip-time-end')[0].innerHTML = moment(end).format('HH:mm')
      $(tooltip).find('.vis-tooltip-room')[0].innerHTML = room.title

      openTooltip();
    });
};
