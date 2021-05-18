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
