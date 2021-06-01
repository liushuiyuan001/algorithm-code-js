/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} t
 * @return {string}
 */
// 606. 根据二叉树创建字符串
var tree2str = function(t) {
      function helper(node) {
         if(!node) {
             return '()'
         }
         let str = ''
         str += '('  + node.val
         if(node.left && node.right) {
          str += helper(node.left) 
          str += helper(node.right)
         } else if(node.left && !node.right) {
            str += helper(node.left) 
         } else if(!node.left && node.right) {
            str += '()'
            str += helper(node.right) 
         }
         str += ')'
         return str
      }
      const str = helper(t)
      return str.substring(1,str.length-1)
  };

  /**
 * @param {TreeNode} t1
 * @param {TreeNode} t2
 * @return {TreeNode}
 */
// 617. 合并二叉树
var mergeTrees = function(t1, t2) {
      if(!t1){
          return t2
      }
      if(!t2){
          return t1
      }
      let node = new TreeNode(t1.val + t2.val)
      node.left = mergeTrees(t1.left, t2.left)
      node.right = mergeTrees(t1.right, t2.right)    
      return node
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
 * @return {number[]}
 */
// 637. 二叉树的层平均值
// 给定一个非空二叉树, 返回一个由每层节点平均值组成的数组。
var averageOfLevels = function(root) {
      let nodeList = [root]
      let result = []
      while(nodeList.length > 0) {
         let sum = 0
         const len = nodeList.length
         for(let i = 0; i < len; i++) {
             const node = nodeList.shift()
             sum += node.val
             if(node.left) {
                 nodeList.push(node.left)
             }
             if(node.right) {
                 nodeList.push(node.right)
             }
         }
         result.push(sum / len)
      }
      return result
   };

/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {boolean}
 */
// 653. 两数之和 IV - 输入 BST
// 给定一个二叉搜索树和一个目标结果，
// 如果 BST 中存在两个元素且它们的和等于给定的目标结果，则返回 true。
var findTarget = function(root, k) {
      let hashSet = new Set()
  
      function helper(node) {
          if(!node) {
              return false
          }
          if (hashSet.has(k - node.val)) {
              return true
          }
          hashSet.add(node.val)
          return helper(node.left) || helper(node.right)
      }
     
      return  helper(root)
  };

  /**
 * @param {TreeNode} root
 * @param {number} low
 * @param {number} high
 * @return {TreeNode}
 */
// 669. 修剪二叉搜索树
var trimBST = function(root, low, high) {
      if(!root) {
          return null
      }
      if(low > root.val) {
          return trimBST(root.right,low,high)
      }
      if(high < root.val) {
          return trimBST(root.left,low,high)
      }
      root.left = trimBST(root.left, low, high)
      root.right = trimBST(root.right, low, high)
      return root
  };


/**
 * @param {TreeNode} root
 * @return {number}
 */
// 671. 二叉树中第二小的节点
var findSecondMinimumValue = function(root) {
      if (root === null || (root.left === null && root.right === null)) return -1
     
      var left = root.left.val
      var right = root.right.val

      // 根节点是最小值，如果左节点跟根节点相同值，那有可能第二小值从左结点找
      if (left === root.val) {
            left = findSecondMinimumValue(root.left)
      }
      // 同理
      if (right === root.val) {
            right = findSecondMinimumValue(root.right)
      }

      // 这个时候左右节点的值都找到了，比较即可返回
      if (left !== -1 && right !== -1) {
            return Math.min(left, right)
      }

      if (left === -1) {
            return right
      }
      return left
};

/**
 * @param {TreeNode} root
 * @param {number} val
 * @return {TreeNode}
 */
// 700. 二叉搜索树中的搜索
var searchBST = function(root, val) {
      if(!root) {
          return null
      } 
      const left = searchBST(root.left,val)
      if (left) {
          return left
      }
      if(root.val === val) {
          return root
      }
      const right = searchBST(root.right,val)
      if(right) {
          return right
      }
   
      return null
   };