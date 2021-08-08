//const students = require("../../data");
//const DbHelper = require("../../DbHelper")

class Students {
  constructor(data) { // data is Json {"name":"Emils","age":"30","gender":"male","id":"b8becfec-a2e5-4766-8efb-bfc461b1fd2d"}
    this._data = Object.assign({}, data)
  }

  getData = () => {
    return {
      ...this._data
    }
  }

  setId(id) {
    this._data.id = id;
  }

  // business logic example
  _getUsername({ name, surname }) {
    return `${name}${surname}`;
  }

  getDataForStorage() {
    const dataCopy = Object.assign({}, this._data);
    delete dataCopy.username;
    return dataCopy;
  }
}

module.exports = Students;

// let student = new Students({"name":"Emils","age":"30","gender":"male","id":"b8becfec-a2e5-4766-8efb-bfc461b1fd2d"})


// let data = student.getData()
// data.name = 'OLGA'

// console.log(student)