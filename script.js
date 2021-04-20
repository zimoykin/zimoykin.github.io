class Me {
  constructor(name, surname, position, email, phone, city, experience, skills, tech, interests) {
    this.name = name
    this.surname = surname
    this.position = position
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

//variables
let me
let back = document.getElementById('back')
const months = ["jan", "feb", "mar", "apr", "may", "jun", "jul", "aug", "sep", "oct", "nov", "dec"];
//
function createCV() {
  back.style.visibility ='hidden'
  me = new Me("Dmitry", "Zimoykin", 'Sowtware developer',"zimoykin@gmail.com", '+7 96O7O1777O',new City ('Moscow', 'Russia'),
    getExperience().sort( (a,b) => { a.start > b.start }),
    getMySkills(), getMyTech(), getMyInterests()
)

  console.log(me);
  setTimeout(() => {
    fillHtmlTemplate(me)
  }, 1000);

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
      `● Implemented a crm system of control stocks which has a workstation form for all employees roles. 
      ● Created report constructor for chiefs and managers with detailed sales costs. 
      ● Data access splitted for every role, and also for sales managers to have only access to their sales projects.
      ● EDI.`
    ),
    new Experience(
      new Date(2017, 2, 01),
      new Date(2017, 12, 01),
      new Company('Kamis LLC', moscow), 'Software Engineer',
      `● Supported finance crm system and optimized for business processes of the company.
      ● EDI.
      ● Built a “Retail trade system”.
      ● Internal data exchange.`
    ),
    new Experience(
      new Date(2013, 6, 01),
      new Date(2017, 2, 01),
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
      new Date(2012, 6, 01),
      new Date(2013, 6, 01),
      new Company('Rumex LLC', moscow), 'Software Developer',
      `● Development
      ● Tech support`
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
//html interactiove
function fillHtmlTemplate(me) {

    document.getElementById('me').innerHTML = `${me.name} ${me.surname}`

    let div = document.getElementById('left')
    _ = me.experience.map ( val => {
        let company=document.createElement("h3")
        company.innerHTML = val.company.title + ' (' + val.company.city.name + ', ' + val.company.city.country + ')'
        div.appendChild(company)
        let position=document.createElement("span")
        position.innerHTML = val.position + ', since ' + months[val.start.getMonth()] + ' ' + val.start.getFullYear() + ' - ' + (val.end === null ? 'Present' :  months[val.end.getMonth()] + ' ' + val.end.getFullYear())
        div.appendChild(position)
        let about=document.createElement("span")
        _ = val.description.split("●").map( val => {
          if (val) about.innerHTML += `<br>●${val}`
        })
        div.appendChild(about)
        let stroke=document.createElement("hr")
        div.appendChild(stroke)
    })

    let div_position = div.getBoundingClientRect()
    div.style.height = Math.min(div_position.height, window.innerHeight - div_position.y ) - 50

}
function toggleLocale() {
    let locale = document.getElementById('lang')
    if ( locale.innerHTML === '🇬🇧') { 
      locale.innerHTML = '🇷🇺'
    } else { 
      locale.innerHTML = '🇬🇧'
    }
}
function showPhone() {
  back.style.visibility = (back.style.visibility === 'hidden') ? 'visible' : 'hidden'
  back.style.opacity = 100
  if (me) {
    document.getElementById('phone').innerHTML = me.phone
  }
}
function closeWindow(){
  back.style.opacity = 0
  back.style.visibility = (back.style.visibility === 'hidden') ? 'visible' : 'hidden'
}
function changeBackground() {
  document.getElementById('up').style.backgroundColor = `rgb(${random(100,255)}, ${random(100,255)}, ${random(100,255)})`

  function random(min, max) {
    let rand = min - 0.5 + Math.random() * (max - min + 1);
    return Math.round(rand);
  }
}