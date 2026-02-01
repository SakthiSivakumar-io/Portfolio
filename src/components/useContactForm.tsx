export function useContactForm() {
  const handleSubmit = (e: reminderEvent) => {
    e.preventDefault();

    alert(
      "Form submission will be enabled using Formspree in the next step."
    );
  };

  return { handleSubmit };
}
