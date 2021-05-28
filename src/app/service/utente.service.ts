import { Injectable } from '@angular/core';
import { HttpClient }  from '@angular/common/http';
import { Observable } from 'rxjs';
import { Utente } from '../model/Utente';

@Injectable({
  providedIn: 'root'
})
export class UtenteService {

  constructor(private http : HttpClient){ }

  readUtenti() : Observable<any>{
    return this.http.get<any>('http://localhost:3000/utenti');
  }
  readUtente(id:number) : Observable<Utente>{
    return this.http.get<Utente>('http://localhost:3000/utenti/' + id);
  }
  
  deleteUtente(id:Number){
    return this.http.delete('http://localhost:3000/utenti/' + id).subscribe();
  }

  createUtente(user:Utente): Observable<Utente>{
    return this.http.post<Utente>('http://localhost:3000/utenti/',user);
  }
  updateUtente(user:Utente): Observable<Utente>{
    return this.http.put<Utente>('http://localhost:3000/utenti/' + user.id ,user);
  }

}
