var contacts;

function ImportContacts(){
  contacts = kony.contact.find('*', true);
  data = [];
  for(var i = 0; i < contacts.length; i++)
    data.push([i, contacts[i].firstname]);
  frmSearchContacts.chkbx.masterData = data;
}

function search_contacts(){
  var i = 0;
  data = [];
  for(var contact of contacts){
    var firstname = contact.firstname;
    var number = contact.number;
    if(firstname != null && frmSearchContacts.searchInput != null && frmSearchContacts.searchInput.text != null){
      if(firstname.toLowerCase().indexOf(frmSearchContacts.searchInput.text.toLowerCase()) > 0){
        data.push([i,  firstname ]);
      }
    }
    i++;
  }
  frmSearchContacts.chkbx.masterData = data;
}

function add_contacts(){
  for(var i = 0; i < frmSearchContacts.chkbx.selectedKeys.length; i++){
    for(selectedValue of frmSearchContacts.chkbx.selectedKeyValues){
      var newUser = {};
      newUser.firstName = selectedValue.name;
      newUser.phone = selectedValue.mobile;
      Users.push(newUser);
    }
  }
}
