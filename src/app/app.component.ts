import { Component } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'formsProject';
  name

  form1: FormGroup;
  constructor(private formBuilder: FormBuilder) {
    this.form1 = this.formBuilder.group({
      'name': ['', Validators.required],
      'password': ['', [Validators.required,]],
    })
    
  }
}