# 算法相关片段
## 二叉树
### 二叉树最大深度 - [leetcode-104](https://leetcode-cn.com/problems/maximum-depth-of-binary-tree/)
```js
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *   this.val = val;
 *   this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
function maxDepth(root) {
  if (!root) {
    return 0
  }
  let leftDepth = maxDepth(root.left)
  let rightDepth = maxDepth(root.right)
  return Math.max(leftDepth, rightDepth) + 1
}
```

### 翻转二叉树 - [leetcode-226](https://leetcode-cn.com/problems/invert-binary-tree/)
```js
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *   this.val = val;
 *   this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
function invertTree (root) {
  if (root === null) {
    return null
  }
  if (root.left === null && root.right === null) {
    return root
  }
  let left = invertTree(root.left)
  let right = invertTree(root.right)
  root.left = right
  root.right = left
  return root
}
```