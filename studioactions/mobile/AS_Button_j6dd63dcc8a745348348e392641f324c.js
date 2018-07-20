function AS_Button_j6dd63dcc8a745348348e392641f324c(eventobject) {
    function searchOnClick() {
        var categories = {
            'Users': Users,
            'Tags': Tags,
            'Groups': Groups,
            'Products': Products
        };
        data = [];
        var i = 0;
        for (var category in categories) {
            data.push([{
                    lblSearchHeader: category
                },
                []
            ]);
            for (var item of categories[category]) {
                firstName = item.firstName;
                if (firstName != null && frmSearch.searchInput != null && frmSearch.searchInput.text != null) {
                    if (firstName.toLowerCase().indexOf(frmSearch.searchInput.text.toLowerCase()) > 0) {
                        data[i][1].push({
                            lblSearchContent: firstName
                        });
                    }
                }
                tag_name = item.tag;
                if (tag_name != null && frmSearch.searchInput != null && frmSearch.searchInput.text != null) {
                    if (tag_name.toLowerCase().indexOf(frmSearch.searchInput.text.toLowerCase()) > 0) {
                        data[i][1].push({
                            lblSearchContent: tag_name
                        });
                    }
                }
                group = item.group;
                if (group != null && frmSearch.searchInput != null && frmSearch.searchInput.text != null) {
                    if (group.toLowerCase().indexOf(frmSearch.searchInput.text.toLowerCase()) > 0) {
                        data[i][1].push({
                            lblSearchContent: group
                        });
                    }
                }
                product = item.product;
                if (product != null && frmSearch.searchInput != null && frmSearch.searchInput.text != null) {
                    if (product.toLowerCase().indexOf(frmSearch.searchInput.text.toLowerCase()) > 0) {
                        data[i][1].push({
                            lblSearchContent: product
                        });
                    }
                }
            }
            i++;
        }
        frmSearch.sgmtSearchResults.setData(data);
    }
}