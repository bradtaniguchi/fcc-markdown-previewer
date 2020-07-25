import { File } from './file';

/**
 * App Settings can be changed in multiple places,
 * and are saved into the local browser via
 * localForage.
 */
export interface AppSettings {
  /**
   * The font-size for the editor, defaults to 14px.
   */
  fontSize: string;
  // TODO: add editor settings
}
