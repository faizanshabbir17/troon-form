import { useCallback, useState } from "react";
const useForm = (initialState, errorBody) => {
  const [form, setForm] = useState(initialState);
  const [error, setError] = useState(errorBody);
  const handleChange = (event) => {
    event.persist();
    setForm((form) => ({
      ...form,
      [event.target.name]:
        event.target.type === "radio"
          ? event.target.value
          : event.target.type === "checkbox"
          ? event.target.checked
          : event.target.value,
    }));
    setError((error) => ({
      ...error,
      [event.target.name]:
        event.target.type === "radio"
          ? event.target.value
          : event.target.type === "checkbox"
          ? !event.target.checked
          : event.target.value !== ""
          ? false
          : true,
    }));
  };
  const resetForm = useCallback(() => {
    setForm(initialState);
    setError(errorBody);
  }, [initialState]);
  return {
    form,
    handleChange,
    resetForm,
    setForm,
    error,
    setError,
  };
};

export default useForm;
