const { log } = require('console')
const {readFileSync,writeFileSync}=require('fs')

const firsttxt=readFileSync('./content/Samplefile.txt','utf8')
const secondtxt=readFileSync('./content/subfolder/Samplefile2.txt','utf8')
log(firsttxt,secondtxt)

writeFileSync('./content/subfolder/resultfile.txt',`This file will have ${firsttxt} and also ${secondtxt} bhaisaur`,{flag:'a'})