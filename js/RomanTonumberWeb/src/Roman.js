function getRomanToNumber(roman) {

var chiffre = 0	
	if (roman.length == 1){
		chiffre = 1

	}if (roman.length == 2){
		chiffre = 2	

	}if(roman.length == 3){
		chiffre = 3
	}

	return chiffre
};


