var inputValue = "cloUd naTive computinG"


var captalizeString = (str) => 
    str[0].toUpperCase() + str.slice(1).toLowerCase()

var words = inputValue.split(' ').map(captalizeString)
var captilizeSentence = words.join(' ')

    
    document.write(captilizeSentence);
    console.log(captilizeSentence)