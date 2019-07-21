const config = 
{
    "port": 80,
    "DATABASE_ADRESS": 'mongodb://127.0.0.1:27017/hackathon',    // Адрес базы
    "USER_MODEL": "user",         //Модель для записи в базу
    "STUDENT_SCHEMA":              //Схема документа ставки в базе
    {
      "login" : String,
      "ps" : String,
      "acoountInfo" : 
      {
          "name" : String,
          "second_name" : String,
          "course" : String,
          "personalDataItems" : Array
      },
      "events" : Array
  },
    "STUDENT_MODEL": "student",         //Модель для записи в базу
}

module.exports = config;