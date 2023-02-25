export type ValidationResult =
  | {
      success: true;
    }
  | { success: false; error: Error };
