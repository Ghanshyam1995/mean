import { Component, OnInit, Output, EventEmitter, ViewChild } from '@angular/core';
import { FormGroup, Validators, FormControl } from "@angular/forms";

@Component({
  selector: 'app-datatable',
  templateUrl: './datatable.component.html',
  styleUrls: ['./datatable.component.css']
})
export class DatatableComponent {
  studentForm: FormGroup;
  @Output() onClick: EventEmitter<any> = new EventEmitter
  // @Output() onFilter: EventEmitter = new EventEmitter();
  @ViewChild('myModal') myModal;
  constructor(
  ) { }

  totalItems = 100;
  currentPage = 5;
  cols = [{ name: 'Name' }, { name: 'Gender' }, { name: 'Enroll' }, { name: 'Age' }, { name: 'Branch' }];
  data = [];
  filteredData = [];
  pageSize: 10;
  rows = [
    { name: 'vivek', gender: 'Male', enroll: '123', age: '40', branch: 'Software' },
    { name: 'Dany', gender: 'Male', enroll: 'KFC', age: '35', branch: 'Teacher' },
    { name: 'Molly', gender: 'Female', enroll: 'Burger King', age: '25', branch: 'Doc.' },
    { name: 'Nitesh', gender: 'Male', enroll: 'smartdata', age: '26', branch: 'Laywer' },
    { name: 'Kapil', gender: 'Male', enroll: 'smartdata', age: '30', branch: 'Student' },
    { name: 'Suresh', gender: 'Male', enroll: 'Accenture', age: '10', branch: 'N/A' },
    { name: 'Raaj', gender: 'Male', enroll: 'TCS', age: '70', branch: 'Actor' },
    { name: 'Shahrukh', gender: 'Male', enroll: 'CTS', age: '40', branch: 'Actor' },
    { name: 'Salman', gender: 'Male', enroll: 'c++', age: '39', branch: 'Business' },
    { name: 'Kat', gender: 'female', enroll: 'smartdata', age: '23', branch: 'Nurse' },
    { name: 'Aarav', gender: 'Male', enroll: 'Swimlane', age: '13', branch: 'Software' },
  ];
  // columns = [
  //   { prop: 'name' },
  //   { name: 'Gender' },
  //   { name: 'Company' }
  // ];
  ngOnInit() {
    // populate datatable rows
    this.data = this.rows;
    // copy over dataset to empty object
    this.filteredData = this.rows;

    this.studentForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      gender: new FormControl('', [Validators.required]),
      enroll: new FormControl('', [Validators.required]),
      age: new FormControl('', [Validators.required]),
      branch: new FormControl('', [Validators.required])
    })
  }

  something() {
    alert('its working')
  }

  onSort(event) {
    console.log('Sort Event', event);
    const rows = [...this.rows];

    const sort = event.sorts[0];
    rows.sort((a, b) => {
      return a[sort.prop].localeCompare(b[sort.prop]) * (sort.dir === 'desc' ? -1 : 1);
    });

    this.rows = rows;
  }
  editUser(studentName) {
    debugger
    let student = this.rows.find((student) => { return student.name === studentName });
    if (student) {
      this.studentForm.patchValue({
        name: student.name,
        gender: student.gender,
        enroll: student.enroll,
        age: student.age,
        branch: student.branch
      });
      this.myModal.nativeElement.className = 'modal fade show';
    }

  }

  deleteUser(name) {
    this.rows = this.rows.filter(function (user) {
      return user.name !== name;
    })
  }


  takeAction(value) {
    console.log(value, typeof value);
    if (value == '1') {
      console.log("Case 1")
    } else if (value == '2') {
      console.log("Case 1")
    } else {
      (value == '3')
      console.log("Case 1")
    }
  }

  filterDatatable(event) {
    let val = event.target.value.toLowerCase();
    let colsAmt = this.cols.length;
    let keys = Object.keys(this.rows[0]);
    this.data = this.filteredData.filter(function (item) {
      for (let i = 0; i < colsAmt; i++) {
        if (item[keys[i]].toLowerCase().indexOf(val) !== -1 || !val) {
          return true;
        }
      }
    });

  }
  closeModal() {
    this.myModal.nativeElement.className = 'modal fade';
  }

  saveUser(student) {
    let index = this.rows.findIndex(x => x.name === student.name);
    var objectNames = Object.keys(student);
    objectNames.forEach((objectName) => {
      this.rows[index][objectName] = student[objectName];
    });
    this.closeModal();

  }
}
