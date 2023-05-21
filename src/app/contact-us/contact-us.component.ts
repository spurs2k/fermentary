import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {

  contactForm: FormGroup = new FormGroup({});

  constructor(private http: HttpClient, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.contactForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required],
    });
  }

  sendPostRequest() {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
      })
    };

    const url = 'https://formspree.io/f/mrgvdwzw';

    console.log(this.contactForm.value); 

    this.http.post<any>(url, this.contactForm.value, httpOptions).subscribe(
    (response) => {
      console.log(response);
      this.contactForm.reset();
    },
    (error) => console.log(error)
  );
  }
}
