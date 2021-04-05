let query = ''
let req = {}
let netID = 'rwb12128'
let pw = 'Speedyrwb645'
let results = []
let stateArr = []

customerInfo.onshow = function() {
  query = "SELECT state FROM customer"
  req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=" + netID + "&pass=" + pw + "&database=" + netID + "&query=" + query)
console.log(req)

  if (req.status == 200) { //transit trip worked. 
    results = JSON.parse(req.responseText)
    if (results.length == 0)
      console.log('There are no states in database')
    else {
      // store results values into new array as string
      for (i=0;i<results.length;i++)
        stateArr.push(results[i].toString())
      
      var state = ''
      for (i = 0; i < stateArr.length; i++) {
        state = stateArr.includes(stateArr[i], i + 1)
        console.log(state)
        if (state == false)
          drpStates.addItem(stateArr[i])
        }
    } // end if else
  } else // transit didn't work
    console.log(`Error code: ${req.status}`)
}
