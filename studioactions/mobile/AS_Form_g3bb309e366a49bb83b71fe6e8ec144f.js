function AS_Form_g3bb309e366a49bb83b71fe6e8ec144f(eventobject) {
    //frmView.sgmtConnectionViewLeft.rowTemplate.setGestureRecognizer(3,x,ConnectionGesture)
    //frmView.sgmtConnectionViewRight.rowTemplate.setGestureRecognizer(3,x,ConnectionGesture)
    function viewConnection() {
        var categories = {
            'Users': Users
        };
        dataleft = [];
        dataright = [];
        for (var category in categories) {
            var i = 0;
            for (var item of categories[category]) {
                if (i % 2 != 1) { //lblUserName.opacity = 0;
                    dataleft.push({
                        lblUserName: item.firstName,
                        lbltags: item.tags,
                        imgRem: "reminderlogo.png",
                        lblRem: "rem",
                        imgTags: "taglogo.png",
                        imgUserView: "usermanlogo.png"
                    });
                } else dataright.push({
                    lblUserName: item.firstName,
                    lbltags: item.tags,
                    imgRem: "reminderlogo.png",
                    lblRem: "rem",
                    imgTags: "taglogo.png",
                    imgUserView: "usermanlogo.png"
                });
                i++;
            }
        }
        frmView.sgmtConnectionViewLeft.setData(dataleft);
        frmView.sgmtConnectionViewRight.setData(dataright);
    }
    viewConnection();

    function ConnectionGesture(widget, gestures, context) {
        var index = {
            sectionIndex: context.sectionIndex,
            rowIndex: context.rowIndex
        }
        var aniConfig = {}
        var aniValues = {}
        var aniObj = kony
    }
}