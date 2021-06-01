/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
// 242. 有效的字母异位词
var isAnagram = function(s, t) {
      if (s.length !== t.length) {
          return false
      }
      return s.split('').sort().join('') === t.split('').sort().join('')
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
 * @return {string[]}
 */
// 257. 二叉树的所有路径
var binaryTreePaths = function(root) {
      let result = [] 
      function helper(root, s) {
           if(root) {
               s += root.val
               if (!root.left && !root.right) {
                   result.push(s)
               } else {
                   s += '->'
                   helper(root.left, s)
                   helper(root.right, s)
               }
           }
       } 
   
       helper(root, '')
       return result
   };

/**
 * @param {number} num
 * @return {number}
 */
// 258. 各位相加
// 给定一个非负整数 num，反复将各个位上的数字相加，直到结果为一位数。
var addDigits = function(num) {
      return (num - 1) % 9 + 1;
  };

/**
 * @param {number} num
 * @return {boolean}
 */
// 263. 丑数
// 编写一个程序判断给定的数是否为丑数。
// 丑数就是只包含质因数 2, 3, 5 的正整数。(1也是)
var isUgly = function(num) {
      if (num <= 0) {
          return false
      }
      if (num === 1) {
          return true
      }
      if (num % 2 === 0) {
          return isUgly(num / 2)
      }
      if (num % 3 === 0) {
          return isUgly(num / 3)
      }
      if (num % 5 === 0) {
          return isUgly(num / 5)
      }
      return false
  };

  /**
 * @param {number[]} nums
 * @return {number}
 */
// 268. 缺失数字
// 输入: [3,0,1]
// 输出: 2
// 输入: [9,6,4,2,3,5,7,0,1]
// 输出: 8
var missingNumber = function(nums) {
      let n = nums.length
      let sum = (n + 1) * n / 2 
      return nums.reduce((pre, curr) => {
          return pre - curr
      }, sum)
   };

// 278. 第一个错误的版本
/**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function(isBadVersion) {

      function helper(l,r) {
          
          let mid = parseInt((l + r)/2)
          let bad = isBadVersion(mid)
          let good = isBadVersion(mid + 1)
      
          if (good && !bad) {
              return mid + 1
          } else if (good && bad) {
              return helper(l, mid)
          } else {
              return helper(mid,r)
          }
      }
      /**
       * @param {integer} n Total versions
       * @return {integer} The first bad version
       */
      return function(n) {
         return helper(0,n)
      };
  };

  /**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
// 283. 移动零
// 输入: [0,1,0,3,12]
// 输出: [1,3,12,0,0]
var moveZeroes = function(nums) {
      for(let j = 0;j < nums.length; j++ )  {
           if (nums[j] !== 0) {
               continue
           }
           for(let i = nums.length - 1; i > j; i--) {
               if (nums[i] === 0) {
                   continue
               }
   
               let temp = nums[j]
               nums[j] = nums[i]
               nums[i] = temp 
           }
       }
   };

/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
// 290. 单词规律
// 给定一种规律 pattern 和一个字符串 str ，判断 str 是否遵循相同的规律。
// 这里的 遵循 指完全匹配，例如， pattern 里的每个字母和字符串 str 中的每个非空单词之间存在着双向连接的对应规律。
// 输入: pattern = "abba", str = "dog cat cat dog"
// 输出: true
var wordPattern = function(pattern, s) {
      let patternList = pattern.split('')
      let strList = s.split(' ')
      let hashMap = {}
      if (patternList.length !== strList.length) {
          return false
      }
      if ([...new Set(patternList)].length !== [...new Set(strList)].length) {
          return false
      }
      for(let i = 0; i < patternList.length; i++) {
        let patternStr = patternList[i]
        let str = strList[i]
        if(!hashMap[patternStr]) {
            hashMap[patternStr] = str
        } else if(hashMap[patternStr] !== str) {
            return false
        }
      }
      return true
  };

  /**
 * @param {number} n
 * @return {boolean}
 */
// 292. Nim 游戏
var canWinNim = function(n) {
      return n % 4 !== 0
   };

// 303. 区域和检索 - 数组不可变
// 给定一个整数数组  nums，求出数组从索引 i 到 j  (i ≤ j) 范围内元素的总和，包含 i,  j 两点。
/**
 * @param {number[]} nums
 */
var NumArray = function(nums) {
      this.nums = nums;
  };
  
/**
 * @param {number[]} nums
 */
var NumArray = function(nums) {
      nums.reduce((pre, curr,idx) => {
          nums[idx] = pre + curr
          return pre + curr
      }, 0)
      this.nums = [0,...nums];
  };
  
  /** 
   * @param {number} i 
   * @param {number} j
   * @return {number}
   */
  NumArray.prototype.sumRange = function(i, j) {
     return this.nums[j+1] - this.nums[i]
  };
  
  /**
   * Your NumArray object will be instantiated and called as such:
   * var obj = new NumArray(nums)
   * var param_1 = obj.sumRange(i,j)
   */

//326. 3的幂
/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function(n) {
      return /^10*$/.test(n.toString(3))
};

/**
 * @param {number} num
 * @return {boolean}
 */
// 342. 4的幂
var isPowerOfFour = function(num) {
      return num > 0 && (num & (num - 1)) == 0 && (num % 3) == 1
  };

/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
// 344. 反转字符串
var reverseString = function(s) {
      let i = 0
      let j = s.length - 1
      while(i < j) {
          let temp = s[i]
          s[i] = s[j]
          s[j] = temp
          i++
          j--
      }
   };

/**
 * @param {string} s
 * @return {string}
 */
// 编写一个函数，以字符串作为输入，反转该字符串中的元音字母。
// 345. 反转字符串中的元音字母
var reverseVowels = function(s) {
      let strList = s.split('')
      let part = ['a','A','e','E','i','I','o','O','u','U']
      let i = 0
      let j = strList.length - 1
      while(i < j) {
          while(part.indexOf(strList[i]) === -1 && i < j){
              i++
          }
  
          while(part.indexOf(strList[j]) === -1 && i < j){
              j--
          }
  
  
          let temp = strList[i]
          strList[i] = strList[j]
          strList[j] = temp
          i++
          j--
      }
       return  strList.join('')
  };

//   349. 两个数组的交集
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
      let filterNums1 = new Set(nums1)
      let filterNums2 = new Set(nums2)
      let result = []
      for(let num1 of filterNums1) {
          if(filterNums2.has(num1)) {
              result.push(num1)
          }
      }
      return result
   };

// 350. 两个数组的交集 II
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
      let idxArr = []
      let result = []
      for(let n1 of nums1) {
          if(idxArr[n1]) {
             idxArr[n1] = idxArr[n1] + 1
          } else {
             idxArr[n1] = 1
          }
      }
      for (let n2 of nums2) {
          if(idxArr[n2]) {
              idxArr[n2] = idxArr[n2] - 1
              result.push(n2)
          }
      }
      return result
  };