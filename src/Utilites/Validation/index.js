import * as Yup from 'yup';

export const LoginSchema = Yup.object().shape({
    identity: Yup.string()
      .min(2, 'Username too Short!')
      .max(50, 'Username too Long!')
      .required('Username is required'),
    password: Yup.string()
      .min(2, 'Password too Short!')
      .max(50, 'Password too Long!')
      .required('Password is required'),
  });

  export const ShowsSchema = Yup.object().shape({
    start_date: Yup.date().required('Start date is required'),
    end_date: Yup.date().optional(),
    no_of_shows: Yup.string().required('No of shows is required'),
    venue_address: Yup.string().required('Venue address is required'),
    show_type: Yup.string().required('Show type is required'),
    show_capacity: Yup.string().required('Show capacity is required'),
    tax_method: Yup.string().required('Tax method is required'),
    tax_apparel: Yup.string().required('Apparel tax is required'),
    tax_others: Yup.string().required('Other tax is required'),
    tax_merch: Yup.string().required('Music tax is required'),
    venue_rep_name: Yup.string().required('Venue representative name is required'),
    venue_rep_email: Yup.string().required('Venue representative email is required'),
    venue_rep_phone: Yup.string().required('Venue representative phone number is required'),
    note: Yup.string().required('note is required')
  })