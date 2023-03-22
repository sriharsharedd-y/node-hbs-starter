const data = {
    title: 'Node Handlebars UI',
    heading: 'Welcome to the home page of a server side rendered webpage with node.js using handle bars',
    className: "testClass",
    items: ['Hello', 'World', '!', 'This is just a sample of what node.js and HBS can do'],
    pageLink: '/page2',
    linkText: 'Take me to an other page rendered using the same template'
};

const data2 = {
    title: 'Node Handlebars UI',
    heading: 'Welcome to the second page!',
    className: "testClass2",
    items: ['What a wonderful way','to re-use the code'],
    pageLink: '/page3',
    linkText: 'Again!'
};

const data3 = {
    title: 'Node Handlebars UI again',
    heading: 'Using the same template again',
    className: "testClass3",
    items: ['And...','Another one'],
    pageLink: 'https://tinyurl.com/muwucar8',
    linkText: 'Click me!'
};

module.exports.data = data;
module.exports.data2 = data2;
module.exports.data3 = data3;