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
      telPrefix: '+263',
      code: 'ZWE',
    },
    {
      name: 'South Africa',
      icon: '',
      telPrefix: '+27',
      code: 'ZAR',
    },
    {
      name: 'Zambia',
      icon: '',
      telPrefix: '+260',
      code: 'ZMB',
    },
    {
      name: 'Nigeria',
      icon: '',
      telPrefix: '+234',
      code: 'NGA',
    },
    {
      name: 'Botswana',
      icon: '',
      telPrefix: '+267',
      code: 'BWA',
    },
  ]
}
