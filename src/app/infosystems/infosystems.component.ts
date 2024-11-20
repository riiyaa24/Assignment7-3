import { Component } from '@angular/core';

@Component({
  selector: 'app-infosystems',
  standalone: true,
  imports: [],
  templateUrl: './infosystems.component.html',
  styleUrl: './infosystems.component.css'
})
export class InfosystemsComponent 
{
  public Information : string = "";

  public MarvellousEvent()
  {
    this.Information = "Educating for better tomorrow";
  }
}
