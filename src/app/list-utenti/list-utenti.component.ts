import { Component, OnInit } from '@angular/core';
import { Utente } from '../model/Utente';
import { UtenteService } from '../service/utente.service';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';


@Component({
  selector: 'app-list-utenti',
  templateUrl: './list-utenti.component.html',
  styleUrls: ['./list-utenti.component.css']
})

export class ListUtentiComponent implements OnInit {

  listUtenti !: Utente[];

  constructor(private utenteService: UtenteService, private route : Router) {

  }

  readUtenti() {
    this.utenteService.readUtenti().subscribe((list) => {
      this.listUtenti = list
      return this.listUtenti;

      //  SE VOGLIAMO RIMAPPARE I VARI CAMPI DEL JSON

      // console.log(list);
      // list = list.map((utente: any) => {
      //   let newUtente = new Utente();
      //   newUtente.id = utente.id;
      //   newUtente.userName = utente.userName;
      //   newUtente.pwd = utente.pwd;
      //   newUtente.pwdConf = utente.pwdConf;
      //   newUtente.email = utente.email;
      //   newUtente.isAdmin = utente.isAdmin;
      //   return newUtente;
      // });
    })


  }
  deleteUtente(id : Number) {
    this.utenteService.deleteUtente(id);
    console.log('cancellato id = ' + id )
    this.listUtenti = this.listUtenti.filter(utente => utente.id != id) 
  }

  ngOnInit(): void {
    this.readUtenti();
    //this.utenteService.readUtente(2).subscribe((utente)=> console.log(utente));

  }

}
