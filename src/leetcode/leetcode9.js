/**
 * @param {number[]} A
 * @return {number}
 */
// 845. 数组中的最长山脉
var longestMountain = function(A) {
      let result = []     // 返回的数组
      let idx = 0  // 返回
      let len = A.length - 1
  
      while(idx < len){
          const temp = getMountain()
          if(temp.length > result.length) {
              result = temp
          }
      }
  
      function getMountain() {
          let temp = [A[idx]]
          // 如果第一个节点就是下坡 则返回空数组
          if(A[idx] > A[idx + 1] && temp.length === 1) {
              idx++
              return []
          }
  
          let down = false
          while(idx < len){
              // 如果是上坡
              if(A[idx] < A[idx + 1] ) {
                  //如果一直是上坡的话(没有下坡)的话 则继续添加  否则返回找到的山脉
                  if(!down) {
                      temp.push(A[idx + 1])
                  }else {
                      return temp
                  }
              }else if(A[idx] === A[idx + 1]){
                  // 如果已经是下坡的话返回找到的山脉 否则返回空数组
                  idx++
                  return !down ? [] : temp
              }else{
                  down = true
                  temp.push(A[idx + 1])
              }
  
              idx++
          }
  
          // 如果全部节点都是上坡 则返回为空数组
          return down ? temp : []
      }
  
      return result.length
  };

  /**
 * @param {TreeNode} A
 * @param {TreeNode} B
 * @return {boolean}
 */
// 剑指 Offer 26. 树的子结构
var isSubStructure = function(A, B) {

      if(!A || !B) {
          return false;
      }
  
      function helper(A1,B1) {
          if(!B1) {
              return true
          }
          if(!A1) {
              return false
          }
          return A1.val === B1.val && helper(A1.left,B1.left) && helper(A1.right,B1.right)
      }
  
      return helper(A, B) || isSubStructure(A.left, B) || isSubStructure(A.right, B)
  };

  /**
 * @param {TreeNode} root
 * @return {number[]}
 */
// 剑指 Offer 32 - I. 从上到下打印二叉树
var levelOrder = function(root) {
      if(!root) {
          return []
      }
      let stack = [root]
      let result = []
      while(stack.length > 0) {
          let len = stack.length
          for(let i = 0; i < len; i++) {
              const node = stack.shift()
              result.push(node.val)
              if(node.left) {
                  stack.push(node.left)
              }
              if(node.right) {
                  stack.push(node.right)
              }
          }
      }
      return result
  };

  /**
 * @param {TreeNode} root
 * @return {number[][]}
 */
// 剑指 Offer 32 - III. 从上到下打印二叉树 III
var levelOrder = function(root) {
      if(!root) {
          return []
      }
      let stack = [root]
      let result = []
      let odd = true
      while(stack.length > 0) {
          const len = stack.length
          let temp = []
          for(let i = 0; i < len; i++) {
              const node = stack.shift()
              temp.push(node.val)
              if(node.left) {
                  stack.push(node.left)
              }
              if(node.right) {
                  stack.push(node.right)
              }
          }
          if(!odd) {
              temp = temp.reverse()
          }
          result.push(temp)
          odd = !odd
      }
      return result
   };

/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {number[][]}
 */
// 剑指 Offer 34. 二叉树中和为某一值的路径
var pathSum = function(root, sum) {
      if(!root) {
          return []
      }
      // 一个值是否等于一个节点的值
      // 如果一个节点为空则返回
      // 如果等于则将临时数组加入总数组
      // 如果不等于则递归调用
      //root.left, sum - root.val
      //root.right, sum - root.val
      let result = []
      let temp = [] 
      function help(node, num) {
          if(!node){
              return
          }
          temp.push(node.val)
          if(node.val === num && !node.left && !node.right) {
              result.push([...temp])
          }
          help(node.left, num - node.val)
          help(node.right, num - node.val,temp)
          temp.pop()
      }
      help(root,sum) 
      return result
  };

  /**
 * @param {TreeNode} tree
 * @return {ListNode[]}
 */
