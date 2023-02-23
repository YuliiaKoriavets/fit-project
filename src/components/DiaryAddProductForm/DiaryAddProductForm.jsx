import css from '../DiaryAddProductForm/DiaryAddProductForm.module.css';
// import TextField from '@mui/material/TextField';
// import Autocomplete from '@mui/material/Autocomplete';
// import { useState } from 'react';
// import Stack from '@mui/material/Stack';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { object, string, number } from 'yup';

let productSchema = object({
  product: string().required(),
  weight: number().required().positive().integer(),
});

export default function DiaryAddProductForm() {
  const initialValue = {
    product: '',
    weight: '',
  };

//   const handleChange = event => {
//     console.log(event.target.value)
//   }

  const handleSubmit = (value, { resetForm }) => {
    const newProduct ={
        product: value.product,
        weight: value.weight
    }
    console.log(newProduct)
    console.log(value);
    resetForm();
  };

  return (
    <Formik
      initialValues={initialValue}
      onSubmit={handleSubmit}
      validationSchema={productSchema}
    >
      <Form autoComplete="off">
        {/* <Stack sx={{ width: 300 }}>
        <Autocomplete
        id="auto-complete"
        sx={{ width: 300 }}
        autoComplete
        includeInputInList
        renderInput={(params) => (
          <TextField {...params} onChange={handleChange} label="Enter product name" variant="standard" />
        )}
        />
        </Stack> */}
        <Field
          className={css.input__product}
          name="product"
          type="text"
          placeholder="Enter product name"
        />
        <ErrorMessage name="product" component="div" />
        <Field
          className={css.input__grams}
          name="weight"
          type="number"
          placeholder="Grams"
        />
        <ErrorMessage name="weight" component="div" />
        <button className={css.button__mobile} type="submit">
          Add
        </button>
        <button className={css.button} type="submit">
          +
        </button>
      </Form>
    </Formik>
  );
}
