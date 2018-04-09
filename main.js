
$( document ).ready(function() {
    $("#main-box").height(200);
    $("#result-box").height(200);
    $("#main-box").width(200);
    $("#result-box").width(200);
    
    $("#mock").click(function(){
        var text = $("#main-box").val();
        var result = mock(text);
        $("#result-box").val(result);
    })
});
