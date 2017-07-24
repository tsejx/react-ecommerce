import Mock from 'mockjs';

Mock.mock('/comment',
  {
    "data|1-10": [{
      "id": "@id",
      "urlAvatar": "http://localhost:8080/src/data/avatar/@pick(['christian','elliot','helen','jenny','joe','justen','laura','matt','stevie']).jpg",
      "username": "@name",
      "date": '@datetime',
      "rating": '@natural(0,5)',
      "content": '@sentence'
    }]
  }
)
