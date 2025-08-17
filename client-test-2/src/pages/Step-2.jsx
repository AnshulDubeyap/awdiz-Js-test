import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Step2() {
  const [form, setForm] = useState({
    username: "",
    password: "",
    confirmPassword: "",
  });

  const navigate = useNavigate();
  const [isFormValid, setIsFormValid] = useState(false);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(() => {
    const { username, password, confirmPassword } = form;
    const areAllFieldsFilled =
      username !== "" && password !== "" && confirmPassword !== "";

    const doPasswordsMatch = password === confirmPassword;

    if (areAllFieldsFilled && doPasswordsMatch) {
      setIsFormValid(true);
    } else {
      setIsFormValid(false);
    }
  }, [form]);

  const handleClick = (e) => {
    e.preventDefault();
    if (isFormValid) {
      console.log("Step 2 form is valid. Navigating to Step 3.");
      navigate("/Step-3");
    }
    console.log(form);
  };

  const handleBackClick = () => {
    const combinedForm = { ...(form + form) };
    console.log(combinedForm);

    navigate("/Step-1");
  };

  return (
    <form onSubmit={handleClick}>
      <h1>Account Information</h1>
      <input
        type="text"
        value={form.username}
        name="username"
        placeholder="Username"
        onChange={handleChange}
      />
      <input
        type="password"
        name="password"
        value={form.password}
        placeholder="Password"
        onChange={handleChange}
      />
      <input
        type="password"
        name="confirmPassword"
        value={form.confirmPassword}
        placeholder="Confirm Password"
        onChange={handleChange}
      />

      <button type="submit" disabled={!isFormValid}>
        Next
      </button>

      <button type="button" onClick={handleBackClick}>
        Back
      </button>
    </form>
  );
}

export default Step2;
