/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";
import { useState, useEffect } from "preact/hooks";

const Form = () => {
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const [firstNameValid, setFirstNameValid] = useState("");
  const [lastNameValid, setLastNameValid] = useState("");
  const [emailValid, setEmailValid] = useState("");
  const [passwordValid, setPasswordValid] = useState("");

  const handleInputChange = (
    e: h.JSX.TargetedEvent<HTMLFormElement, Event>
  ) => {
    e.preventDefault();
    console.log(data);
  };

  useEffect(() => {
    if (/^[a-z]+$/g.test(data.firstName)) {
      setFirstNameValid("");
    } else if (/^[a-zA-Z0-9_ ]+$/g.test(data.lastName)) {
      setFirstNameValid("First name cant contain spaces or numbers");
    } else {
      setFirstNameValid("First name must contain at least one letter");
    }

    if (/^[a-z]+$/g.test(data.lastName)) {
      setLastNameValid("");
    } else if (/^[a-zA-Z0-9_ ]+$/g.test(data.lastName)) {
      setLastNameValid("Last name cant contain spaces or numbers");
    } else {
      setLastNameValid("Last name must contain at least one letter");
    }

    if (
      /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/g.test(
        data.email
      )
    ) {
      setEmailValid("");
    } else {
      setEmailValid("Email must be a valid email address");
    }

    if (
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/g.test(
        data.password
      )
    ) {
      setPasswordValid("");
    } else if (/^\w{8,}$/g.test(data.password)) {
      setPasswordValid(
        "Must contain at least a capital, a number and character"
      );
    } else if (data.password.length < 8) {
      setPasswordValid("Password must be at least 8 characters long");
    }
  }, [data]);

  return (
    <form onSubmit={handleInputChange} class={tw`flex flex-col gap-7`}>
      <div class={tw`relative w-full`}>
        <input
          type="text"
          placeholder="First Name"
          onChange={(e) => {
            const target = e.target as HTMLInputElement;
            setData({ ...data, firstName: target.value });
          }}
          class={tw`p-3 rounded border ${
            firstNameValid
              ? "border-primary-red text-primary-red placeholder-primary-red"
              : "border-neutral-grayishBlue text-neutral-darkBlue"
          } font-semibold text-sm text-sm w-full`}
        />
        <p class={tw`absolute text-xs text-right text-primary-red right-0`}>
          {firstNameValid && firstNameValid}
        </p>
      </div>
      <div class={tw`relative w-full`}>
        <input
          type="text"
          placeholder="Last Name"
          onChange={(e) => {
            const target = e.target as HTMLInputElement;
            setData({ ...data, lastName: target.value });
          }}
          class={tw`p-3 rounded border ${
            lastNameValid
              ? "border-primary-red text-primary-red placeholder-primary-red"
              : "border-neutral-grayishBlue text-neutral-darkBlue"
          } font-semibold text-sm text-sm w-full`}
        />
        <p class={tw`absolute text-xs text-right text-primary-red right-0`}>
          {lastNameValid && lastNameValid}
        </p>
      </div>
      <div class={tw`relative w-full`}>
        <input
          type="email"
          placeholder="Email Address"
          onChange={(e) => {
            const target = e.target as HTMLInputElement;
            setData({ ...data, email: target.value });
          }}
          class={tw`p-3 rounded border ${
            emailValid
              ? "border-primary-red text-primary-red placeholder-primary-red"
              : "border-neutral-grayishBlue text-neutral-darkBlue"
          } font-semibold text-sm text-sm w-full`}
        />
        <p class={tw`absolute text-xs text-right text-primary-red right-0`}>
          {emailValid && emailValid}
        </p>
      </div>
      <div class={tw`relative w-full`}>
        <input
          type="password"
          placeholder="Password"
          onChange={(e) => {
            const target = e.target as HTMLInputElement;
            setData({ ...data, password: target.value });
          }}
          class={tw`p-3 rounded border ${
            passwordValid
              ? "border-primary-red text-primary-red placeholder-primary-red"
              : "border-neutral-grayishBlue text-neutral-darkBlue"
          } font-semibold text-sm text-sm w-full`}
        />
        <p class={tw`absolute text-xs text-right text-primary-red right-0`}>
          {passwordValid && passwordValid}
        </p>
      </div>
      <button
        class={tw`p-3 w-full bg-primary-green rounded font-semibold text-white hover:opacity-90 transition shadow-lg`}
        type="submit"
      >
        Claim your free trial
      </button>
    </form>
  );
};

export default Form;
