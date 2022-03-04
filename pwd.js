
//module.exports = process.stdout.write('prompt > ');
module.exports =  function(){
     process.stdout.write('You typed: ' + process.cwd());
     process.stdout.write('\nprompt > ');
}
