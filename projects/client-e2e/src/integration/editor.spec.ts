import { EditorPageObject } from '../fixtures/editor.po';

describe('Editor', () => {
  const editorPageObject = new EditorPageObject();
  before(() => {
    cy.visit('');
  });
  afterEach(() => {
    cy.reload();
  });

  it('[1] I can see a textarea element with a corresponding id="editor"');
  it('[2] I can see an element with a corresponding id="preview"');
  it(
    '[3] When I enter text into the #editor element, the #preview element ' +
      'is updated as I type to display the content of the textarea.'
  );
  it(
    '[4] When I enter GitHub flavored markdown into the #editor element, ' +
      'the text is rendered as HTML in the #preview element as I type'
  );
  describe('element initially loads', () => {
    it('h1 header');
    it('h2 header');
    it('a link');
    it('inline code');
    it('a code block');
    it('a list item');
    it('a blockquote');
    it('an image');
    it('bolded text');
  });
});
