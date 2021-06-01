/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
// 剑指 Offer 32 - II. 从上到下打印二叉树 II
var levelOrder = function(root) {
      if(!root){
          return [];
      }
      let result = []
      let arr = [root]
   
      while(arr.length > 0) {
       let temp = []
       for(let i = arr.length-1; i >= 0;i--) {
           const node =  arr.shift()
           temp.push(node.val)
           // 入栈
           if(node.left){
               arr.push(node.left)
           }
           if(node.right){
               arr.push(node.right)
           }
       }
       result.push(temp)
      }
      return result;
   };

/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
// 剑指 Offer 22. 链表中倒数第k个节点
var getKthFromEnd = function(head, k) {
      if (!head) {
            return null
      }

      let nodeCount = 0
      let curr = head
      while(curr) {
            nodeCount++
            curr = curr.next
      }

      let pre = head
      let len = nodeCount - k + 1
      let n = 0

      while(pre) {
            n++
            if(n === len ) {
            return pre
            }
            pre = pre.next
      }
      return null
};

/**
 * @param {ListNode} list1
 * @param {number} a
 * @param {number} b
 * @param {ListNode} list2
 * @return {ListNode}
 */
// 1669. 合并两个链表
var mergeInBetween = function(list1, a, b, list2) {
      let l2 = list2
      while(l2.next) {
          l2 = l2.next
      }
      let pre = list1
      let curr = list1.next
      let i = 1
      while(curr) {
         if(i === a) {
             pre.next = list2
         }
         if(i === b) {
             l2.next = curr.next
         }
         i++
         pre = curr
         curr = pre.next
      }
      return list1
  };

  /**
 * @param {ListNode} head
 * @param {number} k
 * @return {number}
 */
// 面试题 02.02. 返回倒数第 k 个节点
var kthToLast = function(head, k) {
      let len = 0
      let curr = head
      while(curr) {
          len++
          curr = curr.next
      }
      let link = head
      let j = 0
      let count = len - k + 1
      while(link) {
          j++
          if(j === count) {
              return link.val
          }
          link = link.next
      }
      return -1
   };

   /**
 * @param {ListNode} head
 * @return {TreeNode}
 */
// 109. 有序链表转换二叉搜索树
var sortedListToBST = function(head) {
      let list = []
      let curr = head
      while(curr) {
          list.push(curr.val)
          curr = curr.next
      }
      function helper(arr) {
          const len = arr.length
          if(len === 0) {
              return null
          }
          if(len === 1) {
              return new TreeNode(arr[0])
          }
          const mid = Math.floor(len / 2)
          const node = new TreeNode(arr[mid])
          node.left = helper(arr.slice(0,mid))
          node.right = helper(arr.slice(mid+1))
          return node
      }
      return helper(list)
  };

  /**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
// 剑指 Offer 52. 两个链表的第一个公共节点
var getIntersectionNode = function(headA, headB) {
      let stackA = []
      let stackB = []
      let nodeA = headA
      let nodeB = headB
      while(nodeA) {
          stackA.push(nodeA)
          nodeA = nodeA.next
      }
      while(nodeB) {
          stackB.push(nodeB)
          nodeB = nodeB.next
      }
      let n = Math.abs(stackA.length - stackB.length)
      if(stackA.length > stackB.length) {
         stackA = stackA.slice(n)
      }else{
         stackB = stackB.slice(n)
      }
      for(let i = 0; i < stackB.length; i++) {
          if(stackA[i] === stackB[i]) {
              return stackB[i]
          }
      }
}

/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
// 剑指 Offer 18. 删除链表的节点
var deleteNode = function(head, val) {
      if(!head) {
          return null
      }
      if(head.val === val) {
          return head.next
      }
      let pre = head
      let curr = head.next
      while(curr) {
          if(curr.val === val) {
              pre.next = curr.next
              break
          }
          pre = curr
          curr = curr.next
      }
      return head
   };

   /**
 * @param {number} n
 * @return {number}
 */
// 剑指 Offer 10- I. 斐波那契数列
var fib = function(n) {
      let arr = [0,0,1]
      for(let i = 3; i <= n + 1; i++) {
          arr[i] = arr[i-1] + arr[i-2]
                      arr[i] %= 1000000007;
      }
      return arr[n+1]
  };

  /**
 * @param {number} n
 * @return {number}
 */
// 剑指 Offer 10- II. 青蛙跳台阶问题
var numWays = function(n) {
      let arr = [1,1,2]
      if( n <= 2) {
          return arr[n]
      }
      let prepre = 1
      let pre = 2
      let curr = 0 
      for(let i = 3; i <= n;i++) {
          curr = prepre + pre
          curr %= 1000000007;
   
          prepre = pre
          pre = curr
      }
      return curr
   };

   /**
 * @param {number} n
 * @return {number}
 */
