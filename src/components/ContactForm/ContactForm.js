import { Formik, ErrorMessage  } from 'formik';
import * as Yup from 'yup';
import { nanoid } from "nanoid";
import { ImAddressBook, ImUserPlus, ImUser, ImPhone } from "react-icons/im";


import { Styleform, StyledField, StyledLabel, ErrorMessageStyled, HeroTitleStyled, SubmitBtn } from './ContactForm.styled';

const icon ={
    phoneBook: <ImAddressBook/>,
    user: <ImUser/>,
    phone: <ImPhone/>,
    addContact:<ImUserPlus/>, 
};

const schema = Yup.object().shape({
  name: Yup.string()
    .matches(
      /^[a-zA-Za-яА-Я]+(([' -][a-zA-Za-яА-Я ])?[a-zA-Za-яА-Я]*)*$/,
      'Invalid name format'
    )
    .required('Required!')
    .min(2, 'Too Short!')
    .max(50, 'Too Long!'),
  number: Yup.string()
    .matches(
      /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/,
      'Invalid phone number format'
    )
    .required('Required!')
    .min(2, 'Too Short!')
    .max(50, 'Too Long!'),
});

export const ContactForm = ({onAdd}) => {
  return (
    <Formik
      initialValues={{
        name: '',
        number: '',
      }}
      validationSchema={schema}
      onSubmit={(values, actions) => {
        console.log(values);
        onAdd({...values, id: nanoid()});
        actions.resetForm();
      }}
    >
      {({ handleSubmit }) => (
        <Styleform onSubmit={handleSubmit}>
          <HeroTitleStyled>{icon.phoneBook} Phonebook</HeroTitleStyled>
          <StyledLabel>{icon.user} Name</StyledLabel>
          <StyledField name="name" />
          <ErrorMessage name="name" component={ErrorMessageStyled} />

          <StyledLabel>{icon.phone} Number</StyledLabel>
          <StyledField name="number" />
          <ErrorMessage name="number" component={ErrorMessageStyled} />

          <SubmitBtn type="submit">{icon.addContact} Add contact</SubmitBtn>
        </Styleform>
      )}
    </Formik>
  );
};