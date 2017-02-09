function aritGeo(lists) {

	if (lists.length < 2) {
		return 0;
	} else {
		const commonDiff = lists[1] - lists[0];
		const commonRatio = lists[1] / lists[0];
		var arithprog = true;
		var geoprog = true;

		for(var i = 0; i < lists.length - 1; i++)
		{
			if( lists[i + 1] - lists[i] !== commonDiff) {
				arithprog = false;
			}
			if(lists[i + 1] / commonRatio !== lists[i]) {
				geoprog = false;
			}
		}

		if(arithprog === true) {
			return "Arithmetic";
		}
		else if(geoprog === true) {
			return"Geometric";
		} else
		return -1;
	}
}