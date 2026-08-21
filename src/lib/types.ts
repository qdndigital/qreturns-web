export type ReturnStatus =
  | 'return_requested'
  | 'awaiting_approval'
  | 'return_approved'
  | 'awaiting_shipment'
  | 'in_transit'
  | 'received'
  | 'refund_processing'
  | 'refund_completed'
  | 'return_rejected';

export interface OrderItem {
  id: string;
  name: string;
  variant: string;
  price: number;
  quantity: number;
  image: string;
  isEligible: boolean;
  ineligibleReason?: string;
}

export interface Order {
  id: string;
  orderNumber: string;
  email: string;
  customerName: string;
  orderDate: string;
  deliveredDate: string;
  currency: string;
  shippingAddress: {
    street: string;
    city: string;
    state: string;
    zip: string;
    country: string;
  };
  items: OrderItem[];
}

export type ReturnReasonCode =
  | 'wrong_size'
  | 'doesnt_fit'
  | 'changed_mind'
  | 'damaged_item'
  | 'defective_item'
  | 'wrong_item_received'
  | 'other';

export interface ReturnReasonOption {
  code: ReturnReasonCode;
  label: string;
  description: string;
  requiresPhoto?: boolean;
}

export type ReturnMethodId = 'qr_dropoff' | 'prepaid_label' | 'in_store';

export interface ReturnMethod {
  id: ReturnMethodId;
  name: string;
  carrier: string;
  description: string;
  fee: number;
  feeLabel: string;
  estimatedDays: string;
  noPrinterNeeded: boolean;
  instructions: string[];
}

export type ResolutionType = 'store_credit' | 'original_payment' | 'exchange';

export interface ResolutionOption {
  type: ResolutionType;
  title: string;
  description: string;
  badge?: string;
  bonusPercent?: number;
}

export interface SelectedReturnItem {
  itemId: string;
  quantity: number;
  reason: ReturnReasonCode;
  notes?: string;
  photoUrl?: string;
}

export interface ReturnSubmission {
  returnId: string;
  orderNumber: string;
  customerEmail: string;
  customerName: string;
  createdAt: string;
  status: ReturnStatus;
  items: Array<{
    item: OrderItem;
    quantity: number;
    reason: ReturnReasonCode;
    notes?: string;
  }>;
  method: ReturnMethod;
  resolution: ResolutionType;
  financials: {
    itemsTotal: number;
    returnFee: number;
    bonusCredit: number;
    finalRefundAmount: number;
  };
  tracking?: {
    carrier: string;
    trackingNumber: string;
    trackingUrl: string;
    qrCodeValue: string;
  };
  timeline: Array<{
    status: ReturnStatus;
    title: string;
    description: string;
    timestamp: string;
    completed: boolean;
    current: boolean;
  }>;
}
