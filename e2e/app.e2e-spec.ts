import { SamplePage } from './app.po';

describe('sample App', () => {
  let page: SamplePage;

  beforeEach(() => {
    page = new SamplePage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
