import { escapeIdentifier } from '@angular/compiler/src/output/abstract_emitter';
import { variable } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import {  CheckboxRequiredValidator, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { __values } from 'tslib';
import { UsuariosService } from '../service/usuarios/usuarios.service';


@Component({
  selector: 'app-form-usuarios',
  templateUrl: './form-usuarios.component.html',
  styleUrls: ['./form-usuarios.component.scss']
})
export class FormUsuariosComponent implements OnInit {
  
  formUsuarios = new FormGroup({
    password: new FormControl('',[Validators.required]),
    email: new FormControl('',[Validators.required, Validators.email]),
    name: new FormControl('',[Validators.required])
   
  });
  
  
  
  

  constructor(private router: Router,public usuariosService: UsuariosService) { }

  ngOnInit(): void {
    this.usuariosService.botaoEdit.subscribe( edit=>{
      if(edit !== null){
        console.log(edit,'valor do edit');
        this.formUsuarios.get('name').setValue(edit.name);
        this.formUsuarios.get('password').setValue(edit.password);
        this.formUsuarios.get('email').setValue(edit.email);
        this.formUsuarios.get('admin').setValue(edit.admin);
        this.formUsuarios.get('id').setValue(edit.id);
      }
    })
  }
  save(){
    console.log('form');
    if (this.formUsuarios.valid){
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Usuário salvo com sucesso!',
        showConfirmButton: false,
        timer: 1500
      });
      this.router.navigate(['/lista-usuarios']);
      
    }else{
      Swal.fire({
        icon:'error',
        title:'Ooops..',
        text:'Usuário nao cadastrado... '+
        'preencha corretamente todos os campos'

    });
  }
  

}
}



