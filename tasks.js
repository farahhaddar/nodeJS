
/**
 * Starts the application
 * This is the function that is run when the app starts
 * 
 * It prints a welcome line, and then a line with "----",
 * then nothing.
 *  
 * @param  {string} name the name of the app
 * @returns {void}
 */
function startApp(name){
  process.stdin.resume();
  process.stdin.setEncoding('utf8');
  process.stdin.on('data', onDataReceived);
  console.log(`Welcome to ${name}'s application!`)
  console.log("--------------------")
}


/**
 * Decides what to do depending on the data that was received
 * This function receives the input sent by the user.
 * 
 * For example, if the user entered 
 * ```
 * node tasks.js batata
 * ```
 * 
 * The text received would be "batata"
 * This function  then directs to other functions
 * 
 * @param  {string} text data typed by the user
 * @returns {void}
 */
function onDataReceived(text) {
  console.log(text)
  x=text.replace('\n'," ");
  x=x.trim();
  x=x.split(" ");
  if (x[0] === 'quit' || x[0] === 'exit' ) {
    quit();
  }
  else if(x[0] === 'hello'){
    hello(x[1]);
  }
  else if(x[0] === 'help'){
      help()
  }else if(x[0] === 'list'){
      list();
  }else{
    unknownCommand(x[0]);
  }
}


/**
 * prints "unknown command"
 * This function is supposed to run when all other commands have failed
 *
 * @param  {string} c the text received
 * @returns {void}
 */
function unknownCommand(c){
  console.log('unknown command: "'+c.trim()+'"')
}

function list(){
  tasks=['feed the cat','watch a movie','do nodejs task'];
  for( var i=0; i<tasks.length; i++){
  console.log(i +"-"+ tasks[i]);
  }
}










/**
 * Says hello
 *
 * @returns {void}
 */
function hello(c){
  if(c!=null){
    console.log('hello'+" "+c+" "+'!')
  }else{
  console.log('hello'+" "+c+" "+'!')
  console.log('hello!')}
}


/**
 * Exits the application
 *
 * @returns {void}
 */
function quit(){
  console.log('Quitting now, goodbye!')
  process.exit();
}
/**
 * prints all possible commands a user can use 
 *
 * @returns {void}
 */
function help() {
  console.log("All Commands: \n hello>>prints [hello!] if you enter only hello and prints [hello name !] if you enter hello plus your name name \n help>>prints all possible commands\n exit>> quite the appliction\n quit >>same as exit quit the application ");
}











// The following line starts the application
startApp(" Farah haddar")
