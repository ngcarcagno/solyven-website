import styled from "styled-components";

export const ContactContainer = styled("div")`
  width: 100%;
  padding: 5rem 1rem; /* Agregar padding horizontal */
  position: relative;
  min-height: 100vh;
  scroll-snap-align: start;
  display: flex;
  flex-direction: column; /* stack title above form */
  align-items: center;
  justify-content: center;

  @media only screen and (max-width: 1024px) {
    padding: 3rem 1rem; /* Ajustar padding en pantallas pequeñas */
  }
`;

export const FormGroup = styled("form")`
  width: 100vh;
  max-width: 900px; /* allow form to grow wider */
  box-sizing: border-box; /* include padding in width calculations */
  margin: 0 auto; /* center inside the container */
  display: flex;
  flex-direction: column;
  gap: 1rem; /* spacing between form elements */
  background-color: #f5f5f5; /* keep current color */
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1); /* keep visual separation */
  padding: 2rem; /* inner spacing */

  /* ensure child columns/inputs take full width */
  & > div {
    width: 100%;
  }

  @media only screen and (max-width: 1045px) {
    max-width: 100%;
    margin-top: 2rem;
    padding: 1.25rem;
  }
`;

export const Span = styled("span")`
  display: block;
  font-weight: 600;
  color: rgb(255, 130, 92);
  height: 0.775rem;
  padding: 0 0.675rem;
`;

export const ButtonContainer = styled("div")`
  text-align: end;
  position: relative;

  @media only screen and (max-width: 414px) {
    padding-top: 0.75rem;
  }
`;
