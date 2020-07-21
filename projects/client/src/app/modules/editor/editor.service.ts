import { Injectable } from '@angular/core';
import DOMpurify from 'dompurify';
import marked from 'marked';

@Injectable({
  providedIn: 'root'
})
export class EditorService {
  // TODO: update default, get from file
  public DEFAULT = '';
  /**
   * Converts the given string, to a markdown.
   * Also performs sanitization.
   */
  public convert(str: string): string {
    return DOMpurify.sanitize(marked(str));
  }
}
