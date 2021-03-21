import { Component, OnInit} from '@angular/core';
import { FormControl, FormGroup, Validators  } from '@angular/forms';

@Component({
  selector: 'app-newproduct',
  templateUrl: './add-new-product.component.html',
  styleUrls: ['./add-new-product.component.css']
})
export class AddNewProductComponent implements OnInit {
  form!: FormGroup;
  ngOnInit() {
    this.form = new FormGroup({
        title: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('[a-zA-Z ]*')
      ])),
      type: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('[a-zA-Z ]*')
      ])),
      description: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('[a-zA-Z ]*')
      ])),
      filename: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('[a-zA-Z ]*')
      ])),
      height: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('[a-zA-Z ]*')
      ])),
      width: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('[a-zA-Z ]*')
      ])),
      price: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('[a-zA-Z ]*')
      ])),
      rating: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('[a-zA-Z ]*')
      ])),
    });
  }
  onSubmit() {
  }
}
