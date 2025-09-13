import { ReactNode } from "react";

export interface ContentBlockProps {
  icon?: string | ReactNode; // Ahora opcional
  title: string;
  content: string;
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
