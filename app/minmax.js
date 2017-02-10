function findMinMax(numberList) {
	
	var maxMum = Math.max.apply(null, numberList); // Calculate Maximum number in a list
	var minMum = Math.min.apply(null, numberList); // Calculate Minimum number in a list
	
	if (minMum === maxMum) {
	  var return_var = [minMum];
	} else
	  return_var = [minMum, maxMum];
	return return_var
}

exports.findMinMax = findMinMax;