function tribonacci(signature,n){
  if (n < 3) {
    return signature.slice(0, n);
  }
  
  for (let i = 0; i < n -3; i++) {
    signature.push(parseFloat(signature.slice(-1)) + parseFloat(signature.slice(-2)) + parseFloat(signature.slice(-3)))
  }
    
  return signature;
}
