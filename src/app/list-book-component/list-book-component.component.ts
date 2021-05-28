import { Component, OnInit } from '@angular/core';
import { Libro } from '../model/Libro';
import { ListLibro } from '../model/ListLibro';


@Component({
  selector: 'app-list-book-component',
  templateUrl: './list-book-component.component.html',
  styleUrls: ['./list-book-component.component.css']
})
export class ListBookComponentComponent implements OnInit {

  constructor() { }
  libro : Libro = new Libro()
  listLibro : ListLibro = new ListLibro() 
  ngOnInit(): void {
   
    var libro1: Libro = new Libro()
    libro1.id = 1;
    libro1.title = "Promessi Sposi";
    libro1.author = "Allesandro Manzoni";
    libro1.genre = "Romantico"
    libro1.isbn = "1234";
    this.listLibro.addLibro(libro1)
    
    var libro2: Libro = new Libro()
    libro2.id = 2;
    libro2.title = "Jurassic Park";
    libro2.author = "Michael Crichton";
    libro2.genre = "Avventura";
    libro2.isbn = "4323";
    this.listLibro.addLibro(libro2)

    var libro3: Libro = new Libro()
    libro3.id = 3;
    libro3.title = "Divina Commedia";
    libro3.author = "Dante Alighieri";
    libro3.genre = "Romantico";
    libro3.isbn = "4321";
    this.listLibro.addLibro(libro3)

    var libro4: Libro = new Libro()
    libro4.id = 4;
    libro4.title = "Alchimista ";
    libro4.author = "Paulo Coelho";
    libro4.genre = "Avventura";
    libro4.isbn = "9873";
    this.listLibro.addLibro(libro4)

    var libro5: Libro = new Libro()
    libro5.id = 5;
    libro5.title = "Trono Di Spade";
    libro5.author = "George R.R. Martin";
    libro5.genre = "Avventura";
    libro5.isbn = "9876";
    this.listLibro.addLibro(libro5)

    var libro6: Libro = new Libro()
    libro6.id = 6;
    libro6.title = "Dracula";
    libro6.author = "Bram Stoker";
    libro6.genre = "Horror"
    libro6.isbn = "4332";
    this.listLibro.addLibro(libro6)



  }

}
