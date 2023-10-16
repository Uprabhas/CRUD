import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { EmployeesService } from '../services/employees.service';
// import { DialogRef } from '@angular/cdk/dialog';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-emp-add-edit',
  templateUrl: './emp-add-edit.component.html',
  styleUrls: ['./emp-add-edit.component.css']
})
export class EmpAddEditComponent implements OnInit {
  empForm: FormGroup;

  education: any = ['10th', '12th', 'degree', 'PhD', 'master']

  constructor(private _fb: FormBuilder, private _empform: EmployeesService, private _dialogref: MatDialogRef<EmpAddEditComponent>, @Inject(MAT_DIALOG_DATA) public data: any) {
    this.empForm = this._fb.group({
      firstname: '',
      lastname: '',
      email: '',
      dob: '',
      gender: '',
      company: '',
      education: '',
      exp: '',
      package: '',
    })
  }
  ngOnInit(): void {
    this.empForm.patchValue(this.data)
  }

  Onsubmitform() {
    if (this.empForm.valid) {
      if (this.data) {
        this._empform.updateemployee(this.data.id, this.empForm.value).subscribe({
          next: (val: any) => {
            alert('Employee update successfully')
            this._dialogref.close(true);
          },
          error: (err) => {
            console.log(err);
          },
        });
      } else {
        this._empform.addemployee(this.empForm.value).subscribe({
          next: (val: any) => {
            alert('Employee added successfully')
            this._dialogref.close(true);
          },
          error: (err) => {
            console.log(err);
          },
        });
      }
      }
    }



  }
