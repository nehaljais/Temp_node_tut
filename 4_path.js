const path=require('path')

//console.log(path.sep);

const resultedpath=path.join('content','subfolder','nested')

console.log(resultedpath);

const base=path.basename(resultedpath)

//console.log(base);

const absolute=path.resolve(__dirname,'content','subfolder','nested')

console.log((absolute));