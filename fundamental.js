// 1. variable in js 

// old way : 
var age = 10 ;

// es6 

// use let the value will be change 
let language  = 'zubair';
let roll  = 30 ;

// use const the value will be not change 

const name = 'zubi';
const gender = 'male';


// 2. condition 

//  > , < , !== , === , <= , >= 
// && , || 

let a = 20 ;
let b = 30 ;
let c = 90 ;

if (  a > b   ) {
    console.log('ok');
}else if( b > c){
    console.log('ok');
} else {
    console.log('there is any error')
}

// 3. array 

const numbers  = [340 , 999, 979, 888, ];
// index 
// length 
// push 
numbers[0] = 4444;

// for loop & while loop 
for(let i = 0 ; i < numbers.length ; i++){
   console.log(numbers[i]);
}

// function 
 
function add(num_one , num_two){
    return num_one + num_two;
}

const total_number = add(20 , 40);
console.log(total_number); 
 

 // object 

 const jon = {
    name:'zubair',
    age:40,
    school:'bangladesh bank high school'
 }
 const school = 'school'; 
 console.log(jon.name);
 console.log(jon['age']);  
 console.log(jon[school]);   

//  template string 

const about = `there is some thing we name of school ${jon.school}, give me the roll number of her ${numbers[3]}`;
console.log(about);

// arrow function 

const addArrow = () => 20 + 22 ;
const addOne = num => num + 40;
const even = x => x % 2 == 0 ; 
const three = (a,b,c) => a+b+c;  


const addNumber = (num , num2) => {
    const sum =  num + num2 ;
    return sum ; // have to return if there 3rd brack et .. 
}

// spread 

const newNumber = [...numbers , 100];
const copyNumber = [...numbers];
console.log(newNumber);
console.log(copyNumber); 

// array method

const product = [ 
    {name:"zubi" , price:'1200' , brand:'apple' , color:'bed'},
    {name:"zubio" , price:'1200' , brand:'apple' , color:'bed'},
    {name:"khan" , price:'1400' , brand:'levo' , color:'yellow'},
    {name:"node" , price:'1111' , brand:'samsung' , color:'red'}
]

const colorData = product.map( data => data.color);
const colorPrice = product.map( data => data.price);
console.log(colorData);
console.log(colorPrice);

const findPrice = product.filter(product => product.price < 1200);
console.log(findPrice);
const filterPrice = product.find(product => product.price = 1200);
console.log(filterPrice);

//  Destructuring
const numberOnly =[30,60]
const [x,y] = numberOnly;
const {ppo , color} = {ppo:"node" , price:'1111' , brand:'samsung' , color:'red'};


// json 
const student = {
    name:'zubair',
    age:40,
    school:'bangladesh bank high school'
}
const studentJson = JSON.stringify(student);
console.log(studentJson);
const studentParse = JSON.parse(studentJson);
console.log(studentParse);

// fetch 
fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(response => response.json())
  .then(json => console.log(json))
  .catch(error => console.error('Error:', error));  

// async await
async function fetchData() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error('Error:', error);
    }
}
fetchData();

// key and value
const keys = Object.keys(jon);
const values = Object.values(jon);
console.log(keys);
console.log(values);


// for in loop

for (const key in jon) {
    if (jon.hasOwnProperty(key)) {
        console.log(`${key}: ${jon[key]}`);
    }
}

// for of loop

for (const num of numbers) {
    console.log(num);
}

// ternary operator
const isEven = (num) => num % 2 === 0 ? 'Even' : 'Odd';
console.log(isEven(10));
console.log(isEven(7));

// true && false => false
// true || false => true
// !true => false

// nullish coalescing operator
const userInput = null;
const defaultValue = 'Default Value';
const result = userInput ?? defaultValue;
console.log(result); // Output: 'Default Value'

// optional chaining
const user = {
    name: 'Zubair',
    address: {
        city: 'Dhaka',
        country: 'Bangladesh'
    }
};
console.log(user?.address?.city);   

// truthy and falsy values
const value1 = 0; // falsy
const value2 = '';
const value3 = null;
const value4 = undefined;
const value5 = false;
const value6 = 1; // truthy
const value7 = 'Hello';
const value8 = [];
const value9 = {};  
console.log(Boolean(value1)); // false
console.log(Boolean(value2));
console.log(Boolean(value3));
console.log(Boolean(value4));
console.log(Boolean(value5));
console.log(Boolean(value6));
console.log(Boolean(value7));
console.log(Boolean(value8));
console.log(Boolean(value9));

// number to string
const num = 123;
const str = num.toString();
console.log(str); // Output: '123'
// string to number
const strNum = '456';
const numFromStr = parseInt(strNum);
console.log(numFromStr); // Output: 456

// local storage
localStorage.setItem('name', 'Zubair');
const nameFromStorage = localStorage.getItem('name');
console.log(nameFromStorage);
// create a object and store in local storage
const userInfo = {
    name: 'Zubair', 
    age: 40,
    city: 'Dhaka'
};  
localStorage.setItem('userInfo', JSON.stringify(userInfo));
const userInfoFromStorage = JSON.parse(localStorage.getItem('userInfo'));
console.log(userInfoFromStorage);

// create a array and store in local storage
const numbers = [1, 2, 3, 4, 5];
localStorage.setItem('numbers', JSON.stringify(numbers));
const numbersFromStorage = JSON.parse(localStorage.getItem('numbers'));
console.log(numbersFromStorage);

// session storage
sessionStorage.setItem('age', '40');
const ageFromSession = sessionStorage.getItem('age');
console.log(ageFromSession);    

// cookies
document.cookie = "username=Zubair; expires=Fri, 31 Dec 2024 23:59:59 GMT; path=/";
const cookies = document.cookie;
console.log(cookies);

// toggle class
const element = document.querySelector('.my-element');
element.classList.toggle('active'); 


// event listener 
const button = document.querySelector('button');
button.addEventListener('click', () => {
    console.log('Button clicked!');
});

// dot vs bracket notation
const person = {
    name: 'Zubair',
    age: 40
};
console.log(person.name);   
console.log(person['age']); 

