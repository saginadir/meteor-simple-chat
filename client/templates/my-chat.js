// counter starts at 0
Template.myChat.helpers({
  messages: Messages.find({})
});

Template.myChat.events({
  'submit .submit-new-message': (e) => {
    e.preventDefault();

    let message = {
      value: e.target.message.value,
      createdAt: new Date(),
    };

    Messages.insert(message);

    e.target.message.value = '';
  }
});

