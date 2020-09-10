import { Injectable } from '@angular/core';
import DOMpurify from 'dompurify';
import marked from 'marked';
import { EDITOR_DEFAULT } from './editor-default';
@Injectable({
  providedIn: 'root'
})
export class EditorMarkdownService {
  public DEFAULT = EDITOR_DEFAULT;
  /**
   * Converts the given string, to a markdown.
   * Also performs sanitization.
   */
  public convert(str: string): string {
    return DOMpurify.sanitize(
      marked(str, {
        // add break line support
        breaks: true
      })
    );
  }
}
