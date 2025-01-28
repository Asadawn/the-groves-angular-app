import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./header/header.component";
import { ManubarComponent } from "./manubar/manubar.component";
import { HomeComponent } from "./home/home.component";
import { HeroSectionComponent } from "./hero-section/hero-section.component";
import { FooterComponent } from "./footer/footer.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, ManubarComponent, HomeComponent, HeroSectionComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-angular-app';

//  constructor(private router: Router){

//  }
//   routerFuncion(route: string){
//    this.router.navigate([`/${route}`])
//   }
  
}
