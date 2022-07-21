import * as Yup from 'yup'
import Regex from '~constants/input-regex.constant'

export const fieldValidationSchema = Yup.object().shape({
  fullname: Yup.string().required('Nome completo é obrigatório'),
  cpf: Yup.string()
    .matches(Regex.CPF, 'Verifique se o CPF é válido')
    .required('CPF é obrigatório'),
  birthday: Yup.string()
    .matches(Regex.BIRTHDAY, 'Verifique se nascimento é válido')
    .required('Nascimento é obrigatório'),
  phone: Yup.string()
    .matches(Regex.PHONE, 'Verifique se o telefone é válido')
    .required('Telefone é obrigatório'),
})
