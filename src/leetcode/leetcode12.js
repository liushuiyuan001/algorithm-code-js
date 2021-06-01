/**
 * @param {string} s
 * @return {string}
 */
// 1544. 整理字符串
var makeGood = function(s) {
      let stack = []
      for(let i = 0; i < s.length; i++) {
          const c = s[i]
          const st = stack[stack.length - 1]
          if(!st){
              stack.push(c)  
          }else if(Math.abs(c.charCodeAt() - st.charCodeAt()) === 32) {
              stack.pop()
          }else{
              stack.push(c)
          }
      }
      return stack.join('')
    };

/**
 * @param {string[]} ops
 * @return {number}
 */
// 682. 棒球比赛
var calPoints = function(ops) {
      let stack = []
      for(let i = 0; i < ops.length; i++) {
          const ch = ops[i]
          if(ch === 'C') {
              stack.pop()
          }else if(ch === 'D') {
              const pre = stack[stack.length - 1]
              stack.push(pre * 2)
          }else if(ch === '+') {
              const  pre = stack[stack.length - 1]
              const prePre = stack[stack.length - 2]
              stack.push(pre + prePre)
          }else {
              stack.push(Number(ch))
          }
      }
      return stack.reduce((pre,curr) => pre + curr)
  };

  /**
 * @param {string} S
 * @param {string} T
 * @return {boolean}
 */
// 844. 比较含退格的字符串
var backspaceCompare = function(S, T) {
      let sStack = []
      let tStack = []
      function helper(s,stack) {
          for(let i = 0; i < s.length; i++) {
              const ch = s[i]
              if(ch === '#') {
                  stack.pop()
              }else{
                  stack.push(ch)
              }
          }
      }
      helper(S,sStack)
      helper(T,tStack)
      return sStack.join('') === tStack.join('')
  };

  /**
 * initialize your data structure here.
 */
// 面试题 03.02. 栈的最小值
var MinStack = function() {
      this.stack = []
      this.minStack = []
   };
   
   /** 
    * @param {number} x
    * @return {void}
    */
   MinStack.prototype.push = function(x) {
       this.stack.push(x)
       if(this.minStack.length === 0){
           this.minStack.push(x)
       }else {
           const p = this.minStack[this.minStack.length - 1]
           if(p > x) {
               this.minStack.push(x)
           }else{
               this.minStack.push(p)
           }
       }
   };
   
   /**
    * @return {void}
    */
   MinStack.prototype.pop = function() {
      this.stack.pop()
      this.minStack.pop()
   };
   
   /**
    * @return {number}
    */
   MinStack.prototype.top = function() {
      return this.stack[this.stack.length - 1]
   };
   
   /**
    * @return {number}
    */
   MinStack.prototype.getMin = function() {
      return this.minStack[this.minStack.length - 1]
   };

   /**
 * @param {number[]} target
 * @param {number} n
 * @return {string[]}
 */
// 1441. 用栈操作构建数组
var buildArray = function(target, n) {
      let count = 0
      let result = []
      for(let i = 1; i <= target[target.length - 1];i++) {
          if(i === target[count]) {
              count++
              result.push('Push')
          } else {
              result.push('Push')
              result.push('Pop')
          }
      }
      return result
  };


  /**
 * @param {string[]} logs
 * @return {number}
 */
// 1598. 文件夹操作日志搜集器
var minOperations = function(logs) {
      let rootCount = 0
      for(let i = 0; i < logs.length;i++) {
          const op = logs[i]
          if(op === './') {
              continue
          }else if(op === '../') {
              rootCount--
          }else{
              rootCount++
          }
          rootCount = rootCount <= 0 ? 0 : rootCount
      }
   
      return rootCount
   };

   /**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
// 496. 下一个更大元素 I
var nextGreaterElement = function(nums1, nums2) {
      let result = []
      let hash = {}
      nums2.forEach((item,index) => hash[item] = index)
      for(const n1 of nums1) {
          const index = hash[n1]
          let have = false
          for(let j = index + 1; j < nums2.length; j++ ) {
              if(nums2[j] > n1) {
                  have = true
                  result.push(nums2[j])
                  break
              }
          }
          if (!have) {
              result.push(-1)
          }
      }
      return result
   };

/**
 * @param {number} numBottles
 * @param {number} numExchange
 * @return {number}
 */
// 1518. 换酒问题
var numWaterBottles = function(numBottles, numExchange) {
      let count = numBottles
      let emptyBottles = numBottles
      while(emptyBottles >= numExchange) {
          const numEx = parseInt(emptyBottles / numExchange)
          count += numEx
          emptyBottles = numEx + emptyBottles % numExchange
      }
      return count
   };

   /**
 * @param {number[]} bills
 * @return {boolean}
 */
// 860. 柠檬水找零
var lemonadeChange = function(bills) {
      let list = []
      let fCount = 0
      let tCount = 0
      for(let i = 0;i < bills.length;i++) {
          const getM = bills[i]
          if(getM === 5) {
             fCount++
          }else if(getM === 10) {
            if(fCount === 0) {
                return false
            } else {
                fCount--
                tCount++
            }
          }else {
            if(tCount >= 1 && fCount >= 1) {
               fCount--
               tCount--
            }else if(fCount >= 3){
               fCount -= 3
            } else {
               return false
            }
          }
      }
      return true
   };

   /**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
// 剑指 Offer 59 - I. 滑动窗口的最大值
var maxSlidingWindow = function(nums, k) {
      if(!nums || !nums.length || k === 0) {
          return []
      }
      let result = []
      let queue = []
      for(let i = 0; i < k; i++) {
  
          while(queue.length && nums[i] >= nums[queue[queue.length - 1]]) {
              queue.pop()
          }
          queue.push(i)
      }
      for(let i = k; i < nums.length;i++) {
          result.push(nums[queue[0]])
  
          while(queue.length && nums[i] >= nums[queue[queue.length - 1]]) {
              queue.pop()
          }
          if(queue.length && queue[0] <= i - k) {
              queue.shift()
          }
  
          queue.push(i)
      }
      result.push(nums[queue[0]])
      return result
  };

  /**
 * @param {ListNode} node
 * @return {void} Do not return anything, modify node in-place instead.
 */
// 面试题 02.03. 删除中间节点
var deleteNode = function(node) {
      node.val = node.next.val
      node.next = node.next.next
  };

/**
 * @param {ListNode} head
 * @return {number}
 */
// 1290. 二进制链表转整数
var getDecimalValue = function(head) {
      let curr = head
      let count = []
      while(curr) {
          count.push(curr.val)
          curr = curr.next
      }
  
      let result = 0
      for(let i = count.length - 1; i >= 0; i--) {
          result += count[count.length - 1 - i] * Math.pow(2,i)
      }
      return result
  };

  /**
 * @param {ListNode} head
 * @return {ListNode}
 */
// 876. 链表的中间结点
var middleNode = function(head) {
      let curr = head
      let result = []
      while(curr) {
        result.push(curr)
        curr = curr.next
      }
      return result[Math.floor(result.length / 2)]
  };

  /**
 * @param {ListNode} head
 * @return {ListNode}
 */
// 面试题 02.01. 移除重复节点
var removeDuplicateNodes = function(head) {
      if (!head) {
          return head
      }
      let occurred = { [head.val] : true }
      let pos = head
      while(pos.next) {
          let cur = pos.next
          if (!occurred[cur.val]) {
              occurred[cur.val] = true
              pos = pos.next
          } else {
              pos.next = pos.next.next
          }
      }
      pos.next = null
      return head
  };