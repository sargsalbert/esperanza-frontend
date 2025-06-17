import { format } from 'date-fns';
import { ContactFormValues } from './bookingWidget';

export const SYNXIS_BASE_URL = 'https://be.synxis.com/';

export const SYNXIS_PARAMS = {
  chain: '5154',
  hotel: '49323',
  //   config: 'SBE_ESPERANZA_LAKE_RESORT_V1',
  //   theme: 'SBE_ESPERANZA_LAKE_RESORT_V1',
  //   src: 'esperanzalakeresort',
  //   currency: 'EUR',
  //   productcurrency: 'EUR',
  //   locale: 'en-US',
};

export const buildRedirectUrl = (values: ContactFormValues) => {
  const arrive = values.formDates?.from
    ? format(values.formDates.from, 'yyyy-MM-dd')
    : '';
  const depart = values.formDates?.to
    ? format(values.formDates.to, 'yyyy-MM-dd')
    : '';

  const params = new URLSearchParams({
    adult: values.adults.toString(),
    child: values.children.toString(),
    arrive: arrive || '',
    depart: depart || '',
    ...SYNXIS_PARAMS,
    level: 'hotel',
  });

  return `${SYNXIS_BASE_URL}?${params.toString()}`;
};
