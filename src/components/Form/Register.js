import React from 'react';
import {
  useFormik, ErrorMessage, Formik, Field, Form,
} from 'formik';
import * as Yup from 'yup';

const initialValues = {
  name: '',
  email: '',
  channel: '',
  comments: '',
};

const onSubmit = (values) => {
  console.log(values);
};

const validationSchema = Yup.object({
  name: Yup.string().required('Required'),
  email: Yup.string().email('Invalid email address').required('Required'),
  channel: Yup.string().required('Required'),
  comments: Yup.string().required('Required'),
});

const Register = () => {
  return (
    <div className="container">
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        <Form>
          <label htmlFor="name">Name</label>
          <Field
            type="text" id="name"
            name="name" placeholder="Enter your name"
          />
          <ErrorMessage name="name" />
          <label htmlFor="email">Email</label>
          <Field
            type="email" id="email"
            name="email" placeholder="Enter your email"
          />
          <ErrorMessage name="email" />
          <label htmlFor="name">Channel</label>
          <Field
            type="text" id="channel"
            name="channel" placeholder="Enter your channel name"
          />
          <ErrorMessage name="channel" />
          <label htmlFor="comments">Comments</label>
          <Field
            type="text" id="comments"
            as="textarea" name="comments"
          />
          <ErrorMessage name="comments" />
          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </div>
  );
};

export default Register;
