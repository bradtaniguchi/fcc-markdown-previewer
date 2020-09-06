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
  /**
   * The theme class to display. Defaults to dark-theme
   */
  theme: string;
  /**
   * If we are to hide or show the fcc-test-suite.
   * Defaults to false, so its shown
   */
  testSuiteHidden: boolean;
  // TODO: add editor settings
}
