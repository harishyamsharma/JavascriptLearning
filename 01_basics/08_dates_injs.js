// Date


let myDate = new Date()
// console.log(myDate);    //2024-01-19T15:32:27.557Z 
// console.log(myDate.toString());   //Fri Jan 19 2024 21:02:27 GMT+0530 (India Standard Time)
// console.log(myDate.toDateString()); // Fri Jan 19 2024
// console.log(myDate.toLocaleString()); //  1/19/2024, 9:02:27 PM
// console.log(myDate.toLocaleDateString());  // 1/19/2024
// console.log(typeof myDate); //object



// let myCreateOne = new Date (2023, 0, 23)
// console.log(myCreateOne);
// console.log(myCreateOne.toLocaleString());

// let myCreateOne = new Date ("2023-01-14")
// let myCreateOne = new Date ("01-14- 2023")

// console.log(myCreateOne.toLocaleString());

let myTimeStamp = Date.now()
// console.log(myTimeStamp);
// console.log(myCreateDate.getTime());
console.log(Math.floor(Date.now()/1000));


 let newDate = new Date()
 console.log(newDate);
 console.log(newDate.getMonth() +1 );
 console.log(newDate.getDay());

 // '${newDate.getDay()} and the time

 newDate.toLocaleString('default',{
    weekday:  "long",
 })






