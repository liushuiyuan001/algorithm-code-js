function bubbleSort(arr = []) {
   for (let i = 0; i < arr.length;i++){
         let flag = false;
         for (let j = 0; j < arr.length - 1;j++) {
              if(arr[j] > arr[j + 1] ) {
                  let temp = arr[j + 1]
                  arr[j+1] = arr[j]
                  arr[j] = temp
                  flag = true;
              } 
         }
         if(!flag) {
               break
         }
         flag = false;
         for (let j = arr.length - 1; j > 0;j--) {
            if(arr[j-1] > arr[j] ) {
                let temp = arr[j - 1]
                arr[j-1] = arr[j]
                arr[j] = temp
                flag = true;
            } 
       }
       if(!flag) {
            break
      }
   }
}

let a = [2,3,0,4,1,5,6,7,9,8]
bubbleSort(a)
console.log(a)