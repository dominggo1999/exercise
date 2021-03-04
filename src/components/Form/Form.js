import React from 'react';
import { useFormik } from 'formik';

const initialValues = {
  name: '',
  email: '',
  channel: '',
};

const onSubmit = (values) => {
  console.log(values);
};

const validate = (values) => {
  // Init errors obj
  const errors = {};

  if(!values.name) {
    errors.name = 'Name is required';
  }

  if(!values.email) {
    errors.email = 'Email is required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address';
  }

  if(!values.channel) {
    errors.channel = 'Channel is required';
  }

  return errors;
};

const Form = () => {
  const formik = useFormik({
    initialValues,
    onSubmit,
    validate,
  });

  const touched = formik.touched;
  const errors = formik.errors;

  return (
    <div className="container">
      <form onSubmit={formik.handleSubmit}>
        <label htmlFor="name">Name</label>
        <input
          type="text" id="name"
          name="name" onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.name}
        />
        {
          touched.name && errors.name && <div>{errors.name}</div>
        }
        <label htmlFor="email">Email</label>
        <input
          type="email" id="email"
          name="email" onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
        />
        {
          touched.email && errors.email && <div>{errors.email}</div>
        }
        <label htmlFor="name">Channel</label>
        <input
          type="text" id="channel"
          name="channel" onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.channel}
        />
        {
          touched.channel && errors.channel && <div>{errors.channel}</div>
        }
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Form;
