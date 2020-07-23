import { File } from './file';

/**
 * App Settings can be changed in multiple places,
 * and are saved into the local browser via
 * localForage.
 */
export interface AppSettings {
  /**
   * The list of markdown files.
   */
  files: File[];
  /**
   * The list of opened files, shown on the left
   */
  openedFiles: string[];
  /**
   * The font-size for the editor, defaults to 14px.
   * TODO: this is currently defined elsewhere
   */
  fontSize: string;
  // TODO: add editor settings
}
