var babyNames = ['Liam','Olivia','Emma','Noah','Ava','Elijah','Oliver','Sophia','Amelia','Lucas','Isabella','Mason','Ethan','Mia','Charlotte','Mateo','James','Luna','Harper','Logan']

babyNames.onshow=function(){
selBaby.clear()
  for (i=0;i<babyNames.length;i++)
    selBaby.addItem(babyNames[i])
}