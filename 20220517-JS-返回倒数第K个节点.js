/*
实现一种算法，找出单向链表中倒数第 k 个节点。返回该节点的值。

注意：本题相对原题稍作改动

示例：

输入： 1->2->3->4->5 和 k = 2
输出： 4


var kthToLast = function (head, k) {
    // TODO
}
 */

// 先反转链表的同时，next计数，next个数达到k，直接返回
const kthToLast = function (head, k) {
    let pre = null;
    let cur = head;
    let count = 0;

    while (cur) {
        const next = cur.next;
        cur.next = pre;
        pre = cur;
        cur = next;
    }

    while (pre) {
        count++;
        if (count === k) {
            return pre.val;
        }
        pre = pre.next;
    }
}
