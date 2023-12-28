//Map

let arr = [1, 2, 3, 4, 5];
let ans = arr.map((i) => { //arr.map(function/tranformation to be performed on each element)
  return 2 * i;
});
console.log(ans);

//demo implementation of map
function myMap(arr,cb){
    // arr.forEach(element => {
    //     cb(element);
    // });
    let arr2=[]
    for(let i=0;i<arr.length;i++){
        arr2.push(cb(arr[i]));
    }
    return arr2;
}

let ans2=myMap(arr,(i)=>{
    return i*2;
})

console.log(ans2)


//filtering
//extract even no from the array
const ans3=arr.filter((i)=>{
    if(i%2==0){
        return true;
    }else{
        return false;
    }
})

console.log(ans3)