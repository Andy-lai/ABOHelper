function AS_Button_fe507ad4490e4dd5a265c97a6477ef29(eventobject) {
    var groups = Groups;
    for (groupObj of groups) {
        if (groupObj.group.equals(txtNewGroup.text)) {
            showConfirmationPopup("A group with this name already exists.");
        }
    }
}