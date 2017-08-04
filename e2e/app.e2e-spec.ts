import { DevelopmentPornPage } from './app.po';

describe('development-porn App', () => {
  let page: DevelopmentPornPage;

  beforeEach(() => {
    page = new DevelopmentPornPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
