function TreeNode(val) {
      this.val = val
      this.left = this.right = null
}

let  treeArr = [undefined,1,2,3,4,5,6,7]
function getTreeNode(i) {
      let node = new TreeNode()
      node.val = treeArr[i]

      if (2*i <= treeArr.length - 1) {
            node.left = getTreeNode(2*i) 
      }
      if (2*i + 1 <= treeArr.length - 1) {
            node.right = getTreeNode(2*i + 1) 
      }
      return node
}
let node = getTreeNode(1)
window.node = node


// function preOrderTraversal(node) {
//     if(!node) return
//     console.log(node.val)
//     preOrderTraversal(node.left)
//     preOrderTraversal(node.right)
// }

// function midOrderTraversal(node) {
//     if(!node) return
//     midOrderTraversal(node.left);
//     console.log(node.val);
//     midOrderTraversal(node.right);
// }

function postOrderTraversal(node){
      if(!node) return;
      postOrderTraversal(node.left);
      postOrderTraversal(node.right);
      console.log(node.val);
}
postOrderTraversal(node)