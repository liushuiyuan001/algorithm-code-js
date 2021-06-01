/**
 * @param {TreeNode} root
 * @return {number}
 */
// 783. 二叉搜索树节点最小距离
var minDiffInBST = function(root) {   
      let arr = []
      function helper(node) {
          if(!node) {
              return
          }
          helper(node.left)
          arr.push(node.val)
          helper(node.right)
      }
      helper(root)
  
      let min = Infinity
  
      for(let i = 0; i < arr.length - 1; i++) {
         if((arr[i + 1] - arr[i]) < min) {
           min = arr[i + 1] - arr[i]
         }
      }
  
      return min
  };

  /**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {boolean}
 */
// 872. 叶子相似的树
var leafSimilar = function(root1, root2) {
    
      function helper(node,arr) {
          if(!node.left && !node.right) {
             arr.push(node.val)
          }
          if(node.left) {
              helper(node.left,arr)
          }
          if(node.right) {
              helper(node.right,arr)
          }
      }
  
      let arr1 = []
      helper(root1,arr1)
      let arr2 = []
      helper(root2,arr2)
  
      return arr1.toString() === arr2.toString()
  };

  /**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
// 897. 递增顺序查找树
var increasingBST = function(root) {
      let turnNode = null
      let nextNode = null
      function helper(node) {
         if(!node) {
             return
         }
         if(node.left) {
             helper(node.left)
         }
         if(!turnNode) {
            turnNode = new TreeNode(node.val)
            nextNode = turnNode
         } else {
            let temp = new TreeNode(node.val)
            nextNode.right = temp
            nextNode = temp
         }
         if(node.right) {
             helper(node.right)
         }
      }
      helper(root)
  
      return turnNode
  };