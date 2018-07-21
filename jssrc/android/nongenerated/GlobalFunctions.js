//Type your code here
function login(username, password) {
    var abos = ABOs;
    for (abo of abos) {
        if (abo.email.equals(username)) {
            if (abo.password.equals(password)) {
                return true;
            }
        }
    }
    return false;
}

function retrieveEmails(ids) {
    var users = Users;
    var emails = [];
    for (var id of ids) {
        for (var user of users) {
            if (user.index == id) {
                emails.push(user.email);
                break;
            }
        }
    }
    return emails;
}

function sendSMS(phoneNumbers, body) {
    for (var phoneNo of phoneNumbers) {
        kony.phone.sendSMS(phoneNo, body);
    }
}

function callNumberByNumber() {
    kony.phone.dial(number);
}

function callNumberById(index) {
    var users = Users;
    for (user of users) {
        if (user.index == index) {
            kony.phone.dial(user.phone);
        }
    }
}

function saveUserInformation(name, phone, email, tags, notes) {
    var users = Users;
    var user;
    for (user of users) {}
    var currentId = user.index;
    newUser = {};
    newUser.index = currentId + 1;
    newUser.firstName = name;
    newUser.phone = phone;
    newUser.email = email;
    newUser.tags = tags;
    newUser.notes = notes;
    users.push(newUser);
}

function importContactsAsProspects() {}

function getContacts() {}