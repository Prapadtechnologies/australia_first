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
    venue_rep_name: Yup.string().required('Venue rep name is required'),
    venue_rep_email: Yup.string().required('Venue rep email is required'),
    venue_rep_phone: Yup.string().required('Venue rep phone is required'),
    note: Yup.string().required('note is required'),
    fee_apparel: Yup.string().required('Apparel fee is required'),
    fee_others: Yup.string().required('Other fee is required'),
    fee_music: Yup.string().required('Music fee is required'),
    concession_company: Yup.string().required('Concession company is required'),
    fee_music: Yup.string().required('Music fee is required'),
    fee_music: Yup.string().required('Music fee is required'),

    merchandise_company: Yup.string().required('Merchandise company is required'),
    merchandise_contact_name: Yup.string().required('Merchandise contact name is required'),
    merchandise_contact_number: Yup.string().required('Merchandise phone nunmber is required'),
  })


  export const ToursSchema = Yup.object().shape({
    start_date: Yup.date().required('Start date is required'),
    end_date: Yup.date().required('End date is required'),
    tour_name: Yup.string().required('Tour name is required'),
    tour_type: Yup.string().required('Tour type is required'),
    report_currency: Yup.string().required('Select your currency')
  })