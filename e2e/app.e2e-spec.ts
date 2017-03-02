import { Ynasc2FrontPage } from './app.po';

describe('ynasc2-front App', () => {
  let page: Ynasc2FrontPage;

  beforeEach(() => {
    page = new Ynasc2FrontPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
