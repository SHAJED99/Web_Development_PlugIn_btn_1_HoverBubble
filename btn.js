function btn_hover_bubble_effect(e, btn_class_name) {
    var key = $(btn_class_name);

    key.css({
        'position': 'relative',
        'overflow': 'hidden',
    });

    key.append("<span></span>");

    key.on('mouseenter', function(e) {
        x = e.pageX - $(this).offset().left;
        y = e.pageY - $(this).offset().top;
        w = $(this).outerWidth();
        h = $(this).outerHeight();
        spn = $(this).find('span');

        if (w > h) {
            spn.css({
                'width': w * 3,
                'height': w * 3,
            });
        } else {
            spn.css({
                'width': h * 3,
                'height': h * 3,
            });
        };
        spn.css({
            top: y,
            left: x,
        });
    });

    key.on('mouseout', function(e) {
        x = e.pageX - $(this).offset().left;
        y = e.pageY - $(this).offset().top;
        $(this).find('span').css({
            top: y,
            left: x,
            'width': '0px',
            'height': '0px',
        })
    });

    key.find('span').css({
        'position': 'absolute',
        'width': '0px',
        'height': '0px',
        'transform': 'translate(-50%, -50%)',
        'border-radius': '100%',
        'transition': 'all 0.5s',
        'z-index': '-1',
    })
}