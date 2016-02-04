Session.setDefault('username',false);
Session.setDefault('userColor',false);

Template.myChat.helpers({

  messages: Messages.find({},{limit: 22, sort: {createdAt: 1}}),

});

Template.myChat.events({
  'submit .submit-new-message': (e) => {
    e.preventDefault();

    let message = {
      value: e.target.message.value,
      createdAt: new Date(),
      username: Session.get('username'),
      userColor: Session.get('userColor')
    };

    Messages.insert(message);

    e.target.message.value = '';
  },

  'submit .create': (e) => {
    e.preventDefault();

    Session.set('username',e.target.username.value);
    Session.set('userColor',createRandomColor());
  }
});


