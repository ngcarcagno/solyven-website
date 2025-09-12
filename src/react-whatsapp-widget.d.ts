declare module "react-whatsapp-widget" {
  import { ComponentType } from "react";

  interface WhatsAppWidgetProps {
    phoneNumber: string;
    companyName?: string;
    message?: string;
    CompanyIcon?: ComponentType<any>;
    [key: string]: any;
  }

  export const WhatsAppWidget: ComponentType<WhatsAppWidgetProps>;
}
