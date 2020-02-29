function myfunction(){
  document.getElementById("mytext").style.fontWeight = "bold";
}
function myfunction1(){
    document.getElementById("mytext").style.fontStyle = "italic";
}
function myfunction2(){
    document.getElementById("mytext").style.textDecoration = "underline";
}
function myfunction3(){
    var s=document.getElementById("size").value;
    document.getElementById("mytext").style.fontSize =s;

}
function myfunction4(){
    var f=document.getElementById("font").value;
    document.getElementById("mytext").style.fontFamily =f;
}
console.log();
$("#cours").children("div").children("a").children(".change").css("opacity","0");
$("#cours").children("div").hover(function(){
    
    $(this).css("opacity","0.4");
    $(this).children("a").children(".change").css("opacity","1");

},function(){
    $(this).css("opacity","1");
    $(this).children("a").children(".change").css("opacity","0");

}
)
// $(".C1").hover(function(){
//     $(".C1").css("opacity","0.1");
// },function(){
//     $(".C1").css("opacity","1");
// });

// $(".C2").hover(function(){
//     $(".C2").css("opacity","0.1");
// },function(){
//     $(".C2").css("opacity","1");
// });
// $(".C3").hover(function(){
//     $(".C3").css("opacity","0.1");
// },function(){
//     $(".C3").css("opacity","1");
// });
// $(".C4").hover(function(){
//     $(".C4").css("opacity","0.1");
// },function(){
//     $(".C4").css("opacity","1");
// });
// $(".C5").hover(function(){
//     $(".C5").css("opacity","0.1");
// },function(){
//     $(".C5").css("opacity","1");
// });
// $(".C6").hover(function(){
//     $(".C6").css("opacity","0.1");
// },function(){
//     $(".C6").css("opacity","1");
// });

// $(".C7").hover(function(){
//     $(".C7").css("opacity","0.1");
// },function(){
//     $(".C7").css("opacity","1");
// });
// $(".C8").hover(function(){
//     $(".C8").css("opacity","0.1");
// },function(){
//     $(".C8").css("opacity","1");
// });
// $(".C9").hover(function(){
//     $(".C9").css("opacity","0.1");
// },function(){
//     $(".C9").css("opacity","1");
// });
     

