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

function reduceRight(list, iteratee, memo) {
	if (memo !== undefined) {
		for (var i = list.length - 1; i >= 0; i--) {
			memo = iteratee(memo, list[i])
		}
		return memo;
	} else {
		memo = list[list.length - 1];
		for (var i = list.length - 2; i >= 0; i--) {
			memo = iteratee(memo, list[i])
		}
		return memo
	}
}

function find(list, predicate) {
	try {	
	each(list, function(element, index) {
		if (predicate(element)) {
			throw element
		}
	})
	} catch(e) {
		return e
	}
}

function where(list, properties) {
	var arr = [];
	each(list, function(obj) {
		var flag = true;
		for (var key in properties) {
			if (obj[key] !== properties[key]) {
				flag = false;
			}
		}
		if (flag) {
			arr.push(obj)
		}
	})
	return arr;
}

function findWhere(list, properties) {
	for (var i = 0; i < list.length; i++) {
		var flag = true;
		for (var key in properties) {
			if (list[i][key] !== properties[key]) {
				flag = false;
			}
		}
		if (flag) {
			return list[i]
		}
	}
	return undefined
}

function reject(list, predicate) {
	return filter(list, function(val){
		return !predicate(val)
	})
}

function every(list, predicate) {
	return find(list, function(val){
		return Boolean(predicate(val)) === false
	})
} 

console.log(
	every([true, 1, null, 'yes'], Boolean)
	)