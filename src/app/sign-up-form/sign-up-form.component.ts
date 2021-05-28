import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Utente } from '../model/Utente';
import { UtenteService } from '../service/utente.service';

@Component({
  selector: 'app-sign-up-form',
  templateUrl: './sign-up-form.component.html',
  styleUrls: ['./sign-up-form.component.css']
})
export class SignUpFormComponent implements OnInit {
  utente : Utente = new Utente(); 

 

  constructor(private utenteService: UtenteService, private route : Router){
   
  }
  
  
  public onFormSubmit({value,valid}:{value:Utente,valid:boolean}){

    this.utente = value;
    console.log(this.utente)
    console.log("valid: " + valid)

    if(valid == true){
      
      this.utenteService.createUtente(value).subscribe((utente)=>{
        return utente;
      
        
      })
    }
    this.route.navigateByUrl('/index');
    
  }

  ngOnInit(): void {
    
  }
  
}