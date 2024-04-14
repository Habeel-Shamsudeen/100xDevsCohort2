import { ChangeEvent, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { SigninInput, SignupInput } from "@habee1_/medium-common";
import axios from "axios";
import { BACKEND_URL } from "../config";
export const Auth = ({ type }: { type: "signup" | "signin" }) => {
  const [signupInputs, setSignupInputs] = useState<SignupInput>({
    name: "",
    email: "",
    password: "",
  });
  const [signinInputs, setSigninInputs] = useState<SigninInput>({
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  async function sendSignupRequest(){
    try {
      const response = await axios.post(`${BACKEND_URL}/api/v1/user/signup`,signupInputs);
      const jwt = response.data.token;
      localStorage.setItem("token",jwt);
      navigate('/blogs');
    } catch (error) {
        alert("Error while signing up");
    }
  }

  async function sendSigninRequest(){
    try {
      const response = await axios.post(`${BACKEND_URL}/api/v1/user/signin`,signinInputs);
      const jwt = response.data.token;
      localStorage.setItem("token",jwt);
      navigate('/blogs');
    } catch (error) {
        alert("Error while signing in");
    }
  }

  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <div className="rounded-xl bg-slate-200 p-10 py-24 md:bg-white">
        <div className="px-10">
          <div className="text-3xl font-bold max-w-sm text-center">
            {type === "signin"
              ? "Account Sign in"
              : "Create an account"}
          </div>
          <div className="text-slate-500 text-center">
            {type === "signin"
              ? "Don't have an account?"
              : "Already have an account?"}
            <Link
              className="pl-1 underline"
              to={type === "signin" ? "/signup" : "/signin"}
            >
              {type === "signin" ? "Signup" : "Login"}
            </Link>
          </div>
        </div>
        {type === "signup" ? (
          <div className="py-3">
            <LabelledInput
              label="Name"
              placeholder="Enter your name"
              onchange={(e) => {
                setSignupInputs((c) => ({
                  ...c,
                  name: e.target.value,
                }));
              }}
            ></LabelledInput>
            <LabelledInput
              label="Email"
              placeholder="xyz@example.com"
              onchange={(e) => {
                setSignupInputs((c) => ({
                  ...c,
                  email: e.target.value,
                }));
              }}
            ></LabelledInput>
            <LabelledInput
              type="password"
              label="password"
              placeholder=""
              onchange={(e) => {
                setSignupInputs((c) => ({
                  ...c,
                  password: e.target.value,
                }));
              }}
            ></LabelledInput>
          </div>
        ) : (
          <div className="py-3">
            <LabelledInput
              label="Email"
              placeholder="xyz@example.com"
              onchange={(e) => {
                setSigninInputs((c) => ({
                  ...c,
                  email: e.target.value,
                }));
              }}
            ></LabelledInput>
            <LabelledInput
              type="password"
              label="password"
              placeholder=""
              onchange={(e) => {
                setSigninInputs((c) => ({
                  ...c,
                  password: e.target.value,
                }));
              }}
            ></LabelledInput>
          </div>
        )}
        <button
          onClick={type==="signin"? sendSigninRequest : sendSignupRequest}
          type="button"
          className="w-full text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
        >
          {type === "signin" ? "Sign in" : "Sign up"}
        </button>
      </div>
    </div>
  );
};

interface LabelledInputType {
  label: string;
  placeholder: string;
  onchange: (e: ChangeEvent<HTMLInputElement>) => void;
  type?: "text" | "password";
}

function LabelledInput({
  label,
  placeholder,
  onchange,
  type,
}: LabelledInputType) {
  return (
    <div className="pb-2">
      <div>
        <label className="block mb-1 text-sm font-semibold text-gray-900">
          {label}
        </label>
        <input
          type={type || "text"}
          onChange={onchange}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          placeholder={placeholder}
          required
        />
      </div>
    </div>
  );
}
