// Global typing for the GA4 tag so conversion events can be fired from components.
export {};

declare global {
  interface Window {
    gtag?: (
      command: 'event' | 'config' | 'js' | 'set',
      targetOrName: string,
      params?: Record<string, unknown>
    ) => void;
    dataLayer?: unknown[];
  }
}
