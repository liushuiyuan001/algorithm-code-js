// 3 树
function TreeNode() {
    this.data = null;
    this.leftChild = null;
    this.rightChild = null;
}
function createBinaryTree(inputList = []) {
    let node = new TreeNode()
    if(inputList.length === 0) {
       return null
    }
    const data  = inputList.shift()
    if(data) {
        node.data = data
        node.leftChild = createBinaryTree(inputList)
        node.rightChild = createBinaryTree(inputList)
    }
    return node  
}

function createBinaryTreeV2(inputList = [], i) {
    let node = new TreeNode()
    node.data = inputList[i]
    if (2*i + 1 < inputList.length) {
        node.leftChild = createBinaryTreeV2(inputList, 2*i + 1)   
    }
    if (2*i + 2 < inputList.length) {
        node.rightChild = createBinaryTreeV2(inputList, 2*i + 2)   
    }
    return node
}
// 前序遍历
function preOrderTraversal(node) {
    if(!node) {
        return
    }
    console.log(node.data)
    preOrderTraversal(node.leftChild)
    preOrderTraversal(node.rightChild)
}

// 中序遍历
function midOrderTraversal(node) {
    if(!node) {
        return
    }
    midOrderTraversal(node.leftChild)
    console.log(node.data)
    midOrderTraversal(node.rightChild)    
}

// 后序遍历
function postOrderTraversal(node) {
    if(!node) {
        return
    }
    postOrderTraversal(node.leftChild)
    postOrderTraversal(node.rightChild)
    console.log(node.data)
}

// 非递归的二叉树前序遍历
function preOrderTraversalWithStack(root) {
    let stack = []
    let node = root
    while(stack.length > 0 || node) {
        // 访问左孩子
        while(node) {
            console.log(node.data)
            stack.push(node)
            node = node.leftChild
        }
        // 遍历到叶子节点 或者 没有左孩子的的节点, 出栈,访问右孩子节点
        if (stack.length > 0) {
            node = stack.pop()
            node = node.rightChild
        }
    }
}
// 二叉树的层序遍历
function levelOrderTraversal(root) {
    let stack = [root]
    while(stack.length > 0) {
        const node = stack.shift()
        console.log(node.data)
        if(node.leftChild) {
            stack.push(node.leftChild)
        }
        if(node.rightChild) {
            stack.push(node.rightChild)
        }
    }
}
// 构建二叉树
// const treeNode = createBinaryTree([3,2,9,null,null,10,null,null,8,null,4])
const treeNode = createBinaryTreeV2([3,2,8,9,10,null,4,null,null,null,null], 0)
console.log('构建二叉树', treeNode)
console.log('二叉树的前序遍历')
preOrderTraversal(treeNode)
console.log('二叉树的中序遍历')
midOrderTraversal(treeNode)
console.log('二叉树的后序遍历')
postOrderTraversal(treeNode)
console.log('二叉树非递归的前序遍历')
preOrderTraversalWithStack(treeNode);
console.log('二叉树的层序遍历')
levelOrderTraversal(treeNode)

// 堆: 上浮
function upAdjust(array) {
    let childIdx = array.length - 1
    let parentIdx = Math.floor((childIdx - 1) / 2) 
    // temp 报存插入的叶子节点值 用于最后的赋值
    let temp = array[childIdx]
    while (childIdx > 0 && temp < array[parentIdx]) {
        array[childIdx] = array[parentIdx]
        childIdx = parentIdx
        parentIdx = Math.floor((parentIdx - 1)/2)
    }
    array[childIdx] = temp
}

// 堆: 下沉
function downAdjust(array, parentIdx, length) {
    // temp 保存父节点的值 用于最后的赋值
    let temp = array[parentIdx]
    let childIdx = 2 * parentIdx + 1
    while(childIdx < length) {
        if (childIdx + 1 <  length && array[childIdx + 1] < array[childIdx]) {
            childIdx++
        }
        // 如果父节点小于任何一个孩子的值 则直接跳出
        if (temp <= array[childIdx]) {
            break
        }
        // 无须真正交换,单向赋值即可
        array[parentIdx] = array[childIdx]
        parentIdx = childIdx
        childIdx = 2 * childIdx + 1
    }
    array[parentIdx] = temp
}

function buildHeap(array = []) {
    // 从最后一个非叶子节点开始,依次做 下沉 调整
    for(let i = Math.floor((array.length - 2)/2); i >= 0; i--){
        downAdjust(array,i, array.length)       
    }
}

// 优先队列入队
function enQueue(array, value) {
    array.push(value)
    upAdjust(array)
}

