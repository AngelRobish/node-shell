const pwd = require(`./pwd`);
const ls = require('./ls')
const cat = require('./cat')

process.stdout.write('prompt > ');
process.stdin.on('data', (data)=>{
  const cmd = data.toString().trim();
   if (cmd == 'pwd') {
    pwd()
   }
   else if(cmd == 'ls'){
     ls()
   }
   else if(cmd.includes('cat')){
     let fileName = cmd.split(" ").slice(1).join("");
     cat(fileName)
     console.log(cmd)
   }

 })
