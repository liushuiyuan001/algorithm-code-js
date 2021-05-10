function bubbleSort(arr = []) {
   // 记录最后一次交换的位置
   let lastExchangeIndex = 0;
   // 无序列的边界 每次比较只需要比到这里为止
   let sortBorder = arr.length - 1
   for (let i = 0; i < arr.length - 1;i++){
         let flag = false;
         for (let j = 0; j < sortBorder;j++) {
              if(arr[j] > arr[j + 1] ) {
                  let temp = arr[j + 1]
                  arr[j+1] = arr[j]
                  arr[j] = temp
                  flag = true;
                  // 更新为最后一次交换元素的位置
                  lastExchangeIndex = j
              } 
         }
         sortBorder = lastExchangeIndex
         if(!flag) {
               break
         }
   }
}

let a = [2,3,0,4,1,5,6,7,9,8]
bubbleSort(a)
console.log(a)