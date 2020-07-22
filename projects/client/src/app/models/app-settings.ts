/**
 * App Settings can be changed in multiple places,
 * and are saved into the local browser via
 * localForage.
 */
export interface AppSettings {
  /**
   * The list of markdown files.
   */
  files: any[];
  /**
   * The list of opened files, shown on the left
   */
  openedFiles: string[];

  // TODO: add editor settings
}
