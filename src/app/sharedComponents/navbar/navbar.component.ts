import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router, RouterLink, RouterModule, RouterPreloader } from '@angular/router';
import { Location } from '@angular/common';
import { Subscription, timer } from 'rxjs';
import { switchMap } from 'rxjs/operators';



@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  

  constructor(private router: Router, private location:Location )  { }
  
 
  
  ngOnInit(): void {
    this.putEventsMenu();
    
  }
  
  ngOnDestroy(): void{
    this.atualizar();
  }
      
    
  
 
  putEventsMenu(){
    

    const menuDesktop=document.getElementById('menu-desktop');
    const menuMobile=document.getElementById('menu-mobile');
    menuMobile.addEventListener('click',function( ){
      menuDesktop.classList.toggle('active');
      
    });
    
  }
  atualizar() {
    window.location.reload();
   }
 
  logout(){
    localStorage.removeItem('token');
    this.router.navigate(['/login'])
  
  
}
  
}



