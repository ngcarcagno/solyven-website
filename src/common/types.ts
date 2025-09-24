export interface ContainerProps {
  border?: boolean;
  children: React.ReactNode;
}

export interface ButtonProps {
  color?: string;
  name?: string;
  children: React.ReactNode;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  variant?: "default" | "compact" | "header";
  style?: React.CSSProperties;
}

export interface SvgIconProps {
  src: string;
  width?: string;
  height?: string;
  className?: string;
  preserveColor?: boolean; // true = keep original colors, false = force currentColor
  [key: string]: any;
}

export interface InputProps {
  name: string;
  placeholder: string;
  type?: string;
  value?: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => void;
  label?: string;
}

export interface validateProps {
  name: string;
  message: string;
  email: string;
}