// 优先队列出队列
function deQueue(array) {
   const head =  array[0]
   array[0] = array[array.length - 1]
   array.pop()
   downAdjust(array,0,array.length - 1)
   return head
}

let heapArr = [1,3,2,6,5,7,8,9,10,0]
upAdjust(heapArr)
console.log('堆上浮(添加新节点)', heapArr)

let heapArr2 = [7,1,3,10,5,2,8,9,6]
buildHeap(heapArr2)
console.log('构建二叉堆', heapArr2)

let priorityQueue = [1,3,2,6,5,7,8,9]
enQueue(priorityQueue, 10)
// enQueue(priorityQueue, 0)
console.log('优先队列入队', priorityQueue)
deQueue(priorityQueue)
console.log('优先队列出队', priorityQueue)
// 4: 排序
// 冒泡排序 优化
function bubbleSort(array = []) {
    // 记录最后一次交换位置
    let lastExchangeIndex = 0
    // 无序数列的边界, 每次比较只需要比到这里问止
    let sortBorder = array.length - 1
    for (let i = 0; i < array.length; i++) {
        let  isSorted = true
        for (let j = 0; j < sortBorder; j++) {
            if(array[j] > array[j+1]) {
                const temp = array[j]
                array[j] = array[j+1]
                array[j+1] = temp
                // 因为有元素进行交换 所有不是有序的 标记变为false
                isSorted = false
                lastExchangeIndex = j
            }
        }
        sortBorder = lastExchangeIndex
        if(isSorted) {
            break
        }
    }
}
function cockTailSort(array) {
    for (let i = 0; i < array.length / 2; i++) {
        let isSorted = true
        for(let j = i; j < array.length - i - 1; j++) {
            if(array[j] > array[j + 1]) {
                const temp = array[j]
                array[j] = array[j+1]
                array[j+1] = temp
                isSorted = false
            }
        }
        if (isSorted) {
            break
        }
        isSorted = true
        for(let j = array.length - i - 1; j > i;j--) {
            if(array[j] < array[j-1]) {
                const temp = array[j]
                array[j] = array[j - 1]
                array[j - 1] = temp
                isSorted = false
            }
        }
        if(isSorted) {
            break
        }
    }
}
function quickSort(arr, start, end) {
    if(start >= end) {
        return
    }
    // 拿到基准元素位置
    const mid = singlePartition(arr, start, end)
    quickSort(arr,start, mid - 1)
    quickSort(arr,mid + 1, end) 
}

function partition(arr, start, end) {
    let left = start
    let right = end
    const pivot = arr[start]
    while(left < right) {
        while(left < right && arr[right] > pivot) {
            right--
        }

        while(left < right && arr[left] <= pivot) {
            left++
        }
        
        if(left < right) {
            const temp = arr[left]
            arr[left] = arr[right]
            arr[right] = temp
        }
    }

    arr[start] = arr[left]
    arr[left] = pivot 
    return left
}
function singlePartition(arr, start, end) {
   let mark = start
   const pivot = arr[start]
   for(let i = start + 1; i <= end; i++) {
       if(arr[i] < pivot) {
           mark++
           const temp = arr[mark]
           arr[mark] = arr[i]
           arr[i] = temp
       }
   }
   arr[start] = arr[mark]
   arr[mark] = pivot
   return mark
}

