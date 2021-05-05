/*
var namesArr = []

btnDisplay.onclick = function() {
  lstDisplay.clear()
  query = "SELECT name FROM customer ORDER BY name ASC;"
  req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=" + netID + "&pass=" + pw + "&database=" + netID + "&query=" + query)

  if (req.status == 200) { //transit trip worked. 
    results = JSON.parse(req.responseText)
    if (results.length == 0)
      console.log('There are no names in database')
    else {
      // store results values into new array as string
      for (i = 0; i < results.length; i++) {
        namesArr.push(results[i].toString())
        lstDisplay.addItem(namesArr[i])
      }
    } // end if else
  } else // transit didn't work
    console.log(`Error code: ${req.status}`)
}

lstDisplay.onclick = function(x) {
  
  let deleteName = namesArr[x]
  
  let found = false
  
  for (i = 0; i < namesArr.length; i++) {
    if (deleteName == namesArr[i]) {
      found = true
      break
    }
  }
  if (found == false)
    console.log('That name is not in the database')
  else if (found == true) {
    
    query = "DELETE FROM customer WHERE name= '" + deleteName + "'"    //query = “DELETE FROM customer WHERE name = ‘” + chosenOne + “’”
    req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=" + netID + "&pass=" + pw + "&database=" + netID + "&query=" + query)
    
    if (req.status == 200)
      console.log(req.responseText)
      if (req.responseText == 500)
        console.log(`You have deleted ${deleteName}`)
        
      else 
        console.log(`There was a problem deleting ${namesArr[x]} from the database.`)
  } else
    console.log(`Error code: ${req.status}`)
}

btnRefresh.onclick=function(){
  location.reload()
}
*/