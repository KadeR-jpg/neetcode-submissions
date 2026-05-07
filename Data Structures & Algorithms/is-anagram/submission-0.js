class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        console.log(t.split("").sort().join(""))
        console.log(s.split("").sort())
        return s.split("").sort().join("") === t.split("").sort().join("")
    }
}
