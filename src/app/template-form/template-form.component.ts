import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent implements OnInit {
  @ViewChild('f', { static: false }) signupForm: NgForm;

  title: string = 'TitleString';
  description: string = 'Description';
  user = { name: '', title: '', description: ''};
  submitted = false;

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log('[[ onSubmit ]]', this.signupForm.value, this.signupForm.valid);
    this.submitted = true;
    this.user.name = this.signupForm.value.userData.name;
    this.user.title = this.signupForm.value.title;
    this.user.description = this.signupForm.value.description;

    this.signupForm.reset();

  }
}
