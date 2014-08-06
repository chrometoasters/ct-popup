$.fn.popup = function(selector) {

    $('[data-popup]').on( 'click', function(e) {

        var $this =         $(this),
            href =          $this.attr('href'),
            width =         $this.attr('data-popup-width'),
            height =        $this.attr('data-popup-height'),
            top =           $this.attr('data-popup-top'),
            left =          $this.attr('data-popup-left'),
            resizable =     $this.attr('data-popup-resizable') || 'yes',
            scrollbars =    $this.attr('data-popup-scrollbars') || 'yes',
            status =        $this.attr('data-popup-status') || 'yes',
            location =      $this.attr('data-popup-location') || 'no',
            menubar =       $this.attr('data-popup-menubar') || 'no',
            toolbar =       $this.attr('data-popup-toolbar') || 'no',
            //center = $(this).attr('data-popup-center'),
            id = 'popup', // TODO: generate a unique window name
            attrs = '';

        // common sizings
        if ( href.match('facebook.com/sharer.php') ) {
            width = 520;
            height = 350;
        }

        // width
        if ( width ) {
            attrs += ' width=' + width;
        }

        // height
        if ( height ) {
            attrs += ' height=' + height;
        }

        // top
        if ( top ) {
            attrs += ' top=' + top;
        }

        // left
        if ( left ) {
            attrs += ' left=' + left;
        }

        // resizable
        attrs += ' resizable=' + resizable;

        // scrollbars
        attrs += ' scrollbars=' + scrollbars;

        // status
        attrs += ' status=' + status;

        // location
        attrs += ' location=' + location;

        // menubar
        attrs += ' menubar=' + menubar;

        // toolbar
        attrs += ' toolbar=' + toolbar;

        // strip leading space
        attrs = attrs.substring(1);

        window.open( $(this).attr('href'), id, attrs );
        e.preventDefault();
    });


    // deps: jquery
}