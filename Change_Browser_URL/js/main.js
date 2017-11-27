function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}
$(function () {
    var con = $('#content');

    $("a[rel='tab']").click(function (e) {
        pageurl = $(this).attr('href');
       var titleText = pageurl.split('.')[0].replace('/', '').replace('-', ' ');
        titleText = titleText.charAt(0).toUpperCase() + titleText.slice(1);
        $('title').text(titleText);

        if (pageurl != window.location.pathname) {
            $.ajax({
                url: pageurl + '?rel=tab',
                success: function (data) {
                    con.hide(500);
                    setTimeout(function () {
                        con.html(data);
                    }, 500);
                    con.show(500);
                }
            });
        }
        if (pageurl != window.location.pathname) {
            window.history.pushState({ path: pageurl }, pageurl, pageurl);
        }
        return false;
    });


});
$(window).bind('popstate', function () {
    if (document.location.pathname != JSON.stringify(event.state.path)) {
        $.ajax({
            url: location.pathname + '?rel=tab', success: function (data) {
                var con = $('#content');
                con.hide(500);
                setTimeout(function () {
                    con.html(data);
                }, 500);
                con.show(500);
            }
        });
    }
});