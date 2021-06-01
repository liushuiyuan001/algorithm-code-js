/**
 * @param {TreeNode} root
 * @return {number[]}
 */
// 199. 二叉树的右视图
var rightSideView = function(root) {
      if(!root) {
          return []
      }
      let result = []
      let queue = [root]
      while(queue.length > 0) {
          const len = queue.length
          for(let i = 0; i < len; i++) {
              const node = queue.shift()
              if(node.left) {
                  queue.push(node.left)
              }
              if(node.right) {
                  queue.push(node.right)
              }
              if(i === (len - 1)) {
                  result.push(node.val)
              }
          }
      }
      return result
   };


   /**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
// 230. 二叉搜索树中第K小的元素
var kthSmallest = function(root, k) {
      let result = []
      const helper = (node) => { 
         if(node.left) {
           helper(node.left)
         }
         result.push(node.val)
         if(node.right) {
           helper(node.right)
         }
      }
      helper(root)
      return result[k-1]
  };

  /**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
// 236. 二叉树的最近公共祖先
var lowestCommonAncestor = function(root, p, q) {
      if (root == p || root == q) return root;
      let left = null
      let right = null
      if(root.left) {
          left = lowestCommonAncestor(root.left,p,q)
      }
      if(root.right) {
          right = lowestCommonAncestor(root.right,p,q)
      }
      if (left && right) return root;
      return left ? left : right;
  };

/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
// 654. 最大二叉树
var constructMaximumBinaryTree = function(nums) {

      function helper(left, right) {
  
          if (left === right) {
              return null
          }
          const idx = max(left,right)
          let node = new TreeNode(nums[idx])
  
          node.left = helper(left,idx)
          node.right = helper(idx + 1, right)
          return node
      }
  
      function max(l,r) {
          let maxIdx = l;
          for (let i = l; i < r; i++) {
              if (nums[maxIdx] < nums[i]) {
                  maxIdx = i;
              }
          }
          return maxIdx;
      }
  
      return helper(0, nums.length)
};

/**
 * @param {TreeNode} root
 * @return {number}
 */
// 513. 找树左下角的值
var findBottomLeftValue = function(root) {
      let result = []
      let queue = [root]
      while(queue.length > 0) {
          const len = queue.length
          result = []
          for(let i = 0; i < len; i++) {
              const node = queue.shift()
              result.push(node.val)
              if(node.left) {
                  queue.push(node.left)
              }
              if(node.right) {
                  queue.push(node.right)
              }
          }
      }
      return result[0]
  };

  /**
 * @param {TreeNode} root
 * @return {number[]}
 */
// 515. 在每个树行中找最大值
var largestValues = function(root) {
      if(!root) {
          return []
      }
      let result = []
      let queue = [root]
      while(queue.length > 0) {
          const len = queue.length
          let max = -Infinity
          for(let i = 0; i < len; i++) {
              const node = queue.shift()
              if(node.val > max) {
                 max = node.val
              }
              if(node.left) {
                  queue.push(node.left)
              }
              if(node.right) {
                  queue.push(node.right)
              }
          }
          result.push(max) 
      }
      return result
  };

  /**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
// 538. 把二叉搜索树转换为累加树
var convertBST = function(root) {
      if(!root) {
          return null
      }
      let sum = 0
      function helper(node) {
          if(!node) {
              return 0
          }
          helper(node.right)
          node.val =  sum + node.val
          sum = node.val
          helper(node.left)
          return node
      }
  
      return helper(root)
  };

  /**
 * @param {TreeNode} root
 * @param {TreeNode} target
 * @param {number} K
 * @return {number[]}
 */
// 863. 二叉树中所有距离为 K 的结点
var distanceK = function(root, target, k) {
      if(!root) return [];
      let targetNode = null;
      let res = [];
      let paths = [];
  
      // 找到target节点，存储到targetNode中
      dfs(root, target);
      // 从当前节点向下寻找
      getdownDis(targetNode, k);
      console.log('111111111111111111111111111111111111111111')
      // 从当前节点向上寻找
      while(targetNode.parent && k>0){
          targetNode = targetNode.parent;
          getdownDis(targetNode, --k);
      }
  
      // 辅助函数
      function dfs(_root, target){
          if(!_root || targetNode) return;
          if(_root.val === target.val){
              targetNode = _root;
          }
          if(_root.left){
              _root.left.parent = _root;
              dfs(_root.left, target);
          }
          if(_root.right){
              _root.right.parent = _root;
              dfs(_root.right, target);
          }
      }
  
      // 辅助函数
      function getdownDis(node, k){
          if(node === null || paths.indexOf(node) !== -1) return;
          paths.push(node);
          if(k>0){
              getdownDis(node.left, k-1);
              getdownDis(node.right, k-1);  
          }else if(k === 0){
              res.push(node.val);
          }
      }
  
      return res;
  };

  /**
 * @param {TreeNode} root
 * @return {number}
 */
