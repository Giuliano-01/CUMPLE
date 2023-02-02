import * as Yup from 'yup';

export const FormSchema = Yup.object().shape({
    user: Yup.string()
        .matches("GDP2701", "Casi...")
        .required('Requerido.'),
    id: Yup.string()
        .matches("147258369", "Casi...")
        .required('Requerido.')
});