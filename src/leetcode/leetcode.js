//589. N叉树的前序遍历
// Definition for a Node.
function Node(val, children) {
   this.val = val;
   this.children = children;
};

/**
 * @param {Node} root
 * @return {number[]}
 */
var preorder = function(root) {
    if(!root) {
          return [];
    }
    let result = [];
    function getFistNode(node) {
       result.push(node.val);
       for (const child of node.children) {
             getFistNode(child);
       }
    }
    getFistNode(root)
    return result
}

// 26. 删除排序数组中的重复项
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
   if(!nums) return 0
   if(nums.length === 1) return 1

   let pre = 0
   for (let i = 0; i < nums.length;) {
         if(nums[pre] !== nums[i]) {
               nums[++pre] = nums[i]
         }
   }
   return pre + 1
}

// 11. 盛最多水的容器
/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
      let i = 0
      let j = height.length - 1
      let max = 0
      while(i < j) {
  
          const currTotal = (j - i ) * Math.min(height[i],height[j])
          max = currTotal > max ?  currTotal : max
          if(height[i] > height[j]) {
              j--
          } else {
              i++
          } 
      }
      return max
  };


// 144. 二叉树的前序遍历

 // Definition for a binary tree node.
  function TreeNode(val) {
      this.val = val;
      this.left = this.right = null;
  }
/**
 * @param {TreeNode} root
 * @return {number[]}
 */

var preorderTraversal = function(root) {
      let result  = []
 
 
      function helper (node) {
         if(!node){
             return
         }
         result.push(node.val)
         helper(node.left)
         helper(node.right)
      }
 
      helper(root)
   
      return result
 };

//  28. 实现 strStr()
/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
      if(!needle) return 0
      const needleLen = needle.length
  
      for(let i = 0; i < haystack.length;i++) {
  
          if(haystack[i] === needle[0] &&  (i + needleLen - 1) < haystack.length  ) {
  
              let same = true
              for(let j = 0; j < needle.length; j++){
                  if(needle[j] != haystack[i+j]){
                      same = false
                      break
                  }
              }
              if(same) {
               return i
              }
          }
      }
      return -1
  };

//   104. 二叉树的最大深度
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function(root) {
      if (!root || typeof root.val === 'undefined') {
          return 0
      }
      if (root.left && root.root) {
          return 1
      }
  
      return 1 + Math.max(maxDepth(root.left), maxDepth(root.right))
};

// 98. 验证二叉搜索树
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST = function(root) {
      function helper(node, min, max) {
          if(node === null) {
             return true
          }
          if (node.val <= min ||  node.val >= max) {
              return false
          }
  
          return helper(node.left, min, node.val) && helper(node.right, node.val, max)
      }
  
      return helper(root, -Infinity, Infinity)
};

//53. 最大子序和
/**
 * @param {number[]} nums
 * @return {number}
 */
// 输入: [-2,1,-3,4,-1,2,1,-5,4]
// 输出: 6
// 解释: 连续子数组 [4,-1,2,1] 的和最大，为 6。
// 比如求一个家族最大的财富
// 假如第一代的财富就是最大 
// 如果第二代发现上代是负的 那么重头再来 自己打天下 如果是正的 则继承过来 到这代终点如果 超过了之前最大的财富则就是最大
// 否则最大的财富还是上次积累的
var maxSubArray = function(nums) {
      let max = nums[0]
      let pre = 0
      for(num of nums) {
          pre = pre > 0 ? num + pre : num
          max = max > pre ? max : pre
      }
      return max
};

// 101. 对称二叉树
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function(root) {
      if (!root) {
          return true
      }
      function helper(leftNode,rightNode) {
          if(!leftNode && !rightNode) {
              return true
          }
          if(!leftNode || !rightNode) {
              return false
          }
          return leftNode.val === rightNode.val && helper(leftNode.left,rightNode.right) && helper(leftNode.right,rightNode.left)
      }
      return helper(root.left,root.right)
  };

// 38. 外观数列
/**
 * @param {number} n
 * @return {string}
 */
// 1.     1
// 2.     11
// 3.     21
// 4.     1211
// 5.     111221
var countAndSay = function(n) {
      function helper(n) {
         if (n === 1) {
             return '1'
         }
         const pre = helper(n-1)
         let curr = ''
         let i = 0
         for(let j = 1; j <= pre.length; j++) {
             if(j === pre.length) {
                 curr += (j - i) + pre[i]
                 return curr
             }
             if (pre[i] !== pre[j]) {
                 curr += (j - i) + pre[i]
                 i = j
             }
         }
         return curr
      }
      return helper(n)
  };

// 58. 最后一个单词的长度
// 输入: "Hello World"
// 输出: 5
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
      if(!s || s.length === 0){
          return 0
      }
      let str = s.trim()
      let strArr = str.split(' ')
   
      return strArr[strArr.length - 1].length
};

/**
 * @param {number[]} digits
 * @return {number[]}
 */
