 /**
 * @param {number[]} prices
 * @return {number}
 */
// 给定一个数组，它的第 i 个元素是一支给定股票第 i 天的价格。
// 如果你最多只允许完成一笔交易（即买入和卖出一支股票一次），设计一个算法来计算你所能获取的最大利润。
// 121. 买卖股票的最佳时机
var maxProfit = function(prices) {
      let max = 0 
      let min = Infinity
      for(let i = 0; i < prices.length; i++) {
          if (prices[i] < min) {
              min = prices[i]
          }
          max = prices[i] - min > max  ?  prices[i] - min : max
      }
      return max
};

/**
 * @param {number[]} prices
 * @return {number}
 */
// 给定一个数组，它的第 i 个元素是一支给定股票第 i 天的价格。
// 设计一个算法来计算你所能获取的最大利润。你可以尽可能地完成更多的交易（多次买卖一支股票）。
// 122. 买卖股票的最佳时机 II
var maxProfit = function(prices) {
      let max = 0
      let min = prices[0]
      for(let i = 0; i < prices.length - 1; i++) {
         if ( prices[i+1] - prices[i] > 0 ) {
             max = max + prices[i+1] - prices[i]
         }
      }
      return max 
};


/**
 * @param {string} s
 * @return {boolean}
 */
// 给定一个字符串，验证它是否是回文串，只考虑字母和数字字符，可以忽略字母的大小写。
// 125. 验证回文串
var isPalindrome = function(s) {
      if(s.length <= 1) {
          return true
      }
      let j = s.length - 1
      let i = 0
      while (i < j) {
  
          while(!(/^[0-9a-zA-Z]+$/.test(s[i])) && i < j) {
              i++
          }
          while(!(/^[0-9a-zA-Z]+$/.test(s[j])) && i < j) {
              j--
          }
          if (s[i].toLowerCase() !== s[j].toLowerCase()) {
              return false
          }
  
          i++
          j--
      }
      return true
};

// 任何数和 0 做异或运算，结果仍然是原来的数，即 a ^ 0 = a。
// 任何数和其自身做异或运算，结果是 0，即 a ^ a = 0。
// 异或运算满足交换律和结合律
/**
 * @param {number[]} nums
 * @return {number}
 */
// 输入: [2,2,1]
// 输出: 1
// 136. 只出现一次的数字
var singleNumber = function(nums) {
      let result = 0
      for(const n of nums) {
          result ^= n
      }
      return result
};

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
// 141. 环形链表
var hasCycle = function(head) {
    
      if (!head || !head.next) {
          return false
      }
      let low = head
      let fast = head.next
  
      while(low !== fast ) {
          if(!fast  || !fast.next) {
              return false
          }
          low = low.next
          fast = fast.next.next
      }
  
      return true
};

/**
 * initialize your data structure here.
 */
