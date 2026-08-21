import { MOCK_ORDERS, MOCK_RETURNS } from './mock-data';
import type { Order, ReturnSubmission, ReturnStatus, ReturnMethod, ResolutionType, OrderItem, ReturnReasonCode } from './types';
import { STORE_CONFIG } from './config';

const STORAGE_KEY = 'qreturns_submissions';

export function normalizeOrderNumber(input: string): string {
  return input.trim().replace(/^[#\s]+/, '').replace(/^ord[-_]?/i, '');
}

export function findOrderByLookup(orderNumber: string, email: string): { order?: Order; error?: string } {
  const cleanOrderNum = normalizeOrderNumber(orderNumber);
  const cleanEmail = email.trim().toLowerCase();

  if (!cleanOrderNum) {
    return { error: 'Please enter your order number.' };
  }
  if (!cleanEmail || !cleanEmail.includes('@')) {
    return { error: 'Please enter a valid email address.' };
  }

  const order = MOCK_ORDERS.find((o) => {
    const oNum = normalizeOrderNumber(o.orderNumber);
    return oNum === cleanOrderNum && o.email.toLowerCase() === cleanEmail;
  });

  if (!order) {
    // Check if order exists with different email to provide a helpful message
    const orderWithDifferentEmail = MOCK_ORDERS.find((o) => normalizeOrderNumber(o.orderNumber) === cleanOrderNum);
    if (orderWithDifferentEmail) {
      return { error: 'We found order #' + cleanOrderNum + ', but the email address does not match our records for this order.' };
    }
    return { error: 'No order found matching #' + cleanOrderNum + ' and ' + cleanEmail + '. Please check your receipt and try again.' };
  }

  return { order };
}

export function getReturnById(returnId: string): ReturnSubmission | null {
  const cleanId = returnId.trim().toUpperCase();
  // Check localStorage if available in browser
  if (typeof window !== 'undefined') {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        const parsed: Record<string, ReturnSubmission> = JSON.parse(stored);
        if (parsed[cleanId]) return parsed[cleanId];
      }
    } catch {
      // Ignore JSON parse errors
    }
  }

  // Check pre-populated mock returns
  if (MOCK_RETURNS[cleanId]) {
    return MOCK_RETURNS[cleanId];
  }

  return null;
}

export function saveReturnSubmission(submission: ReturnSubmission): void {
  if (typeof window !== 'undefined') {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      const existing: Record<string, ReturnSubmission> = stored ? JSON.parse(stored) : {};
      existing[submission.returnId] = submission;
      localStorage.setItem(STORAGE_KEY, JSON.stringify(existing));
    } catch (e) {
      console.warn('Could not save return to localStorage:', e);
    }
  }
}

export function generateReturnId(): string {
  const randomDigits = Math.floor(100000 + Math.random() * 900000);
  return `RET-${randomDigits}`;
}

export function createReturnSubmission(params: {
  order: Order;
  selectedItems: Array<{ item: OrderItem; quantity: number; reason: ReturnReasonCode; notes?: string }>;
  method: ReturnMethod;
  resolution: ResolutionType;
}): ReturnSubmission {
  const returnId = generateReturnId();
  const now = new Date();
  const dateStr = now.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
  const timeStr = now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });

  const itemsTotal = params.selectedItems.reduce((sum, item) => sum + item.item.price * item.quantity, 0);
  const returnFee = params.resolution === 'store_credit' ? 0 : params.method.fee;
  const bonusCredit = params.resolution === 'store_credit' ? (itemsTotal * STORE_CONFIG.bonusStoreCreditPercent) / 100 : 0;
  const finalRefundAmount = Math.max(0, itemsTotal - returnFee + bonusCredit);

  const submission: ReturnSubmission = {
    returnId,
    orderNumber: params.order.orderNumber,
    customerEmail: params.order.email,
    customerName: params.order.customerName,
    createdAt: dateStr,
    status: 'return_approved',
    items: params.selectedItems,
    method: params.method,
    resolution: params.resolution,
    financials: {
      itemsTotal,
      returnFee,
      bonusCredit,
      finalRefundAmount,
    },
    tracking: {
      carrier: params.method.carrier,
      trackingNumber: `1Z${Math.floor(1000000000000000 + Math.random() * 9000000000000000)}`,
      trackingUrl: 'https://track.example.com/' + returnId,
      qrCodeValue: `QR-${returnId}-${params.method.id.toUpperCase()}`,
    },
    timeline: [
      {
        status: 'return_requested',
        title: 'Return Requested',
        description: 'Return request submitted by customer.',
        timestamp: `${dateStr} · ${timeStr}`,
        completed: true,
        current: false,
      },
      {
        status: 'return_approved',
        title: 'Return Authorized & Label Generated',
        description: params.method.noPrinterNeeded
          ? 'Mobile QR Code ready for instant drop-off.'
          : 'Prepaid return label generated and ready for printing.',
        timestamp: `${dateStr} · ${timeStr}`,
        completed: true,
        current: true,
      },
      {
        status: 'in_transit',
        title: 'Package In Transit',
        description: 'Waiting for initial scan at drop-off carrier location.',
        timestamp: 'Pending drop-off',
        completed: false,
        current: false,
      },
      {
        status: 'received',
        title: 'Received & Inspected',
        description: 'Items will be inspected at our fulfillment center.',
        timestamp: 'Pending delivery',
        completed: false,
        current: false,
      },
      {
        status: 'refund_completed',
        title: params.resolution === 'store_credit' ? 'Store Credit Issued' : 'Refund Processed',
        description: `$${finalRefundAmount.toFixed(2)} will be credited.`,
        timestamp: 'Pending inspection',
        completed: false,
        current: false,
      },
    ],
  };

  saveReturnSubmission(submission);
  return submission;
}