function quickSortByStack(arr, start, end) {
    let stack = [{start: start, end: end}]
    while(stack.length > 0) {
        const param = stack.pop()
        const mid = partition(arr, param.start, param.end)
        if(mid - 1 > param.start) {
            stack.push({start: param.start, end: mid - 1})
            quickSortByStack(arr, param.start, mid - 1)
        }
        if(mid + 1 < param.end) {
            stack.push({ start: mid + 1, end: param.end })
        }
    }
}
let  arr = [3,4,2,1,5,6,7,8]
// bubbleSort(arr)
// console.log('冒泡排序', arr)
// cockTailSort(arr)
// console.log('鸡尾酒排序', arr)
// console.log('快速排序')
// quickSort(arr,0,7)
// console.log(arr)
// console.log('快速排序非递归写法')
// quickSortByStack(arr,0,7)
// console.log(arr)
function heapSort(array) {
    //1. 把无序数组构建成最大堆
    for(let i = Math.floor((array.length - 2)/2); i >= 0; i--){
        downAdjust(array,i, array.length)
    }
    // 2. 循环删除堆顶元素 移到集合尾部, 调整堆产生新的堆顶
    for(let i = array.length - 1; i > 0; i--) {
        // 最后1个元素和第1个元素进行交换
        const temp = array[i]
        array[i] = array[0]
        array[0] = temp
        // 下沉 调整堆
        downAdjust(array,0,i)
    }
}
// console.log('堆排序')
// let heapSortArr = [1,3,2,6,5,7,8,9,10,0]
// heapSort(heapSortArr)
// console.log(heapSortArr)
function countSort(array) {
    //1. 得到最大值和最小值 并计算出差值d
    let max = array[0]
    let min = array[0]
    for(let i = 1; i < array.length; i++) {
        if(array[i] > max) {
            max = array[i]
        }
        if(array[i] < min) {
            min = array[i]
        }
    }
    let d = max - min
    let countArray = new Array(d+1)
    countArray.fill(0)
    
    //2. 创建统计数组并统计对应元素的个数
    for(let i = 0; i < array.length; i++) {
        countArray[array[i] - min]++
    }
    
    //3. 统计数组做变形,后面的元素等于前面的元素之和
    for(let i = 1; i < countArray.length; i++) {
        countArray[i] += countArray[i - 1]
    }

    //4. 倒序遍历原始数列 从统计数组找到正确位置 输出到结果数组
    let sortArr = []
    for(let i = array.length - 1; i >= 0; i--) {
        // array[i] - min 获取当前元素在计数数组的次数之总(即此元素在总的数据的位置)
        // array[i] - min - 1 为当前元素在排序数组中的位置下标: 需要把位置之和 - 1 即可 
        sortArr[countArray[array[i] - min] - 1] = array[i]
        countArray[array[i] - min]--
    }

    return sortArr
}
// let countSortArray = [95,94,91,98,99,90,99,93,91,92]
// console.log('计数排序', countSort(countSortArray))
// 桶排序
function buckerSort(array) {
    // 1. 得到数列的最大值和最小值 并计算出差值d
    let max = array[0]
    let min = array[0]
    for(let i = 1; i < array.length; i++) {
        if(max < array[i]) {
            max = array[i]
        }
        if(min > array[i]) {
            min = array[i]
        }
    }
    // 2. 初始化桶
    const d = max - min
    const bucketNum = array.length
    let bucketList = []
    // 3. 遍历原始数组 将每个元素放入桶中
    for(let i = 0; i < array.length; i++) {
        const num = Math.ceil((array[i] - min) * (bucketNum - 1) / d)
        console.log('num', num)
        if(!bucketList[num]) {
            bucketList[num] = []
        }
        bucketList[num].push(array[i])
    }
    console.log(bucketList)
    // 4. 对每个桶内部进行排序,并进行输出
    let sortedArrary = []
    let j = 0
    console.log(bucketList)
    for (const bucket of bucketList) {
        if(bucket) {
            bucket.sort()
            for (const item of bucket) {
               sortedArrary[j++] = item   
            }
        }
    }
    
    return sortedArrary
}
console.log('桶排序', buckerSort([4.12,6.421,0.0023,3.0,2.123,8.1222,4.12,10.09]))
//5.9 删除k个数字后的最小值
function removeKDigits(num = '', k = 0) {
   let stack = [];
   for(let i = 0; i < num.length; i++) {
         while(k > 0 && stack[stack.length  - 1] && stack[stack.length - 1] > num[i]) {
               stack.pop()
               k--
         }
         stack.push(num[i])
   }
   // 如果是单调递增或者没有删除够k个数的话
   stack = stack.slice(0,num.length - k) 
   
   let i = 0
   for (const n of stack) {
         if(n === '0') {
            i++
         }
         break
   }
   return stack.slice(i).toString()
}
// console.log('删除k个数后的最小值',removeKDigits('123456',3));

/**
 * 5.11 获取金矿最大收益
 *
 * @param {*} w 工人数量
 * @param {*} p 金矿开采所需的工人数量
 * @param {*} g 金矿储量
 */
function getBestGoldMiningV2(w, p, g) {
   // 创建表格
   let resultTable = []
   // 初始化表格
   for(let i = 0; i <= g.length; i++) {
        const temp = new Array(w+1)
        temp.fill(0)
        resultTable.push(temp)
   }
   // 填充表格
   for(let i = 1; i <= g.length; i++) {
         for(let j = 1; j <= w; j++) {
               if(j < p[i-1]) {
                  resultTable[i][j] = resultTable[i-1][j]
               }else {
                  resultTable[i][j] = Math.max(resultTable[i-1][j], resultTable[i-1][j - p[i-1]] + g[i-1])      
               }
         }
   }
   // 返回最后1个格子的值
   return resultTable[g.length][w]
}
// console.log('获取金矿最大收益V2', getBestGoldMiningV2(10,[5,5,3,4,3], [400,500,200,300,350]))

