function searchOnClick() {
	var users = Users;
  	var groups = Groups;
    var tags = Tags;
  	var products = Products;
  
  	var categories = {'Users':users,'Tags':tags,'Groups':groups,'Products':products};
  
  	data = [
 		
	];
  
  var i = 0;
  
	for(var category in categories){
      data.push([
   			{lblSearchHeader:category},
   			[]
 		]);
    	for(var item in category){
    		firstName = item.firstName;
    		if(firstName != null && frmSearch.searchInput != null && frmSearch.searchInput.text != null){
    		if(firstName.toLowerCase().indexOf(frmSearch.searchInput.text.toLowerCase()) > 0){
    			data[i][1].push({ lblSearchContent:  firstName});
    		}
            tag = item.tag;
    		if(tag != null && frmSearch.searchInput != null && frmSearch.searchInput.text != null){
    		if(tag.toLowerCase().indexOf(frmSearch.searchInput.text.toLowerCase()) > 0){
    			data[i][1].push({ lblSearchContent:  tag});
    		}
        }
      }
  }
      i++;
    }
  
 	frmSearch.sgmtSearchResults.setData(data);
}
