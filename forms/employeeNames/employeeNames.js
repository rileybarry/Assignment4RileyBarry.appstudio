var namesArr = []

btnDisplay.onclick=function(){
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
    
    
  query = "SELECT * FROM customer"
  req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=" + netID + "&pass=" + pw + "&database=" + netID + "&query=" + query)
  
  if (req.status == 200) { //transit trip worked.
    allCustomerData = JSON.parse(req.responseText)
  } else  {
    console.log(`Error code: ${req.status}`)
  }
}

lstDisplay.onclick=function(){
  let deleteName = lstDisplay.value
  
  let found = false
  for (i = 0; i < allPetData.length; i++) {
        if (petNameDel == allPetData[i][1]){
            found = true
  
  query = `DELETE FROM customer WHERE name=${lstDisplay.value};`
  req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=" + netID + "&pass=" + pw + "&database=" + netID + "&query=" + query)
  if (req.status == 200) { //transit trip worked.
    alert('success')
  } else {
    console.log(`Error code: ${req.status}`)
  }
}
