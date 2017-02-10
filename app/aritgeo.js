
function aritGeo(lists) {
	var return_var;

	if (lists.length > 1) {
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
			return_var = "Arithmetic";
		}
		else if(geoprog === true) {
			return_var = "Geometric";
		} else
			return_var = -1;

	} else return_var = 0;
	
	return return_var;
}

exports.aritGeo = aritGeo;
