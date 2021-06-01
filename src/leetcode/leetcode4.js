  /**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
// 501. 二叉搜索树中的众数
var findMode = function(root) {
      if(!root) {
          return []
      }
  
      let answer = []
      let maxCount = 0
      let count = 0
      let base
      const update = (x) => {
          if (x === base) {
              ++count;
          } else {
              count = 1;
              base = x;
          }
          if (count === maxCount) {
              answer.push(base);
          }
          if (count > maxCount) {
              maxCount = count;
              answer = [base];
          }
      }
  
      function midOrderTree(node) {
         if(!node) {
            return
         }
         midOrderTree(node.left)
         update(node.val)
         midOrderTree(node.right)
      }
      midOrderTree(root)
      return answer
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
// 给你一棵所有节点为非负值的二叉搜索树，请你计算树中任意两节点的差的绝对值的最小值。
// 530. 二叉搜索树的最小绝对差
var getMinimumDifference = function(root) {
      let arr = []
      let min = Infinity
      function helper(node) {
          if(!node) {
              return
          }
          helper(node.left)
          arr.push(node.val)
          helper(node.right)
      }
      helper(root)
      for (let i = 0; i < arr.length - 1; i++) {
          const temp = Math.abs(arr[i] - arr[i+1])
          if(temp < min) {
              min = temp
          }
      }
      return min
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
// 给定一棵二叉树，你需要计算它的直径长度。
// 一棵二叉树的直径长度是任意两个结点路径长度中的最大值。这条路径可能穿过也可能不穿过根结点。
// 543. 二叉树的直径
var diameterOfBinaryTree = function(root) {
      let max = 1
      const helper = (node) => {
         if(!node) {
             return 0
         }
         if(!node.left && !node.right) {
             return 1
         }
         const left = helper(node.left)
         const right = helper(node.right)
         max = Math.max(max, left + right + 1)
         return Math.max(left,right) + 1 
      }
      helper(root)
      return max - 1
   };

  /**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node} root
 * @return {number}
 */
// 559. N叉树的最大深度
var maxDepth = function(root) {

      if(!root) {
          return 0
      }
  
      if(root.children.length === 0) {
          return 1
      }
  
      let result = []
      for(let node of root.children) {
          result.push(maxDepth(node))
      }
  
      return 1 + Math.max(...result)
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
// 563. 二叉树的坡度
var findTilt = function(root) {

      let total = 0
    
      function helper (node) {
    
        if(!node) {
            return 0
        }
        const leftVal = helper(node.left)
        const rightVal = helper(node.right)
        total += Math.abs(leftVal - rightVal)
        return leftVal + rightVal + node.val
      }
      helper(root)
    
      return total
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
 * @param {TreeNode} s
 * @param {TreeNode} t
 * @return {boolean}
 */
// 572. 另一个树的子树
var isSubtree = function(s, t) {
      function helper(node1, node2) {
          if(!node1 && !node2) {
              return true
          }
          if(!node1 && node2) {
              return false
          }
          if(node1 && !node2) {
              return false
          }
          return node1.val === node2.val && helper(node1.left,node2.left) && helper(node1.right,node2.right)
      }
      if (s == null) return false
      if (helper(s, t)) return true
      return isSubtree(s.left, t) || isSubtree(s.right, t) // 有一个true就true
  
  };