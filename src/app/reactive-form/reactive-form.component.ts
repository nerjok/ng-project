import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {
  genders = ['male', 'female'];
  signupForm: FormGroup;
  submitted: boolean = false;
  forbiddenUsernames = ['Chris', 'Anna'];

  constructor() { }

  ngOnInit(): void {
    this.signupForm = new FormGroup({
      title: new FormControl(null, [Validators.required, , this.forbiddenNames.bind(this)]),
      description: new FormControl(null, [Validators.required, , this.forbiddenNames.bind(this)]),
      'gender': new FormControl('male'),
      'userData': new FormGroup({
        'name': new FormControl(null, [Validators.required, , this.forbiddenNames.bind(this)]),
      }),
      'hobbies': new FormArray([])

    });

    // this.signupForm.setValue({
    //   'userData': {
    //     'name': 'Balfly',
    //   },
    //   'gender': 'male',
    //   description: "objectDescription",
    //   title: 'MyTitle',
    //   'hobbies': []
    // });

    this.signupForm.patchValue({
      'userData': {
        'name': 'Anna',
      }
    });
  }

  onSubmit(): void {
    console.log('[[ onSbmit ]]', this.signupForm);
  }

  forbiddenNames(control: FormControl): {[s: string]: boolean} {
    if (this.forbiddenUsernames.indexOf(control.value) !== -1) {
      return {'nameIsForbidden': true};
    }
    return null;
  }

  getControls() {
    return (this.signupForm.get('hobbies') as FormArray).controls;
  }

  onAddHobby() {
    const control = new FormControl(null, Validators.required);
    (<FormArray>this.signupForm.get('hobbies')).push(control);
  }
}
