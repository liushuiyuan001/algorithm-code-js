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

//鸡尾酒排序 
// n/2趟遍历 每次先从左到右两两对比 然后从右向左两两对比
function cockTailSort(arr = []) {
    for(let i = 0; i < arr.length / 2;i++) {
          let flag = false
          // 从左往右比较和交换
          for(let j = i; j < arr.length-i-1;j++) {
                if(arr[j] > arr[j+1]) {
                      const temp = arr[j+1]
                      arr[j+1] = arr[j]
                      arr[j] = temp
                      flag = true
                }
                
          }
          if(!flag) {
            break
          }
          flag = false
          // 从右向左比较和交换
          for(let j = arr.length - i - 1; j > i; j--) {
              if(arr[j-1] > arr[j]) {
                  const temp = arr[j]
                  arr[j] = arr[j-1]
                  arr[j-1] = temp 
              }
          }
          if(!flag) {
            break
          }
    }
}

let a = [2,3,0,4,1,5,6,7,9,8]
cockTailSort(a)
console.log(a)