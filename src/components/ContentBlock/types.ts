import { ReactNode } from "react";

export interface ContentBlockProps {
  icon?: string | ReactNode; // Ahora opcional
  title: string;
  content: string;
  // Optional animation name to apply to title/content. If omitted, renders plain text.
  animation?: string;
  section?: {
    title: string;
    content: string;
    icon: string;
  }[];
  button?: (
    | {
        title: string;
        color?: undefined;
      }
    | {
        title: string;
        color: string;
      }
  )[];
  id: string;
  direction: "left" | "right" | "center";
  customContent?: ReactNode; // Nueva prop para contenido personalizado
}
