let address = { street: 'Camino Dorado', city: 'Corregidora', zipCode: 76903 };

function showAddress(addressObj) {
    for (const key in addressObj) {
        console.log(key, addressObj[key]);
    }
}

//showAddress(address);

//Constructor
function Address(street, city, zipCode) {
    this.street = street;
    this.city = city;
    this.zipCode = zipCode;
}

//Factory
function createAddress(street, city, zipCode) {
    return { street, city, zipCode };
}

let ad1 = createAddress('Camino Dorado', 'Corregidora', 76903);
let ad2 = new Address('Camino Dorado', 'Corregidora', 76903);



let ad3 = new Address('Camino Dorado', 'Corregidora', 76903);
let ad4 = new Address('Camino Dorado', 'Corregidora', 76903);

function areEqual(address1, address2) {
    return address1.street === address2.street && address1.city === address2.city && address1.zipCode === address2.zipCode;
}

function areSame(address1, address2) {
    return address1 === address2;
}

const blogPost = {
    title: 'Foo',
    body: 'Foo',
    author: 'GA',
    views: 1,
    comments: [
        {
            author: 'YG',
            body: 'Foo'
        },
        {
            author: 'YG1',
            body: 'Foo1'
        }
    ],
    isLive: false
};

function BlogPost(title, body, author) {
    this.title = title;
    this.body = body;
    this.author = author;
    this.views = 0;
    this.comments = [];
    this.isLive = false;
}