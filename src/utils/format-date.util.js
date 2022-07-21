import PropTypes from 'prop-types'
import { format as formatted } from 'date-fns'
import { ptBR } from 'date-fns/locale'

export default function formatDate(date = new Date(), format = '') {
  return formatted(date, format, { locale: ptBR })
}

export const DATE_SCHEMA_FORMAT = 'dd/MM/yyyy HH:mm'
export const DATE_SHORT_SCHEMA_FORMAT = 'E dd/MM'
export const HOUR_SHORT_SCHEMA_FORMAT = 'HH:mm aaa'

formatDate.propTypes = {
  date: PropTypes.instanceOf(Date),
}

formatDate.defaultProps = {
  format: DATE_SCHEMA_FORMAT,
}
