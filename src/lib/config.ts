import type { ReturnReasonOption, ReturnMethod, ResolutionOption } from './types';

export const STORE_CONFIG = {
  name: 'Acme Goods & Co.',
  returnWindowDays: 30,
  supportEmail: 'returns@acmegoods.com',
  bonusStoreCreditPercent: 0,
  currencySymbol: '$',
};

export const RETURN_REASONS: ReturnReasonOption[] = [
  { code: 'wrong_size', label: 'Wrong size', description: 'Item runs too large or small' },
  { code: 'doesnt_fit', label: "Doesn't fit style / look", description: 'Style or cut did not suit me' },
  { code: 'changed_mind', label: 'Changed my mind', description: 'No longer needed or wanted' },
  { code: 'damaged_item', label: 'Damaged item', description: 'Item arrived torn, stained, or broken', requiresPhoto: true },
  { code: 'defective_item', label: 'Defective / Poor quality', description: 'Faulty zipper, seam split, or material defect', requiresPhoto: true },
  { code: 'wrong_item_received', label: 'Wrong item received', description: 'Received incorrect item or variant', requiresPhoto: true },
  { code: 'other', label: 'Other', description: 'Please specify the reason in the text box below' },
];

export const RETURN_METHODS: ReturnMethod[] = [
  {
    id: 'prepaid_label',
    name: 'Prepaid Shipping Label',
    carrier: 'USPS via Shippo',
    description: 'A prepaid return label is bought when the store approves your return and emailed to you. Free when your order includes the Protect Product.',
    fee: 0,
    feeLabel: 'FREE (Protect Product)',
    estimatedDays: '3–6 business days',
    noPrinterNeeded: false,
    instructions: [
      'Wait for the "Your return label is ready" email.',
      'Print the label and attach it to your parcel.',
      'Drop it off with the carrier.',
    ],
  },
];

export const RESOLUTION_OPTIONS: ResolutionOption[] = [
  {
    type: 'original_payment',
    title: 'Original Payment Method',
    description: 'The refund goes back to the original payment method once the store has inspected your parcel.',
  },
];
