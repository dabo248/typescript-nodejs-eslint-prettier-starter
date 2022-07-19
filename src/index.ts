// import { readFile, readFileSync } from 'fs'
// import { resolve } from 'path'

// console.log(readFileSync.toString())
// console.log(readFile.toString())

// console.log(resolve.toString()
// )

console.log('Hello World')

await Promise.resolve(true)

const greet = (name: string) => {
    const list = [4, 5, 6]

    for (const i in list) {
        console.log(i) // "0", "1", "2",
    }
    console.log('Hello ' + name)
}

greet('David')

const number = 12
console.log(number)
