// var y = 6;
// let x = 5;
// const z = 8;

 
// console.log(x * y);

//  mynumb.toFixed(2)) ამრგვალებს რიცხვებს
//  Number('1') გადაყავს სტრინგი ნამბერში
//  Math.round(mynumb) ამრგვალებს უახლოეს მთელ რიცხვამდე
//  Math.ceil(mynumb) ამრგვალებს უდიდეს მთელ რიცხვამდე
//  Math.floor(mynumb) ამრგვალებს უმცირეს მთელ რიცხვამდე

 let mynumb = 25.99;
 let price = 25;
 let sumcost = mynumb * price;

 let match =  Math.round(Math.random() * 20);
 
 let global = 'globalvirable';
 
 function rand(x, y = 2, ...param) {
console.log(param);
    // ლოკალურლი ცვლადი
    let local = 'localvirable';

    return  x * y;
 
 }

 
//  console.log(global);

//  console.log( rand(5));
 console.log( rand(50, 4, 'asda', 23, true,));
//  console.log( rand(65, 44, 'asda', 23, true,));
 
 
function stringpipe(...data){
    if (data[2] == 'upper') {
        return data[0].slice(0, data[1]).toUpperCase();
    }
    return data[0].slice(0, data[1]).toLowerCase();
}

let transstring  =  stringpipe('მე ვარ დამწყები Front-End დეველოპერი', 25, 'upper');

console.log(transstring);


let sumcosts = function(x = 2){
   console.log(x);
}

sumcosts();

// arrow function

let arr = params  =>  params;
   
 


console.log(arr('s'))

function rgb(){
    let color1 = Math.ceil(Math.random() * 800);
    let color2 = Math.ceil(Math.random() * 800);
    let color3 = Math.ceil(Math.random() * 800);

    let bgcolor =  `rgb(${color1}, ${color2}, ${color3})`;

    return bgcolor;
}

 setInterval(() => {
    
 document.body.style.backgroundColor = rgb();
 }, 1300);

 let vir1 = true;

 function changevir(){
    vir1 = false;
 }

 changevir();

 console.log(vir1);


 let Users = [
    'Admin',
    'Basic User',
    'Bayer',
    'Saller'
 ];

//  for (let i = 0; i < Users.length; i++) {
//     const element = Users[i];
//     console.log(element);
//  }

//  for(x of Users){
//      console.log(x);
//  }

//  for (const key in Users) {
//       console.log(Users[key]);
//  }

//  let x = 0;

//  while(x < 10){
//     console.log(x);
//     x++;
//  }

 let y = 0;

 do {
    console.log(y);
    y++;
 } while (y < 10);

 let Myobject = {
    prod_name:'გათბობების ქვაბი არისტონი',
    price:4500,
    calcprice:function(){
        return this.price;
    },
    Ram:[
        {rams:120, price:5500},
        {rams:60, price:3500},
        {rams:64, price:4500}

    ],
    color:[
        "red",
        "blue",
        "dark",
        "green"
    ],
   get orders(){
      return this.price;
    },
    set setweight(test){
         this.weight.push(test);
    },
    stock:true,
    rest:25,
    weight:[]
 }

 Object.freeze(Myobject); // ობიექტის გაყინვა
 let checks = Object.isFrozen(Myobject); // ამოწმებს გაყინულია თუ არა ობიექტი

 Myobject.price = 4350; // თვისების შეცვლა
 delete  Myobject.rest; // თვისების წაშლა
 Myobject.discount = 4250; // თვისების დამატება

 let objkey = Object.keys(Myobject); // ობიექტის ყველა ქი
 let objval = Object.values(Myobject); // ობიექტის ყველა მნიშვნელობა
 let objkeyval = Object.entries(Myobject); // ობიექტის ყველა მნიშვნელობა

 for (const x of objkeyval) {
    console.log(x[0], x[1]);
 }

 Myobject.setweight =  '52kg'; 
 Myobject.setweight =  '80kg'; 
 

 console.log(Myobject.Ram[0].price, Myobject.Ram[0].rams);


 // + მიმატება
 // - გამოკლება
 // / გაყოფა
 // * გამრავლება
//  +=   არსებლს დამატება
//  j++ ელემენტის 1 გაზრდა
//  j--  ელემენტის 1 შემცირება

// > მეტობა
// < ნაკლებია
// >= მეტია ან ტოლია
// <= ნაკლებია ან ტოლია
// == იდენტურია  (ადარებს მხოლოდ მნიშვნელობას)
// === იდენტურია (ადარებს მნიშვნელობას და ტიპს)
// ! არ ოპერატორი (შებრუნება)

// && და ოპერატორი
// || ან ოპერატორი

 console.log(5  <  4 ||  10 < 10 || 5 == 5);

 if(5 === '5'){
    console.log('if');
 }else if(5  >  4 ){
    console.log('else if');
 }else{
    console.log('else');
 }
 