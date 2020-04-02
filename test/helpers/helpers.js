let chai = require('chai');
let chaiHttp = require('chai-http');
chai.use(chaiHttp);
let moment = require('moment')
const userName = process.env.USER;

exports.randomCode = (len) => {
    let random = 'TEST';
    const charset = "0123456789";
    for (let i = 0; i < len; i++) {
        random += charset.charAt(Math.floor(Math.random() * charset.length));
    }
    return random;
};

exports.getLoginSession = (user=userName) => {
    return chai.request('https://expresspigeontest.com')
        .post('/access/process_login')
        .redirects(0)
        .type('form')
        .send({
            'email': user,
            'secret': 'QlCsS5_Fo#Y3',
            'password': 'Ghjcnjgfhjkm_12345!'
        })
};

exports.cssLength = (css) => {
    return browser.execute(table => $(table).length, css)
}

exports.dateToTimestamp = (days) => {
    return moment.utc().add(days, 'days').startOf('day').valueOf()
}

exports.cssArray = (cssCount, css) => {
    let cssArray = []
    for (var i = 0; i < cssCount; i++) {
        let cssSelector = '#' + browser.execute((selector, count) => $(selector)[count].id, css, i)
        cssArray.push(cssSelector)
    }
    return cssArray
}
