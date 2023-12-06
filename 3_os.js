const os=require('os')

const user=os.userInfo()

//console.log(user)

//console.log(`my uptime is ${os.uptime}seconds` );

const os_details={
    type:os.type(),
    release:os.release(),
    totalmem:os.freemem(),
    freemem:os.freemem()
}
console.log(os_details);