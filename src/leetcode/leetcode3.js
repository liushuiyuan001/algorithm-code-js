// 367. 有效的完全平方数
/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function(num) {
      if (num <= 1) {
          return true
      }
      function helper(num, l,r) {
             let mid = parseInt((l + r)/2)
             if (mid * mid === num) {
                 return  true
             } else if(r - l == 1) {
                 return  false
             } else if(mid * mid < num) {
                 return helper(num,mid,r)
             } else {
                 return helper(num,l,mid)
             } 
      }
 
      return helper(num, 0, num)
   
 };

//  371. 两整数之和
/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var getSum = function(a, b) {
      while(b !== 0) {
          let temp = a ^ b
          b =  (a & b ) << 1
          a = temp
      }
      return a
  };

/** 
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	            -1 if num is lower than the guess number
 *			             1 if num is higher than the guess number
 *                       otherwise return 0
 * var guess = function(num) {}
 */

/**
 * @param {number} n
 * @return {number}
 */
// 374. 猜数字大小
var guessNumber = function(n) {
      function helper(l,r) {
          if (guess(l) === 0) {
              return l
          }
          if (guess(r) === 0) {
              return r
          }
          let mid = parseInt((l + r)/2)
          if(guess(mid) === 0) {
              return mid
          } else if(guess(mid) === -1) {
              return helper(l,mid)
          } else {
              return helper(mid,r)
          }
      }
      return helper(0,n)
  };

  /**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
// 383. 赎金信
var canConstruct = function(ransomNote, magazine) {
      const ransomNoteList = ransomNote.split('')
      const magazineList = magazine.split('')
      let hash = {}
      for(let mag of  magazineList) {
          if(hash[mag]) {
              hash[mag] = hash[mag] + 1
          }else{
              hash[mag] = 1
          }
      }
      for(let ransom of  ransomNoteList) {
          if(!hash[ransom]) {
              return false
          }else {
              hash[ransom] = hash[ransom] - 1
          }
      }
      return true
  };

  /**
 * @param {string} s
 * @return {number}
 */
// 387. 字符串中的第一个唯一字符
var firstUniqChar = function(s) {
      let hash = {}
      for(let i = 0; i < s.length; i++) {
          if(!hash[s[i]]) {
             hash[s[i]] = 1
          } else {
             hash[s[i]] += 1
          }
      }
      for(let i = 0; i < s.length; i++) {
          if(hash[s[i]] === 1) {
              return i
          }
      }
      return -1
   };

