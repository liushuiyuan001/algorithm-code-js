/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
// 剑指 Offer 07. 重建二叉树
var buildTree = function(preorder, inorder) {
      if(preorder.length === 0 || inorder.length === 0){
          return null
      }
      let i = 0
      for(; i < inorder.length;i++) {
          if(preorder[0] === inorder[i]) {
              break
          }
      }
 
      let node = new TreeNode(preorder[0])
      node.left = buildTree(preorder.slice(1,i+1),inorder.slice(0,i))
      node.right = buildTree(preorder.slice(i+1),inorder.slice(i+1))
      return node
 };
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
// 剑指 Offer 27. 二叉树的镜像
var mirrorTree = function(root) {
      if (!root) {
          return root
      }
       const temp = mirrorTree(root.left)
       root.left = mirrorTree(root.right)
       root.right = temp
   
      return root
   };

/**
 * @param {TreeNode} root
 * @return {boolean}
 */
// 剑指 Offer 28. 对称的二叉树
var isSymmetric = function(root) {
      if(!root) {
          return true
      }
      function helper(L,R) {
          if(!L && !R) {
              return true
          }
          if(!L || !R || L.val !== R.val) {
              return false
          }
          return helper(L.left,R.right) && helper(L.right,R.left)
      }
      return helper(root.left,root.right)
  };

/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
// 剑指 Offer 54. 二叉搜索树的第k大节点
var kthLargest = function(root, k) {
      let arr = []
      function helper(node) {
         if(!node) {
             return
         }
         if(node.right) {
             helper(node.right)
         }
         arr.push(node.val)
        if(node.left) {
             helper(node.left)
         }
      }
      helper(root)
      return arr[k-1]
  };

  /**
 * @param {TreeNode} root
 * @return {boolean}
 */
// 剑指 Offer 55 - II. 平衡二叉树
var isBalanced = function(root) {
      if(!root) {
          return true
      }
      function helper(node) {
          if(!node) {
              return 1
          }
  
          return Math.max(helper(node.left), helper(node.right)) + 1
      }
  
      return  Math.abs(helper(root.left) - helper(root.right)) <= 1 && isBalanced(root.left) && isBalanced(root.right)
  };

/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
// 面试题 04.02. 最小高度树
var sortedArrayToBST = function(nums) {

      if(nums.length === 0) {
          return null
      }

      if(nums.length === 1) {
          return new TreeNode(nums[0])
      }

      if(nums.length === 2) {
          const node =  new TreeNode(nums[1])
          node.left = new TreeNode(nums[0])
          return node
      }

 
      const mid = parseInt(nums.length / 2)
      let node = new TreeNode(nums[mid])
      node.left =  sortedArrayToBST(nums.slice(0,mid))
      node.right =  sortedArrayToBST(nums.slice(mid + 1))

      return node
};

// 面试题 04.04. 检查平衡性
var isBalanced = function(root) {
      if(!root) {
          return true
      }
  
      function helper(node) {
          if(!node) {
              return 0
          }
          return Math.max(helper(node.left),helper(node.right)) + 1
      }
  
      return Math.abs(helper(root.left) - helper(root.right)) <= 1 && isBalanced(root.left) && isBalanced(root.right)
  };

  /**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
// 面试题 17.12. BiNode
var convertBiNode = function(root) {
    
      let head = new TreeNode(-1)
      let pre = head
      function helper(node) {
          if(!node) {
              return
          }
          helper(node.left)
          visit(node)
          helper(node.right)
      }
      function visit(node) {
          node.left = null
          pre.right = node
          pre = node
      }
      helper(root)
   
      return head.right
  };

  /**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
// 1123. 最深叶节点的最近公共祖先
var lcaDeepestLeaves = function(root) {
      let res = root;
      let maxDepth = 0;
      let dfs = function (root, depth) {
        if (!root) return depth - 1;
        let leftDepth = dfs(root.left, depth + 1)
        let rightDepth = dfs(root.right, depth + 1)
        maxDepth = Math.max(maxDepth, leftDepth, rightDepth)
        if (leftDepth === maxDepth && rightDepth === maxDepth) {
          res = root;
        }
        return Math.max(leftDepth, rightDepth);
      }
      dfs(root, 0);
      return res;
    };

/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
// 103. 二叉树的锯齿形层次遍历
var zigzagLevelOrder = function(root) {
      if(!root) {
         return []
      }
      let result = []
      let stack = [root]
      let odd = true
      while(stack.length > 0) {
         const len = stack.length
         let temp = []
         for(let i = 0; i < len; i++) {
             const item = stack.shift()
             odd ? temp.push(item.val) : temp.unshift(item.val)
             if(item.left) {
                 stack.push(item.left)
             }
             if(item.right) {
                 stack.push(item.right)
             }
         }
         odd = !odd
         result.push(temp)
      }
      return result
 };