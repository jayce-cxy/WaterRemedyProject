$.fn.extend({
    drap: function () {
        $(this).mousedown(function (ev) {
            var offsetX = ev.clientX - $(this).offset().left;
            var offsetY = ev.clientY - $(this).offset().top;
            var _this = this;
            $(document).mousemove(function (ev) {
                $(_this).css({
                    left: ev.clientX - offsetX,
                    top: ev.clientY - offsetY
                })
            })
        })
        $(document).mouseup(function () {
            $(document).off("mousemove");
        })
    }
})