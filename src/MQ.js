/**
 * 上浮日调整
 *
 * @param {*} [arr=[]]
 */
export function upAdjust(arr = []) {
   const childIdx = arr.length - 1;
   const parentIdx = parseInt((childIdx - 1) / 2);
   //temp 报存插入的叶子节点值 用于最后的赋值
   const temp = arr[childIdx]
   while (childIdx > 0 && temp  < arr[parentIdx]) {
         // 无须真正交换 单向赋值即可
         arr[childIdx] = arr[parentIdx]
         childIdx = parentIdx
         parentIdx =  parseInt((parentIdx - 1) /  2)
   }
   arr[childIdx] = temp
}

/**
 * 下沉调整
 * @param {待调整的堆} arr 
 * @param {要下沉的父节点} parentIdx 
 * @param {堆的有效大小} len 
 */
export function downAdjust(arr = [], parentIdx, len) {
    // temp报存父节点值 用于最后的赋值
    const temp = arr[parentIdx]
    let childIdx = 2*parentIdx + 1
    while(childIdx < len) {
      //如果有右孩子 且右孩子小于左孩子的值 则定位到右孩子
      if(childIdx + 1 < len && arr[childIdx + 1] < arr[childIdx]) {
            childIdx++
      }
      // 如果父节点小于孩子节点的值则直接跳出
      if(temp <= arr[childIdx]) {
            break
      }
      arr[parentIdx] = arr[childIdx]
      parentIdx = childIdx
      childIdx = 2*parentIdx + 1
    }
    arr[parentIdx] = temp
} 