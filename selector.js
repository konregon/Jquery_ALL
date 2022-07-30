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


// The index numbers start at 0

// 6. :even
$(document).ready(function(){
    $(".even_selector1 > p:even").css("background", "red");
});


// 7. :odd
$(document).ready(function(){
    $(".odd_selector1 > p:odd").css("background", "green");
});


// 8. :first-child
$(document).ready(function(){
    $(".child1 > p:first-child").css("background", "gray");
});

$(document).ready(function(){
    $(".parent2 > p:first-child").css("background", "gray");
});


// 9. :first-of-type
$(document).ready(function(){
    $(".firstOfType_selector1 > p:first-of-type").css("background", "gray");
});