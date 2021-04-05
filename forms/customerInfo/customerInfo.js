let query = ''
let req = {}
let netID = 'rwb12128'
let pw = 'Speedyrwb645'
let results = []
let stateArr = []
let stateLetters = []

customerInfo.onshow = function() {
  drpStates.clear()
  query = "SELECT DISTINCT state FROM customer ORDER BY state ASC;"
  req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=" + netID + "&pass=" + pw + "&database=" + netID + "&query=" + query)

  if (req.status == 200) { //transit trip worked. 
    results = JSON.parse(req.responseText)
    if (results.length == 0)
      console.log('There are no states in database')
    else {
      // store results values into new array as string
      for (i = 0; i < results.length; i++) {
        stateArr.push(results[i].toString())
        drpStates.addItem(stateArr[i])
      }
    } // end if else
  } else // transit didn't work
    console.log(`Error code: ${req.status}`)
}


drpStates.onclick = function(s) {
  if (typeof(s) == 'object')
    return
  else {
    lstEmployees.clear()
    drpStates.value = s

    //new query
    query = "SELECT name, state FROM customer GROUP BY state ASC;"
    req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=" + netID + "&pass=" + pw + "&database=" + netID + "&query=" + query)

    if (req.status == 200) { //transit trip worked. 
      results = JSON.parse(req.responseText)
      if (results.length == 0)
        console.log('There are no names or states in the database')
        
      else {

        for (i = 0; i < results.length; i++) 
          stateLetters.push(results[i].toString())

        for (i = 0; i < results.length; i++) {
          let letters = stateLetters[i].slice(-2)
          
          if (letters == s)
            lstEmployees.addItem(stateLetters[i])
        }
      }
    } else // transit didn't work
      console.log(`Error code: ${req.status}`)
  }
}