/**
 * 获取金矿最优收益
 * @param 工人数量 w
 * @param 金矿开采所需的工人数量 p 
 * @param 金矿储量 g 
 */
function getBestGoldMiningV3(w, p, g) {
     let resultTable = new Array(w+1)
     resultTable.fill(0)
     // 填充一维数组
     for (let i = 1; i < g.length; i++) {
           for(let j = w; j >= 1; j--) {
                  console.log('i---j',i,j)
                  if(j >= p[i-1]) {
                       console.log('111111', resultTable[j], resultTable[j - p[i-1]] + g[i-1])
                       resultTable[j] = Math.max(resultTable[j], resultTable[j - p[i-1]] + g[i-1])
                  }
           }
     }
     return resultTable[w]
}
// console.log('获取金矿最大收益V3', getBestGoldMiningV3(10,[5,5,3,4,3], [400,500,200,300,350]))

/**
 * 5.12 寻找缺失的数
 * 数组中有两个数各出现奇数次 其他都出现偶数次 求出这两个出现奇数次的数
 * @param  arr 
 * @returns 
 */
function findLostNum(arr = []) {
      // 用于存储2个出现奇数次的整数
      let result = [] 
      // 第一次进行整体异或运算
      let xorResult = 0
      for(let i = 0; i < arr.length; i++) {
            xorResult ^= arr[i]
      }
      // 如果进行异或运算的结果为0,则说明输入的数组不符合题目要求
      if(xorResult === 0) {
            return null
      }
      //确定2个整数的不同位, 以此来做分组
      let separator = 1
      while(0 === (xorResult & separator)) {
            separator <<= 1
      }
      console.log('separator', separator)
      // 第2次分组进行异或运算
      for(let i = 0; i < arr.length; i++) {
            if(0 === (arr[i] & separator)) {
                  result[0] ^= arr[i]
            }else {
                  result[1] ^= arr[i]
            }
      }
      return result
}
// console.log('寻找缺失的整数',  findLostNum([4,1,2,2,5,1,4,3]))

//6.3 LRU算法的应用
let head = null
let end = null
class Node {
      constructor(key, value) {
         this.key = key
         this.value = value
      }
}
class LRUCache {
      constructor(limit) {
            this.limit = limit;
            this.hashMap = new Map()
      }
      get(key) {
            const node = this.hashMap.get(key) 
            if(typeof node === 'undefined')  {
                  return null
            }
            this.refreshNode(node)
            return node.value
      }
      put(key, value) {
            let node = this.hashMap.get(key)
            if (typeof node === 'undefined') {
                  if(this.hashMap.size >= this.limit) {
                        const oldKey = this.removeNode(head)
                        this.hashMap.delete(oldKey)
                  }
                  // 如果key不存在 则插入key-value
                  node = new Node(key, value) 
                  this.addNode(node)
                  this.hashMap.set(key, node)
            } else {
                  node.value = value
                  this.refreshNode(node)
            } 
      }
      refreshNode(node) {
            // 如果访问的是尾节点,则无序移动节点
            if(node === end) {
                 return
            }
            // 移除节点
            this.removeNode(node)
            // 重新插入节点
            this.addNode(node)     
      }
      removeNode(node) {
            if(node === head && node === end) {
                  // 移除唯一的节点
                  head = null
                  end = null
            } else if(node === end) {
                  end = end.pre
                  end.next = null
            } else if(node === head) {
                  head = node.next
                  head.pre = null 
            } else {
                  node.pre.next = node.next
                  node.next.pre = node.pre
            }
            return node.key
      }
      addNode(node) {
            if(end !== null) {
                  end.next = node
                  node.pre = end
                  node.next = null
            }
            end = node
            if (head === null) {
                  head = node
            }
      }
}

// const lruCache = new LRUCache(5)
// lruCache.put('001', '用户1')
// lruCache.put('002', '用户2')
// lruCache.put('003', '用户3')
// lruCache.put('004', '用户4')
// lruCache.put('005', '用户5')
// console.log('head', head)
// lruCache.get('002')
// console.log('head', head)
// lruCache.put('004', '用户4更新')
// console.log('head', head)
// lruCache.put('006', '用户6')
// console.log('head', head)

// 6.4 A星寻路算法
const MAZE = [
      [0,0,0,0,0,0,0],
      [0,0,0,1,0,0,0],
      [0,0,0,1,0,0,0],
      [0,0,0,1,0,0,0]
]

