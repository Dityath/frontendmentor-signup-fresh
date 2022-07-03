/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";
import { useState, useEffect, useRef } from "preact/hooks";

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

  const [firstNameTouched, setFirstNameTouched] = useState(false);
  const [lastNameTouched, setLastNameTouched] = useState(false);
  const [emailTouched, setEmailTouched] = useState(false);
  const [passwordTouched, setPasswordTouched] = useState(false);

  const handleInputChange = (
    e: h.JSX.TargetedEvent<HTMLFormElement, Event>
  ) => {
    e.preventDefault();
    if (
      firstNameValid === "" &&
      lastNameValid === "" &&
      emailValid === "" &&
      passwordValid === ""
    ) {
      console.log("data form: ", data);
    } else {
      setFirstNameTouched(true);
      setLastNameTouched(true);
      setEmailTouched(true);
      setPasswordTouched(true);
    }
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
          value={data.firstName}
          onBlur={() => {
            setFirstNameTouched(true);
          }}
          class={tw`p-3 rounded border ${
            firstNameValid && firstNameTouched
              ? "border-primary-red text-primary-red placeholder-primary-red"
              : "border-neutral-grayishBlue text-neutral-darkBlue"
          } font-semibold text-sm text-sm w-full`}
        />
        {firstNameTouched && (
          <p class={tw`absolute text-xs text-right text-primary-red right-0`}>
            {firstNameValid && firstNameValid}
          </p>
        )}
        {firstNameTouched && (
          <span class={tw`absolute right-2 top-[0.7rem]`}>
            {firstNameValid && <img src="/icon-error.svg" alt="" />}
          </span>
        )}
      </div>
      <div class={tw`relative w-full`}>
        <input
          type="text"
          placeholder="Last Name"
          onChange={(e) => {
            const target = e.target as HTMLInputElement;
            setData({ ...data, lastName: target.value });
          }}
          value={data.lastName}
          onBlur={() => {
            setLastNameTouched(true);
          }}
          class={tw`p-3 rounded border ${
            lastNameValid && lastNameTouched
              ? "border-primary-red text-primary-red placeholder-primary-red"
              : "border-neutral-grayishBlue text-neutral-darkBlue"
          } font-semibold text-sm text-sm w-full`}
        />
        {lastNameTouched && (
          <p class={tw`absolute text-xs text-right text-primary-red right-0`}>
            {lastNameValid && lastNameValid}
          </p>
        )}
        {lastNameTouched && (
          <span class={tw`absolute right-2 top-[0.7rem]`}>
            {lastNameValid && <img src="/icon-error.svg" alt="" />}
          </span>
        )}
      </div>
      <div class={tw`relative w-full`}>
        <input
          type="email"
          placeholder="Email Address"
          onChange={(e) => {
            const target = e.target as HTMLInputElement;
            setData({ ...data, email: target.value });
          }}
          value={data.email}
          onBlur={() => {
            setEmailTouched(true);
          }}
          class={tw`p-3 rounded border ${
            emailValid && emailTouched
              ? "border-primary-red text-primary-red placeholder-primary-red"
              : "border-neutral-grayishBlue text-neutral-darkBlue"
          } font-semibold text-sm text-sm w-full`}
        />
        {emailTouched && (
          <p class={tw`absolute text-xs text-right text-primary-red right-0`}>
            {emailValid && emailValid}
          </p>
        )}
        {emailTouched && (
          <span class={tw`absolute right-2 top-[0.7rem]`}>
            {emailValid && <img src="/icon-error.svg" alt="" />}
          </span>
        )}
      </div>
      <div class={tw`relative w-full`}>
        <input
          type="password"
          placeholder="Password"
          onChange={(e) => {
            const target = e.target as HTMLInputElement;
            setData({ ...data, password: target.value });
          }}
          value={data.password}
          onBlur={() => {
            setPasswordTouched(true);
          }}
          class={tw`p-3 rounded border ${
            passwordValid && passwordTouched
              ? "border-primary-red text-primary-red placeholder-primary-red"
              : "border-neutral-grayishBlue text-neutral-darkBlue"
          } font-semibold text-sm text-sm w-full`}
        />
        {passwordTouched && (
          <p class={tw`absolute text-xs text-right text-primary-red right-0`}>
            {passwordValid && passwordValid}
          </p>
        )}
        {passwordTouched && (
          <span class={tw`absolute right-2 top-[0.7rem]`}>
            {passwordValid && <img src="/icon-error.svg" alt="" />}
          </span>
        )}
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
