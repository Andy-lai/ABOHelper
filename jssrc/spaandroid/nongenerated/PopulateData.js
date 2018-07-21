function setActivitiesData() {
    data = [];
    var i = 0;
    for (var activity in Activities) {
        data.push([{
                lblActivityHeaderTitle: activity
            },
            []
        ]);
        for (var item of Activities[activity]) {
            text = item.text;
            userId = item.userId;
            data[i][1].push({
                lblActivityCardBody: text,
                lblUserId: userId[0],
                btnActivityCall: "",
                btnActivityMsg: "",
                btnReminder: ""
            });
        }
        i++;
    }
    // data[i - 1][1].push({ lblActivityCardBody: "", template: null,});
    frmHome.sgmtActivities.setData(data);
}