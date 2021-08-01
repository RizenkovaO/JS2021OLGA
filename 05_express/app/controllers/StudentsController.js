const Students = require("../models/Students");

// this will called when url === "/students"
// function StudentsController(req, res) {
//   const { studentId } = req.params;
//   if (studentId) {
//     const student = Students.getById(studentId);
//     if (!student) {
//       res.render("pages/error");
//     } else {
//       res.render("pages/student", { student });
//     }
//   } else {
//     const students = Students.getAll();
//     res.render("pages/students", { students });
//   }
// }

class StudentsController {
    // used for students list and individual student page
  async main(req, res) {
    const { studentId } = req.params;

    //student details view
    if (studentId) {
      try {
        const student = await Students.getById(studentId);
        if(!student){
          res.render("pages/error");
        }

        res.render("pages/student", { student });
      } catch (error) {
        res.render("pages/error");
      }
    //Student list view 
    } else {
      const students = await Students.getAll();
      if(!students){
        res.render("pages/error");
      }

      res.render("pages/students", { students });
    }
  }
  // used for rendering create student form
  renderForm(req, res) {
      res.render("pages/addStudent", { isAdded: false });
  }
  // used for POST request from the form, and adding new student
  // createStudent(req, res) {
  //   res.render("pages/addStudent", { isAdded: false });
  // }
  async createStudent(req, res) {
    // const student = await Students.getById();
    // if (student) {
    //   res.write("There is a such student already");
    //   res.end();
    //   return;
    // }
    
     //Students.createStudent(req.body);
    try {
      let student =  await Students.createStudent(req.body);
      if(!student.id){
        res.render("pages/addStudent", { isAdded: false });

      }
      res.render("pages/addStudent", { isAdded: true });
    } catch (error) {
      
    }

    // return the same form

  }
}

module.exports = StudentsController;