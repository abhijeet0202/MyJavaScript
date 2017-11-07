/**
 * 
 */
"use strict";  
function callUseScript(){  
    var testvar = 4;  
    
	
	var testObj = new Object();
	Object.preventExtensions(testObj); 
	testObj.name = "Bob"; //TypeError: can't define property "name": Object is not extensible
}

// This causes a syntax error.  
testvar = 5;  //ReferenceError: assignment to undeclared variable testvar
 