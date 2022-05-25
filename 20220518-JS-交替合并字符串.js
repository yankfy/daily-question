/*
给你两个字符串 word1 和 word2 。请你从 word1 开始，通过交替添加字母来合并字符串。如果一个字符串比另一个字符串长，就将多出来的字母追加到合并后字符串的末尾。
返回 合并后的字符串 。


示例 1：
输入：word1 = "abc", word2 = "pqr"
输出："apbqcr"
解释：字符串合并情况如下所示：
word1：  a   b   c
word2：    p   q   r
合并后：  a p b q c r


示例 2：
输入：word1 = "ab", word2 = "pqrs"
输出："apbqrs"
解释：注意，word2 比 word1 长，"rs" 需要追加到合并后字符串的末尾。
word1：  a   b
word2：    p   q   r   s
合并后：  a p b q   r   s


示例 3：
输入：word1 = "abcd", word2 = "pq"
输出："apbqcd"
解释：注意，word1 比 word2 长，"cd" 需要追加到合并后字符串的末尾。
word1：  a   b   c   d
word2：    p   q
合并后：  a p b q c   d

var mergeAlternately = function (word1, word2) {
    // TODO
};
 */

const mergeAlternately = function (word1, word2) {
    word1 = word1.split('')
    word2 = word2.split('')
    let arr = []
    if(word1.length <= word2.length){
        for (let i = 0; i < word1.length; i++) {
            arr.push(word1[i]);
            arr.push(word2[i])
        }
        arr = arr.concat(word2.slice(word1.length))
    }else{
        for (let i = 0; i < word2.length; i++) {
            arr.push(word1[i]);
            arr.push(word2[i])
        }
        arr = arr.concat(word1.slice(word2.length))
    }
    return arr.join('')
};

console.log(mergeAlternately("abcdsa","pqrs"))


// 直接while循环两个字符串，只要有一个指针没超出就继续，在内部判断只要不是undefined就拼接，直到某一个成为undefined就跳过

const mergeAlternately2 = function (word1, word2) {
    let final = ''
    let i = 0
    while (i < word1.length || i < word2.length) {
        if (word1[i]) {
            final += word1[i]
        }
        if (word2[i]) {
            final += word2[i]
        }
        i++
    }
    return final
};
