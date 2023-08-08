function isPrime(num) {
    for(let i = 2, l = Math.sqrt(num); i <= l; i+= 1) {
        if(num % i === 0) {
            return false
        }
    }
    return num > 1
}



const user_arg = process.argv.slice(2)

switch (isPrime(user_arg)) {
    case true:
        console.log(`${user_arg} is prime number!`)
        break;
    case false:
        console.log(`${user_arg} is not prime number!`)
}