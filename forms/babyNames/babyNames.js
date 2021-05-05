
let names = ['Liam','Olivia','Emma','Noah','Ava','Elijah','Oliver','Sophia','Amelia','Lucas','Isabella','Mason','Ethan','Mia','Charlotte','Mateo','James','Luna','Harper','Logan']
let favNames = []

babyNames.onshow=function(){
  selBaby.clear()
  for (i=0;i<names.length;i++)
    selBaby.addItem(names[i])
}
btnAdd.onclick=function(){
  if(favNames.length >= 5){
    alert('you can only add 5 names')
  } else {
    favNames.push(selBaby.value)
    console.log(favNames)
  }
}

btnFavNames.onclick=function(){
  ChangeForm(favBabyNames)
}