// 1302. 层数最深叶子节点的和
var deepestLeavesSum = function(root) {
      if(!root) {
          return 0
      }
      let result = []
      let queue = [root]
      while(queue.length > 0) {
          const len = queue.length
          result = []
          for(let i = 0; i < len; i++) {
             const node = queue.shift()
             result.push(node.val)
             if(node.left) {
                 queue.push(node.left)
             }
             if(node.right) {
                 queue.push(node.right)
             }
          }
      }
      return result.reduce((pre,curr) => pre + curr)
 };

 /**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {number[]}
 */
// 1305. 两棵二叉搜索树中的所有元素
 var getAllElements = function(root1, root2) {
      let num1 = []
      let num2 = []
      function helper(node,num) {
         if(!node) {
             return
         } 
         helper(node.left,num)
         num.push(node.val)
         helper(node.right,num)
      }
      helper(root1,num1)
      helper(root2,num2)
      let result = []
      let i = 0;
      let j = 0
      while(i < num1.length || j < num2.length) {
            if (i < num1.length && (j == num2.length || num1[i] <= num2[j])) {
               result.push(num1[i++]);
            } else {
               result.push(num2[j++]);
            }
      }
      return result 
 };

 /**
 * @param {ListNode} head
 * @param {TreeNode} root
 * @return {boolean}
 */
// 1367. 二叉树中的列表
 var isSubPath = function(head, root) {
      function helper(head,node) {
           //特判：链表走完了，返回true
          if (head == null) {
              return true;
          }
          //特判：链表没走完，树走完了，这肯定不行，返回false
          if (node == null) {
              return false;
          }
          //如果值不同，必定不是啊
          if (head.val != node.val) {
              return false;
          }
          //如果值相同，继续看，左边和右边有一个满足即可
          return helper(head.next, node.left) || helper(head.next, node.right);
      }
  
      if(!head) {
          return true
      }
      if(!root) {
          return false
      }
  
      return helper(head,root) || isSubPath(head,root.left) || isSubPath(head,root.right)
  };

  /**
 * @param {TreeNode} original
 * @param {TreeNode} cloned
 * @param {TreeNode} target
 * @return {TreeNode}
 */
// 1379. 找出克隆二叉树中的相同节点
var getTargetCopy = function(original, cloned, target) {
      if(!original) {
          return null
      }
      if(original === target) {
          return cloned
      }
      return getTargetCopy(original.left,cloned.left,target) || getTargetCopy(original.right,cloned.right,target)
  };

  /**
 * @param {TreeNode} root
 * @return {number}
 */
// 1315. 祖父节点值为偶数的节点和
var sumEvenGrandparent = function(root) {
      if(!root) {
          return 0
      }
      function helper(node) {
          let num = 0
          if(node.left && node.left.left) {
             num += node.left.left.val
          }
          if(node.left && node.left.right) {
             num += node.left.right.val
          }
          if(node.right && node.right.left) {
             num += node.right.left.val
          }
          if(node.right && node.right.right) {
             num += node.right.right.val
          }
          return num
      }
      if(root.val % 2 === 0) {
          let left = helper(root)
          return left + sumEvenGrandparent(root.left) + sumEvenGrandparent(root.right)
      } else {
          return sumEvenGrandparent(root.left) + sumEvenGrandparent(root.right)
      }
  };

  /**
 * @param {TreeNode} root
 */
var BSTIterator = function(root) {
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
      this.index = 0
      this.arr = arr
  };

  /**
 * @return the next smallest number
 * @return {number}
 */
// 173. 二叉搜索树迭代器
BSTIterator.prototype.next = function() {
      return this.arr[this.index++]
   };
   
/**
 * @return whether we have a next smallest number
 * @return {boolean}
 */
BSTIterator.prototype.hasNext = function() {
return  typeof this.arr[this.index] !== 'undefined'
};

