export type EventCategory = 'corporate' | 'concert' | 'seminar' | 'sports';

export interface ProductItem {
  id: string;
  name: string;
  category: EventCategory;
  tagline: string;
  minOrder: number;
  leadTime: string;
  basePrice: number;
  highlightSpecs: string[];
  badge?: string;
}

export interface QuotationFormState {
  fullName: string;
  organization: string;
  phone: string;
  eventType: EventCategory;
  quantity: number;
  itemType: string;
  notes: string;
}

export interface RemotionCompositionProps {
  category: EventCategory;
  eventName: string;
  primaryColor?: string;
  accentColor?: string;
}
