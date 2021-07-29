import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lista-usuarios',
  templateUrl: './lista-usuarios.component.html',
  styleUrls: ['./lista-usuarios.component.scss']
})
export class ListaUsuariosComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.putEventsMenu();
  }

  putEventsMenu(){
    const menuDesktop=document.getElementById('menu-desktop');
    const menuMobile=document.getElementById('menu-mobile');
    menuMobile.addEventListener('click',function(){
      menuDesktop.classList.toggle('active');
    });
  }
  logout(){
    localStorage.removeItem('token');
    this.router.navigate(['/login'])
  }
}
  


