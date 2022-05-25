/*
输入一个链表的头节点，从尾到头反过来返回每个节点的值（用数组返回）。


示例 1：
输入：head = [1,3,2]
输出：[2,3,1]

var reversePrint = function (head) {
    // TODO

}
 */

// 遍历链表，将每个元素从数组头部插入，实现倒序输出
const reversePrint = function (head) {
    let nums = []
    let node = head
    //遍历链表
    while (node !== null) {
        nums.unshift(node.val)
        node = node.next
    }
    return nums
}
