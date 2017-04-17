import { SengwebappPage } from './app.po';

describe('sengwebapp App', () => {
  let page: SengwebappPage;

  beforeEach(() => {
    page = new SengwebappPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
