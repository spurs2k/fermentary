import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})


export class ContactUsComponent implements OnInit {

  resetForm() {
    const form = document.querySelector("form");
    if (form) {
      form.reset();
    }
  }

  constructor() { }

  ngOnInit(): void {
  }


}