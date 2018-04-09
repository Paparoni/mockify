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
