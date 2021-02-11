// funtion to print nth prime number
function nthPrime(n){
    var k = 1000;
    var isPrime = new Array(k);
    
    for(let i = 2; i < isPrime.length; i++){
        isPrime[i] = true;
    }
    
    for(let i = 2; i < isPrime.length; i++){
        if(!isPrime[i]){
            continue;
        }else{
            for(let j = i * i; j < k; j = j + i){
                isPrime[j] = false;
            }
        }
    }
    
    var count = 0;
    for(let i = 2; i < isPrime.length; i++){
        if(isPrime[i]){
          count++;
          if(count === n){
            console.log(n + "th Prime number " + '(' + "< 1000" + ') is ' + i);
          }
        }
    }
}

nthPrime(5);  // call to the funtion with n