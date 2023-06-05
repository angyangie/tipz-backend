///// TIPZ NOTE: FILE FOR AN OLD PROJECT - IT NEEDS TO BE DELETED OR RE-PUPOSED FOR TIPZ /////

export function primeNumbers(n) {
    // started our timer as soon as we enter this function
    // we start from the first prime number to avoid having to add line to check for the case of '1'
    var start = Date.now(), curr = 2, list = [2]

    function isPrime(num) {
        // no need to check numbers larger than square root of curr number - they would have to be 
        // multiplied by numbers smaller than the sqrt of curr number, which we already checked
        var sqrt = Math.sqrt(curr), i = 0
        while (i < list.length && list[i] <= sqrt) {
            // no remainder means there is a number that can exactly divide our current number = not a prime number
            if (curr % list[i] == 0) return false
            i++
        }
        return true
    }

    // we're making sure our loop doesn't run for longer than the allowed time, in milliseconds
    while ((Date.now() - start) < n*1000) {
        curr++
        if (isPrime(curr)) list.push(curr)
    }

    // we're selecting the largest number in our prime numbers list and printing it
    var largest = list[list.length - 1]

    console.log("Largest Prime Found: " + largest.toLocaleString())
    return largest
}
