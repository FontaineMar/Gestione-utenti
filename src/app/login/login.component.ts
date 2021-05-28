import { listLazyRoutes } from '@angular/compiler/src/aot/lazy_routes';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LocalStorageComponent } from '../local-storage/local-storage.component';
import { Utente } from '../model/Utente';
import { UtenteService } from '../service/utente.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private utenteService: UtenteService, private route: Router,private localStorage : LocalStorageComponent) { }
  utente: Utente = new Utente()
  

  loginEnter() {
    let userName = this.utente.userName
    let pwd = this.utente.pwd

    this.utenteService.readUtenti().subscribe((utenti) => {
      var isIn = false

      for (let i = 0; i < utenti.length; i++) {


        if (utenti[i].userName == userName && utenti[i].pwd == pwd && utenti[i].isAdmin == 'amministratore') {

          this.localStorage.setItem('userName', JSON.stringify(userName))
          this.localStorage.setItem('pwd', JSON.stringify(pwd))
          this.localStorage.setItem('logged', "yes")

          this.route.navigateByUrl('/index');


        }
      }


    })




  }


  ngOnInit(): void {
  }

}
