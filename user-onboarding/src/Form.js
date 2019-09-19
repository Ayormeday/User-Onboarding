import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import FormValidation from "./FormValidation";

function UserForm({ onSubmit }) {
  return (
    // needs 3 props
    <Formik
      onSubmit={onSubmit}
      FormValidation={FormValidation}
      render={props => {
        return (
          <Form>
            <div>
              <label>
                Name
                <Field name="name" type="text" placeholder="Name" />
                <ErrorMessage name="name" component="div" />
              </label>
            </div>
            <div>
              <label>
                Email
                <Field name="email" type="email" placeholder="Email" />
                <ErrorMessage name="email" component="div" />
              </label>
            </div>
            <div>
              <label>
                Password
                <Field name="password" type="password"  />
                <ErrorMessage name="password" component="div" />
              </label>
            </div>
            <div>
              <label>
                Terms of Service
                <Field name="terms" type="checkbox"  />
                <ErrorMessage name="terms" component="div" />
              </label>
            </div>
            <button type="submit">Submit</button>
          </Form>
        );
      }}
    />
  );
}

export default UserForm;
