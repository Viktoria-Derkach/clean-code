// expected side effect
function connectDatabase() {
  //side effect
  const didConnect = database.connect();
  if (didConnect) {
    return true;
  } else {
        //side effect
    console.log('Could not connect to database!');
    return false;
  }
}

function determineSupportAgent(ticket) {
  if (ticket.requestType === 'unknown') {
    return findStandardAgent();
  }
  return findAgentByRequestType(ticket.requestType);
}

 //unexpected side effect
function isValid(email, password) {
  if (!email.includes('@') || password.length < 7) {
     //side effect
    console.log('Invalid input!');
    return false;
  }
  return true;
}
