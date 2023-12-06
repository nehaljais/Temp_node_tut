const { log } = require('console')
const { readFile, writeFile } = require('fs')

const read = readFile('./content/Samplefile.txt', 'utf-8', (err, result) => {
    if (err) {
        log(err)
        return
    }
    log(result)
    const read2 = readFile('./content/subfolder/Samplefile2.txt', 'utf-8', (err, result1) => {
        if (err) {
            log(err)
            return
        }
        log(result1)
        const write = writeFile('./content/subfolder/resultfile.txt', `This is the result file:${result} and ${result1}`, (err, result) => {
            log(result)
        })
    })
})

log(read + "---")