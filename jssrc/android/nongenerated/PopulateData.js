function setActivitiesData() {
    var activities = Activities;
    data = [];
    var i = 0;
    for (var activity in categories) {
        data.push([{
                lblActivityHeaderTitle: category
            },
            []
        ]);
        for (var item of categories[category]) {
            firstName = item.firstName;
            if (firstName != null && frmSearch.searchInput != null && frmSearch.searchInput.text != null) {
                if (firstName.toLowerCase().indexOf(frmSearch.searchInput.text.toLowerCase()) >= 0) {
                    data[i][1].push({
                        lblSearchContent: firstName
                    });
                }
            }
        }
        i++;
    }
    frmSearch.sgmtSearchResults.setData(data);
}