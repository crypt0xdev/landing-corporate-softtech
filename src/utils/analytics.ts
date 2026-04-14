// Google Analytics Configuration
import { env } from '@/config/env';
export const GA_TRACKING_ID = env.gaTrackingId || 'G-XXXXXXXXXX';

// Event tracking
export const trackEvent = (
  action: string,
  category: string,
  label?: string,
  value?: number,
) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
};

// Page view tracking
export const trackPageView = (url: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', GA_TRACKING_ID, {
      page_path: url,
    });
  }
};

// Conversion tracking
export const trackConversion = (conversionId: string, value?: number) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'conversion', {
      send_to: conversionId,
      value: value,
      currency: 'PEN',
    });
  }
};

// Form submission tracking
export const trackFormSubmission = (formName: string) => {
  trackEvent('submit', 'Form', formName);
};

// Button click tracking
export const trackButtonClick = (buttonName: string) => {
  trackEvent('click', 'Button', buttonName);
};

// WhatsApp click tracking
export const trackWhatsAppClick = () => {
  trackEvent('click', 'WhatsApp', 'Floating Button');
};

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}
