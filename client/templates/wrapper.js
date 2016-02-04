Template.wrapper.helpers({
    isSetUser: () => {
        return !!Session.get('username');
    }
});