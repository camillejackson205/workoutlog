$(document).ready(function(){
    var test= $.ajax({
        type:"GET",
        url:"http://localhost:3000/api/test"
    })
    .done(function(data){
        console.log(data);
    })
    .fail(function(){
        console.log("OH no!");
    });
    $("#testAPI").on("click", function(){
        console.log("It is working!");
    });
});