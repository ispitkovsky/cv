import { SpitCvPage } from './app.po';

describe('spit-cv App', () => {
  let page: SpitCvPage;

  beforeEach(() => {
    page = new SpitCvPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
