import toast from "react-hot-toast"

type ToastType = "success" | "error" | "promise" | "custom" | "loading" | "remove"

type Messages = Record<string, string>

const notify = (type: ToastType, action: string, customMessages?: Messages): void => {

  const messages: Messages = customMessages || {
    success: "Operación exitosa",
    error: "Ocurrió un error",
    promise: "Cargando...",
  }

  const message = messages[action] || "Mensaje no definido"

  if (type === "promise") {
    toast.promise(new Promise((resolve) => resolve(message)), {
      loading: messages.promise || "Cargando...",
      success: message,
      error: "Error durante la operación",
    })
  } else {
    toast[type](message, { duration: 2000 })
  }
}

export default notify