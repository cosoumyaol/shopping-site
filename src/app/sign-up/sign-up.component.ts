import { Component, OnInit} from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  form!: FormGroup;
  ngOnInit() {
      this.form = new FormGroup({
        name: new FormControl('', Validators.compose([
          Validators.required,
          Validators.pattern('[a-zA-Z ]*')
        ])),
        userName: new FormControl('', Validators.compose([
          Validators.required,
          Validators.pattern('[a-zA-Z ]*')
        ])),
        password: new FormControl('', Validators.compose([
          Validators.required,
          Validators.pattern('[a-zA-Z ]*')
        ])),
        rePassword: new FormControl('', Validators.compose([
          Validators.required,
          Validators.pattern('[a-zA-Z ]*')
        ])),
        hint: new FormControl('', Validators.compose([
          Validators.required,
          Validators.pattern('[a-zA-Z ]*')
        ])),
      });
    }
  
    onSubmit() {
    }

}
