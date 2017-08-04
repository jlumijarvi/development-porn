import { Component, OnInit } from '@angular/core';
import { ThemeService } from '../../themes/theme.service';

@Component({
  selector: 'dp-theme-wrapper',
  templateUrl: './theme-wrapper.component.html',
  styleUrls: ['./theme-wrapper.component.scss']
})
export class ThemeWrapperComponent implements OnInit {

  constructor(public themeService: ThemeService) { }

  ngOnInit() {
  }

}
