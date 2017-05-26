import { AquacontrolUiPage } from './app.po';

describe('aquacontrol-ui App', () => {
  let page: AquacontrolUiPage;

  beforeEach(() => {
    page = new AquacontrolUiPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
