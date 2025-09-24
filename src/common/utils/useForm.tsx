import { useState } from "react";
import { notification } from "antd";

// Safe notification wrapper: some environments or HMR states may not expose antd's
// notification object synchronously, so guard against undefined and fallback to console.
const safeNotify = (type: "success" | "error" | "warning", opts: { message?: string; description?: string }) => {
  // Prefer calling the real antd notification if available (restores visual toasts).
  try {
    const fn = (notification as any)?.[type];
    if (typeof fn === "function") {
      fn(opts);
      return;
    }
  } catch (err) {
    // ignore and fallback to console
  }

  // Fallback to console logging for development if notification isn't ready
  if (type === "error") console.error(opts.message, opts.description);
  else if (type === "warning") console.warn(opts.message, opts.description);
  else console.log(opts.message, opts.description);
};

interface IValues {
  name: string;
  email: string;
  message: string;
}

const initialValues: IValues = {
  name: "",
  email: "",
  message: "",
};

export const useForm = (validate: { (values: IValues): IValues }) => {
  const [formState, setFormState] = useState<{
    values: IValues;
    errors: IValues;
    isSubmitting: boolean;
  }>({
    values: { ...initialValues },
    errors: { ...initialValues },
    isSubmitting: false,
  });

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const values = formState.values;
    const errors = validate(values);
    setFormState((prev) => ({ ...prev, errors }));

    if (!Object.values(errors).every((error) => error === "")) {
      return;
    }

    setFormState((prev) => ({ ...prev, isSubmitting: true }));

    // Prefer using an env var so sensitive endpoints are not hard-coded.
    // For Create-React-App: set REACT_APP_CONTACT_API. For Next.js use NEXT_PUBLIC_CONTACT_API.
    const url = (process.env.REACT_APP_CONTACT_API || (process.env.NEXT_PUBLIC_CONTACT_API as string) || "").trim();

    try {
      if (!url) {
        // Developer-friendly behavior: warn in console and show a notice so the form can be tested visually.
        // In production you should configure an API endpoint that sends the email server-side.
        // eslint-disable-next-line no-console
        console.warn("Contact form: no endpoint configured. Form values:", values);
        safeNotify("warning", {
          message: "Formulario no configurado",
          description:
            "No se ha configurado REACT_APP_CONTACT_API (o NEXT_PUBLIC_CONTACT_API). Los datos no se envían; revisa la consola.",
        });

        // Simulate success so the UI behaves as if submission occurred (useful during dev)
        event.currentTarget.reset();
        setFormState({ values: { ...initialValues }, errors: { ...initialValues }, isSubmitting: false });
        safeNotify("success", {
          message: "Enviado (simulado)",
          description: "No hay endpoint configurado — esto es una simulación para pruebas locales.",
        });
        return;
      }

      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      if (!response.ok) {
        safeNotify("error", {
          message: "Error",
          description: "Hubo un error al enviar tu mensaje. Por favor intenta de nuevo más tarde.",
        });
      } else {
        // reset form
        event.currentTarget.reset();
        setFormState({ values: { ...initialValues }, errors: { ...initialValues }, isSubmitting: false });
        safeNotify("success", {
          message: "¡Enviado!",
          description: "Tu mensaje ha sido enviado correctamente.",
        });
      }
    } catch (error) {
      safeNotify("error", {
        message: "Error",
        description: "Error al enviar el formulario. Por favor intenta de nuevo más tarde.",
      });
    } finally {
      setFormState((prev) => ({ ...prev, isSubmitting: false }));
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setFormState((prevState) => ({
      ...prevState,
      values: {
        ...prevState.values,
        [name]: value,
      },
      errors: {
        ...prevState.errors,
        [name]: "",
      },
    }));
  };

  return {
    handleChange,
    handleSubmit,
    values: formState.values,
    errors: formState.errors,
    isSubmitting: formState.isSubmitting,
  };
};
