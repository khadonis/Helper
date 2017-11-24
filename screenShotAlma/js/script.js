$(document).ready(function () {
  $('#getScreen').attr('href', 'javascript:getScreenshot()');
});
function getScreenshot() {
  var el = $('.div1');
  html2canvas(el, {
    onrendered: function (canvas) {
      $('.div1').html("");
      $('.div1').append(canvas);
      if (navigator.userAgent.indexOf("MSIE ") > 0 ||
        navigator.userAgent.match(/Trident.*rv\:11\./)) {
        var blob = canvas.msToBlob();
        window.navigator.msSaveBlob(blob, 'Test_file.png');
      }
      else {
        $('#test').attr('href', canvas.toDataURL("image/png"));
        $('#test').attr('download', 'Test_file.png');
        $('#test')[0].click();
      }
      $('canvas').remove();
    }
  });
};
