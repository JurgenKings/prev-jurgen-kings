import { useState } from "react"

interface UseFormProps<T> {
  initialState: T;
  initialStateError: T;
  initialFocusedState: Record<keyof T, boolean>;
}

const useForm = <T>({ initialState, initialStateError, initialFocusedState }: UseFormProps<T>) => {

  const [formData, setFormData] = useState<T>(initialState)
  const [errors, setErrors] = useState<T>(initialStateError)
  const [focused, setFocused] = useState<Record<keyof T, boolean>>(initialFocusedState)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleFocus = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const name = e.target.name as keyof T 
    setFocused((prev) => ({ ...prev, [name]: true }))
  }

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const name = e.target.name as keyof T
    setFocused((prev) => ({ ...prev, [name]: false }))
  }
  
  const resetForm = () => {
    setFormData(initialState)
    setErrors(initialState)
    setFocused(initialFocusedState)
  }

  return {
    formData,
    setFormData,
    errors,
    focused,
    setFocused,
    handleChange,
    handleFocus,
    handleBlur,
    setErrors,
    resetForm
  }
}

export default useForm