function aStarSearch(start, end) {
      let openList = []
      let closeList = []
      // 把起点加入 openList
      openList.push(start)
      // 主循环 每一轮检查一个当前方格节点
      while(openList.length > 0) {
            // 在openList中查找 F值最小节点 将其作为当前方格节点
            const currentGridIndex = findMinGrid(openList)
            const currentGrid = openList[currentGridIndex]
            // 将当前方格节点从openList中移除
           openList.splice(currentGridIndex,1)
           // 当前方格节点进入 closeList
           closeList.push(currentGrid)
           // 找到所有邻近节点
           const neighbors = findNeighbors(currentGrid, openList, closeList)
           for (const grid of neighbors) {
               // 邻近节点不在openList中,标记 父几点 G H F 并放入openList
               if(!openList.includes(grid)) {
                  grid.initGrid(currentGrid, end)
                  openList.push(grid)
               }     
           }
           // 如果终点在openList中 直接返回终点格子
           for (const grid of openList) {
                 if(grid.x === end.x && grid.y === end.y) {
                       return grid
                 }
           }
      }

      // openList用尽 仍然找不到终点 说明终点不可到达 返回空
      return null
}

function findMinGrid(openList) {
      let temp = openList[0]
      let i = 0
      for (let j = 0; j < openList.length; j++) {
         const grid = openList[j]
         if(grid.f < temp.f) {
               temp = grid
               i = j
         }     
      }
      return i
}

function findNeighbors(grid, openList, closeList) {
      let gridList = []
      if(isValidGrid(grid.x, grid.y + 1, openList, closeList)) {
            gridList.push(new Grid(grid.x, grid.y + 1))
      }
      if(isValidGrid(grid.x, grid.y - 1, openList, closeList)) {
            gridList.push(new Grid(grid.x, grid.y - 1))
      }
      if(isValidGrid(grid.x + 1, grid.y, openList, closeList)) {
            gridList.push(new Grid(grid.x + 1, grid.y))
      }
      if(isValidGrid(grid.x - 1, grid.y, openList, closeList)) {
            gridList.push(new Grid(grid.x - 1, grid.y))
      }
      return gridList
}

function isValidGrid(x,y, openList, closeList) {
      if(x < 0 || x >= MAZE.length || y < 0 || y >= MAZE[0].length) {
            return false
      }
      // 是否有障碍物
      if (MAZE[x][y] === 1) {
            return false
      }
      // 是否已经在openList中
      if(containGrid(openList,x,y)) {
            return false
      }
      // 是否已经在closeList中
      if(containGrid(closeList,x,y)) {
            return false
      }
      return true
}

function containGrid(grids,x,y) {
      for (const grid of grids) {
         if(grid.x === x && grid.y === y) {
               return true
         }     
      } 
      return false
}

class Grid {
      constructor(x,y) {
            this.x = x
            this.y = y
            this.f = 0
            this.g = 0
            this.h = 0
            this.parent = null
      }
      initGrid(parent, end) {
            this.parent = parent
            if(parent !== null) {
                this.g = parent.g + 1
            }else{
                this.g = 1
            }
            this.h = Math.abs(this.x - end.x) + Math.abs(this.y - end.y)
            this.f = this.g + this.h 
      }
}

// // 设置起点和终点
// const startGrid = new Grid(2,1)
// const endGrid = new Grid(2,5)
// // 搜索迷宫终点
// let resultGrid = aStarSearch(startGrid, endGrid)
// // 回溯迷宫路径
// const path = []
// while( resultGrid !== null) {
//       path.push(new Grid(resultGrid.x,resultGrid.y))
//       resultGrid = resultGrid.parent
// }
// // 输出迷宫和路径,路径用*表示
// for (let i = path.length - 1; i >= 0; i--) {
//       const grid = path[i]
//       console.log('grid', grid.x, grid.y)
// }

// 6.5 红包算法
function divideRedPackage(totalAmount, totalPeopleNum) {
   const amountList = [];
   let restAmount = totalAmount
   let restPeopleNum = totalPeopleNum

   for (let i = 0; i < totalPeopleNum - 1; i++) {
       // 随机范围: [1,剩余人均金额的2倍-1] 分
       const amount = Math.floor(Math.random() * (restAmount / restPeopleNum * 2) + 1)
       restAmount -= amount
       restPeopleNum--
       amountList.push(amount)
   }
   amountList.push(restAmount)
   return amountList
}

console.log('红包算法', divideRedPackage(1000,10))