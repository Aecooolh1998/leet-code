n = [1,2,3,4,5,6]
t = 11

def two_sum(nums, target):
    """
    :type nums: List[int]
    :type target: int
    :rtype: List[int]
    """
    d = {}
    for i, num in enumerate(nums):
        m = target - num
        if m in d:
            return [d[m],i]
        else:
            d[num]=i

print(two_sum(n, t))