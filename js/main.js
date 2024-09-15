let result; 

result = Number('324');
console.log(result);
result = Number('324e-1');
console.log(result);

result = Number(true);
console.log(result);
result = Number(false);
console.log(result);

result = Number(null);
console.log(result);
result = Number(' ');
console.log(result);

result = Number('hello');
console.log(result);
result = Number(undefined);
console.log(result);
result = Number(NaN);
console.log(result);

result = parseInt('20.01');
console.log(result);
result = parseFloat('20.01');
console.log(result);

result = +'20.01';
console.log(result);

result = Math.floor('20.01');
console.log(result);
 
result = String(324);
console.log(result);
result = String(2 + 4);
console.log(result);
 
result = String(null);
console.log(result);
result = String(undefined);
console.log(result);
result = String(NaN);
console.log(result);
result = String(true);
console.log(result);
result = String(false);
console.log(result);

result = (324).toString();
console.log(result);
result = true.toString();
console.log(result);
 
result = Boolean('');
console.log(result);
result = Boolean(0);
console.log(result);
result = Boolean(undefined);
console.log(result);
result = Boolean(null);
console.log(result);
result = Boolean(NaN);
console.log(result);
