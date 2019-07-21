const config = 
{
    "port": 80,
    "DATABASE_ADRESS": 'mongodb://127.0.0.1:27017/hacaton',    // Адрес базы
    "USER_SCHEMA":              //Схема документа ставки в базе
    {
      login: String,
      ps: Number,
      name: String,                    
      second_name: String,
      dateOfBirth: Number, 
      email: String,
      phone: String,
      department: String, 				//Логин
      organization_position: String,
      superior: String,
    },
    "USER_MODEL": "user",         //Модель для записи в базу
    "DEPARTAMENT_SCHEMA":              //Схема документа ставки в базе
    {
      name: String,
      users: Array
    },
    "DEPARTAMENTS_MODEL": "department",         //Модель для записи в базу
}

module.exports = config;