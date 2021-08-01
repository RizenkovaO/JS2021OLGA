const students = require("../../data");
const DbHelper = require("../../DbHelper")

class Students {
  constructor(data) {
    this._data = data;
  }

  async getAll() {
    try {
      let result = await DbHelper.query(`
        SELECT * 
        FROM student
      `)

      return result.rows
    } catch (error) {
      console.log(error)
    }
  }

  async getById(id) {
    // return this._data.find((entry) => Number(entry.id) === Number(id));
    try {
      let result = await DbHelper.query(`
        SELECT * 
        FROM student
        WHERE id = ${id}
      `)

      return result.row[0]
    } catch (error) {
      console.error(error)
    }
  }

  async createStudent(data) {
    try {
      let result = await DbHelper.query(`
        INSERT INTO student (name,surname,email,age,gender)
        VALUES ('${data.name}', '${data.surname}', '${data.email}', ${data.age},'${data.gender}')
        RETURNING *
      `)
      return result.rows[0]
    } catch (error) {
      console.error(error)
      return error
    }



    const id = new Date().getTime();

    this._data.push(Object.assign({}, data, { id }));
  }
}
    // should be validation for fields
    // business logic should be dfdone here before saving new entry for Students
    // generate id for hardcoded data

module.exports = new Students(students);