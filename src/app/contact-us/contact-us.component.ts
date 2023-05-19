import { Component, NgModule, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})


export class ContactUsComponent implements OnInit {

  name: string | undefined;
  email: string | undefined;
  message: string | undefined;

  constructor() { }

  ngOnInit(): void {
  }

  submitForm () {
    alert('I am submitting the form');
  }

}