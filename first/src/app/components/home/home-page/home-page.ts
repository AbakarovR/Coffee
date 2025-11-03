import { Component } from '@angular/core';
import { AdminPanel } from '../admin-panel/admin-panel';

@Component({
  selector: 'app-home-page',
  imports: [AdminPanel],
  templateUrl: './home-page.html',
  styleUrl: './home-page.scss'
})
export class HomePage {

}
