const findMaximumSqrtNumber = (number) => {
    for (let i = number; i > 1; i --) {
        const sqrt = Math.sqrt(i)
        const isInteger = Number.isInteger(sqrt)

        if (isInteger) {
            return sqrt
        }
    }
}

const getNumbers = (number, maxSqrt) => {
    const startNumber = 2
    const numbers = new Map()

    for (let sqrt = startNumber; sqrt <= maxSqrt; sqrt++)
    {
        let large = sqrt
        let pow = 2
        
        while (true) {
            const sum = sqrt ** pow

            if (sum > number) {
                numbers.set(sqrt, { sqrt, pow: pow-1, large })
                break
            }

            large = sum
            pow++
        }
    }
    
    return Array.from(numbers.values())
}

const getLargestNumber = (numbers) => {
    const nums = numbers.map(number => number.large)
    const lastgestNumber = nums.length ? Math.max(...nums) : 1
    const count = numbers.filter(number => number.large === lastgestNumber).length
    
    return [lastgestNumber, count]
}

class Calculate {
    _number = 0
    _sqrt = 0
    _maxSqrt = 0
    _numbers = []

    constructor(number) {
        this._number = number
        this._maxSqrt = findMaximumSqrtNumber(this._number)
        this._numbers = getNumbers(this._number, this._maxSqrt)
    }

    get largestPower() {
        if (this._number === 1) {
            return [0, -1]
        }

        if (this._number < 4) {
            return [1, -1]
        }

        return getLargestNumber(this._numbers)
    }

}

const findLargestPower= (number) => {
    const cal = new Calculate(number)
    return cal.largestPower
}

const result = findLargestPower(10000000000);
console.log(result);