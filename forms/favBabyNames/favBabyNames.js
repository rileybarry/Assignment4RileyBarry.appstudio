favBabyNames.onshow=function(){
  drpNames.clear()
  for(i=0;i<favNames.length;i++) {
    drpNames.addItem(favNames[i])    
  }
}


btnFavorite.onclick=function(){
  let finalName = drpNames.value
  lblFinal.value=`Your favorite name is ${finalName}!`
}
