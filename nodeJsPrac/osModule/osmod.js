const os= require ("os");
console.log(os.arch());
console.log(os.hostname());
console.log(os.tmpdir());


const freeMemory=os.freemem();
console.log(freeMemory);