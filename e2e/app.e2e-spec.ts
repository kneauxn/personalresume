import { PersonalResumePage } from './app.po';

describe('personal-resume App', function() {
  let page: PersonalResumePage;

  beforeEach(() => {
    page = new PersonalResumePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
