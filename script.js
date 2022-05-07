class Me {
  constructor(name, surname, position, email, phone, city, experience, skills, tech, interests) {
    this.name = name;
    this.surname = surname;
    this.position = position;
    this.email = email;
    this.phone = phone;
    this.experience = experience;
    this.skills = skills;
    this.city = city;
    this.tech = tech;
    this.interests = interests;
  }
}

class City {
  name;
  country;
  constructor(name, country) {
    this.name = name;
    this.country = country;
  }
}

class Company {
  title;
  city;

  constructor(title, city) {
    this.title = title;
    this.city = city;
  }
}
class Project {
  constructor(title, link) {
    this.title = title;
    this.link = link;
  }
}

class Experience {
  start;
  end;
  company;
  description;
  position;

  constructor(start, end, company, position, description) {
    this.start = start;
    this.end = end;
    this.company = company;
    this.position = position;
    this.description = description;
  }
}

//variables
let me;
let back = document.getElementById('back');
myStorage = window.localStorage;
//
function createCV() {
  back.style.visibility = 'hidden';
  me = new Me("Dmitrii", "Zimoikin", 'Backend developer', "zimoykin@gmail.com", '+48 737 404 142', new City('Warsaw', 'Poland'),
    getExperience().sort((a, b) => { a.start > b.start; }),
    getMySkills(), getMyTech(), getMyInterests()
  );

  console.log(me);
  setTimeout(() => {
    fillHtmlTemplate(me);
  }, 1000);


}
//update html element

function getExperience() {

  const moscow = new City('Moscow', 'Russia');

  return [
    new Experience(
      new Date("2021-08-01"),
      null,
      new Company('Fireart Studio', new City('Warsaw', 'Poland')),
      'Backend Developer',
      "Nodejs developer "
    ),
    new Experience(
      new Date("2020-10-01"),
      null,
      new Company('RaceRoom Entertainment GmbH', new City('Fichtenberg', 'Germany')),
      'Software Developer',
      "Participating in the development of microservices based swift and javascript. Android application (kotlin, jetpack compose)"
    ),
    new Experience(
      new Date("2017-12-01"),
      new Date("2021-08-01"),
      new Company('ChemPartners LLC', moscow), 'Senior Software Engineer',
      `● Implemented a crm system of control stocks which has a workstation form for all employees roles. 
      ● Created report constructor for chiefs and managers with detailed sales costs. 
      ● Data access splitted for every role, and also for sales managers to have only access to their sales projects.
      ● EDI.`
    ),
    new Experience(
      new Date("2017-02-01"),
      new Date("2017-12-01"),
      new Company('Kamis LLC', moscow), 'Software Engineer',
      `● Supported finance crm system and optimized for business processes of the company.
      ● EDI.
      ● Built a “Retail trade system”.
      ● Internal data exchange.`
    ),
    new Experience(
      new Date("2013-06-01"),
      new Date("2017-02-01"),
      new Company('MIRUS MEDICAL LLC', moscow), 'Head of IT Department',
      `● Built it-enterprise structure for six remote offices (linked by vpn l2tp over ipsec) based on windows server (hyper-v, AD).
      ● Implemented a crm system for each of stages of sales, finance team, logistics and warehouse.
      ● Created a warehouse system.
      ● Data exchange. created Shell scripts: backup servers (local, encryption for
      cloud), for analyzing data space on a shared file server.
      ● Business correspondence and purchase of IT-equipment. Personnel search and
      selection for the IT department.`
    ),
    new Experience(
      new Date("2012-06-01"),
      new Date("2013-06-01"),
      new Company('Rumex LLC', moscow), 'Software Developer',
      `● Development
      ● Tech support`
    ),
  ];
}
function getMySkills() {
  return [
    'TypeScript(JavaScript)', 'Kotlin', 'Swift', 'SQL'
  ];
}
function getMyTech() {
  return [
    'NodeJS (ExpressJS/NestJS)', 'Vapor', 'Docker', 'Git', 'RESTApi', 'Postgresql', 'Redis', 'DynamoDB'
  ];
}
function getMyInterests() {
  return [
    'backend', 'web', 'mobile', 'UX', 'database'
  ];
}
//html interactiove
function fillHtmlTemplate(me) {


  const rightColor = myStorage.getItem('right');
  const leftColor = myStorage.getItem('left');
  if (rightColor) {
    document.getElementById('right').style.backgroundColor = rightColor;
  }
  if (leftColor) {
    document.getElementById('left').style.backgroundColor = leftColor;
  }

  document.getElementById('me').innerHTML = `${me.name} ${me.surname}`;

  let div = document.getElementById('exp');
  _ = me.experience.map(val => {
    let stroke = document.createElement("hr");
    let company = document.createElement("h3");
    company.innerHTML = val.company.title + ' (' + val.company.city.name + ', ' + val.company.city.country + ')';
    div.appendChild(company);

    let position = document.createElement("span");
    position.innerHTML = '<b>' + val.position + '</b></br>';
    div.appendChild(position);

    let since = document.createElement("span");
    since.innerHTML = 'since ' + val.start.toLocaleDateString('en', { year: 'numeric', month: 'long' }) + ' to ' + (val.end === null ? 'Present' : val.end.toLocaleDateString('en', { year: 'numeric', month: 'long' }));
    div.appendChild(since);
    // let about = document.createElement("span");
    // _ = val.description.split("●").map(val => {
    //   if (val) about.innerHTML += `<br>●${val}`;
    // });
    // div.appendChild(about);
    div.appendChild(stroke);
  });

  const position = document.getElementById('position');
  const positionName = document.createElement("h4");
  positionName.innerHTML = me.position;
  position.appendChild(positionName);

  const skills = document.getElementById('skills');
  const skillName = document.createElement("h3");

  skillName.innerHTML = 'Skills:';
  skills.appendChild(skillName);

  const skill = document.createElement("span");
  skill.innerHTML = me.skills.join(', ');
  skills.appendChild(skill);

  //
  const interests = document.getElementById('interests');
  const interestName = document.createElement("h3");

  interestName.innerHTML = 'Interest:';
  interests.appendChild(interestName);

  const interestValue = document.createElement("span");
  interestValue.innerHTML = me.interests.join(', ');
  interests.appendChild(interestValue);

  //let div_position = div.getBoundingClientRect();
  //div.style.height = Math.min(div_position.height, window.innerHeight - div_position.y) - 50;

}
function showPhone() {
  back.style.visibility = (back.style.visibility === 'hidden') ? 'visible' : 'hidden';
  back.style.opacity = 100;
  if (me) {
    document.getElementById('phone').innerHTML = me.phone;
  }
}
function closeWindow() {
  back.style.opacity = 0;
  back.style.visibility = (back.style.visibility === 'hidden') ? 'visible' : 'hidden';
}
function changeBackground(value) {
  const newColor = `rgb(${random(100, 255)}, ${random(100, 255)}, ${random(100, 255)})`;
  document.getElementById(value.id).style.backgroundColor = newColor;

  myStorage.setItem(value.id, newColor);

  function random(min, max) {
    let rand = min - 0.5 + Math.random() * (max - min + 1);
    return Math.round(rand);
  }
}