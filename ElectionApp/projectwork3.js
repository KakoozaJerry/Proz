$('#myList a').click(function (e) {
  e.preventDefault()
  $(this).tab('show')
})
$('#myModal').on('shown.bs.modal', function () {
  $('#myInput').focus()
})