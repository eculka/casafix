(function () {
    $(window).on("load resize scroll",function(e){
        const navbarHeight = document.getElementById('navbar').offsetHeight;
        document.body.style.paddingTop = navbarHeight-10+'px';
    });
})();