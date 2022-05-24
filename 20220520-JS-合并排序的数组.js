/*
给定两个排序后的数组 A 和 B，其中 A 的末端有足够的缓冲空间容纳 B。 编写一个方法，将 B 合并入 A 并排序。

初始化 A 和 B 的元素数量分别为 m 和 n。

示例:

输入:
A = [1,2,3,0,0,0], m = 3
B = [2,5,6],       n = 3

输出: [1,2,2,3,5,6]

var merge = function (A, m, B, n) {
    // TODO
};
 */

// 把数组B放进数组A的尾部，然后直接对整个数组进行排序
const merge = function (A, m, B, n) {
    return [...A.sort((a, b) => a - b).slice(0,m),...B.sort((a, b) => a - b).slice(0,n)].sort((a, b) => a - b);
    A.splice(m, A.length - m, ...B);
    A.sort((a, b) => a - b);
    return A.slice(0,m+n)
}

console.log(merge([1,2,3,1],3,[2,5,6],3))
