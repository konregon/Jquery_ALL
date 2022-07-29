// 1. All element selector:- *

// $(document).ready(function(){
//     $("*").css("background", "yellow");
// });

// // 2. #id selector
$(document).ready(function(){
    $("#intro").css("background", "yellow");
});


// // 3. .class
$(document).ready(function(){
    $(".class1").css("background", "blue");
});


// 4. :first
$(document).ready(function(){
    $(".first_selector1 > p:first").css("background", "pink");
});


// 5. :last
$(document).ready(function(){
    $(".last_selector1 > p:last").css("background", "orange");
});


