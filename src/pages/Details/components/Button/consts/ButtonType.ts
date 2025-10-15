export const BUTTON_TYPE = {
  BACK: "BACK",
  WATCH_NOW: "WATCH_NOW",
} as const;

export type ButtonType = keyof typeof BUTTON_TYPE;
