declare module "react-div-100vh" {
  import * as React from "react";

  interface Div100vhProps extends React.HTMLAttributes<HTMLElement> {
    children?: React.ReactNode;
    className?: string;
    style?: React.CSSProperties;
  }

  const Div100vh: React.ComponentType<Div100vhProps>;
  export default Div100vh;
}