/**
 * @param {TreeNode} root
 * @return {number}
 */
// 222. 完全二叉树的节点个数
var countNodes = function(root) {
      return root ? 1 + countNodes(root.left) + countNodes(root.right) : 0;
  };

  /**
 * @param {TreeNode} root
 * @param {number} target
 * @return {TreeNode}
 */
// 1325. 删除给定值的叶子节点
var removeLeafNodes = function(root, target) {

      if(!root) {
          return null
      }
  
      if(root.left) {
          root.left = removeLeafNodes(root.left,target)
      }
      if(root.right) {
          root.right = removeLeafNodes(root.right,target)
      }
      if(root.val === target && !root.left  && !root.right) {
          return null
      } else {
          return root
      }
  
  };

  /**
 * @param {string[]} word1
 * @param {string[]} word2
 * @return {boolean}
 */
// 1662. 检查两个字符串数组是否相等
var arrayStringsAreEqual = function(word1, word2) {
      return word1.reduce((pre,curr) => pre + curr) === word2.reduce((pre,curr) => pre + curr)
};

/**
 * @param {TreeNode} root
 */
// 1261. 在受污染的二叉树中查找元素
var FindElements = function(root) {
      let arr = [0]
      root.val = 0
      function helper(node) {
          if(!node) {
              return null
          }
           if(node.left) {
               node.left.val = 2*node.val + 1
               arr.push(node.left.val)
               node.left = helper(node.left)
           }
           if(node.right) {
               node.right.val = 2*node.val + 2
               arr.push(node.right.val)
               node.right = helper(node.right)
           }
           return node
      }
      helper(root)
      this.arr = arr
   };
   
/** 
 * @param {number} target
 * @return {boolean}
 */
FindElements.prototype.find = function(target) {
      return this.arr.some(item => item === target)
};

/**
 * @param {TreeNode} root
 * @return {number}
 */
// 1161. 最大层内元素和
var maxLevelSum = function(root) {
      let queue = [root]
      let result = []
      while(queue.length > 0) {
          let temp = 0
          const len = queue.length
          for(let i = 0; i < len; i++) {
              const node = queue.shift()
              temp += node.val
              if(node.left) {
                  queue.push(node.left)
              }
              if(node.right) {
                  queue.push(node.right)
              }
          }
          result.push(temp)
      }
      let idx = 0
      let max = result[0]
      for(let i = 1; i < result.length; i++) {
         if(result[i] > max) {
             max = result[i]
             idx = i
         }
      }
   
      return idx + 1
  };

  /**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {boolean}
 */
// 951. 翻转等价二叉树
var flipEquiv = function(root1, root2) {
      if(!root1 && !root2) {
          return true
      }
      if(!(root1 && root2)) {
          return false
      }
      return root1.val == root2.val && ((flipEquiv(root1.left,root2.left) && flipEquiv(root1.right,root2.right)) ||
      (flipEquiv(root1.left,root2.right) && flipEquiv(root1.right,root2.left)) )
  };

  /**
 * @param {TreeNode} root
 * @return {number}
 */
// 1026. 节点与其祖先之间的最大差值
var maxAncestorDiff = function(root) {
      if(!root) {
        return 0
      }
     // 当前值和左子树最小值的差值  当前值和右子树最小值的差值
     const val = root.val
     let max = 0
     function helper(node) {
         if(!node) {
             return
         }
  
         max = Math.max(max,Math.abs(val - node.val))
  
         if(node.left) {
             helper(node.left) 
         }
         if(node.right) {
             helper(node.right) 
         }
     }
     helper(root)
     return Math.max( max, maxAncestorDiff(root.left),maxAncestorDiff(root.right))
  };

  /**
 * @param {TreeNode} root
 * @return {number}
 */
// 337. 打家劫舍 III
var rob = function(root) {
      if (root == null) return 0;
       // 打劫包括根节点的收益，保底是root.val
       let robIncludeRoot = root.val; 
       if (root.left) {
         robIncludeRoot += rob(root.left.left) + rob(root.left.right);
       }
       if (root.right) {
         robIncludeRoot += rob(root.right.left) + rob(root.right.right);
       }
       // 打劫不包括根节点的收益
       const robExcludeRoot = rob(root.left) + rob(root.right); 
       // 二者取其大
       return Math.max(robIncludeRoot, robExcludeRoot); 
     };