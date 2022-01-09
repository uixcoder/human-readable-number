module.exports = function toReadable(number) {
    let ones = ['zero', 'one', 'two', 'three', 'four', 'five', 'six',
        'seven', 'eight', 'nine'];
    let exceptions = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen',
        'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    let tens = ['', 'ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy',
        'eighty', 'ninety'];
    let num = number;
    let numStr = '';
    if (num >= 100) {
        numStr = ones[Math.trunc(num / 100)] + ' hundred';
        num = num % 100;
        if (num == 0) return numStr;
        else numStr += ' ';
    } 
    if ((num >= 0) && (num <= 9)) {
        numStr += ones[num];
    }
    if ((num >= 11) && (num <= 19)) { 
        numStr += exceptions[num % 10];
    }
    if (num % 10 == 0) {
        numStr += tens[Math.trunc(num / 10)];        
    } else if ((num >= 21) && (num <= 99)) {
        numStr += tens[Math.trunc(num / 10)] + ' ';
    	  num = num % 10;
        if ((num >= 0) && (num <= 9)) {
	        numStr += ones[num];
   		  } 
    }   
    return numStr;
}