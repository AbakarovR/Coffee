import { Component } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterLink, RouterLinkActive, RouterOutlet } from "@angular/router";

@Component({
    selector: 'app-admin-panel',
    imports: [MatToolbarModule, MatIconModule, RouterLinkActive, RouterLink, MatButtonModule, RouterOutlet],
    templateUrl: './admin-panel.html',
    styleUrls: ['./admin-panel.scss']
})
export class AdminPanel {

}