// 给定两个数组 nums1 和 nums2 ，返回 它们的交集 。输出结果中的每个元素一定是 唯一 的。我们可以 不考虑输出结果的顺序 。
//
//
// 示例 1：
// 输入：nums1 = [1,2,2,1], nums2 = [2,2]
// 输出：[2]
//
//
// 示例 2：
// 输入：nums1 = [4,9,5], nums2 = [9,4,9,8,4]
// 输出：[9,4]
// 解释：[4,9] 也是可通过的
//
// 提示：
//
// 1 <= nums1.length, nums2.length <= 1000
// 0 <= nums1[i], nums2[i] <= 1000


// 两个集合：首先使用两个集合分别存储两个数组中的元素，然后遍历较小的集合，判断其中的每个元素是否在另一个集合中，如果元素也在另一个集合中，则将该元素添加到返回值

const set_intersection = function (set1, set2) {
    if (set1.size > set2.size) {
        return set_intersection(set2, set1);
    }
    const intersection = new Set();
    for (const num of set1) {
        // 循环小Set,从大Set里取值
        if (set2.has(num)) {
            intersection.add(num)
        }
    }
    return [...intersection]
};

const intersection = function (nums1, nums2) {
    const set1 = new Set(nums1)
    const set2 = new Set(nums2)
    return set_intersection(set1, set2)
}

console.log(intersection([4,9,2],[4,6,7,8,9]))

// 排序+双指针：如果两个数组是有序的，则可以使用双指针的方法得到两个数组的交集。
// 首先对两个数组进行排序，然后使用两个指针遍历两个数组。可以预见的是加入答案的数组的元素一定是递增的，为了保证加入元素的唯一性，我们需要额外记录变量表示上一次加入答案数组的元素。

// var intersection = function (nums1, nums2) {
//     nums1.sort((x, y) => x - y);
//     nums2.sort((x, y) => x - y);
//     const length1 = nums1.length, length2 = nums2.length;
//     let index1 = 0, index2 = 0;
//     const intersection = [];
//     while (index1 < length1 && index2 < length2) {
//         const num1 = nums1[index1], num2 = nums2[index2];
//         if (num1 === num2) {
//             // 保证加入元素的唯一性
//             if (!intersection.length || num1 !== intersection[intersection.length - 1]) {
//                 intersection.push(num1);
//             }
//             index1++;
//             index2++;
//         } else if (num1 < num2) {
//             index1++;
//         } else {
//             index2++;
//         }
//     }
//     return intersection;
// };
