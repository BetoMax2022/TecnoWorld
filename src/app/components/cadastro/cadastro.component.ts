import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  Validators
} from '@angular/forms';


@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {
  constructor(private fb: FormBuilder) { }

  cadastroForm = this.fb.group({
    nome: ['', [Validators.required, Validators.minLength(3)]],
    email: ['', [Validators.required, Validators.email]],
    endereco: ['', [Validators.required, Validators.maxLength(100)]],
    senha: ['', [Validators.required, Validators.minLength(8)]],
  });

  get nome() {
    return this.cadastroForm.get('nome');
  }

  get email() {
    return this.cadastroForm.get('email');
  }

  get endereco() {
    return this.cadastroForm.get('endereco');
  }

  get senha() {
    return this.cadastroForm.get('senha');
  }

  onSubmit() {
    alert('Bem vindo(a) }!');
    console.log(this.cadastroForm.value);
  }

  ngOnInit(): void { }


}
