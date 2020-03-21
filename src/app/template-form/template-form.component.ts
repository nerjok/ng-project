import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent implements OnInit {
  @ViewChild('f', { static: false }) signupForm: NgForm;

  title = 'TitleString';
  description = 'Description';
  user = { name: '', title: '', description: '', answer: '', question: '' , gender: ''};
  submitted = false;
  genders = ['male', 'female'];
  defaultQuestion = 'teacher';
  answer = '';
  defaultGender = 'male';

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log('[[ onSubmit ]]', this.signupForm.value, this.signupForm.valid);
    this.submitted = true;
    this.user.name = this.signupForm.value.userData.name;
    this.user.title = this.signupForm.value.title;
    this.user.description = this.signupForm.value.description;
    this.user.question = this.signupForm.value.secret;
    this.user.answer = this.signupForm.value.questionAnswer;
    this.user.gender = this.signupForm.value.gender;

    this.signupForm.reset();
  }
}
