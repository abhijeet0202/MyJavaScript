function callHoist() {
	
	callInnerHoistFunction();
	callOuterHoistFunction();
	
	function callInnerHoistFunction(){
		alert("Inner Function Invoked");
	}
}

function callOuterHoistFunction(){
	alert("Outer Function Invoked");
}

//Example of Arguments
function callArguments(){
	for(var i =0; i < arguments.length; i++){
		alert(arguments[i]);
	}
	
	sumAll(1,2,3,4,5,6,7,8,9,10);
}

function sumAll(){
	var sum =0;
	for(var i=0;i < arguments.length; i++){
		sum+=arguments[i];
	}
	alert("sum od 1,2,3,4,5,6,7,8,9,10 is:" + sum);
}

//Example of Arguments to Array
function convertToArray(){
	var args ={};
	var sum = 0;
	args = Array.prototype.slice.call(arguments);
	for (var i = 0; i< args.length; i++){
		sum += args[i]*10
	}
	alert(sum);
}

//Exception Handling
function getPerson(id) {
    if (id < 0) {
        throw new Error('ID must not be negative: '+id);
    }
    return { id: id }; // normally: retrieved from database
}

function getPersons() {
	var ids = [2, -5, 137];
    var result = [];
    ids.forEach(function (id) {
        try {
            var person = getPerson(id);
            result.push(person);
        } catch (exception) {
            console.log(exception);
        }
    });
    return result;
}

		
