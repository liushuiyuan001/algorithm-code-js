/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {number}
 */
// 437. 路径总和 III
var pathSum = function(root, sum) {
      function helper(node,n) {
          if(!node) {
              return 0
          }
          return (node.val === n ? 1 : 0) + helper(node.left, n - node.val) + helper(node.right, n - node.val)
      }
      if(!root) {
          return 0
      }
      let rootNum = helper(root,sum)
      return rootNum + pathSum(root.left,sum) +  pathSum(root.right,sum)
  };

  /**
 * @param {string} S
 * @return {string}
 */
// 1047. 删除字符串中的所有相邻重复项
var removeDuplicates = function(S) {
      let arr = S.split('')
      let result = []
      let len = arr.length
      for(let i = 0; i < len; i++) {
          const c = arr.shift()
          if(result.length > 0) {
             if(result[result.length - 1] === c) {
                 result.pop()
             } else {
                 result.push(c)
             }
          }else{
              result.push(c)
          }
      }
      return result.join('')
  };

  /**
 * @param {string} s
 * @return {boolean}
 */
// 20. 有效的括号
var isValid = function(s) {
      let stack = []
      let hash = {
          ')' : '(',
          '}' : '{',
          ']' : '[' 
      }
      for(let i = 0; i < s.length; i++) {
          const ch = s[i]
          const st = stack[stack.length - 1]
   
          if( ch === '(' || ch === '{' || ch === '[' ) {
              stack.push(ch)
          }else if(hash[ch] === st){
              stack.pop()
          }else {
              stack.push(ch)
          }
      }
      return stack.length === 0
   };