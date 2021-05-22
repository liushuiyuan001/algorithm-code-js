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