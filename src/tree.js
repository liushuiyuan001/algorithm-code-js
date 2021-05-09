function TreeNode(val) {
      this.val = val
      this.left = this.right = null
}

let  treeArr = [1,2,3,4,5,6,7]
function getTreeNode(i) {
      let node = new TreeNode()
      node.val = treeArr[i]

      if (2*i + 1 <= treeArr.length - 1) {
            node.left = getTreeNode(2*i + 1) 
      }
      if (2*i + 2 <= treeArr.length - 1) { 
            node.right = getTreeNode(2*i + 2) 
      }
      return node
}
let node = getTreeNode(0)
window.node = node

// 前序遍历
function preOrderTraversal(node) {
    if(!node) return
    console.log(node.val)
    preOrderTraversal(node.left)
    preOrderTraversal(node.right)
}

// 中序遍历         
// function midOrderTraversal(node) {
//     if(!node) return
//     midOrderTraversal(node.left);
//     console.log(node.val);
//     midOrderTraversal(node.right);
// }

// 后序遍历
// function postOrderTraversal(node){
//       if(!node) return;
//       postOrderTraversal(node.left);
//       postOrderTraversal(node.right);
//       console.log(node.val);
// }
// postOrderTraversal(node)

// 二叉树非递归前序遍历
function stackTraversal(node) {
   let stack  = []
   let treeNode = node
   while(stack.length !== 0 || treeNode) {
         while(treeNode) {
            console.log(treeNode.val)
            stack.push(treeNode)
            treeNode = treeNode.left
        }
        // 如果节点没有左孩子 则弹出栈节点 访问节点右孩子
        if(stack.length) {
            treeNode = stack.pop()
            treeNode = treeNode.right
        }
   }
}
// preOrderTraversal(node)
// console.log('================================')
// stackTraversal(node)

//  二叉树层序遍历
function levelOrderTraversal(node) {
      let queue = [node]
      while(queue.length) {
		const treeNode = queue.shift()
		console.log(treeNode.val)
		treeNode.left && queue.push(treeNode.left)
		treeNode.right && queue.push(treeNode.right)
      }
}
levelOrderTraversal(node)