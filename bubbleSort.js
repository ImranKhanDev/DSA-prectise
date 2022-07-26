// function bubble(arr){
// for(let i=0;i<arr.length;i++){
//     for(let j=0;j<arr.length-1;j++){

//         if(arr[j]>arr[j+1]) {
//             let temp=arr[j];
//             arr[j]=arr[j+1];
//             arr[j+1]=temp;
//         }

//     }
// }
// return arr;
// }
// console.log(bubble([3,4,2,9,-3]))

function bubble(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - 1; j++) {
      console.log("to see the itearation",arr,arr[i],arr[j+1]);
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}

console.log(bubble([4,2,12,-1]));