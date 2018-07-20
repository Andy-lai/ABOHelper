function searchOnClick() {
	var users = Users;
  
  	data = [
 [
   {lblSearchHeader:"Users"},
             []
 ],
];
  
  for(i = 0; i < 9; i++){
    firstName = users[i].firstName;
    if(firstName != null && frmSearch.searchInput != null && frmSearch.searchInput.text != null)
    if(firstName.toLowerCase().indexOf(frmSearch.searchInput.text.toLowerCase()) > 0){
    	data[0][1].push({ lblSearchContent:  firstName});
    }
  }
  
 	frmSearch.sgmtSearchResults.setData(data);
}
