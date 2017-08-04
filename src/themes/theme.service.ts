import { Injectable } from '@angular/core';

@Injectable()
export class ThemeService {

  colorTheme = 'blue';
  layoutTheme = 'flat';
  transitions = 'transitions';

  theme: string;

  constructor() {
    this.updateTheme();
  }

  setColorTheme(colorTheme: string) {
    this.colorTheme = colorTheme;
    this.updateTheme();
  }

  setLayoutTheme(layoutTheme: string) {
    this.layoutTheme = layoutTheme;
    this.updateTheme();
  }

  enableTransitions() {
    this.transitions = 'transitions';
    this.updateTheme();
  }

  disableTransitions() {
    this.transitions = 'no-transitions';
    this.updateTheme();
  }

  updateTheme() {
    this.theme = `${this.colorTheme}-${this.layoutTheme}-${this.transitions}`;
  }

}
