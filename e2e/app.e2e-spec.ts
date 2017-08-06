import { WWDCPage } from './app.po';

describe('WWDC App', () => {
  let page: WWDCPage;

  beforeEach(() => {
    page = new WWDCPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
