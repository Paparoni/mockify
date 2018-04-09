function mock(text) {
    text = text.toLowerCase();
    var textArray = text.split('');
    console.log(textArray);
    for(var i = 0; i < text.length; i++){
        var eoL = i++;
        
        if( typeof textArray[eoL] == "undefined"){
            
        } else {
            textArray[eoL] = textArray[eoL].toUpperCase();
        }
        
    }
    
  var final = textArray.join('');
  return final;
}

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
