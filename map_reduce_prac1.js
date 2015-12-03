//
// Práctica de ASW: Map-Reduce sobre MongoDB
//


var mapFunction = function() {
		var key = this.userid;
		var value = {
			userid: this.userid,
			total_time: this.time,
			count: 1,
			avg_time: 0
		};
		
		emit(key, value);
	};
	
	
var reduceFunction = function(key, values) {
		var reducedObject = {
			userid: key,
			total_time: 0,
			count: 0,
			avg_time: 0
		};
		values.forEach(function(value) {
			reducedObject.total_time += value.total_time;
			reducedObject.count += value.count;
		});
		
		return reducedObject;
	};
	
	
var finalizeFunction = function(key, reducedValue) {
		if (reducedValue.count > 0) reducedValue.avg_time = reducedValue.total_time / reducedValue.count;
		
		return reducedValue;
	};
	
	
db.runCommand({
	mapReduce: "sessions",
	map: mapFunction,
	reduce: reduceFunction,
	finalize: finalizeFunction,
	out: "session_stat2"
});