// 155. 最小栈
// 设计一个支持 push ，pop ，top 操作，并能在常数时间内检索到最小元素的栈。
// push(x) —— 将元素 x 推入栈中。
// pop() —— 删除栈顶的元素。
// top() —— 获取栈顶元素。
// getMin() —— 检索栈中的最小元素。

   var MinStack = function() {
      this.stack = []
      this.minStack = [Infinity]
   };
   
   /** 
    * @param {number} x
    * @return {void}
    */
   MinStack.prototype.push = function(x) {
       this.stack.push(x)
       this.minStack.push(Math.min(x,this.minStack[this.minStack.length - 1]))
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
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
// 160. 相交链表
var getIntersectionNode = function(headA, headB) {
      // 清除高度差
      let pA = headA, pB = headB
      while(pA || pB) {
          if(pA === pB) return pA
          pA = pA === null ? headB : pA.next
          pB = pB === null ? headA : pB.next
      }
      return null
  };

/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
// 167. 两数之和 II - 输入有序数组
// 给定一个已按照升序排列 的有序数组，找到两个数使得它们相加之和等于目标数。
// 输入: numbers = [2, 7, 11, 15], target = 9
// 输出: [1,2]
var twoSum = function(numbers, target) {
      let head = 0
      let foot = numbers.length - 1
      while(head < foot){
          if (numbers[head] + numbers[foot] === target) {
             return [head+1, foot+1]
          } else if (numbers[head] + numbers[foot] > target) {
              foot--
          } else {
              head++
          }
      }
      return []
};

/**
 * @param {number} n
 * @return {string}
 */
// 168. Excel表列名称
// 给定一个正整数，返回它在 Excel 表中相对应的列名称。

// 输入: 28
// 输出: "AB"

// 输入: 52
// 输出: "AA"
var convertToTitle = function(n) {
      let result = ''
 
      while(n !== 0) {
         n--
         result =  String.fromCharCode(parseInt(n % 26) + 65) + result
         n = parseInt(n / 26)
      }
 
      return result
 };

 /**
 * @param {number[]} nums
 * @return {number}
 */
// 169. 多数元素
// 给定一个大小为 n 的数组，找到其中的多数元素。多数元素是指在数组中出现次数大于 ⌊ n/2 ⌋ 的元素。
// 你可以假设数组是非空的，并且给定的数组总是存在多数元素。
var majorityElement = function(nums) {
      let count = 0
      let mostNum = -1
      for(const n of nums) {
          if (count === 0) {
              mostNum = n
          }
          count = n === mostNum ? count + 1 : count - 1
      }
      return mostNum
  };

  /**
 * @param {string} s
 * @return {number}
 */
// 171. Excel表列序号
// 输入: "A"
// 输出: 1
// 输入: "AB"
// 输出: 28
// 输入: "ZY"
// 输出: 701
var titleToNumber = function(s) {

      let num = 0
      for(let i = s.length - 1; i >= 0; i--) {
          num = num + (s[i].charCodeAt() - 64) * Math.pow(26,s.length - i - 1)
      }
      return num
  };

/**
 * @param {number} n
 * @return {number}
 */
// 172. 阶乘后的零
// 输入: 3
// 输出: 0
// 解释: 3! = 6, 尾数中没有零

// 输入: 5
// 输出: 1
// 解释: 5! = 120, 尾数中有 1 个零
var trailingZeroes = function(n) {
      let res=0;
  
      do {
         res += parseInt(n / 5)
         n =  parseInt(n / 5)
      } while(n > 0)
  
      return res
};

// 175. 组合两个表
// left join ...尴尬...
// select Person.FirstName as FirstName,Person.LastName as LastName,Address.City as City,Address.State as State
// from   Person left join  Address on  Person.PersonId = Address.PersonId

// 176. 第二高的薪水
// Write your MySQL query statement below
// SELECT
//     (SELECT DISTINCT
//             Salary
//         FROM
//             Employee
//         ORDER BY Salary DESC
//         LIMIT 1 OFFSET 1) AS SecondHighestSalary
// ;

// 181. 超过经理收入的员工
// SELECT
//      a.NAME AS Employee
// FROM Employee AS a JOIN Employee AS b
//      ON a.ManagerId = b.Id
//      AND a.Salary > b.Salary
// ;


// 182. 查找重复的电子邮箱
// select a.Email from Person as a
// join Person as b
// ON a.Id != b.Id AND a.Email = b.Email group by a.Email;

// 183. 从不订购的客户
// select Customers.Name as Customers from Customers
// left join Orders on Customers.Id = Orders.CustomerId
// where Orders.CustomerId is null

/**
 * @param {number} n - a positive integer
 * @return {number}
 */
// 输入：00000000000000000000000000001011
// 输出：3
// 解释：输入的二进制串 00000000000000000000000000001011 中，共有三位为 '1'。
// 191. 位1的个数
var hammingWeight = function(n) {
      let sum = 0
        while(n != 0){
            sum++
            n &= (n-1)
        }
      return sum
};

// 196. 删除重复的电子邮箱
// delete p1 FROM Person p1,
//     Person p2
// WHERE
//     p1.Email = p2.Email AND p1.Id > p2.Id

// # Write your MySQL query statement below
// 197. 上升的温度
// select p1.Id FROM Weather as p1   
// join Weather as p2
// on DATEDIFF(p1.RecordDate, p2.RecordDate) = 1 and p1.Temperature > p2.Temperature

/**
 * @param {number[]} nums
 * @return {number}
 */
// 198. 打家劫舍
// 你是一个专业的小偷，计划偷窃沿街的房屋。每间房内都藏有一定的现金，影响你偷窃的唯一制约因素就是相邻的房屋装有相互连通的防盗系统，如果两间相邻的房屋在同一晚上被小偷闯入，系统会自动报警。
// 给定一个代表每个房屋存放金额的非负整数数组，计算你 不触动警报装置的情况下 ，一夜之内能够偷窃到的最高金额。
// 输入：[2,7,9,3,1]
// 输出：12
// 解释：偷窃 1 号房屋 (金额 = 2), 偷窃 3 号房屋 (金额 = 9)，接着偷窃 5 号房屋 (金额 = 1)。
//      偷窃到的最高金额 = 2 + 9 + 1 = 12

var rob = function(nums) {
      if (nums.length === 0) {
          return 0
      }
      if (nums.length === 1) {
          return nums[0]
      }
      
      let first = nums[0]
      let second =  Math.max(nums[0], nums[1])
      for (let i = 2; i < nums.length; i++) {
          let temp = first
          first = second
          second = Math.max(temp + nums[i], second)
      }
      return second
  };

  /**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
// 203. 移除链表元素
// 删除链表中等于给定值 val 的所有节点。
// 输入: 1->2->6->3->4->5->6, val = 6
// 输出: 1->2->3->4->5
var removeElements = function(head, val) {
      let flagNode = new ListNode(0)
      flagNode.next = head
      let pre = flagNode
      let curr = flagNode.next
      while (curr) {
          if (curr.val === val) {
              pre.next = curr.next
          } else {
              pre = curr
          }
          curr = curr.next
      }
      return flagNode.next
  };

  /**
 * @param {number} n
 * @return {boolean}
 */
// 202. 快乐数
// 对于一个正整数，每一次将该数替换为它每个位置上的数字的平方和，然后重复这个过程直到这个数变为 1，也可能是 无限循环 但始终变不到 1。如果 可以变为  1，那么这个数就是快乐数
// 输入：19
// 输出：true
// 解释：
// 12 + 92 = 82
// 82 + 22 = 68
// 62 + 82 = 100
// 12 + 02 + 02 = 1
var isHappy = function(n) {
      let slow = n
      let fast = step(n)
      while(fast !== 1 && slow !== fast) {
          slow = step(slow)
          fast = step(step(fast))
      }
  
  
      return fast == 1
  };
  
var step = function(n) {
      let result = 0
      while ( n > 0) {
            result += (n%10) * (n%10)
            n = parseInt(n / 10)
      }
      return result
}

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
// 输入: 1->2->3->4->5->NULL
// 输出: 5->4->3->2->1->NULL
// 206. 反转链表
var reverseList = function(head) {

      let pre = null
      let curr = head
      while(curr) {
          let temp = curr.next
          curr.next = pre
   
          pre = curr
          curr = temp
      }
   
      return pre
};

/**
 * @param {number[]} nums
 * @return {boolean}
 */
// 给定一个整数数组，判断是否存在重复元素。
// 如果任意一值在数组中出现至少两次，函数返回 true 。
// 如果数组中每个元素都不相同，则返回 false
// 217. 存在重复元素
var containsDuplicate = function(nums) {
      // return [...new Set(nums)].length !== nums.length
      let hash = {}
      for(let i = 0; i < nums.length; i++){
          if(hash[nums[i]]) {
              return true
          }else {
              hash[nums[i]] = 1
          }
      }
      return false
 };

 /**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
// 给定一个整数数组和一个整数 k，判断数组中是否存在两个不同的索引 i 和 j，使得 nums [i] = nums [j]，并且 i 和 j 的差的 绝对值 至多为 k。
// 219. 存在重复元素 II
var containsNearbyDuplicate = function(nums, k) {
      let hash = {}
      for (let i = 0; i < nums.length; i++) {
          if (hash[nums[i]] && (i + 1) - hash[nums[i]] <= k) {
              return true
          } else {
              hash[nums[i]] = i + 1
          }
      }
      return false
  };

  /**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
// 226. 翻转二叉树
// 输入 [4,2,7,1,3,6,9]
// 输出 [4,2,7,1,3,6,9]
var invertTree = function(root) {
      if (!root) {
          return root
      }
      let temp = root.left
      root.left = invertTree(root.right)
      root.right = invertTree(temp)
      return root
  };

  /**
 * @param {number} n
 * @return {boolean}
 */
// 给定一个整数，编写一个函数来判断它是否是 2 的幂次方。
// 231. 2的幂
var isPowerOfTwo = function(n) {
      return n > 0 && (n & (n - 1)) === 0
};

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
// 请判断一个链表是否为回文链表。
// 输入: 1->2
// 输出: false
// 输入: 1->2->2->1
// 输出: true
// 234. 回文链表
var isPalindrome = function(head) {
      if (!head || !head.next) {
          return true
      }
      let curr = head
      let arr = []
      while(curr) {
          arr.push(curr.val)
          curr = curr.next
      }
      let leftIdx = 0
      let rightIdx = arr.length - 1
      while(leftIdx <= rightIdx) {
          if(arr[leftIdx] !== arr[rightIdx]) {
              return false
          }
          leftIdx++
          rightIdx--
      }
      return true
   };

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
// 给定一个二叉搜索树, 找到该树中两个指定节点的最近公共祖先。
// 235. 二叉搜索树的最近公共祖先
// 输入: root = [6,2,8,0,4,7,9,null,null,3,5], p = 2, q = 8
// 输出: 6 
// 解释: 节点 2 和节点 8 的最近公共祖先是 6。

// 输入: root = [6,2,8,0,4,7,9,null,null,3,5], p = 2, q = 4
// 输出: 2
// 解释: 节点 2 和节点 4 的最近公共祖先是 2, 因为根据定义最近公共祖先节点可以为节点本身。
var lowestCommonAncestor = function(root, p, q) {
      if (root.val < p.val && root.val < q.val) {
          return lowestCommonAncestor(root.right,p,q)
      } else if(root.val > p.val && root.val > q.val) {
          return lowestCommonAncestor(root.left,p,q)
      } else {
          return root
      }
  };

  /**
 * @param {ListNode} node
 * @return {void} Do not return anything, modify node in-place instead.
 */
// 237. 删除链表中的节点
var deleteNode = function(node) {
      node.val = node.next.val
      node.next = node.next.next
  };