// 66. 加一
// 输入: [1,2,3]
// 输出: [1,2,4]
// 解释: 输入数组表示数字 123。
var plusOne = function(digits) {
      let have = false
      for(let i = digits.length - 1; i >= 0;i--) {
          let item = digits[i]
          if (i === digits.length - 1 || have) {
              if (item !== 9) {
                  digits[i] = item+1
                  have = false
              } else {
                  digits[i] = 0
                  have = true
              }
          }
      }
  
      if (have) {
          digits.unshift(1)
      }
  
      return digits
};

// 67. 二进制求和
/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
// 输入: a = "11", b = "1"
// 输出: "100"
var addBinary = function(a, b) {
      let flag = 0
  
      if(a.length > b.length) {
         let num = a.length - b.length
           for(let i = 0; i < num; i++){
            b = '0' + b
         }
      }
      if(a.length < b.length) {
         let num = b.length - a.length
         for(let i = 0; i < num; i++){
            a = '0' + a
         }
      }
  
      let j = a.length - 1
      let result = ''
      while(j >= 0) {
  
          let pNum = Number(a[j])
          let qNum = Number(b[j])
          
          if (pNum + qNum + flag === 0) {
              result = '0' + result
              flag = 0
          } else if (pNum + qNum + flag === 1) {
              result = '1' + result
              flag = 0
          }else if (pNum + qNum + flag === 2) {
              result = '0' + result
              flag = 1
          }else if (pNum + qNum + flag === 3) {
              result = '1' + result
              flag = 1
          }
          j--
      }
      if(flag) {
          result = '1' + result
      }
      return result  
};

/**
 * @param {number} n
 * @return {number}
 */
