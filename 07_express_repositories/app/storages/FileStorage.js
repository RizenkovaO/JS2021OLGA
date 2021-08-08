const { assert } = require("console");
const { json } = require("express");
const fs = require("fs");
const path = require("path");
const { v4: uuidv4 } = require("uuid");

// define default place for file storage data
const FILE_STORAGE_PATH = path.resolve(__dirname, "../../data/files");

//Has to do CRUD operations on directory files
class FileStorage {
  constructor(modelName) {
    this._path = path.join(FILE_STORAGE_PATH, modelName);
    try {
      fs.access(this._path);
    } catch (error) {
      fs.mkdirSync(this._path, { recursive: true });
    }
  }

  create = (data) => {
    let id = uuidv4();
    let student = {
      id,
      ...data,
    };
    fs.writeFileSync(this._path + `/${id}.json`, JSON.stringify(student));
    return student
  };
  // return student model
  getById = (id) => {
    try {
      let bites = fs.readFileSync(this._path + `/${id}.json`);
      let student = JSON.parse(bites);

      return student;
    } catch (error) {
      console.error(`No file with id: ${id}`);
      return;
    }
  };

  getAll = () => {
    let fileNameList = fs.readdirSync(this._path); //[json1, json2, json3]
    let students = fileNameList
      .map((name) => {
        try {
          let bites = fs.readFileSync(this._path + `/${name}`);
          return JSON.parse(bites);
        } catch (error) {
          console.error(
            `Can't parse content from file "${this._path}/${name}" as JSON`
          );
        }
      })
      .filter((data) => data);

    return students;
  };

  update = (data) => {
    let id = data.id;
    if (!id) {
      console.error("Missing an id");
      return;
    }

    if (!this.getById(id)) {
      console.error("There are no such a student");
      return;
    }
    fs.writeFileSync(this._path + `/${id}.json`, JSON.stringify(data));
  };

  delete(id) {
    if (!id) {
      console.error("Missing an id");
      return 
    } 
    fs.unlinkSync(`${this._path}/${id}.json`);
  }
}

module.exports = FileStorage;

// let storage = new FileStorage("students");

// let students = storage.getAll()
// console.log(students)
//storage.delete('ce14eec4-fe23-4241-91c1-ea0983b32d4b')
// let data = {name:'Oscar', age:99, surname: 'Gizatulin', gender: 'male'}
// let student = storage.create(data)

// let fetchedStudent = storage.getById("f3b2c404-9cfe-4d80-995b-ede79cb2c328");
// assert(
//   fetchedStudent.id == "f3b2c404-9cfe-4d80-995b-ede79cb2c328",
//   "WRONG OBJECT"
// );

// storage.update({
//   id: "f3b2c404-9cfe-4d80-995b-ede79cb2c328qweqweqwe,",
//   name: "Oscar",
//   age: 30,
//   surname: "Gizatulin",
//   gender: "male",
// });

// let fetchedStudents = storage.getAll();
// console.log(fetchedStudents);