// 面试题 04.03. 特定深度节点链表
var listOfDepth = function(tree) {
      if(!tree) {
          return []
      }
      let result = []
      let stack = [tree]
      while(stack.length > 0 ) {
          const len = stack.length
          let tempNode = new ListNode(-1)
          let curr = tempNode
          for(let i = 0; i < len; i++) {
              const node = stack.shift()
              curr.next = new ListNode(node.val)
              curr = curr.next
              if(node.left) {
                  stack.push(node.left)
              }
              if(node.right) {
                  stack.push(node.right)
              }
          }
          result.push(tempNode.next)
      }
      return result
   };

   /**
 * @param {TreeNode} root
 * @return {boolean}
 */
// 面试题 04.05. 合法二叉搜索树
var isValidBST = function(root) {
      if(!root) {
          return true
      }
      let temp = -Infinity
      let result = true
      function helper(node) {
          if(!node) {
             return
          } 
  
          if(node.left) {
             helper(node.left)
          }
         
          if(node.val > temp) {
             temp = node.val
          } else {
             result = false
             return
          }
  
          if(node.right) {
             helper(node.right)
          }
      }
      helper(root)
  
      return result
  };

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @return {TreeNode}
 */
// 面试题 04.06. 后继者
var inorderSuccessor = function(root, p) {
      if(!root || !p) {
          return false
      }
      let result = []
      function helper(node) {
        if(!node) {
            return
        }
        if(node.left) {
            helper(node.left)
        }
        result.push(node)
        if(node.right) {
            helper(node.right)
        }
      }
      helper(root)
      const index =  result.findIndex( item => item.val === p.val)
      return index === (result.length - 1) ? null : result[index + 1]
  };

  /**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
// 面试题 04.08. 首个共同祖先
var lowestCommonAncestor = function(root, p, q) {
      if (root == null || root == p || root == q)
              return root;
          const left = lowestCommonAncestor(root.left, p, q);
          const right = lowestCommonAncestor(root.right, p, q);
          //如果left为空，说明这两个节点在root结点的右子树上，我们只需要返回右子树查找的结果即可
          if (left == null)
              return right;
          //同上
          if (right == null)
              return left;
          //如果left和right都不为空，说明这两个节点一个在root的左子树上一个在root的右子树上，
          //我们只需要返回root结点即可。
          return root;
  };

  /**
 * @param {TreeNode} t1
 * @param {TreeNode} t2
 * @return {boolean}
 */
// 面试题 04.10. 检查子树
var checkSubTree = function(t1, t2) {
      if(t1==null&&t2==null)    return true;
      else if(t1==null || t2 == null)    return false;
        //当两节点值相同可开始进行对比
        if(t1.val==t2.val){
            const left = checkSubTree(t1.left,t2.left);
            const right = checkSubTree(t1.right,t2.right);
            return left && right;
        }else{
            //两节点值不同，t1继续寻找
            const left = checkSubTree(t1.left,t2);
            const right = checkSubTree(t1.right,t2);
            return left||right;            
        }
};

/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {number}
 */
// 面试题 04.12. 求和路径
var pathSum = function(root, sum) {
      if (!root) return 0;
        return helper(root, sum) + pathSum(root.right, sum) + pathSum(root.left, sum);
  
        //以root 为根节点的时候，和为sum 的路径条数
        function helper(root, sum) {
              if (!root) return 0;
              if (root.val === sum) return 1 + helper(root.left, sum-root.val) + helper(root.right, sum-root.val);
              return helper(root.left, sum-root.val) + helper(root.right, sum-root.val);
        }
  };

/**
 * @param {TreeNode} root
 * @return {number}
 */
// 687. 最长同值路径
var longestUnivaluePath = function(root) {
      let res = 0
      const univaluePath = (root) => {
        if (!root) return 0
        const left = univaluePath(root.left)
        const right = univaluePath(root.right)
        let leftPath = 0, rightPath = 0
        if (root.left && root.left.val == root.val) leftPath = left + 1
        if (root.right && root.right.val == root.val) rightPath = right + 1
        res = Math.max(res, leftPath + rightPath)
        return Math.max(rightPath, leftPath)
      }
      univaluePath(root)
      return res
    };