// 70. 爬楼梯
// 输入： 3
// 输出： 3
// 解释： 有三种方法可以爬到楼顶。
// 1.  1 阶 + 1 阶 + 1 阶
// 2.  1 阶 + 2 阶
// 3.  2 阶 + 1 阶
var climbStairs = function(n) {
      let totalMap = {}
      function helper (n) {
        if (n === 1) {
            return 1
        }
        if (n === 2) {
            return 2
        }
        
        let left
        let right
    
        if (totalMap[n - 1]) {
           left = totalMap[n - 1]
        } else {
           totalMap[n - 1] = helper(n - 1)
           left = totalMap[n - 1]
        }
    
        if (totalMap[n - 2]) {
            right = totalMap[n - 2]
        } else {
            totalMap[n - 2] = helper(n - 2)
            right = totalMap[n - 2]
        }
    
        return left + right
      }
      
      return helper(n)
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
 * @return {ListNode}
 */
// 83. 删除排序链表中的重复元素
// 输入: 1->1->2
// 输出: 1->2

// 输入: 1->1->2->3->3
// 输出: 1->2->3
var deleteDuplicates = function(head) {
      if(!head || !head.next) {
          return head
      }
      let curr = head
      let next = curr.next
  
      while(next.next) {
          if(curr.val === next.val) {
              curr.next = next.next
              next = next.next
          }else{
              curr = curr.next
              next = curr.next
          }
      }
  
      if(curr.val === next.val) {
          curr.next = null
      }
      return head
};


/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
// 88. 合并两个有序数组
// 输入:
// nums1 = [1,2,3,0,0,0], m = 3
// nums2 = [2,5,6],       n = 3

// 输出: [1,2,2,3,5,6]
var merge = function(nums1, m, nums2, n) {
      let cloneNums1 = nums1.slice(0,m)
      let p = 0
      let p1 = 0
      let p2 = 0
   
       while(p1 < m && p2 < n) {
          nums1[p++] = cloneNums1[p1] < nums2[p2] ? cloneNums1[p1++] : nums2[p2++]  
       }
   
       while(p1 < m) {
           nums1[p++] = cloneNums1[p1++]
       }
   
       while(p2 < n) {
           nums1[p++] = nums2[p2++]
       }
};
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */
var recoverTree = function(root) {
    // 从上往下思考则脑子不容易推断 依然从下网上思考
    // 假如只有一个节点或者空节点不需要恢复
    // 假如只有一个左叶子节点和右叶子节点的话 则需要交换节点和左或右叶子节点
    // 假如有两个叶子节点的话 则可能 根和左、右节点交换或者左右叶子节点之间交换
    // 假如子节点不是叶子节点的话 则根节点和左节点交换、根节点和右节点交换、或者左右子节点交换

    // 二叉搜索树 左子节点比根节点小 右子节点比根节点大

    // 节点的值被错误的交换

    // 要求不改变结果 恢复这棵树

    // 涉及到树 则肯定需要对树遍历 二叉搜索树 遍历后 肯定是递归的  如果两个值被错误的交换了 则会出现当前值比左边的最大值小
    // 错误交换会出现两种情况 第一种   1 3 2 4 5 6  这种相邻的错误 那么错误的下标为 x 和 x+1
    // 第二种情况  1 5 3 4 2 6  这种情况 2 和 5 交互。这种错误的下标为 第一对 相邻下降（5,3）的第一个5 和 第二对 相邻下降（4,2）的第二个2

    // 遍历二叉搜索树,放在数组中
    let result = []
    const walkTree = (node) => {
        if(!node) {
            return
        }
    
        walkTree(node.left)
        result.push(node)
        walkTree(node.right)
    }

    walkTree(root)

    // 找出错误的两个节点的下标
    const findTwoSwapped = (nums) => {
        const n = nums.length;
        let index1 = -1, index2 = -1;
        for (let i = 0; i < n - 1; ++i) {
            if (nums[i + 1].val < nums[i].val) {
                index2 = i + 1;
                if (index1 === -1) {
                    index1 = i;
                } else {
                    break;
                }
            }
        }

        return [index1, index2];
    }

    const idx = findTwoSwapped(result)

    // 交换两个节点值
    const val = result[idx[0]].val
    result[idx[0]].val = result[idx[1]].val
    result[idx[1]].val = val
};

let test = {
    val: 1,
    right: null,
    left: {
        val: 3,
        left: null,
        right: {
            val: 2,
            left: null,
            right: null
        }
    }
}

recoverTree(test)
console.log(test)
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
// 100. 相同的树
// 给定两个二叉树，编写一个函数来检验它们是否相同。
// 如果两个树在结构上相同，并且节点具有相同的值，则认为它们是相同的。
var isSameTree = function(p, q) {
      function helper(l,r){
          if (!l && !r) {
              return true
          }
          if (!l || !r ) {
              return false
          }
  
          if (l.val === r.val) {
              return helper(l.left,r.left) && helper(l.right,r.right)
          } else {
              return false
          }
  
      }
      return helper(p,q)
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
 * @return {number[][]}
 */
// 107. 二叉树的层次遍历 II
// 给定二叉树 [3,9,20,null,null,15,7],

// 3
// / \
// 9  20
//  /  \
// 15   7
// 返回其自底向上的层次遍历为：
// [
// [15,7],
// [9,20],
// [3]
// ]
var levelOrderBottom = function(root) {
      let result = []
      function helper(node, level) {
          if(!node) {
              return
          }
          let temp = result[level] || []
  
          temp.push(node.val)
  
          result[level] = temp
  
          helper(node.left, level+1) 
          helper(node.right, level+1)
      }
      helper(root,0)
      return result.reverse()
};

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
// 108. 将有序数组转换为二叉搜索树
var sortedArrayToBST = function(nums) {
      function helper (left,right){
  
          if(left > right) {
              return null
          }
  
          const mid = parseInt((left + right)/2)
          const bstTree = new TreeNode(nums[mid])
          bstTree.left = helper(left, mid - 1)
          bstTree.right = helper(mid + 1,right)
  
          return bstTree
      }
  
      return helper(0,nums.length-1)
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
 * @return {boolean}
 */
// 110. 平衡二叉树
var isBalanced = function(root) {
      if(!root) {
          return true
      }
      function helper(node) {
        if(!node){
           return 0
        }
        
        return Math.max(helper(node.left),helper(node.right)) + 1
      }
  
  
      return Math.abs(helper(root.left) - helper(root.right)) <= 1 && isBalanced(root.left) && isBalanced(root.right)
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
 * @return {number}
 */
// 111. 二叉树的最小深度
var minDepth = function(root) {
    
      if(!root) {
          return 0
      }
   
      if(!root.left && !root.right) {
          return 1
      }
   
      let min = Infinity
      if(root.left) {
          min = Math.min(minDepth(root.left),min)
      }
       if(root.right) {
          min = Math.min(minDepth(root.right),min)
      }
      return min + 1
};


/**
 * @param {number} numRows
 * @return {number[][]}
 */
// 118. 杨辉三角
var generate = function(numRows) {
      if (numRows === 0) {
          return []
      }
      if (numRows === 1) {
          return [[1]]
      }
      if (numRows === 1) {
          return [[1],[1,1]]
      }
      const nums = generate(numRows - 1)
  
      const preNum = nums[nums.length - 1]
       
      const currNew = [1]
      for(let i = 0; i < preNum.length - 1; i++) {
        currNew.push(preNum[i] + preNum[i+1])
      }
      currNew.push(1)
  
      nums.push(currNew)
      return nums
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
 * @param {number} sum
 * @return {boolean}
 */
// 给定一个二叉树和一个目标和，判断该树中是否存在根节点到叶子节点的路径，
// 这条路径上所有节点值相加等于目标和。
// 112. 路径总和
var hasPathSum = function(root, sum) {
      
      if(!root) {
          return false
      }
  
      if (!root.left && !root.right) {
          return sum === root.val
      }
      return hasPathSum(root.left, sum - root.val) || hasPathSum(root.right, sum - root.val)
};

/**
 * @param {number} rowIndex
 * @return {number[]}
 */
// 119. 杨辉三角 II
var getRow = function(rowIndex) {
      if(rowIndex === 0) {
          return [1]
      }
      if (rowIndex === 1) {
          return [1,1]
      }
      const last = getRow(rowIndex - 1)
      const curr = [1]
      for (let i = 0; i < last.length - 1; i++) {
        curr.push(last[i] + last[i+1])
      }
      curr.push(1)
      return curr
};