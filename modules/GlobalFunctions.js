// Global Functions
function addReminder(date, text) {
  var users = Users;
  var indexOf = 0;
  for(var user of users){
    if (user.index == indexOf)
    {
      break;
    }
    else{
      indexOf = indexOf + 1;
    }
  }
  var newReminder = {};
  newReminder.date = date;
  newReminder.text = text;
  if(users[indexOf].reminders){
    users[indexOf].reminders.push(newReminder);
  }
  else{
    users[indexOf].reminders = [];
    users[indexOf].reminders.push(newReminder);
  }
}

