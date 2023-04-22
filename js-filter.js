// DESCRIPTION:
// While developing a website, you detect that some of the members have troubles logging in. Searching through the code you find that all logins ending with a "_" make problems. So you want to write a function that takes an array of pairs of login-names and e-mails, and outputs an array of all login-name, e-mails-pairs from the login-names that end with "_".

// my solution

function searchNames( logins ){
  return logins.filter(elem => elem[0].endsWith('_'))
}