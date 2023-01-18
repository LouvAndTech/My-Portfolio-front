import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { pb } from 'src/main';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent implements OnInit {

  contact!: FormGroup;
  isValidEmail: string = 'default';

  constructor(private fb : FormBuilder){ }

  ngOnInit(): void {
    this.contact = this.fb.group({
      name: '',
      surname: '',
      email: '',
      message: ''
    });

    this.contact = this.fb.group({
      email: ['', [
        Validators.required,
         Validators.email
        ]],
      name: ['', [
        Validators.required,
        Validators.minLength(1)
      ]],
      surname: ['', [
        Validators.required,
        Validators.minLength(1)
      ]],
      message: ['', [
        Validators.required,
        Validators.minLength(1)
      ]]
    });
  }

  get email() {
    return this.contact.get('email');
  }
  get name() {
    return this.contact.get('name');
  }
  get surname() {
    return this.contact.get('surname');
  }
  get message() {
    return this.contact.get('message');
  }

  async onSubmit(){
    // example create data
    const data = {
      "name": this.name?.value,
      "surname": this.surname?.value,
      "email": this.email?.value,
      "message": this.message?.value
    };
    
    try{
      const record = await pb.records.create('contact_form', data)
      //console.log(record);
      this.contact.reset();
    }catch(error){
      console.log(error);
      this.email?.setErrors({invalid: true});
    }
  }
}
