
const students = [];
while(!qty){
   var qty = parseInt (prompt("How many are you"));
}

for (let i = 0; i < 5; i++) { 
   const student = prompt ("What's your name ?"+ (i+1)) .toLowerCase() ;
students.push(student);
}
students.sort();
var result = students.join(" , ") ;
alert(result);

console.log (students)