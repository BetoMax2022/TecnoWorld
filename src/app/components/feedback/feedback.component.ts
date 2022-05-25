import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {
  constructor(private fb: FormBuilder) { }

  feedbackForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    comentario: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(300)]],
    nota: ['', [Validators.required]],
  });


  get email() {
    return this.feedbackForm.get('email');
  }

  get comentario() {
    return this.feedbackForm.get('comentario');
  }

  get nota() {
    return this.feedbackForm.get('nota');
  }

  onSubmit() {
    alert('Agradecemos o seu feedback!')
    console.log(this.feedbackForm.value);
  }

  ngOnInit(): void {
  }

}




