class Solution:
    def calPoints(self, operations: List[str]) -> int:
        stack = []
        for x in operations:
            if x == '+':
                a = stack[len(stack) - 2] + stack[len(stack) - 1]
                stack.append(a)
            elif x == 'D':
                stack.append(stack[len(stack) - 1] * 2)
            elif x == 'C':
                stack.pop(len(stack) - 1)
            else:
                stack.append(int(x))

        return sum(stack)