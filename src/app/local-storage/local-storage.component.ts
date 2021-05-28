import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-local-storage',
  templateUrl: './local-storage.component.html',
  styleUrls: ['./local-storage.component.css']
})
export class LocalStorageComponent implements OnInit {

    constructor() { }
    public setItem(key: string, value: string) {
      localStorage.setItem(key, value);
    }
  
    public getItem(key: string) {
      localStorage.getItem(key);
    }
  
    public removeItem(key: string) {
      localStorage.removeItem(key);
    }
  
    public clear() {
      localStorage.clear();
    }
    ngOnInit(): void {
    }
  

}
