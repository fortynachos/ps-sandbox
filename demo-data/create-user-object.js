var fs = require('fs');
// fs.writeFile('users.json', 'utf8', callback);

var userObject = [
]

// console.log(userObject);

// console.log('');


function GuidGenerator(){
      var S4 = function() {
        return (((1+Math.random())*0x10000)|0).toString(16).substring(1);
      };
      return (S4()+S4()+"-"+S4()+"-"+S4()+"-"+S4()+"-"+S4()+S4()+S4());
 }


 function RoleGenerator() {
 	var splitter = Math.random();
 	var role;
 	if (splitter <= 0.8) {
 		role = 'Account Executive';
 	} else {
 		role = 'Sales Manager';
 	}
 	return role;
 }

function EmailGenerator() {
	var preAt = [
		'John', 'Jane', 'Thomas', 'Susan', 'Richard', 'James', 'Michelle', 'Mohammad', 'Erica', 'Doug', 'Marie', 'Anne', 'Will', 'Cameron', 'Hersh', 'Diego', 'Alyssa', 'Tianna', 'Lizbeth', 'Nadia'
	];
	var postAt = [
		'@acme.com', '@IBN.com', '@Oogle.com', '@pear.com', '@nanosoft.com', '@vivo.com', '@loremipsum.com', '@marketingforce.com', '@rainforest.com', '@uberide.com', '@bookface.com', '@twtr.com', '@ESPM.com', '@linkedup.com'
	];

	var organizations = [
		'Acme', 'IBN', 'Oogle', 'Pear', 'Nanosoft', 'Vivo', 'Lorem Ipsum', 'Marketingforce', 'Rainforest', 'Uberide', 'Bookface', 'Twtr', 'ESPM', 'Linkedup'
	];

	randPost = Math.floor(Math.random() * postAt.length);

	var randPreAt = preAt[Math.floor(Math.random() * preAt.length)];
	
	var randPostAt = postAt[randPost];

	var org = organizations[randPost];


	return [randPreAt + randPostAt, org]

}

function planLevelGenerator() {
	var planLevel = [
		'Startup', 'Mid-Market', 'Corporate', 'Enterprise', 'Strategic'
	];

	return randPlanLevel = planLevel[Math.floor(Math.random() * planLevel.length)];
}

function verticalGenerator() {
	var verticals = [
		'Software', 'Healthcare', 'Finance', 'Chemicals', 'Logistics', 'Packaging', 'Insurance', 'Small Business', 'Storage', 'Real Estate', 'Manufacturing'
	]

	return randVertical = verticals[Math.floor(Math.random() * verticals.length)];
}




for (var i = 0; i <= 1000; i++) {
	var emailAndOrg = EmailGenerator();

	var obj = {
			contact_id: GuidGenerator(),
			role: RoleGenerator(),
			email: emailAndOrg[0],
			account_id: emailAndOrg[1],
			planLevel: planLevelGenerator(),
			vertical: verticalGenerator()
	};

	userObject.push(obj);
}

var jsonObject = {
	userObject
}


var json = JSON.stringify(jsonObject);

fs.writeFile('users_2.json', json, 'utf8');
















// console.log(userObject);