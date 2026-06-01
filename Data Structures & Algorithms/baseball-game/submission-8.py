class Solution:
    def calPoints(self, operations: List[str]) -> int:
        stack, res = [], 0
        for x in operations:
            if x == '+':
                res += stack[-1] + stack[-2]
                stack.append(stack[-1] + stack[-2])
            elif x == 'D':
                res += (2 * stack[-1])
                stack.append(2 * stack[-1])
            elif x == 'C':
                res -= stack.pop()
            else:
                res += int(x)
                stack.append(int(x))

        return res