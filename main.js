function mock(text) {
    text = text.toLowerCase();
    var textArray = text.split('');
    for(let i = 0; i < text.length + 1; i++){
        let eoL = i++;
        textArray[eoL] = textArray[eoL].toUpperCase();   
    }
    
  let final = textArray.join('');
  return final;
}
$( document ).ready(function() {
    $("#main-box").height(200);
    $("#result-box").height(200);
    $("#main-box").width(400);
    $("#result-box").width(400);
    
    $("#mock").click(function(){
        var text = $("#main-box").val();
        var result = mock(text);
        $("#result-box").val(result);
    })
});
