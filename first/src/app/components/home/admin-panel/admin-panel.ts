import { Component } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import {MatToolbarModule} from '@angular/material/toolbar';
import { RouterLink, RouterLinkActive } from "@angular/router";

@Component({
    selector: 'app-admin-panel',
    imports: [MatToolbarModule, MatIconModule, RouterLinkActive, RouterLink, MatButtonModule],
    templateUrl: './admin-panel.html',
    styleUrls: ['./admin-panel.scss']
})
export class AdminPanel {

}