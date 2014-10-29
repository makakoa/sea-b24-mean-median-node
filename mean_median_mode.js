
var mean = function(nums) {
	var sum = 0;
	nums.forEach(function(num) {
		sum += num;
	});
	return sum/nums.length;
}

var median = function(nums) {
	nums.sort(function(a, b){return a-b});
	var median;
	if(nums.length%2===0) {
		median = (nums[nums.length/2-1]+nums[nums.length/2])/2
	} else {
		median = nums[(nums.length+1)/2-1];
	}
	return median;
}

var mode = function(nums) {
	nums.sort(function(a, b){return a-b});
	var mode = nums[0];
	var count = 0;
	var lastNum;
	var max = -1;
	nums.forEach(function(num) {
		if(num===lastNum) {
			count++;
			if(count > maxCount) {
				maxCount = count;
				mode = num;
			}
		} else {
			lastNum = num;
			count = 0;
		}
	})
	return mode;
}

exports.mean = mean;
exports.median = median;
exports.mode = mode;