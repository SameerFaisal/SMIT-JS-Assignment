//Q1
console.log("OUTPUT FOR QUESTION # 01");
function reverseNumber(num){
    console.log("Entered Number : "+num);
    var rev = 0;
var lastDigit;
while(num != 0){
	lastDigit = num % 10;
  rev = rev * 10 + lastDigit;
  num = Math.floor(num/10);
}

console.log("Reversed number : "+rev);
}
reverseNumber(12345);

//Q2
console.log("\n\nOUTPUT FOR QUESTION # 02");
function isPalindrome(stringValue){
    var len=stringValue.length;
    for(var i=0;i<len/2;i++){
        if(stringValue[i]==stringValue[len-1-i]){
            console.log("True");
                }
       
    }
}

isPalindrome("racecar");

//Q3
console.log("\n\nOUTPUT FOR QUESTION # 03");

function allCombinations(str){
   console.log("Entered String : "+str);
   
    var combinations = [];
      for(var i = 0 ;i < str.length; i++)
    {
        for(var j = i + 1; j< str.length + 1; j++)
        {
            combinations.push(str.slice(i , j));
        }
    }
   console.log("All Possible Combinations : "+combinations);
}
allCombinations("sam");

//Q4
console.log("\n\nOUTPUT FOR QUESTION # 04");

    function alphabeticalOrder(str1) {
        console.log("Entered String : "+str1);
        var arr = str1.split(""); 
        res = arr.sort().join(""); 
        console.log("Arranged String : "+res);
      }
alphabeticalOrder("sameer");

//Q5
console.log("\n\nOUTPUT FOR QUESTION # 05");

function uppercase(str2)
{
    console.log("Entered String : "+str2);
  var array1 = str2.split(' ');
  var newarray1 = [];
    
  for(var x = 0; x < array1.length; x++){
      newarray1.push(array1[x].charAt(0).toUpperCase()+array1[x].slice(1));
  }
  console.log(newarray1.join(' '));
}
uppercase("i love my country");

//Q6
console.log("\n\nOUTPUT FOR QUESTION # 06");

function find_longest_word(str3)
{
    console.log("Entered String : "+str3);
  var array1 = str3.match(/\w[a-z]{0,}/gi);
  var result = array1[0];

  for(var x = 1 ; x < array1.length ; x++)
  {
    if(result.length < array1[x].length)
    {
    result = array1[x];
    } 
  }
  console.log("Longest Word is : "+result);
}
find_longest_word("My name is Sameer");

//Q7
console.log("\n\nOUTPUT FOR QUESTION # 07");

function countVowels(str5)
{
    console.log("Entered String is : "+str5)
  var vowel_list = 'aeiouAEIOU';
  var count = 0;
  
  for(var x = 0; x < str5.length ; x++)
  {
    if (vowel_list.indexOf(str5[x]) !== -1)
    {
      count += 1;
    }
  
  }
 console.log("Number of vowels in entered string is : "+count);
}

countVowels("sameer");

//Q8
console.log("\n\nOUTPUT FOR QUESTION # 08");

function checkPrime(number1){
    console.log("Entered Number : "+number1);

    let isPrime = true;

if (number1 === 1) {
    console.log("1 is neither prime nor composite number.");
}

else if (number1 > 1) {

    for (let i = 2; i < number1; i++) {
        if (number1 % i == 0) {
            isPrime = false;
            break;
        }
    }

    if (isPrime) {
        console.log("Number is a prime number");
    } else {
        console.log("Number is a not prime number");
    }
}

else {
    console.log("The number is not a prime number.");
}}

checkPrime(37);

//Q9
console.log("\n\nOUTPUT FOR QUESTION # 09");

function checkType(any){
    console.log("Entered Value : "+any);
console.log("Type of entered value is : "+typeof(any));
}
checkType(true);

//Q10
console.log("\n\nOUTPUT FOR QUESTION # 10");

function Second_Greatest_Lowest(arr_num)
{
    console.log("Entered Array is : "+arr_num);
  arr_num.sort(function(x,y)
           {
           return x-y;
           });
  var uniqa = [arr_num[0]];
  var result = [];
  
  for(var j=1; j < arr_num.length; j++)
  {
    if(arr_num[j-1] !== arr_num[j])
    {
      uniqa.push(arr_num[j]);
    }
  }
    result.push(uniqa[1],uniqa[uniqa.length-2]);
  console.log( "Second lowest and Second greatest is : "+result.join(',')+" respectively");
  }

  Second_Greatest_Lowest([1,2,3,4,5]);
