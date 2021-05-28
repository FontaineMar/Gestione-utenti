import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Utente } from '../model/Utente';
import { UtenteService } from '../service/utente.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  utente : Utente = new Utente();   
  constructor(private utenteService: UtenteService, private route : ActivatedRoute,private home : Router ) { }


   readUtente(id : number){
   this.utenteService.readUtente(id).subscribe((utente) => {
    this.utente = utente
    return this.utente;
   })
  }
  public onFormUpdate({valid}:{valid:boolean}){

    console.log(this.utente)
    console.log("valid: " + valid)
    console.log('aggiornato ')
    if(valid == true){
      
      this.utenteService.updateUtente(this.utente).subscribe((utente)=>{
        console.log('aggiornato ')
        return utente;
      
        
      })
    }
    this.home.navigateByUrl('/index');
   
    
  }
  
  ngOnInit(): void {

  this.route.params.subscribe((params)=> {
    this.readUtente(JSON.parse(params.id))
  }
  );

  }

}
