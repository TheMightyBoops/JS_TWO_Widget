$(function () {

    //Toggles
    var toolTipIsEnabled = true;

    //Selectors
    var $doc = $(document);
    var $ttButton = $("#toggleToolTips");

    //default tool tip behavior
    $doc.tooltip({
        show:{ effect: "fadeIn", duration:700},
        hide:{ effect: "fadeOut", duration: 700}
    });

    //shut off/turn on tooltips
    $ttButton.on('click', function (e) {
        if(toolTipIsEnabled) {

            $doc.tooltip({
                disabled: true
            });

            toolTipIsEnabled = false;
        } else {
            $doc.tooltip({
                disabled: false
            });

            toolTipIsEnabled = true;
        }
    });

    /* Some notes on the API doc for tooltip not used in this project:
     * Here are some additional options that didn't make sense for me to use but are good to know.
     *
     *  1) content - can be used to switch the text out of a tooltip from the title element that is used to add text to a
     *  tooltip
     *
     *  2) items - allows you to sub which attribute the tooltip is coming from instead of just "title"
     *
     *  3) position - change where tool tips appear
     *
     *  4) tooltipClass - allows you to switch the type of style of the tooltip ex.
     *     custom classes for errors or warnings
     *
     *  5) track - makes the tooltip follow the mouse when the cursor moves
     *
     */
});