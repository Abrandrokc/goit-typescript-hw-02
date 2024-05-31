import React from 'react';
import css from './SearchBar.module.css';
import { Field, Form, Formik, FormikHelpers } from 'formik';
import toast, { Toaster } from 'react-hot-toast';

interface SearchBarProps {
  onSubmit: (query: string) => void;
}

interface FormValues {
  query: string;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSubmit }) => {
  return (
    <header className={css.hed}>
      <Formik
        initialValues={{ query: '' }}
        onSubmit={(values: FormValues, actions: FormikHelpers<FormValues>) => {
          if (values.query === '') {
            toast.error("This didn't work. Need some words");
          } else {
            onSubmit(values.query);
            actions.resetForm();
          }
        }}
      >
        <Form className={css.but}>
          <Field
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            name="query"
            className={css.input}
          />
          <button type="submit" className={css.button}>Search</button>
          <Toaster />
        </Form>
      </Formik>
    </header>
  );
};

export default SearchBar;
