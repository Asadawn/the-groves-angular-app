import { Component } from '@angular/core';

@Component({
  selector: 'app-manubar',
  imports: [],
  templateUrl: './manubar.component.html',
  styleUrls: ['./manubar.component.css']
})
export class ManubarComponent {
  isMenuExpanded = false;

  toggleMenu(): void {
    this.isMenuExpanded = !this.isMenuExpanded;

        const introContentElement = document.querySelector('.intro-content') as HTMLElement;

        if (this.isMenuExpanded) {
          introContentElement?.classList.add('hidden');
          console.log("Hiding the .intro-content");
        } else {
          introContentElement?.classList.remove('hidden');
          console.log("Showing the .intro-content");
        }

  }
}
