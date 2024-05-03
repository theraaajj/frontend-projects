const clock = document.getElementById('clock')
// const clock = document.querySelector('#clock')

// ab ye time toh dega jitni baar refresh karor, magar khud se kaise update hoga bhai?
// aisa method ho jisko control hmlog kar paaye har interval pe..
// toh yaha ek chota sa method use karenge SetInterval()

setInterval(function(){
    
let date = new Date()
// console.log(date.toLocaleTimeString());
clock.innerHTML = date.toLocaleTimeString();

}, 1000)      // 1000 mtlb 1000milliseconds jo ki hota hai 1 sec, mtlb har 1s pe change karo time

// but abtk toh console me hi chal rhi hai na! ab kya karein?
// document me chalate HTMLHeadingElement. let's go!

d