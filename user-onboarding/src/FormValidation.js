import React from 'react';
import * as yup from 'yup';

const FormValidation = yup.object().shape({
    name: yup.string()
      .required('ENTER VALID NAME'),
    email: yup.string().required('ENTER VALID EMAIL'),
    password: yup.string().required('ENTER PASSWORD'),
    terms: yup.string().required('PLEASE READ OUR TERMS OF SERVICE BEFORE PROCEEDING'),
    
   
  });

export default FormValidation;