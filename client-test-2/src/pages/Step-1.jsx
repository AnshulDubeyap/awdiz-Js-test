import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Step1() {
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
  });

  const [isFormValid, setIsFormValid] = useState(false);

  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(() => {
    const { fullName, email, phoneNumber } = form;
    if (fullName && email && phoneNumber) {
      setIsFormValid(true);
    } else {
      setIsFormValid(false);
    }
  }, [form]);

  const handleClick = (e) => {
    e.preventDefault();
    if (isFormValid) {
      navigate("/Step-2", { state: form });
    }
    console.log(form);
  };

  return (
    <form onSubmit={handleClick}>
      <h1>Personal Information Page</h1>
      <label>Full Name</label>
      <input
        type="text"
        placeholder="Full Name"
        name="fullName"
        required
        onChange={handleChange}
        value={form.fullName}
      />

      <label>Email</label>
      <input
        type="email"
        placeholder="Email"
        name="email"
        required
        onChange={handleChange}
        value={form.email}
      />

      <label>Phone Number</label>
      <input
        type="text"
        placeholder="Phone Number"
        name="phoneNumber"
        required
        onChange={handleChange}
        value={form.phoneNumber}
      />

      <button type="submit" disabled={!isFormValid}>
        Next
      </button>
    </form>
  );
}

export default Step1;
