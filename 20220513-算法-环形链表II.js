/*
给定一个链表的头节点  head ，返回链表开始入环的第一个节点。 如果链表无环，则返回 null。
如果链表中有某个节点，可以通过连续跟踪 next 指针再次到达，则链表中存在环。 为了表示给定链表中的环，评测系统内部使用整数 pos 来表示链表尾连接到链表中的位置（索引从 0 开始）。如果 pos 是 -1，则在该链表中没有环。注意：pos 不作为参数进行传递，仅仅是为了标识链表的实际情况。
不允许修改 链表。


示例 1：
输入：head = [3,2,0,-4], pos = 1
输出：返回索引为 1 的链表节点
解释：链表中有一个环，其尾部连接到第二个节点。


示例 2：
输入：head = [1,2], pos = 0
输出：返回索引为 0 的链表节点
解释：链表中有一个环，其尾部连接到第一个节点。


示例 3：
输入：head = [1], pos = -1
输出：返回 null
解释：链表中没有环。


提示：
链表中节点的数目范围在范围 [0, 104] 内
-105 <= Node.val <= 105
pos 的值为 -1 或者链表中的一个有效索引
*/

// ListNode构造器，用于创建链表的每个节点
class ListNode {
    constructor(val, next) {
        this.val = (val === undefined ? 0 : val);
        this.next = (next === undefined ? null : next);
    }
}

// 生成链表
function generateLinklist(arr) {
    let head = new ListNode(arr[0]), // 初始化第一个节点作为头节点
        curr = head; // curr指针保存当前节点
    for(let i=1; i<arr.length; i++) {
        curr.next = new ListNode(arr[i]); // 创建next节点
        curr = curr.next; // curr后移一位
    }
    return head // 返回头节点
}

// 调用
const head = generateLinklist([1, 2, 3, 4]);

// 哈希表：遍历链表中的每个节点，并将它记录下来；一旦遇到了此前遍历过的节点就会判定链表中存在环
const detectCycle = function (head) {
    const visited = new Set();
    while (head !== null) {
        if (visited.has(head)) {
            return head
        }
        visited.add(head);
        head = head.next
    }
    return null
}

/*
// 快慢指针：我们使用两个指针，fast 与 slow。它们起始都位于链表的头部。随后，slow 指针每次向后移动一个位置，而 fast 指针向后移动两个位置。如果链表中存在环，则 fast 指针最终将再次与 slow 指针在环中相遇。
const detectCycle = function(head) {
    if (head === null) {
        return null;
    }
    let slow = head, fast = head;
    while (fast !== null) {
        slow = slow.next;
        if (fast.next !== null) {
            fast = fast.next.next;
        } else {
            return null;
        }
        if (fast === slow) {
            let ptr = head;
            while (ptr !== slow) {
                ptr = ptr.next;
                slow = slow.next;
            }
            return ptr;
        }
    }
    return null;
};
*/
console.log(detectCycle(generateLinklist([3,2,0,-4])))
