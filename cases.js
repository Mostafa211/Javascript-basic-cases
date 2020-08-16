

var caseNum = Number(prompt('Please enter a case number'));

switch(caseNum){

case 1:

window.alert('1- Write a program that allow the user enter number then print it');

var x = prompt('Please enter a number');
window.alert(Number(x));
break;


//-----------------------------------------------------------------------------------------------//


case 2:

window.alert('2- Write a program that take number from user then print yes if that number can divide by 3 and 4 otherwise print no');

var x = Number(prompt('Please enter a number'));

if (x !=0 && x%3 == 0 && x%4 ==0){
    window.alert('Yes!');
}

else{
    window.alert('No!');
}
break;


//-----------------------------------------------------------------------------------------------//


case 3:

window.alert('3- Write a program that allows the user to insert 2 integers then print the max');

var x = Number(prompt('Please enter a number'));
var y = Number(prompt('Please enter a second number'));

if (x>y){
    window.alert(x);
}

else{
    window.alert(y);
}
break;


//-----------------------------------------------------------------------------------------------//


case 4:

window.alert('4- Write a program that allows the user to insert an integer then print negative if it is negative number otherwise print positive.');

var x = Number(prompt('Please enter a number'));

if (x<0){
    window.alert('Negative');
}

else if(x == 0){
    window.alert('Neutral');
}

else{
    window.alert('Positive');
}
break;


//-----------------------------------------------------------------------------------------------//


case 5:

window.alert('5- Write a program that take 3 integers from user then print the max element and the min element.');

var x = Number(prompt('Please enter a number'));
var y = Number(prompt('Please enter a second number'));
var z = Number(prompt('Please enter a third number'));

if (x>=y && x>=z){
    window.alert('max element = ' +x);
}

else if (y>=x && y>=z){
    window.alert('max element = ' +y);
}

else if (z>=x && z>=y){
    window.alert('max element = ' +z);
}

if (x<=y && x<=z){
    window.alert('min element = ' +x);
}

else if (y<=x && y<=z){
    window.alert('min element = ' +y);
}

else if (z<=x && z<=y){
    window.alert('min element = ' +z);
}
break;


//-----------------------------------------------------------------------------------------------//


case 6:

window.alert('6- Write a program that allows the user to insert integer number then check If a number is oven or odd');

var x = Number(prompt('Please enter a number'));

if (x%2 == 0){
    window.alert('Even');
}

else{
    window.alert('Odd');
}
break;


//-----------------------------------------------------------------------------------------------//


case 7:

window.alert('7- Write a program that take character from user then if it is vowel chars (a,e,I,o,u) then print vowel otherwise print consonant');

var x = prompt('Please enter a character');

if(x=='a' || x=='e' || x=='i' || x=='o' || x=='u' || x=='A' || x=='E' || x=='I' || x=='O' || x=='U'){
    window.alert('vowel');
}

else{
    window.alert('consonant');
}
break;


//-----------------------------------------------------------------------------------------------//


case 8:

window.alert('8- Write a program that allows user to insert integer then print all numbers between 1 to that number');

var x = Number(prompt('Please enter a number'));
var output = "Output: ";

for (var i=1 ; i < x ; i++){
    output += i + ", ";
}

window.alert(output + x);
break;


//-----------------------------------------------------------------------------------------------//


case 9:

window.alert('9- Write a program that allows user to insert integer then print a multiplication table up to 12.');

var x = Number(prompt('Please enter a number'));
var output = "Output: ";

for (var i=1 ; i < 12 ; i++){
    output += i*x + ", ";
}

window.alert(output + x*12);
break;


//-----------------------------------------------------------------------------------------------//


case 10:

window.alert('10- Write a program that allows to user to insert number then print all even numbers between 1 to this number');

var x = Number(prompt('Please enter a number'));
var output = "Output: ";

for (var i=1 ; i <= x ; i++){
    if(i%2 == 0){
    output += i+ ' ';
    }
}

window.alert(output);
break;


//-----------------------------------------------------------------------------------------------//


case 11:

window.alert('11- Write a program that take two integers then print the power');

var x = Number(prompt('Please enter a number'));
var y = Number(prompt('Please enter a second number'));
var output = 1;

if(x != 0){
    for (var i=0 ; i< y ; i++){
            output *= x;
    }

    window.alert(output);
}

else if(y == 0){
    window.alert(output);
}

else if(x == 0){
    window.alert(0);
}
break;


//-----------------------------------------------------------------------------------------------//


case 12:

window.alert('12- Write a program to enter marks of five subjects and calculate total, average and percentage.');

var sub1 = Number(prompt('Please enter first subject mark'));
var sub2 = Number(prompt('Please enter second subject mark'));
var sub3 = Number(prompt('Please enter third subject mark'));
var sub4 = Number(prompt('Please enter fourth subject mark'));
var sub5 = Number(prompt('Please enter fifth subject mark'));

var total = sub1 + sub2 + sub3 + sub4 + sub5;

if(total <= 500 && total >= 0){
    var average = total /5;
    var percentage = total *100/500;
    var output = 'Total Marks = ' + total + '\nAverage Marks = ' + average + '\nPercentage = ' + percentage + '%';

    window.alert(output);
}

else{
    window.alert('Invalid marks');
}
break;


//-----------------------------------------------------------------------------------------------//


case 13:

window.alert('13-Write a program to input month number and print number of days in that month.');

var month = Number(prompt('Please enter a number representing a month'));
var x = 30;
var y = 31;
var z = 28;


if(month == 1 || month == 3 || month == 5 || month == 7 || month == 8 || month == 10 || month == 12){
    window.alert('Days in month = ' + y);
}

else if(month == 4 || month == 6 || month == 9 || month == 11){
    window.alert('Days in month = ' + x);
}

else if(month == 2){
    window.alert('Days in month = ' + z);
}
break;


//-----------------------------------------------------------------------------------------------//


case 14:

window.alert('14-Write a program to input marks of five subjects Physics, Chemistry, Biology, Mathematics and Computer , Find percentage and grade');

var physics = Number(prompt('Please enter physics mark'));
var chemistry = Number(prompt('Please enter chemistry mark'));
var biology = Number(prompt('Please enter biology mark'));
var mathematics = Number(prompt('Please enter mathematics mark'));
var computer = Number(prompt('Please enter computer mark'));


var output = (physics + chemistry + biology + mathematics + computer)*100/500;

if(output >= 90){
    window.alert('Percentage: ' + output + '%, Grade A');
}

else if(output >= 80 && output < 90){
    window.alert('Percentage: ' + output + '%, Grade B');
}

else if(output >= 70 && output < 80){
    window.alert('Percentage: ' + output + '%, Grade C');
}

else if(output >= 60 && output < 70){
    window.alert('Percentage: ' + output + '%, Grade D');
}

else if(output >= 40 && output < 60){
    window.alert('Percentage: ' + output + '%, Grade E');
}

else if(output >= 0 && output < 40){
    window.alert('Percentage: ' + output + '%, Grade F');
}

else if(output > 100 || output <0){
    window.alert('Invalid marks');
}
break;


//-----------------------------------------------------------------------------------------------//


case 15:

window.alert('15- Write a program to create Simple Calculator Using switch case');

var x = Number(prompt('Please enter a number'));
var mathSign = prompt('Please choose a mathematical sign');
var y = Number(prompt('Please enter a second number'));

switch(mathSign){
    case '+':
    result = x + y;
    break;

    case '-':
    result = x - y;
    break;

    case '*':
    result = x * y;
    break;

    case '/':
    result = x / y;
}

window.alert(result);

}