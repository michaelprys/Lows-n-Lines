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

const letters = new RegExp(/^\p{L}+$/u);

export const registrationSchema = pipe(
  config(
    object({
      firstname: pipe(
        string("First name is required"),
        nonEmpty(),
        regex(letters, "First name must consist of letters"),
      ),
      lastname: pipe(
        string("Last name is required"),
        nonEmpty(),
        regex(letters, "Last name must consist of letters"),
      ),
      email: pipe(
        string("Email is required"),
        email("Requires a format example@gmail.com"),
        nonEmpty(),
      ),
      password: pipe(
        string("Password is required"),
        minLength(6, "Password must be at least 6 characters long"),
        nonEmpty(),
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
        email("Requires a format example@gmail.com"),
        nonEmpty(),
      ),
      password: pipe(
        string("Password is required"),
        minLength(6, "Password must be at least 6 characters long"),
        nonEmpty(),
      ),
    }),
    {
      abortPipeEarly: true,
    },
  ),
);
