import type { ReturnReasonOption, ReturnMethod, ResolutionOption } from './types';

export const STORE_CONFIG = {
  name: 'Acme Goods & Co.',
  returnWindowDays: 30,
  supportEmail: 'returns@acmegoods.com',
  bonusStoreCreditPercent: 10,
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
    id: 'qr_dropoff',
    name: 'QR Code Drop-off (No Printer Needed)',
    carrier: 'USPS / Happy Returns Bar',
    description: 'Simply show the mobile QR code at any post office or partner drop-off bar. No box or label needed.',
    fee: 0,
    feeLabel: 'FREE',
    estimatedDays: '3–5 business days',
    noPrinterNeeded: true,
    instructions: [
      'Bring your items in their original packaging to any authorized drop-off location.',
      'Show the QR code on your phone to the associate.',
      'Receive an immediate digital drop-off receipt.',
    ],
  },
  {
    id: 'prepaid_label',
    name: 'Prepaid Shipping Label',
    carrier: 'UPS Ground',
    description: 'Print a pre-paid return label at home, attach it to your parcel, and drop it off with any UPS driver or drop box.',
    fee: 4.99,
    feeLabel: '$4.99 (deducted from refund)',
    estimatedDays: '4–6 business days',
    noPrinterNeeded: false,
    instructions: [
      'Download and print the prepaid UPS return label.',
      'Pack items securely in the original shipping box.',
      'Tape the label over the existing shipping barcode.',
      'Drop off at any UPS Store or authorized drop-box.',
    ],
  },
  {
    id: 'in_store',
    name: 'Return In-Store',
    carrier: 'Local Store Location',
    description: 'Visit any of our retail storefronts for an instant inspection and immediate refund.',
    fee: 0,
    feeLabel: 'FREE',
    estimatedDays: 'Instant refund',
    noPrinterNeeded: true,
    instructions: [
      'Bring the items and your Return Reference ID to any retail location.',
      'A store associate will verify your items and release your refund immediately.',
    ],
  },
];

export const RESOLUTION_OPTIONS: ResolutionOption[] = [
  {
    type: 'store_credit',
    title: 'Store Gift Card (+10% Bonus)',
    description: 'Get an instant digital gift card with an extra 10% bonus added to your balance. Never expires.',
    badge: 'Best Value · +10% Bonus',
    bonusPercent: 10,
  },
  {
    type: 'original_payment',
    title: 'Original Payment Method',
    description: 'Refund will be credited back to the original credit card / payment method within 3–5 business days of inspection.',
  },
  {
    type: 'exchange',
    title: 'Exchange for Different Variant',
    description: 'Swap for another size or color with free shipping on the replacement order.',
    badge: 'Free Shipping',
  },
];
