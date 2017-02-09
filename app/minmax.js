function findMinMax(numberList) {
	
	maxMum = Math.max.apply(null, numberList); // Calculate Maximum number in a list
	minMum = Math.min.apply(null, numberList); // Calculate Minimum number in a list
	
	if (minMum === maxMum) {
	  return [minMum];
	} else
	  return [minMum, maxMum];
}