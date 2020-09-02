function myMove() {
    let box = document.getElementById("animate");

    let speed = 1;
    var pos = 0;
    var id = setInterval(frame, 5);

    function frame() {
        if (pos == 350) {
            clearInterval(id);
        } else {
            pos += speed;
            box.style.left = pos + "px"
        }
    }

}

// function myDrag() {
//     let box = document.getElementById("animate");
//     box.style.backgroundColor = "blue";


//     // let speed = 1;
//     // var pos = 0;
//     // var id = setInterval(frame, 5);

//     // function frame() {
//     //     if (pos == 350) {
//     //         clearInterval(id);
//     //     } else {
//     //         pos += speed;
//     //         box.style.left = pos + "px"
//     //     }
// }

$(".drag").draggable();




;
this._mouseStop(c)
}
return false
}, _mouseDistanceMet: function(c) { return Math.max(Math.abs(this._mouseDownEvent.pageX - c.pageX), Math.abs(this._mouseDownEvent.pageY - c.pageY)) >= this.options.distance }, _mouseDelayMet: function() { return this.mouseDelayMet }, _mouseStart: function() {}, _mouseDrag: function() {}, _mouseStop: function() {}, _mouseCapture: function() { return true }
})
})(jQuery);
(function(b) {
        b.widget("ui.draggable", b.ui.mouse, {
                    widgetEventPrefix: "drag",
                    options: { addClasses: true, appendTo: "parent", axis: false, connectToSortable: false, containment: false, cursor: "auto", cursorAt: false, grid: false, handle: false, helper: "original", iframeFix: false, opacity: false, refreshPositions: false, revert: false, revertDuration: 500, scope: "default", scroll: true, scrollSensitivity: 20, scrollSpeed: 20, snap: false, snapMode: "both", snapTolerance: 20, stack: false, zIndex: false },
                    _create: function() {
                        if (this.options.helper ==
                            "original" && !/^(?:r|a|f)/.test(this.element.css("position"))) this.element[0].style.position = "relative";
                        this.options.addClasses && this.element.addClass("ui-draggable");
                        this.options.disabled && this.element.addClass("ui-draggable-disabled");
                        this._mouseInit()
                    },
                    destroy: function() { if (this.element.data("draggable")) { this.element.removeData("draggable").unbind(".draggable").removeClass("ui-draggable ui-draggable-dragging ui-draggable-disabled");
                            this._mouseDestroy(); return this } },
                    _mouseCapture: function(c) {
                        var f =
                            this.options;
                        if (this.helper || f.disabled || b(c.target).is(".ui-resizable-handle")) return false;
                        this.handle = this._getHandle(c);
                        if (!this.handle) return false;
                        return true
                    },
                    _mouseStart: function(c) { var f = this.options;
                            this.helper = this._createHelper(c);
                            this._cacheHelperProportions(); if (b.ui.ddmanager) b.ui.ddmanager.current = this;
                            this._cacheMargins();
                            this.cssPosition = this.helper.css("position");
                            this.scrollParent = this.helper.scrollParent();
                            this.offset = this.positionAbs = this.element.offset();