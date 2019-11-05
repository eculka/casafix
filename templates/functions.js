(function(){

    initialAnimation('fade-in-up', 300, 100, 1000);
    initialAnimation('fade-in', 150, 100, 1000);

    // Scroll animation function
    document.addEventListener('scroll', scroll, true);

    // Initial Animation function
    function initialAnimation (className, delay, delayStep, duration) {
        
        // Collecting elements by class
        let elements = document.getElementsByClassName(className);
        for(var i = 0; i < elements.length; i++){
            const el = elements.item(i);
            el.style.visibility = "hidden";
            if (elementInViewport(el)){
                el.classList.add('in-view');
                if (!el.classList.contains("animated")){
                    el.classList.add('animated');
                    animate(el, delay, duration);
                }
            }
            delay = delay + delayStep;
        }
    }

    function scroll () {
        scrollAnimate('fade-in-up', 0, 50, 1000);
        scrollAnimate('fade-in', 0, 50, 1000);
    };

    // Scroll animation function
    function scrollAnimate(className, delay, delayStep, duration) {
        let elements = document.getElementsByClassName(className);
        for(var i = 0; i < elements.length; i++){
            const el = elements.item(i);
            if (elementInViewport(el)){
                el.classList.add('in-view');
                if (!el.classList.contains("animated")){
                    el.classList.add('animated');
                    animate(el, delay, duration);
                }
            } 
            delay = delay + delayStep;
        }
    }
    
    // Check if element is in view
    function elementInViewport(el) {
        var bounding = el.getBoundingClientRect();
        return (
            bounding.top >= 0 &&
            bounding.top + 100 <= (window.innerHeight || document.documentElement.clientHeight)
        );
    };

    // Animation functions
    function animate(el, delay, duration){

        // Showing element
        el.style.visibility = "visible";

        if(el.classList.contains('fade-in-up')){
            anime.timeline()
            .add({
                targets: el,
                translateY: ["30%", "0"],
                opacity: [0 , 1],
                duration: duration,
                delay: delay,
                easing: "easeOutExpo"
            });
        }

        if(el.classList.contains('fade-in')){
            anime.timeline()
            .add({
                targets: el,
                opacity: [0, 1],
                duration: duration,
                delay: delay,
                easing: "easeOutExpo"
            });
        }
    }

})();