// 1137. 第 N 个泰波那契数
var tribonacci = function(n) {
      if(n === 0) {
          return 0
      }
      if(n <= 2) {
          return 1
      }
      let t0 = 0
      let t1 = 1
      let t2 = 1
   
      for(let i = 3; i <= n;i++) {
          const curr = t0 + t1 + t2
          t0 = t1
          t1 = t2
          t2 = curr
      }
      return t2
   };

   /**
 * @param {number} shorter
 * @param {number} longer
 * @param {number} k
 * @return {number[]}
 */
// 面试题 16.11. 跳水板
var divingBoard = function(shorter, longer, k) {
      if(!k) return []// 判空
       if(shorter==longer) return [shorter*k]// 短板和长版相等，结果只存在一种
       const res=[];
       for(let i=0;i<=k;i++){
           res.push(i*longer + (k-i)*shorter)
       }
       return res;
   };

   /**
 * @param {number} A
 * @param {number} B
 * @return {number}
 */
// 面试题 08.05. 递归乘法
var multiply = function(A, B) {
      if (B == 1) return A
      if (B == 0) return 0
      if (B & 1)
          return multiply(A<<1, B>>1) + A 
      else
          return multiply(A<<1, B>>1)
};

/**
 * @param {number[]} arr
 * @param {number} start
 * @return {boolean}
 */
// 1306. 跳跃游戏 III
var canReach = function(arr, start) {
      const visited = new Set();
       const queue = [start];
       for (let len = 0, max = arr.length; len < queue.length; ++len) {
         const idx = queue[len];
         if (visited.has(idx)) continue;
         if (arr[idx] === 0) return true;
         visited.add(idx);
         idx + arr[idx] < max && queue.push(idx + arr[idx]);
         idx - arr[idx] >= 0 && queue.push(idx - arr[idx]);
       }
       return false;
     };

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
// 24. 两两交换链表中的节点
var swapPairs = function(head) {
      if (head === null|| head.next === null) {
          return head;
      }
      const newHead = head.next;
      head.next = swapPairs(newHead.next);
      newHead.next = head;
      return newHead;
  };

  /**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
// 897. 递增顺序查找树
var increasingBST = function(root) {

      let result = []
      function inorder(node) {
          if(!node) {
              return
          }
          inorder(node.left)
          result.push(node.val)
          inorder(node.right)
      }
      inorder(root)
      const node = new TreeNode(-1)
      let curr = node
      for(let n of result) {
         curr.right = new TreeNode(n)
         curr = curr.right
      }
      return node.right
   };

   /**
 * @param {string} S
 * @return {number}
 */
// 921. 使括号有效的最少添加
var minAddToMakeValid = function(S) {
      let stack = []
      const hash = {')' : '('}
      for(let i = 0; i < S.length; i++) {
         const ch = S[i]
   
         if(ch === '(') {
             stack.push(ch)
         }else{
             const p = stack[stack.length - 1]
             if(!p) {
                 stack.push(ch)
             }else if(p === hash[ch]) {
                 stack.pop()
             }else{
                 stack.push(ch)
             }
         }
      }
      return stack.length
   };

   /**
 * @param {number[]} T
 * @return {number[]}
 */
// 739. 每日温度
var dailyTemperatures = function(T) {
      let n = T.length;
      let ans = [];
      let s = [];
      for(let i = 0; i < n; i++) {
          ans.push(0)
      }
      for (let i = 0; i < n; ++i) {
          while (s.length && T[i] > T[s[s.length - 1]]) {
              let previousIndex = s[s.length - 1];
              ans[previousIndex] = i - previousIndex;
              s.pop();
          }
          s.push(i);
      }
      return ans;
};

/**
 * @param {number[]} nums
 * @return {number[]}
 */
// 977. 有序数组的平方
var sortedSquares = function(nums) {
      return nums.map(e => e * e).sort((a, b) => a - b);
};

/**
 * @param {number[]} A
 * @param {number} m
 * @param {number[]} B
 * @param {number} n
 * @return {void} Do not return anything, modify A in-place instead.
 */
// 面试题 10.01. 合并排序的数组
var merge = function(A, m, B, n) {
      let i = 0
      let j = 0
   
      let sorted = new Array(m+n)
      sorted.fill(0)
      let temp = 0
      while(i < m || j < n){
           if(i === m) {
               temp = B[j++]
           }else if(j === n) {
               temp = A[i++]
           }else if(A[i] < B[j]){
              temp = A[i++]
           }else{
              temp = B[j++]
           }
           sorted[i+j-1] = temp
      }
      for(let i = 0; i < A.length;i++) {
          A[i] = sorted[i]
      }
   };