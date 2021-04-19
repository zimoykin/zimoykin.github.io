class Me {
  constructor(name, surname, email, phone, city, experience, skills, tech, interests) {
    this.name = name
    this.surname = surname
    this.email = email
    this.phone = phone
    this.experience = experience
    this.skills = skills
    this.city = city
    this.tech = tech
    this.interests = interests
  }
}

class City {
    name
    country
    constructor(name, country) {
        this.name = name;
        this.country = country
      }
}

class Company {
  title
  city

  constructor(title, city) {
    this.title = title;
    this.city = city
  }
}
class Project {
    constructor(title, link) {
        this.title = title
        this.link = link
    }
}

class Experience {
  start;
  end;
  company;
  description;
  position

  constructor(start, end, company, position, description) {
    this.start = start;
    this.end = end;
    this.company = company;
    this.position = position;
    this.description = description;
  }
}

//init
function createCV() {
  const me_en = new Me("Dmitry", "Zimoykin","zimoykin@gmail.com", 'ru 96O7O1777O',new City ('Moscow', 'Russia'),
    getExperience().sort( (a,b) => { a.start > b.start }),
    getMySkills(), getMyTech(), getMyInterests()
)

  console.log(me_en);
}
//update html element

function getExperience() {

  const moscow = new City('Moscow', 'Russia')
  const fichtenberg = new City ('Fichtenberg', 'Germany')

  return [
    // new Experience(
    //   new Date(2020, 10, 01),
    //   null,
    //   new Company('RaceRoom Entertainment GmbH', 'Fichtenberg', 'Germany'),
    //   'Software Developer',
    //   "Participating in the development of microservices based swift and javascript."
    // ),
    new Experience(
      new Date(2017, 12, 01),
      null,
      new Company('ChemPartners LLC', moscow), 'Senior Software Engineer',
      'Participating in the development of microservices based swift and javascript.'
    ),
    new Experience(
      new Date(2017, 2, 01),
      new Date(2017, 12, 01),
      new Company('Kamis LLC', moscow), 'Software Engineer',
      'Participating in the development of microservices based swift and javascript.'
    ),
    new Experience(
      new Date(2013, 6, 01),
      new Date(2017, 2, 01),
      new Company('MIRUS MEDICAL LLC', moscow), 'Head of IT Department',
      'Participating in the development of microservices based swift and javascript.'
    ),
    new Experience(
      new Date(2012, 6, 01),
      new Date(2013, 6, 01),
      new Company('Rumex LLC', moscow), 'Software Developer',
      'Participating in the development of microservices based swift and javascript.'
    ),
  ];
}
function getMySkills() {
    return [
        'Swift', 'TypeScript(JavaScript)', 'JAVA', 'SQL'
    ]
}
function getMyTech() {
    return [
        'Vapor', 'NodeJS (ExpressJS NestJS)', 'Angular', 'Docker', 'ReactNative', 'Rails', 'Git', 'RESTApi', 'mongoDB', 'Redis', 'Postgresql'
    ]
}
function getMyInterests() {
    return [
        'backend', 'web', 'mobile', 'UX', 'database'
    ]
}
//html interactiove)
function toggleLocale() {

    let button = document.getElementById('lang')
    if ( button.innerHTML === 'en') { 
        button.innerHTML = 'ru'
    } else { 
        button.innerHTML = 'en'
    }
}