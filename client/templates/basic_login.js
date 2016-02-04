Template.basicLogin.events({
    'submit .basic-login': (e) => {
        e.preventDefault();

        Session.set('username',e.target.username.value);
        Session.set('userColor',createRandomColor());
    }
});

let createRandomColor = () => {
    let r = Math.floor((Math.random() * 255) + 1).toString(16);
    let g = Math.floor((Math.random() * 255) + 1).toString(16);
    let b = Math.floor((Math.random() * 255) + 1).toString(16);

    if(r.length < 2) r = '0'+r;
    if(g.length < 2) g = '0'+g;
    if(b.length < 2) b = '0'+b;

    return r+g+b;
};