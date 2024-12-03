import * as moment from 'moment';

export function validateAndParseDate(value: string): Date {
  // Valida primeiro no formato "YYYY-MM-DD"
  const dateFormats = ['YYYY-MM-DD', moment.ISO_8601];  // Lista de formatos aceitos
  
  const date = moment(value, dateFormats, true);  // O terceiro argumento 'true' força a validação estrita
  
  if (!date.isValid()) {
    throw new Error('Invalid date format. Please provide a valid date in "YYYY-MM-DD" or ISO format.');
  }
  
  return date.toDate();  // Retorna o objeto Date
}
