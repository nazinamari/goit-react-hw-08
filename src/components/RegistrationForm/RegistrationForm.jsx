import { ErrorMessage, Field, Formik, Form } from 'formik';
import css from './RegistrationForm.module.css';
import { useDispatch } from 'react-redux';
import { register } from '../../redux/auth/operations';
import * as Yup from 'yup';
import { useId } from 'react';
import toast from 'react-hot-toast';

const nameRegExp = /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/;
const passwordRules = /^[a-zA-Z]{7,20}$/;

const RegesterSchema = Yup.object().shape({
    name: Yup.string()
        .min(3, 'Too Short! Min 3 symbols')
        .max(15, 'Too Long! Max 50 symbols')
        .required('Required')
        .matches(
            nameRegExp,
            'Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer',
        ),
    email: Yup.string()
        .email('Please, enter a valid email')
        .required('Required'),
    password: Yup.string()
        .matches(passwordRules, {
            message:
                'Please create a stronger password. It must be between 7 and 20 characters long and contain only letters.',
        })
        .required('Required'),
    confirmPassword: Yup.string()
        .oneOf([Yup.ref('password'), null], 'Passwords must match')
        .required('Required'),
});

const initualValues = {
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
};

export default function RegistrationForm() {
    const nameId = useId();
    const emailId = useId();
    const passwordId = useId();
    const confirmPasswordId = useId();
    const dispatch = useDispatch();
    const handleSubmit = (values, actions) => {
        dispatch(register(values))
            .unwrap()
            .then(() =>
                toast.success(
                    `Account was created! Welcome to your ContactBook!`,
                ),
            )
            .catch(() =>
                toast.error(
                    'Maybe this user is already created. Try another name or email!',
                ),
            );
        actions.resetForm();
    };
    return (
        <Formik
            initialValues={initualValues}
            onSubmit={handleSubmit}
            validationSchema={RegesterSchema}
        >
            <Form className={css.form} autoComplete="off">
                <div>
                    <label className={css.label} htmlFor={nameId}>
                        Username
                        <Field
                            type="text"
                            name="name"
                            id={nameId}
                            autoComplete="off"
                        />
                    </label>
                    <span className={css.error}>
                        <ErrorMessage name="name" as="span" />
                    </span>
                </div>

                <div>
                    <label className={css.label} htmlFor={emailId}>
                        Email
                        <Field
                            type="email"
                            name="email"
                            id={emailId}
                            autoComplete="off"
                        />
                    </label>
                    <span className={css.error}>
                        <ErrorMessage name="email" as="span" />
                    </span>
                </div>

                <div>
                    <label className={css.label} htmlFor={passwordId}>
                        Password
                        <Field
                            type="password"
                            name="password"
                            id={passwordId}
                            autoComplete="off"
                        />
                    </label>
                    <span className={css.error}>
                        <ErrorMessage name="password" as="span" />
                    </span>
                </div>

                <div>
                    <label className={css.label} htmlFor={confirmPasswordId}>
                        confirm password
                    </label>
                    <Field
                        type="password"
                        name="confirmPassword"
                        id={confirmPasswordId}
                        className={css.input}
                        autoComplete="off"
                    />

                    <span className={css.error}>
                        <ErrorMessage name="confirmPassword" as="span" />
                    </span>
                </div>
                <button type="submit">Create your account</button>
            </Form>
        </Formik>
    );
}
