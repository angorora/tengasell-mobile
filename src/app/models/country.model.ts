export interface Country {
  name?: string
  icon?: string
  telPrefix?: string
  code?: string
}
export function getCountries(): Country[] {
  return [
    {
      name: 'Zimbabwe',
      icon: '',
      telPrefix: '00263',
      code: 'ZWE',
    },
    {
      name: 'South Africa',
      icon: '',
      telPrefix: '0027',
      code: 'ZAR',
    },
    {
      name: 'Zambia',
      icon: '',
      telPrefix: '00260',
      code: 'ZMB',
    },
    {
      name: 'Nigeria',
      icon: '',
      telPrefix: '00234',
      code: 'NGA',
    },
    {
      name: 'Botswana',
      icon: '',
      telPrefix: '00267',
      code: 'BWA',
    },
  ]
}
