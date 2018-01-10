dialog = $( "#dialog-meeting-created" ).dialog({
  modal: true,
  resizable: false,
  position: { at: "bottom"}
});
$("#dialog-meeting-created-ok").click(function() { dialog.dialog( "close" ) });
$(".ui-dialog-titlebar").hide();
