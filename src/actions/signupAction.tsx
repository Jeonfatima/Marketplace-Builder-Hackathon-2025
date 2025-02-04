/* eslint-disable  @typescript-eslint/no-explicit-any */
"use server";

const handleSubmitForm = async (prevState: any, formData: FormData) => {
  try {
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    const fields = {
      name,
      email,
      password,
    };

    const response = await fetch("http://localhost:3000/api/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(fields),
    });

    const data = await response.json()
    if (!response.ok) {
      return data.message;
    }

    return data.message;
  } catch (error) {
    console.error("Error submitting form:", error);
    return "An error occurred. Please try again.";
  }
};

export default handleSubmitForm;
