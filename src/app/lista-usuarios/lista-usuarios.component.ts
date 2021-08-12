import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { User } from '../MODELS/user';
import { UsuariosService } from '../service/usuarios/usuarios.service';

@Component({
  selector: 'app-lista-usuarios',
  templateUrl: './lista-usuarios.component.html',
  styleUrls: ['./lista-usuarios.component.scss']
})
export class ListaUsuariosComponent implements OnInit {
  userList: User[];
  collection = {count:10, data: []};
  constructor(public usuariosService: UsuariosService, private router:Router) { }

  

  ngOnInit(): void {
    this.populateUser();
  }


  populateUser(){
    for (let i = 0; i < this.collection.count; i++) {
      this.collection.data.push({
        id: i,
        name: 'teste' +i,
        email: 'email' + i + '@contactura.com',
        password: 'n' + i + i + i + i + i +i,
        admin: 'true / false'
      });
    }
    this.userList = this.collection.data;
    console.log(this.userList)
  }
editUser(usuarios:User){

  console.log('edit está funcionando',usuarios);
  this.usuariosService.getUserList(usuarios);
  this.router.navigate(['/form-usuarios']);
}
deleteUser(usuarios:User){
  Swal.fire({
    title:'Você tem certeza?',
    text: 'Deseja mesmo deletar?',
    icon:'warning',
    showCancelButton:true,
    confirmButtonColor:'#3085d6',
    cancelButtonColor:'#d33',
    confirmButtonText:'Sim',
    cancelButtonText:'Não'
  }).then((result) => {
    if(result.isConfirmed) {
      Swal.fire(
        'Deletado com Sucesso!',
      );
    }
  });
}
}
  


