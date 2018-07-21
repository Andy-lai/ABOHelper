//User Model
var Users = [{
    "index": 0,
    "firstName": "Murphy",
    "surName": "Clemons",
    "notes": ["Et nisi cillum enim mollit veniam enim in duis quis elit.", "Fugiat qui quis id ex nulla excepteur nostrud Lorem fugiat sit.", "Et elit sit qui cupidatat excepteur aute voluptate minim mollit ad occaecat nisi laborum cillum.", "Magna eu cupidatat ut consequat laborum excepteur duis nulla incididunt eu officia."],
    "tags": [],
    "type": ["customer"],
    "phone": "+1 (990) 597-2939",
    "email": "murphyclemons@earthwax.com",
    "groups": ["nutrition", "hyderabad", "beauty", "cold"],
    "products": [{
        "purchased_on": "2017-08-11",
        "product_name": "Dish Drops Concentrated Dish Washing liquid"
    }, {
        "purchased_on": "2018-07-14",
        "product_name": "Brahmi"
    }, {
        "purchased_on": "2018-02-09",
        "product_name": "Dish Drops Concentrated Dish Washing liquid"
    }, {
        "purchased_on": "2017-09-30",
        "product_name": "XS Energy Drink"
    }, {
        "purchased_on": "2018-06-12",
        "product_name": "Satinique Scalp Tonic"
    }],
    "pv": 500,
    "bv": 20
}, {
    "index": 1,
    "firstName": "Claudette",
    "surName": "Joyner",
    "notes": ["Minim esse est ipsum incididunt proident do non ipsum esse officia aliqua consequat nisi minim.", "Deserunt tempor officia fugiat quis ex sint aliqua excepteur.", "Ex pariatur occaecat cillum ad aliquip ut Lorem minim non."],
    "tags": ["patience", "home", "nutrition"],
    "type": ["customer"],
    "phone": "+1 (950) 572-3157",
    "email": "claudettejoyner@earthwax.com",
    "groups": [],
    "products": [{
        "purchased_on": "2017-11-18",
        "product_name": "Satinique Scalp Tonic"
    }, {
        "purchased_on": "2018-07-11",
        "product_name": "Artistry Youth Extend"
    }, {
        "purchased_on": "2018-01-28",
        "product_name": "XS Energy Drink"
    }, {
        "purchased_on": "2018-03-16",
        "product_name": "Artistry Hyrating Lotion"
    }, {
        "purchased_on": "2017-05-23",
        "product_name": "Brahmi"
    }],
    "pv": 300,
    "bv": 40
}, {
    "index": 2,
    "firstName": "Blevins",
    "surName": "Shaffer",
    "notes": ["Proident Lorem ullamco laborum proident exercitation cillum nisi aliqua ex enim est enim.", "Et ex aute officia eu magna aliquip laborum nisi anim pariatur sunt aute.", "Quis mollit culpa ullamco qui consequat ullamco exercitation.", "Ut sit aliqua nisi sunt enim enim excepteur est.", "Elit amet cupidatat cupidatat culpa ea aute ut ipsum ad fugiat.", "Sunt sit commodo et voluptate commodo aute tempor commodo.", "Minim reprehenderit exercitation consectetur occaecat nostrud proident tempor nulla deserunt laboris tempor sit do."],
    "tags": [],
    "type": ["prospect"],
    "phone": "+1 (859) 586-3989",
    "email": "blevinsshaffer@earthwax.com",
    "groups": ["nutrition"],
    "products": [{
        "purchased_on": "2017-05-23",
        "product_name": "Artistry Hyrating Lotion"
    }, {
        "purchased_on": "2018-06-20",
        "product_name": "Artistry Youth Extend"
    }, {
        "purchased_on": "2017-01-02",
        "product_name": "Dish Drops Concentrated Dish Washing liquid"
    }, {
        "purchased_on": "2017-07-05",
        "product_name": "Glister Kids Toothpaste"
    }],
    "pv": 1000,
    "bv": 10
}, {
    "index": 3,
    "firstName": "Georgette",
    "surName": "Herring",
    "notes": ["Velit consequat anim ex excepteur tempor irure adipisicing est laborum laborum.", "Deserunt occaecat aliquip do consequat adipisicing labore excepteur nulla anim eiusmod.", "Enim laboris consequat est consectetur eiusmod.", "Velit velit aliquip sint laboris incididunt minim fugiat dolore pariatur consectetur.", "Cupidatat veniam exercitation occaecat nisi excepteur enim nostrud culpa qui adipisicing.", "Incididunt et commodo labore nostrud cillum ad cupidatat sit enim consectetur."],
    "tags": [],
    "type": ["prospect"],
    "phone": "+1 (895) 417-2781",
    "email": "georgetteherring@earthwax.com",
    "groups": ["home", "interested"],
    "products": [],
    "pv": 140,
    "bv": 5
}, {
    "index": 4,
    "firstName": "Gretchen",
    "surName": "Gray",
    "notes": ["Sunt laborum qui culpa aute exercitation anim ex consectetur occaecat magna voluptate nostrud.", "Nostrud ipsum irure aute do labore duis sint magna consequat aliqua ipsum.", "Id esse deserunt ea amet irure aliqua incididunt ullamco mollit.", "Cupidatat esse elit minim velit mollit reprehenderit laborum nulla reprehenderit ut."],
    "tags": ["home", "beauty"],
    "type": ["customer"],
    "phone": "+1 (937) 416-2509",
    "email": "gretchengray@earthwax.com",
    "groups": ["nutrition", "cold", "interested", "home"],
    "products": [{
        "purchased_on": "2017-01-27",
        "product_name": "Glister Kids Toothpaste"
    }, {
        "purchased_on": "2018-03-05",
        "product_name": "Dish Drops Concentrated Dish Washing liquid"
    }, {
        "purchased_on": "2017-01-06",
        "product_name": "Brahmi"
    }, {
        "purchased_on": "2017-07-05",
        "product_name": "Artistry Youth Extend"
    }],
    "pv": 1500,
    "bv": 70
}, {
    "index": 5,
    "firstName": "Erma",
    "surName": "Martinez",
    "notes": ["Cillum dolor dolore laborum commodo ipsum.", "Ut nisi do exercitation tempor.", "Sit veniam id fugiat mollit sunt eiusmod cupidatat.", "Dolore anim amet ea elit enim aute.", "Anim ut pariatur dolore cillum laborum cupidatat cillum voluptate id enim cillum.", "Aliqua magna ut nisi irure labore ut nisi laboris qui laborum nulla mollit ipsum sint.", "Exercitation nisi est Lorem pariatur dolor veniam."],
    "tags": ["patience"],
    "type": ["regcustomer"],
    "phone": "+1 (955) 416-2948",
    "email": "ermamartinez@earthwax.com",
    "groups": ["interested", "hyderabad", "nutrition"],
    "products": [{
        "purchased_on": "2018-04-15",
        "product_name": "Satinique Scalp Tonic"
    }, {
        "purchased_on": "2017-02-04",
        "product_name": "XS Energy Drink"
    }],
    "pv": 200,
    "bv": 500
}, {
    "index": 6,
    "firstName": "Roberson",
    "surName": "Bond",
    "notes": ["Exercitation do labore tempor eiusmod exercitation dolor aute qui culpa nostrud.", "In nisi laboris ad labore do veniam id fugiat cillum.", "Minim consectetur cupidatat aute voluptate mollit ea ut aute.", "Nostrud ipsum ea mollit irure sit dolor.", "Reprehenderit ad sunt tempor est ad fugiat excepteur sint commodo sit irure ex deserunt."],
    "tags": ["beauty"],
    "type": ["prospect"],
    "phone": "+1 (849) 437-3986",
    "email": "robersonbond@earthwax.com",
    "groups": ["sports", "hyderabad", "cold", "interested"],
    "products": [{
        "purchased_on": "2018-01-09",
        "product_name": "Glister Kids Toothpaste"
    }, {
        "purchased_on": "2017-07-30",
        "product_name": "Satinique Scalp Tonic"
    }, {
        "purchased_on": "2017-09-06",
        "product_name": "Dish Drops Concentrated Dish Washing liquid"
    }, {
        "purchased_on": "2017-03-12",
        "product_name": "XS Energy Drink"
    }, {
        "purchased_on": "2018-03-16",
        "product_name": "Brahmi"
    }],
    "pv": 450,
    "bv": 19
}, {
    "index": 7,
    "firstName": "Burch",
    "surName": "Powell",
    "notes": ["Aliqua deserunt adipisicing deserunt fugiat dolor anim qui.", "Esse sunt culpa tempor ex do officia.", "Eiusmod aliqua excepteur aliquip duis laboris Lorem quis nisi duis.", "Amet cillum do duis minim quis nisi esse.", "Et est id magna id aliqua mollit velit."],
    "tags": ["nutrition", "sports"],
    "type": ["prospect"],
    "phone": "+1 (948) 555-2111",
    "email": "burchpowell@earthwax.com",
    "groups": ["home", "nutrition", "hyderabad", "cold"],
    "products": [{
        "purchased_on": "2018-06-11",
        "product_name": "Artistry Youth Extend"
    }, {
        "purchased_on": "2018-05-17",
        "product_name": "Dish Drops Concentrated Dish Washing liquid"
    }, {
        "purchased_on": "2017-07-31",
        "product_name": "Glister Kids Toothpaste"
    }],
    "pv": 150,
    "bv": 15
}, {
    "index": 8,
    "firstName": "Mercado",
    "surName": "Gill",
    "notes": ["Nulla anim irure consectetur enim tempor culpa.", "Dolore amet elit velit anim est.", "Sint ut aute cillum dolore dolore fugiat cillum.", "Occaecat cupidatat sint Lorem cupidatat commodo eiusmod esse veniam ea do eu."],
    "tags": ["beauty"],
    "type": ["customer"],
    "phone": "+1 (872) 553-2789",
    "email": "mercadogill@earthwax.com",
    "groups": ["home", "sports"],
    "products": [{
        "purchased_on": "2017-10-27",
        "product_name": "Glister Kids Toothpaste"
    }, {
        "purchased_on": "2017-02-28",
        "product_name": "XS Energy Drink"
    }],
    "pv": 5009,
    "bv": 3
}, {
    "index": 9,
    "firstName": "Harmon",
    "surName": "Schneider",
    "notes": ["Ea fugiat enim anim elit.", "Officia nisi anim tempor consequat enim velit excepteur est esse non eu labore consectetur labore.", "Aute fugiat ea mollit tempor anim ad anim ut aliqua ea non minim et.", "Do magna ad et ullamco id duis magna.", "Id minim Lorem commodo consectetur id ad excepteur irure incididunt esse veniam.", "Officia cupidatat veniam sint laborum cillum.", "Ea mollit proident cillum eiusmod anim magna eiusmod consequat deserunt Lorem nulla excepteur."],
    "tags": ["nutrition"],
    "type": ["prospect"],
    "phone": "+1 (973) 597-3039",
    "email": "harmonschneider@earthwax.com",
    "groups": ["hyderabad", "cold"],
    "products": [{
        "purchased_on": "2017-06-11",
        "product_name": "XS Energy Drink"
    }, {
        "purchased_on": "2017-06-03",
        "product_name": "Artistry Youth Extend"
    }, {
        "purchased_on": "2017-03-01",
        "product_name": "Glister Kids Toothpaste"
    }],
    "pv": 780,
    "bv": 24
}];