const [ binName, filePath, ...args ] = process.argv
const result = args.reduce((total, arg) => total + Number(arg), 0)

console.log(result)
