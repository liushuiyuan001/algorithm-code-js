// 冒泡排序----每次两两比较并交换-将最大或者最小的元素放在最上面
function bubbleSort(arr){
  for(let i = 0; i < arr.length; i++){
      let flag = false // flag: already sorted
      for(let j = 0; j < arr.length - i - 1; j++){
          if(arr[j + 1] < arr[j]){
            let temp = arr[j]
            arr[j] = arr[j+1]
            arr[j+1] = temp 

            flag = true
          }
      }
      if(!flag){
          break
      }
  }  
}

// 插入排序-每次将每个元素依次和前一个元素两两比较 交换顺序 
// --每次都加当前元素插入对的位置
function insertSort(arr){
   for(let i = 0; i < arr.length; i++){
     for(let j = i; j >= 0 && arr[j] < arr[j - 1]; j--){
         let temp = arr[j - 1]
         arr[j - 1] = arr[j]
         arr[j] = temp
     }
   }
}
// 归并排序
// 先分治递归然后合并--数组左边先递归排序 
// 然后右边递归排序 然后将左右两个有序数组合并成一个数组就行了
// 难点再有分治递归思想和merge算法
function mergeSort(arr = [],lo,hi){
    if(hi <= lo){
        return
    }
    const mid = lo + Math.floor((lo + hi)/2)
    mergeSort(arr,lo,mid)
    mergeSort(arr,mid+1,hi)
    merge(arr, lo, mid,hi)
}

// 将两个有序数组（根据下标的逻辑上的有序）合并到一个到一个数组中
let newArr = [...arr]
function merge(arr = [], lo, mid, hi){
    let i = lo, j = mid + 1
    for(let k = lo; k <= hi; k++){
        if(i > mid || newArr[i] > newArr[j]){
           arr[k] = newArr[j++]
        }
        if(j > hi || newArr[i] < newArr[j]){
           arr[k] = newArr[i++]
        }
    }
}

function mergeBU(arr = []){
   const len = arr.length
   for(let i = 1; i < len; i = 2 * i){
       for(let j = 0; j < len - i; j += 2*i){
           merge(arr, j, j+i-1,Math.min(j + 2*i - 1, len -1))
       }
   }
}

// 插入排序
// 利用分治加递归 最主要的是将数组一分为二，左边的小于某个数，右边的大于某个数
// 然后分别递归左边的数组和右边的数组
function quickSort(arr = [],left,right){
    if(left >= right) return
    const mid = partition(arr,left,right)
    quickSort(arr, left, mid - 1)
    quickSort(arr, mid + 1, right)
}

function partition(arr = [],left, right){
    let i = left, j = right + 1
    // j 默认+1 是因为兼容第一次  下面的 --j 每次先减再取值
    // i 第一次 ++i 是因为flag在左边 第一次要跳过flag
    const flag = arr[left] // 选取最左边的元素为比较元素
    while(true){
        while(arr[--j] > flag){
            if(j === left){
                break
            }
        }
        while(arr[++i] < flag){
            if(i === right){
                break
            }
        }
        if(i >= j){
            break
        }
        const temp = arr[j]
        arr[j] = arr[i]
        arr[i] = temp
    }
    const temp = arr[j]
    arr[j] = arr[left]
    arr[left] = temp
    return j
}

/**
 * @param {ListNode} head
 * @return {number[]}
 */
// 剑指 Offer 06. 从尾到头打印链表
var reversePrint = function(head) {
      let res = []
      let curr = head
      while(curr) {
          res.push(curr.val)
          curr = curr.next
      }
  
      return res.reverse()
  };

  /**
 * @param {ListNode} head
 * @return {ListNode}
 */
// 剑指 Offer 24. 反转链表
var reverseList = function(head) {
      let curr = head
      let pre = null
      let reverseNode = null
      while(curr) {
         const next = curr.next
         if(!next) {
             reverseNode = curr
         }
         curr.next = pre
  
         pre = curr
         curr = next
      }
      return reverseNode
  };

  /**
 * @param {Node} head
 * @return {Node}
 */
// 剑指 Offer 35. 复杂链表的复制
var copyRandomList = function(head) {
      if(!head) return null;
      let m = new Map();
      let node = head;
      while(node) {
          m.set(node,new Node(node.val));
          node = node.next;
      }
      node = head;
      while(node) {
          m.get(node).next = node.next ? m.get(node.next) : null;
          m.get(node).random = node.random ? m.get(node.random) : null;
          node = node.next;
      }
      return m.get(head)
  };