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


// 10. :last-child
$(document).ready(function(){
    $(".lastChild_selector1 > p:last-child").css("background", "lime");
});


// 11. :last-of-type
$(document).ready(function(){
    $(".lastOfType_selector1 > p:last-of-type").css("background", "pink");
});


// 12. :nth-child(n)
$(document).ready(function(){
    $(".nthChild_selector > p:nth-child(2)").css("background", "blue");
});


// 13. :nth-last-child
$(document).ready(function(){
    $(".nthLastChild_selector > p:nth-last-child(2)").css("background", "blue");
});

// 14. :nth-last-of-type(n)
$(document).ready(function(){
    $(".nthLastOfType_selector > p:nth-last-of-type(2)").css("background", "orange");
});


// 15. only-child
$(document).ready(function(){
    $(".onlyChild_selector1 > p:only-child").css("background", "brown");
});
$(document).ready(function(){
    $(".onlyChild_selector2 > p:only-child").css("background", "brown");
});
$(document).ready(function(){
    $(".onlyChild_selector3 > p:only-child").css("background", "brown");
});



// 16. :only-of-type
$(document).ready(function(){
    $(".onlyOfType_selector1 > p:only-of-type").css("background", "yellow");
});
$(document).ready(function(){
    $(".onlyOfType_selector2 > p:only-of-type").css("background", "yellow");
});
$(document).ready(function(){
    $(".onlyOfType_selector3 > p:only-of-type").css("background", "yellow");
});


// 17. parent > child
$(document).ready(function(){
    $(".parent_selector1 > p").css("background", "fuchsia");
});


// 18. parent descendant
$(document).ready(function(){
    $(".parentDescendant_selector1  span").css("background", "lime");
});


// 19. element+next
$(document).ready(function(){
    $(".elementNext_selector + p").css("background", "lime");
});