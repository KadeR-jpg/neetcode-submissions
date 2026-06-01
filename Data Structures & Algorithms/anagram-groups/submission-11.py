class Solution:
    def groupAnagrams(self, strs: List[str]) -> List[List[str]]:
        res = defaultdict(list)
        for s in strs:
            count = [0] * 26
            key = ''.join(sorted(s))
            res[key].append(s)

        return list(res.values())
        