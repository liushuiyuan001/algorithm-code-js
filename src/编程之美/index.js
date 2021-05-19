// 3.1 字符串位移包含的问题
/**
 * 字符串s1经过n次位移后 s2是否在位移后的s1内
 *
 * @param 源字符s1 [s1='']
 * @param 目标字符串 [s2='']
 */
function strStr(s1 = '', s2 = '') {
   if(s1.length === '') {
      return true;
   }
   if(s2.length === '') {
      return false;   
   }    
   // s1 经过n次翻转 得到 s1
   let len = s1.length
   for(let i = 0; i < len; i++) {
      s1 += s1[i] 
   }
   return s1.includes(s2)
}

// console.log('字符串位移包含', strStr('AABBCD','CDAA'))
// console.log('字符串位移包含', strStr('ABCD','ACBD'))

// 3.2 电话号码对应的英文单词
const c = ["","","ABC","DEF","GHI","JKL","MNO","PQRS","TUV","WXYZ"]
/**
 * 
 * @param {num} 电话号字符串 
 */
function getWordByNumberV1(num) {
   const len = num.length
   // 定义一个二维数组存储之前得到的单词
   let result = []
   // 先找到第一个字符所代表的单词
   let t = []
   for(const cc of c[num[0]]) {
         t.push(cc)
   }
   result = [t]
   for(let i = 1; i < len; i++) {
     const temp = []
     // 第i个数组成的单词等于 第i-1个数组成的单词和当前数代表的字符的线性乘积
      const arr = result[i-1]
      for (const w of arr) {
            for (const cc of c[num[i]]) {
                  const str = w + cc
                  temp.push(str)
            } 
      }
      result.push(temp) 
   }
   return result[len - 1]
}
