process.stdout.write('prompt > ');
process.stdin.on('data', (data)=>{
  const pwd = "pwd"
  const cmd = data.toString().trim();
  process.stdout.write('You typed: ' + cmd);
  process.stdout.write('\nprompt > ');
})