/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
// 389. 找不同
// 给定两个字符串 s 和 t，它们只包含小写字母。
// 字符串 t 由字符串 s 随机重排，然后在随机位置添加一个字母。
// 请找出在 t 中被添加的字母。
var findTheDifference = function(s, t) {
      let ant = t[t.length - 1].charCodeAt(0)
      for(let i = 0; i < s.length; i++) {
          ant ^= s[i].charCodeAt(0)
          ant ^= t[i].charCodeAt(0)
      }
      return String.fromCharCode(ant)
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
// 404. 左叶子之和
var sumOfLeftLeaves = function(root) {
      function isLeaf(node) {
         return !node.left && !node.right
      }
      function helper(node) {
          let result = 0
          if (node.left) {
              if (isLeaf(node.left)) {
                 result += node.left.val
              } else {
                 result += helper(node.left) 
              }
          }
          if(node.right && !isLeaf(node.right)) {
              result += helper(node.right)
          }
          return result
      }
      if(!root) {
         return 0
      }
      return helper(root)
 };
 
 /**
 * @param {number} n
 * @return {string[]}
 */
// 412. Fizz Buzz
var fizzBuzz = function(n) {
      let result = []
      for(let i = 1; i <= n; i++) {
  
          if(i % 3 === 0 && i % 5 === 0) {
             result.push('FizzBuzz')
             continue
          }
          if( i % 3 === 0 ) {
             result.push('Fizz')
             continue
          }
          if( i % 5 === 0) {
             result.push('Buzz')
             continue
          }
          result.push(i + '')
  
      }
      return result
  };

  /**
 * @param {number[]} nums
 * @return {number}
 */
// 414. 第三大的数
var thirdMax = function(nums) {
      var arr = [...new Set(nums)].sort((a, b) => b - a);
      return arr.length >=3 ? arr[2] : arr[0]
};

/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
// 415. 字符串相加
var addStrings = function(num1, num2) {
      let i = num1.length - 1
      let j = num2.length - 1
      let s = ''
      let have = false
      while(i >= 0 || j >= 0) {
            let temp = 0
            if (num1[i]) {
                temp += parseInt(num1[i])
            }
            if (num2[j]) {
                temp += parseInt(num2[j])
            }
            if(have) {
              temp = temp + 1
            }
            if(temp > 9) {
              temp = temp - 10
              have = true
            } else {
              have = false
            }
            s = temp + '' + s  
            i--
            j--    
      }
      if (have) {
          s = '1' + s
      }
      
      return s
  };

  /**
 * @param {string} s
 * @return {number}
 */
// 434. 字符串中的单词数
var countSegments = function(s) {
    
      return s.split(' ').filter(item => item).length
  };

/**
 * @param {number} n
 * @return {number}
 */
// 441. 排列硬币
var arrangeCoins = function(n) {
      // an = a1 + (n-1)*d
      // Sn=n(a1+an)/2=na1+n(n-1)d/2=dn^2/2+(a1-d/2)n
      // Sn=n(a1+an)/2
      //   =n(a1 + (a1+(n-1)*d))/2
      //   =n(2a1 + n(n-1)*d)/2
      //   =na1 +n(n-1)*d / 2
      //   =na1 + dn^2/2-nd/2
      //   =dn^2/2 + n(a1-d/2)
      if (n < 2) {
        return n
      }
      
      let k = 0
      while(k * (k+1) / 2 < n) {
          k++
      }
      if (k * (k - 1)/2 + k > n){
          return k - 1
      } else {
          return k
      }
};

/**
 * @param {number[]} nums
 * @return {number[]}
 */
// 448. 找到所有数组中消失的数字
var findDisappearedNumbers = function(nums) {

      for(let num of nums) {
          const absNum = Math.abs(num);
          if (nums[absNum - 1] > 0) {
              nums[absNum - 1] *= -1;
          }
      }
  
      return nums.map((n,idx) => {
          return n < 0 ? 0 : idx + 1
      }).filter(n => n > 0)
  };

  /**
 * @param {number[]} nums
 * @return {number}
 */
// 453. 最小移动次数使数组元素相等
var minMoves = function(nums) {
      let count = 0;
      const min = Math.min(...nums);
      nums.forEach(val=>{
          count += (val-min)
      })
      return count
  };

/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
// 455. 分发饼干
var findContentChildren = function(g, s) {
      g.sort((a,b) => a - b)
      s.sort((a,b) => a - b)
   
      let count = 0
      let j = 0
      for(let i = 0; i < g.length; i++) {
         while(j < s.length) {
             if(s[j] - g[i] >= 0) {
               count++
               j++
               break
             }
           j++
         }
      }
      return count
   };


   /**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
// 461. 汉明距离
var hammingDistance = function(x, y) {
      let xOne = x.toString(2)
      let yOne = y.toString(2)
      let count = 0
      let k = 0
  
      const xLen = xOne.length
      const yLen = yOne.length
      if(xLen - yLen > 0) {
          for(let i = 0; i < (xLen - yLen) ;i++) {
              yOne = '0' + yOne
          }
      }
      if(xLen - yLen < 0) {
          for(let i = 0; i < (yLen - xLen);i++) {
              xOne = '0' + xOne
          }
      }
  
      while(k < xOne.length){
          const xItem = xOne[k]
          const yItem = yOne[k]
          if (xItem !== yItem) {
              count++
          }
          k++
      }
      return count
  };
