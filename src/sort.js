import { downAdjust } from './MQ.js'
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

function quickSort(arr = [], start, end) {
   if(start >= end) {
         return
   }
    // 分治求出中间基准位置的左边(其中基准坐标左边所有的元素比基准元素小 基本右边所有的元素比基准元素大)
   let pivotIndex = singlePartition(arr, start, end)
   quickSort(arr, start, pivotIndex - 1)
   quickSort(arr, pivotIndex+1, end)      
}

function partition(arr, start, end) {
      // 先找一个基本元素
      const pivot = arr[start]
      let left = start
      let right = end
      while (left != right) {
         // 从右往左循环
         while(left < right && arr[right] > pivot) {
               right--
         }
         // 从左往右循环
         while(left < right && arr[left] <= pivot) {
               left++
         }
         // 交换left和right指针所指向的元素
         if(left < right) {
               const temp = arr[right]
               arr[right] = arr[left]
               arr[left] = temp
         }

      }
      
      // 交换基准元素和指针重合点
      arr[start] =  arr[left]
      arr[left] = pivot

      return left
}

// 快速排序单边循环
// 每次循环把小的放在左边
function singlePartition(arr, start, end) {
      const pivot = arr[start] // 取第一个作为基准
      let mark = start
      for(let i = start+1; i <= end; i++) {
            if(arr[i] < pivot) {
                  mark++
                  const temp = arr[i]
                  arr[i] = arr[mark]
                  arr[mark] = temp
            }
      }

      arr[start] = arr[mark]
      arr[mark] = pivot
      return mark
}

function heapSort(arr = []) {
      //1. 把无序数组构建成最大堆
      for(let i = 0; i < (arr.length - 2) / 2; i++) {
            downAdjust(arr,i, arr.length)
      }
      console.log('堆', arr)
      // 2. 循环删除堆顶元素 移到集合尾部,调整堆产生新的堆顶
      for(let i = arr.length - 1; i > 0;i--) {
            const temp = arr[i]
            arr[i] = arr[0]
            arr[0] = temp
            // 下沉调整最大堆
            downAdjust(arr,0,i)
      }
}

function countSort(arr = []) {
      let min  =  arr[0]
      let max = arr[0]
      for(let i  = 1; i < arr.length; i++) {
         if(arr[i] < min) {
               min = arr[i]
         }
         if(arr[i] > max) {
               max = arr[i]
         }
      }
      const d = max - min
      // 创建统计数组并统计对应元素的个数
      let countArr = new Array(d+1)
      countArr.fill(0)
      for(let i = 0; i < countArr.length;i++) {
            countArr[arr[i]-min]++  
      }

      console.log('countArr', countArr)

      // 统计数组并变形 后面的元素等于前面的元素的之和
      for(let i = 1; i < countArr.length; i++) {
          countArr[i] += countArr[i-1]
      }

      // 倒序遍历原始数列 从统计数组找到正确位置 输出到结果数组
      let sortArr = []
      for(let i = arr.length - 1; i >= 0; i--) {
           sortArr[countArr[arr[i] - min] - 1] = arr[i]
           countArr[arr[i] - min]--
      }
      return sortArr
}

function bucketSort(arr = []) {
      // 1.得到数列的最大值和最小值 并计算差值d
      let min = arr[0]
      let max = arr[0]
      for(let i = 1; i < arr.length; i++) {
            if(arr[i] < min) {
                  min = arr[i]
            }
            if(arr[i] > max) {
                  max = arr[i]
            }
      }
      const d = max - min
      // 2.初始化桶
      const bucketNum = arr.length
      let bucketList = []
      // 3.遍历原始数组 
      for(let i = 0; i < arr.length; i++) {
          const num = parseInt((arr[i] - min) * (bucketNum - 1) / d)
          if (typeof bucketList[num] === 'undefined') {
            bucketList[num] = []
          }
          bucketList[num].push(arr[i])
      }
      // 4.对每个桶内部进行排序
      for (let i = 0; i < bucketList.length; i++) {
            bucketList[i] && bucketList[i].sort()
      }

      // 5.输出全部元素
      let sortedArr = []
      let index = 0
      for (const list of bucketList) {
            if(!list) {
                  continue
            }
            for (const item of list) {
                  sortedArr[index] = item
                  index++
            }
      }
      return sortedArr
}

let a = [2,3,0,4,1,5,6,7,9,8]
// cockTailSort(a)
// heapSort(a,0,a.length - 1)
// console.log(a)
// console.log('计数排序', countSort(a))
console.log('桶排序', bucketSort(a))