/**
 * @param {TreeNode} root
 * @param {number} val
 * @return {TreeNode}
 */
// 701. 二叉搜索树中的插入操作
var insertIntoBST = function(root, val) {
      // 遍历二叉搜索树
      // 如果此节点为空则返回要插入的节点
      // 否则 根据插入值判断是插入的是左子树或者是右子树
      // 如果左子树/或者右子树为空则new一个左子树/右子树
      // 否则的话 转化为左子树或者右子树
  
      if(!root) {
          return new TreeNode(val)
      }
  
      function helper(node) {
          if(node.val > val) {
              if(node.left) {
                 helper(node.left)
              } else {
                 node.left = new TreeNode(val) 
                 return 
              }
          } else {
              if(node.right) {
                 helper(node.right)
              } else {
                  node.right = new TreeNode(val)
                  return 
              }
          }
      }
      helper(root)
      return root
  
      // if (root === null) {
      //     return new TreeNode(val);
      // }
      // let pos = root;
      // while (pos !== null) {
      //     if (val < pos.val) {
      //         if (pos.left === null) {
      //             pos.left = new TreeNode(val);
      //             break;
      //         } else {
      //             pos = pos.left;
      //         }
      //     } else {
      //         if (pos.right === null) {
      //             pos.right = new TreeNode(val);
      //             break;
      //         } else {
      //             pos = pos.right;
      //         }
      //     }
      // }
      // return root;
  };

  /**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
// 814. 二叉树剪枝
var pruneTree = function(root) {
      function helper(node) {
          if(!node) {
              return null
          }
  
          // 则分别对左/右子树剪枝(递归)
          node.left = helper(node.left)
          node.right = helper(node.right)
  
          // 如果剪枝后发现左右节点都是null 并且当前值为0的话返回null 否则返回
          if(!node.val && !node.left && !node.right) {
              return null
          }
          return node
      }
      return helper(root)
  };

  /**
 * @param {number[]} pre
 * @param {number[]} post
 * @return {TreeNode}
 */
// 889. 根据前序和后序遍历构造二叉树
var constructFromPrePost = function(pre, post) {
      if(pre.length == 0){
          return null;
      };
  
      let tmp = pre[0];
      let index = post.indexOf(pre[1]);
      let root = new TreeNode(tmp);
      root.left = constructFromPrePost(pre.slice(1,index+2),post.slice(0,index+1));
      root.right = constructFromPrePost(pre.slice(index+2),post.slice(index+1,post.length-1));
      return root;
  };

  /**
 * @param {TreeNode} root
 * @return {number}
 */
// 979. 在二叉树中分配硬币
var distributeCoins = function(root) {
      let path = 0; 
      let helper = function(node){
            if(node == null) return 0;
            let leftVal = helper(node.left);
            let rightVal = helper(node.right);
            path += Math.abs(rightVal)+Math.abs(leftVal);
            return rightVal+leftVal+node.val-1;
      }
      helper(root);
      return path;
};

/**
 * @param {number[]} preorder
 * @return {TreeNode}
 */
