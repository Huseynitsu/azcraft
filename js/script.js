$(document).ready(function () {
    var tabs = $(".nav-link");
    var panes = $(".tab-pane");

    var currentIndex = 0;

    setInterval(function () {
        // Remove 'active' class from the currently active tab link and its associated tab pane
        tabs.removeClass("active");
        panes.removeClass("show active");

        // Add 'active' class to the next tab link and its associated tab pane
        tabs.eq(currentIndex).addClass("active");
        panes.eq(currentIndex).addClass("show active");

        // Increment the index for the next iteration
        currentIndex = (currentIndex + 1) % tabs.length;
    }, 3000);

    $(".hamburger-lines").click(function () {
        $(".ham-menu").toggleClass("active");
        console.log("sa");
    });
});