import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonicModule],
})
export class HomePage {

  message: string = 'The force is with me!';

  constructor() {}

  morePower() {
    this.message = 'Now the force is even stronger!';
  }
}
