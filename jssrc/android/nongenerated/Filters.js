//Type your code here
function Filter(searchKey) {
    var results = [];
    if (searchKey == null) {
        return;
    }
    //search contacts
    var contacts = {};
    var users = Users;
    for (user of users) {
        if (user.firstName.indexOf(searchKey) >= 0) {
            if (contacts.contact == null) {
                contacts.contact = [];
                contacts.contact.push(user.firstName);
            } else {
                contacts.contact.push(user);
            }
        }
    }
    results.push(contacts);
    //search groups
    var groupsObj = {};
    var groupsArray = Groups;
    for (group of groupsArray) {
        if (group.group.indexOf(searchKey) >= 0) {
            if (groupsObj.group == null) {
                groupsObj.group = [];
                groupsObj.group.push(group.group);
            } else {
                groupsObj.group.push(group.group);
            }
        }
    }
    results.push(groupsObj);
    //search tags
    var tagsObj = {};
    var tagsArray = Tags;
    for (tag of tagsArray) {
        if (tag.tag.indexOf(searchKey) >= 0) {
            if (tagsObj.group == null) {
                tagsObj.tag = [];
                tagsObj.tag.push(tag.tag);
            } else {
                tagsObj.tag.push(tag.tag);
            }
        }
    }
    results.push(tagsObj);
    return results;
}