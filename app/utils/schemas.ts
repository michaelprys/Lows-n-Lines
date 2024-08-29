import {
  object,
  string,
  config,
  pipe,
  nonEmpty,
  minLength,
  regex,
  email,
  forward,
  partialCheck,
} from "valibot";

const lettersOnly = new RegExp(/^\p{L}+$/u);
const phoneFormat = new RegExp(
  /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/u,
);

export const registrationSchema = pipe(
  config(
    object({
      firstname: pipe(
        string("First name is required"),
        nonEmpty("First name is required"),
        regex(lettersOnly, "First name must consist of letters"),
      ),
      lastname: pipe(
        string("Last name is required"),
        nonEmpty("Last name is required"),
        regex(lettersOnly, "Last name must consist of letters"),
      ),
      email: pipe(
        string("Email is required"),
        nonEmpty("Email is required"),
        email("Requires a format example@gmail.com"),
      ),
      password: pipe(
        string("Password is required"),
        nonEmpty("Password is required"),
        minLength(6, "Password must be at least 6 characters long"),
      ),
      confirmPassword: pipe(string("Confirm password"), nonEmpty()),
    }),
    {
      abortPipeEarly: true,
    },
  ),
  forward(
    partialCheck(
      [["password"], ["confirmPassword"]],
      (input) => input.password === input.confirmPassword,
      "Passwords do not match",
    ),
    ["confirmPassword"],
  ),
);

export const signInSchema = pipe(
  config(
    object({
      email: pipe(
        string("Email is required"),
        nonEmpty("Email is required"),
        email("Requires a format example@gmail.com"),
      ),
      password: pipe(
        string("Password is required"),
        nonEmpty("Password is required"),
        minLength(6, "Password must be at least 6 characters long"),
      ),
    }),
    {
      abortPipeEarly: true,
    },
  ),
);

export const messageSchema = pipe(
  config(
    object({
      firstname: pipe(
        string("First name is required"),
        nonEmpty("First name is required"),
        regex(lettersOnly, "First name must consist of letters"),
      ),
      lastname: pipe(
        string("Last name is required"),
        nonEmpty("Last name is required"),
        regex(lettersOnly, "Last name must consist of letters"),
      ),
      email: pipe(
        string("Email is required"),
        nonEmpty("Requires a format example@gmail.com"),
        email("Requires a format example@gmail.com"),
      ),
      phoneNumber: pipe(
        string("Phone number is required"),
        nonEmpty("Phone number is required"),
        regex(phoneFormat, "Invalid format"),
      ),
      message: pipe(string("Enter the message"), nonEmpty("Enter the message")),
    }),
    {
      abortPipeEarly: true,
    },
  ),
);
