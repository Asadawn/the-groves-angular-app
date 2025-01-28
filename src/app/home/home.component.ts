import { Component } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { ManubarComponent } from "../manubar/manubar.component";

@Component({
  selector: 'app-home',
  imports: [HeaderComponent, ManubarComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
