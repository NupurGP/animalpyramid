import { PyramidAminalAllPage } from './app.po';

describe('pyramid-aminal-all App', () => {
  let page: PyramidAminalAllPage;

  beforeEach(() => {
    page = new PyramidAminalAllPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
