"use strict"
function variableFunctionScoped(){
	var x =512;
	if ( x > 500){		
		var tmp = 3;
	}
	alert(tmp);
}

function hoistedFunction(){
      alert(tmp)  //output : undefined
      if (true){
             var tmp = 3;
      }
} 

function printName(firstName, lastName){
	var name = "My name is ";
	function callInternalFunction(){
		alert (name + firstName + " "+ lastName);
	}
	callInternalFunction();
}