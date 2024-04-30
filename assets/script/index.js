window.onload = function() {
    var initialWidth = 1021; 

    var textContainer = document.getElementById('nome');
    var baseFontSize = 64; 

    var textContainer2 = document.getElementById('fsd');
    var baseFontSize2 = 40; 


    function adjustTextSize() {
        var currentWidth = window.innerWidth;
        if (currentWidth < initialWidth) {
            var difference = initialWidth - currentWidth;
            var newSize = baseFontSize - (difference * 0.5);
            textContainer.style.fontSize = newSize + 'px';

            var newSize2 = baseFontSize2 - (difference * 0.5);
            textContainer2.style.fontSize = newSize2 + 'px';
        } else {
            textContainer.style.fontSize = baseFontSize + 'px'; 

            textContainer2.style.fontSize = baseFontSize2 + 'px'; 
        }
    }

    
    adjustTextSize();

    
    window.onresize = adjustTextSize;
};

