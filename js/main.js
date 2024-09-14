let result; 

// string to number 
result = Number('324');          // 324 
console.log(result);
result = Number('324e-1');       // 32.4 
console.log(result);

// boolean to number 
result = Number(true);           // 1 
console.log(result);
result = Number(false);          // 0 
console.log(result);

// empty string and null to number (result is 0) 
result = Number(null);           // 0 
console.log(result);
result = Number(' ');            // 0 
console.log(result);

// NaN is returned if the string cannot be converted 
result = Number('hello');        // NaN 
console.log(result);
result = Number(undefined);      // NaN 
console.log(result);
result = Number(NaN);            // NaN 
console.log(result);

// parseInt and parseFloat 
result = parseInt('20.01');      // 20 
console.log(result);
result = parseFloat('20.01');    // 20.01 
console.log(result);

// '+' operator to convert to number
result = +'20.01';               // 20.01 
console.log(result);

// Math.floor 
result = Math.floor('20.01');    // 20 
console.log(result);

// number to string 
result = String(324);            // '324' 
console.log(result);
result = String(2 + 4);          // '6' 
console.log(result);

// other data types to string 
result = String(null);           // 'null' 
console.log(result);
result = String(undefined);      // 'undefined' 
console.log(result);
result = String(NaN);            // 'NaN' 
console.log(result);
result = String(true);           // 'true' 
console.log(result);
result = String(false);          // 'false' 
console.log(result);

// using toString() 
result = (324).toString();       // '324' 
console.log(result);
result = true.toString();        // 'true' 
console.log(result);

// Boolean conversions 
result = Boolean('');            // false 
console.log(result);
result = Boolean(0);             // false 
console.log(result);
result = Boolean(undefined);     // false 
console.log(result);
result = Boolean(null);          // false 
console.log(result);
result = Boolean(NaN);           // false 
console.log(result);
