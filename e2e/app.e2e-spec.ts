import { UnboxAngularPage } from './app.po';

describe('unbox-angular App', () => {
  let page: UnboxAngularPage;

  beforeEach(() => {
    page = new UnboxAngularPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
