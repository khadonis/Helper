//bootstrap modal popup convert to lightbox
$('a.thumb').click(function (event) {
  event.preventDefault();
  var src = $(this).attr('href');
  var content = $('.modal-body');
  content.empty();
  content.html('<img src="' + src + '">');
  $('.modal-profile').modal('{show:true}');
});
$('#myModal').modal('handleUpdate');
$('#myModal').on('show.bs.modal', function () {
  $(this).find('.modal-body').css({
    width: 'auto', //probably not needed
    height: 'auto', //probably not needed 
    'max-height': '100%'
  });
});

//video sizing
$(document).ready(function () {
  function videoSizing() {
    $('.h-box iframe').each(function () {
      var h = $(this).height();
      var w = $(this).width();

      h = w / 1.7;
      $(this).attr('height', h+30);
      return;
    });
  };
  setTimeout(videoSizing, 10);
  $(window).resize(videoSizing);
});