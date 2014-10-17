// each runs list.length times, pass (element, index)
function each(list, func) {
	for (var i = 0; i < list.length; i++) {
		func(list[i], i);
	}
}
// run list.length times, pass (element)
function map(list, iteratee) {
	var arr = [];
	each(list, function(e, i){
		arr[i] = iteratee(e);
	})
	return arr;
}

function filter(list, func) {
	var arr = [];
	each(list, function(val) {
		if (func(val)) {
			arr.push(val);
		}
	}) 
	return arr;
}

function reduce(list, cb, memo) {
	if (!memo) {
		memo = list[0];
		each(list, function(element, index){
			if (index != 0) {
				memo = cb(memo, element)
			}
		})
		return memo;	
	} else {
		each(list, function(element, index){
				memo = cb(memo, element)
		})
		return memo;	
	}
	
}

console.log(
	reduce([1,2,3], function(a, b) {
		return  a + b;
	})
	)