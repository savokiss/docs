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

## 链表
### 环形链表 - [leetcode-141](https://leetcode-cn.com/problems/linked-list-cycle/)
```js
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
function hasCycle(head) {
    let fast = head
    let slow = head
    while (slow && fast && fast.next) {
        fast = fast.next.next
        slow = slow.next
        if (fast === slow) {
            return true
        }
    }
    return false
};
```

## 排序
### 快排
```js
// 快速排序 http://www.ruanyifeng.com/blog/2011/04/quicksort_in_javascript.html
// 1. 在数据集之中，选择一个元素作为“基准”（pivot）
// 2. 所有小于“基准”的元素， 都移到“基准”的左边；所有大于“基准”的元素，都移到“基准”的右边。
// 3. 对"基准"左边和右边的两个子集，不断重复第一步和第二步，直到所有子集只剩下一个元素为止。

function quickSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }
  var pivotIndex = Math.floor(arr.length / 2);
  var pivot = arr.splice(pivotIndex, 1)[0];
  var left = [];
  var right = [];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }
  return quickSort(left).concat([pivot], quickSort(right));
}
```

## 杂项
### 两数之和 - [leetcode-001](https://leetcode-cn.com/problems/two-sum/)
```js
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
function twoSum (nums, target) {
    let hash = {}
    let res = []
    for (let i = 0;i<nums.length;i++) {
        let num1 = nums[i]
        let num2 = target - num1
        if (hash[num2] !== undefined) {
            res.push(i, hash[num2])
            return res
        }
        hash[num1] = i
    }
}
```