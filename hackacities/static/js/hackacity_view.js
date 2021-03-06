var hackacity_view = {

    init: function() {

        var ratio = 1.6;

        var $window = $(window);


//        Parallax scrolling
        $('.hackacity-section').each(function(){
            var $bgobj = $(this); // assigning the object
            var index = $("section").index(this);
            $bgobj.css('z-index', index);
//            console.log(index);

            $(window).scroll(function() {
                var scrollTop = $window.scrollTop();
                var scroll = scrollTop / 5;
                var yPos = -(scroll-((($window.width()/ratio)/6)*index));

//                console.log(index, scrollTop, yPos, $window.width()/ratio);

                // Put together our final background position
                var coords = '50% '+ yPos + 'px';

                // Move the background
                $bgobj.css({ backgroundPosition: coords });
            });
        });


        if ($('#google-map').length > 0) {
            var style;

            map = new google.maps.Map(document.getElementById('google-map'), {
                zoom: 5,
                center: new google.maps.LatLng(40.7562008, 73.9903784),
                mapTypeId: google.maps.MapTypeId.ROADMAP,
                disableDefaultUI: true,
                scrollwheel: false,
                styles: style
            });

        }

    }
}


$(function() {
    hackacity_view.init();
});