// Enter data in Groomer's table

const { Groomer } = require('../models');
const groomerdata =
[
  {
    "name":"Jack",
    "profilePicture": "profile18.png",
    "email": "Jack@gmail.com",
    "phone":"(512)112-4526",
    "motto":"Rome wasn't built in a day, but I can definitely groom your dog.",
  },
  {
    "name":"Fernanda",
    "profilePicture": "profile1.png",
    "email": "fernandasgroom@gmail.com",
    "phone":"(782)782-3386",
    "motto":"Life is a canvas, dogs are the art!",
  },
  {
    "name":"Gigi",
    "profilePicture": "profile7.png",
     "email": "gigi@gmail.com",
    "phone":"(662)112-4566",
    "motto":"The limit does not exist!",
  },
  {
    "name":"Simon",
    "profilePicture": "profile17.png",
     "email": "Simon@gmail.com",
    "phone":"(512)334-4545",
    "motto":"Carpe diem that groom!",

  },
  {
    "name":"Jony",
    "profilePicture": "profile19.png",
    "email": "jony@gmail.com",
    "phone":"(405)878-8998",
    "motto":"Dogs are truly the inspiration for everything I do!",
      },
  {
    "name":"Chirst",
    "profilePicture": "profile3.png",
    "email": "christ@gmail.com",
    "phone":"(512)222-4546",
    "motto":"Simon says, give me your dog!",

  },
  {
    "name":"Han",
    "profilePicture": "profile8.png",
     "email": "han@gmail.com",
    "phone":"(703)942-2231",
    "motto":"Luke, I am your real father.",

  },
  {
    "name":"Fami",
    "profilePicture": "profile16.png",
    "email": "Fami@gmail.com",
    "phone":"(908)345-6789",
    "motto":"Dog's best friend",
  
  },
  {
    "name":"Jay",
    "profilePicture": "profile5.png",
    "email": "jay@gmail.com",
    "phone":"(210)713-7876",
    "motto":"If your dog's in need of some glamour, I'm the groomer for you.",

  },
  {
    "name":"Nency",
    "profilePicture": "profile9.png",
    "email": "Nency@gmail.com",
    "phone":"(423)816-4038",
    "motto":"Beauty is in the eyes of the be-howl-der.",

  },
  {
    "name":"Gerti",
    "profilePicture": "profile10.png",
     "email": "gertikins@aol.com",
    "phone":"(733)462-5664",
    "motto":"Whenever you have a grooming emergency, my doors are always open.",

  },
  {
    "name":"Khyti",
    "profilePicture": "profile12.png",
     "email": "khyti@gmail.com",
    "phone":"(512)664-3284",
    "motto":"No pet too difficult, no groom too tough for Khyti.",

  },
  {
    "name":"Lalo",
    "profilePicture": "profile15.png",
     "email": "lalo@gmail.com",
    "phone":"(978)412-5264",
    "motto":"Likes pet",
  },
];

const seedGroomer = () => Groomer.bulkCreate(groomerdata);


module.exports = seedGroomer;