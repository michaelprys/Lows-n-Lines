import {
    object,
    string,
    boolean,
    config,
    pipe,
    nonEmpty,
    minLength,
    regex,
    email,
    forward,
    partialCheck,
    optional,
} from 'valibot';

const lettersOnly = new RegExp(/^\p{L}+$/u);
const phoneFormat = new RegExp(
    /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/u
);

export const RegistrationSchema = pipe(
    config(
        object({
            firstname: pipe(
                string('First name is required'),
                nonEmpty('First name is required'),
                regex(lettersOnly, 'First name must consist of letters')
            ),
            lastname: pipe(
                string('Last name is required'),
                nonEmpty('Last name is required'),
                regex(lettersOnly, 'Last name must consist of letters')
            ),
            email: pipe(
                string('Email is required'),
                nonEmpty('Email is required'),
                email('Required a format example@gmail.com')
            ),
            password: pipe(
                string('Password is required'),
                nonEmpty('Password is required'),
                minLength(6, 'Password must be at least 6 characters long')
            ),
            confirmPassword: pipe(
                string('Confirm password'),
                nonEmpty('Confirm password')
            ),
        }),
        {
            abortPipeEarly: true,
        }
    ),
    forward(
        partialCheck(
            [['password'], ['confirmPassword']],
            input => input.password === input.confirmPassword,
            'Passwords do not match'
        ),
        ['confirmPassword']
    )
);

export const SignInSchema = config(
    object({
        email: pipe(
            string('Email is required'),
            nonEmpty('Email is required'),
            email('Required a format example@gmail.com')
        ),
        password: pipe(
            string('Password is required'),
            nonEmpty('Password is required'),
            minLength(6, 'Password must be at least 6 characters long')
        ),
        rememberMe: boolean(),
    }),
    {
        abortPipeEarly: true,
    }
);

export const MessageSchema = config(
    object({
        firstname: pipe(
            string('First name is required'),
            nonEmpty('First name is required'),
            regex(lettersOnly, 'First name must consist of letters')
        ),
        lastname: pipe(
            string('Last name is required'),
            nonEmpty('Last name is required'),
            regex(lettersOnly, 'Last name must consist of letters')
        ),
        email: pipe(
            string('Email is required'),
            nonEmpty('Required a format example@gmail.com'),
            email('Required a format example@gmail.com')
        ),
        phoneNumber: pipe(
            string('Phone number is required'),
            nonEmpty('Phone number is required'),
            regex(phoneFormat, 'Invalid format')
        ),
        subject: optional(string()),
        message: pipe(
            string('Enter the message'),
            nonEmpty('Enter the message')
        ),
    }),
    {
        abortPipeEarly: true,
    }
);
