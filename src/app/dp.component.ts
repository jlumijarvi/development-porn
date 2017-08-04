import { Component } from '@angular/core';
import { ThemeService } from '../themes/theme.service';

@Component({
  selector: 'dp-root',
  templateUrl: './dp.component.html',
  styleUrls: ['./dp.component.scss']
})
export class DpComponent {
  constructor(public themeService: ThemeService) {
  }
}
