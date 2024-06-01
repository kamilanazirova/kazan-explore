import { getNavigationsValue, getConfigValue } from '@ijl/cli';
import { generatePath } from 'react-router-dom';

const baseUrl = getNavigationsValue('kazan-explore.master');

export const URLs = {
  baseUrl,
  ui: {
    places: getNavigationsValue('kazan-explore.places') && `${baseUrl}${getNavigationsValue('kazan-explore.places')}`,
    transport: getNavigationsValue('kazan-explore.transport') && `${baseUrl}${getNavigationsValue('kazan-explore.transport')}`,
    sport: getNavigationsValue('kazan-explore.sport') && `${baseUrl}${getNavigationsValue('kazan-explore.sport')}`,
    history: getNavigationsValue('kazan-explore.history') && `${baseUrl}${getNavigationsValue('kazan-explore.history')}`,
    education: getNavigationsValue('kazan-explore.education') && `${baseUrl}${getNavigationsValue('kazan-explore.education')}`,
    entrance: getNavigationsValue('kazan-explore.entrance') && `${baseUrl}${getNavigationsValue('kazan-explore.entrance')}`,
    registration: getNavigationsValue('kazan-explore.registration') && `${baseUrl}${getNavigationsValue('kazan-explore.registration')}`,
    recover: getNavigationsValue('kazan-explore.recover') && `${baseUrl}${getNavigationsValue('kazan-explore.recover')}`,
    tripNumber: {
      url: `${baseUrl}${getNavigationsValue('kazan-explore.trip.number')}`,
      on: Boolean(getNavigationsValue('kazan-explore.trip.number')),
      getUrl: (id: number) => generatePath(`${baseUrl}${getNavigationsValue('kazan-explore.trip.number')}`, { id })
    },
  },
  api: {
    main:getConfigValue('kazan-explore.api')
  },
}
