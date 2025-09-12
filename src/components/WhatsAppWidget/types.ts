export interface WhatsAppWidgetProps {
  phoneNumber: string;
  companyName?: string;
  message?: string;
  replyTimeText?: string;
  context?: string;
}

export interface StyledButtonProps {
  isOpen: boolean;
  showNotification: boolean;
}
