def tribonacci(signature, n):
    if n < 3:
        return signature[0:n]
    
    for i in range(3, n):
        signature.append(signature[-1] + signature[-2] + signature[-3])
        
    return signature
