import { ErrorMessage, Field, Formik, Form } from 'formik';
import css from './RegistrationForm.module.css';
import { useDispatch } from 'react-redux';
import { register } from '../../redux/auth/operations';
import * as Yup from 'yup';

const nameRegExp = /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/;
const passwordRules = /^[a-zA-Z]{7,12}$/;

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
                'Please create a stronger password. It must be between 7 and 12 characters long and contain only letters.',
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
};

export default function RegistrationForm() {
    const dispatch = useDispatch();
    const handleSubmit = (values, actions) => {
        dispatch(register(values));
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
                    <label className={css.label}>
                        Username
                        <Field type="text" name="name" />
                    </label>
                    <span className={css.error}>
                        <ErrorMessage name="name" as="span" />
                    </span>
                </div>

                <div>
                    <label className={css.label}>
                        Email
                        <Field type="email" name="email" />
                    </label>
                    <span className={css.error}>
                        <ErrorMessage name="email" as="span" />
                    </span>
                </div>

                <div>
                    <label className={css.label}>
                        Password
                        <Field type="password" name="password" />
                    </label>
                    <span className={css.error}>
                        <ErrorMessage name="password" as="span" />
                    </span>
                </div>
                <button type="submit">Register</button>
            </Form>
        </Formik>
    );
}
