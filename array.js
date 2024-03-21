let arr1=[3,7,34,90,12];
let lastElement=arr1[arr1.length-1];
console.log({lastElement});


let arr2=[true,"green","where",12,56];
let lastValue=arr2[arr2.length-1];
console.log({lastValue});

let stringmyPets=["cow","Bird","snake","Dog"];
console.log(stringmyPets.toString());

let arr3=[-5,9,5,3,2,-3,6,8,4,1];
arr3.sort((num1,num2)=>num1-num2);
console.log('ascending',arr3);

arr3.sort((num1,num2)=>num1-num2);
console.log('descending',arr3);


let arr=["apple","mango","apple","orange","mango","mango"];
function removeDuplicates (arr) {
    return arr.filter((items, index) => arr.indexOf(items) ===index);
}
console.log(removeDuplicates(arr));
let duplicates = arr.filter((items, index) => arr.indexOf(items) !== index);
console.log({duplicates});

let arr5=["the","way","x",4];
let string="way"
if (arr5.indexOf(arr5) !==1) {
    console.log({string});

}
else{
    console.log(`${string} the search word was not found`);
}



let word="sevink";
let sortword=(string)=>{
    return string.split("").sort().join("")
}
console.log(sortword("sevink"));




