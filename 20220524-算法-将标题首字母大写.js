/*
给你一个字符串 title ，它由单个空格连接一个或多个单词组成，每个单词都只包含英文字母。请你按以下规则将每个单词的首字母 大写 ：

如果单词的长度为 1 或者 2 ，所有字母变成小写。
否则，将单词首字母大写，剩余字母变成小写。
请你返回 大写后 的 title 。


示例 1：
输入：title = "capiTalIze tHe titLe"
输出："Capitalize The Title"
解释：
由于所有单词的长度都至少为 3 ，将每个单词首字母大写，剩余字母变为小写。


示例 2：
输入：title = "First leTTeR of EACH Word"
输出："First Letter of Each Word"
解释：
单词 "of" 长度为 2 ，所以它保持完全小写。
其他单词长度都至少为 3 ，所以其他单词首字母大写，剩余字母小写。


示例 3：
输入：title = "i lOve leetcode"
输出："i Love Leetcode"
解释：
单词 "i" 长度为 1 ，所以它保留小写。
其他单词长度都至少为 3 ，所以其他单词首字母大写，剩余字母小写。


var capitalizeTitle = function (title) {
    // TODO
};
 */

const capitalizeTitle1 = function (title) {
    // 1）状态初始化：const wordList = title.split(' '), l = wordList.length; let resStr = '' 。
    const wordList = title.split(' '),
        l = wordList.length;
    let resStr = '';

    // 2）核心：遍历 wordList 。
    for (let i = 0; i < l; i++) {
        let word = wordList[i];
        // 2.1）若 当前word的长度小于 3，则 将word里的所有字符串转成小写。
        if (word.length < 3) {
            word = word.toLowerCase();
        }
        // 2.2）若 当前word的长度大于 3，则 将word里的首字母大写、剩余的全小写。
        else {
            word = word.toLowerCase();
            word = word[0].toUpperCase() + word.slice(1);
        }
        // 2.3）resStr 后面，拼上 word + ' ' 。
        resStr += word + ' ';
    }

    // 3）resStr 后面，去掉多余的 ' ' 。
    resStr = resStr.slice(0, resStr.length - 1);

    // 4）返回结果 resStr 。
    return resStr;
};




// 方法：
// 1）通过 字符串的split 方法，按照 空格 将字符串 title 分割成数组。
// 2）通过 数组的reduce 方法，不断依据 cur值、更新acc值（别忘了有 return ！）。
// 3）去除末尾多余的 ' '。
const capitalizeTitle2 = function (title) {
    return title.split(' ').reduce((acc, cur) => {
        return acc += ((cur.length < 3 ? (cur.toLowerCase()) : (cur[0].toUpperCase() + cur.slice(1).toLowerCase())) + ' ');
    }, '').slice(0, -1);
}