// 1008. 前序遍历构造二叉搜索树
var bstFromPreorder = function(preorder) {
      if(!preorder.length) {
          return null
      }
      let node = new TreeNode(preorder[0])
      const index = preorder.findIndex(item => item > preorder[0])
  
      if(index !== -1) {
          node.left = bstFromPreorder(preorder.slice(1,index))
          node.right = bstFromPreorder(preorder.slice(index))
      } else {
          node.left = bstFromPreorder(preorder.slice(1))
      }
      return node
  }

  /**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
// 105. 从前序与中序遍历序列构造二叉树
var buildTree = function(preorder, inorder) {
      if(!preorder.length || !inorder.length) {
          return null
      }
  
      const nodeVal = preorder[0]
      let node = new TreeNode(nodeVal)
      const idx = inorder.findIndex(item => item === nodeVal)
      if(idx !== -1) {
          const len = inorder.slice(0,idx).length
          node.left = buildTree(preorder.slice(1,1 + len),inorder.slice(0,idx))
          node.right = buildTree(preorder.slice(1 + len),inorder.slice(idx+1))
      }
      return node
  };

  /**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
// 106. 从中序与后序遍历序列构造二叉树
var buildTree = function(inorder, postorder) {
      if(!inorder.length || !postorder.length) {
         return null
      }
      const val = postorder.pop()
      const idx = inorder.findIndex(item => item === val)
      let node = new TreeNode(val)
      node.left = buildTree(inorder.slice(0,idx),postorder.slice(0,idx))
      node.right = buildTree(inorder.slice(idx+1),postorder.slice(idx))
      return node
  };

/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {number[][]}
 */
// 113. 路径总和 II
var pathSum = function(root, sum) {
      let result = []
      let temp = []
      function helper(node, n) {
           if(!node) {
               return
           }
           temp.push(node.val)
           if(!node.left && !node.right && node.val === n) {
               result.push(JSON.parse(JSON.stringify(temp)))
           } 
           helper(node.left, n - node.val)
           helper(node.right, n - node.val)
           temp.pop()
      }
      helper(root, sum)
      return result
   };

/**
 * @param {TreeNode} root
 * @return {number[]}
 */
// 144. 二叉树的前序遍历
var preorderTraversal = function(root) {
      if(!root) {
          return []
      }
      let result = []
      let stack = [root]
      while(stack.length > 0) {
          const len = stack.length
          for(let i = 0; i < len; i++) {
             const node = stack.pop()
             result.push(node.val)
             if(node.right) {
               stack.push(node.right)
             }
             if(node.left) {
               stack.push(node.left)
             }
          }
      } 
      return result
};
   /**
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */
// 114. 二叉树展开为链表
var flatten = function(root) {
      let list = []
      function helper(node) {
          if(!node) {
              return
          }
          list.push(node)
          helper(node.left)
          helper(node.right)
      }
      helper(root)
      for(let i = 1; i < list.length; i++) {
          let pre = list[i-1]
          let curr = list[i]
          pre.left = null
          pre.right = curr
      }
  };

  /**
 * @param {TreeNode} root
 * @return {number[]}
 */
// 145. 二叉树的后序遍历
var postorderTraversal = function(root) {
      if(!root) {
         return []
      }
      let result = []
      let stack = [root]
      while(stack.length > 0){
            const len = stack.length
            for(let i = 0; i < len; i++) {
                const node = stack.pop()
                result.push(node.val)
                if(node.left) {
                    stack.push(node.left)
                }
                if(node.right) {
                    stack.push(node.right)
                }
            }
      }
      return result.reverse()
  };

  /**
 * @param {Node} root
 * @return {number[][]}
 */
// 429. N叉树的层序遍历
var levelOrder = function(root) {
      if(!root) {
          return []
      }
      let result = []
      let queue = [root]
      while(queue.length > 0) {
         let temp = []
         const len = queue.length
         for(let i = 0; i < len; i++) {
             const node = queue.shift()
             temp.push(node.val)
             for(const child of node.children) {
                 queue.push(child)
             }
         }
         result.push(temp)
      } 
      return result
  };

/**
 * @param {TreeNode} root
 * @return {number}
 */
// 129. 求根到叶子节点数字之和
var sumNumbers = function(root) {
      let result = []
      
      function helper(node,str) {
  
         if(!node) {
            return
         }
         str += node.val
         if(node.left && node.right) {
           helper(node.left, str)
           helper(node.right, str)
         }else if(node.left && !node.right) {
           helper(node.left, str)
         }else if(!node.left && node.right){
           helper(node.right, str)
         } else {
           result.push(str)
         }
  
      }
      helper(root,'')
      return result.reduce((pre,curr) => {
          return pre + parseInt(curr)
      },0)
  };