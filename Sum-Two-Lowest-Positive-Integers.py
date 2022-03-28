def sum_two_smallest_numbers(numbers):
    Min1 = min(numbers)
    numbers.remove(Min1)
    Min2 = min(numbers)
    return Min1 + Min2
