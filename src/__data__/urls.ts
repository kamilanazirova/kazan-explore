import { getNavigationValue, getConfigValue, getFeatures } from '@brojs/cli';
import { generatePath } from 'react-router-dom';

const baseUrl = getNavigationValue('kazan-explore.master');
const getKazanExploreFeatures = () => getFeatures('kazan-explore');

export const URLs = {
  baseUrl,
  ui: {
    places: getNavigationValue('kazan-explore.places') && `${baseUrl}${getNavigationValue('kazan-explore.places')}`,
    transport: getNavigationValue('kazan-explore.transport') && `${baseUrl}${getNavigationValue('kazan-explore.transport')}`,
    sport: getNavigationValue('kazan-explore.sport') && `${baseUrl}${getNavigationValue('kazan-explore.sport')}`,
    history: getNavigationValue('kazan-explore.history') && `${baseUrl}${getNavigationValue('kazan-explore.history')}`,
    education: getNavigationValue('kazan-explore.education') && `${baseUrl}${getNavigationValue('kazan-explore.education')}`,
    entrance: getNavigationValue('kazan-explore.entrance') && `${baseUrl}${getNavigationValue('kazan-explore.entrance')}`,
    registration: getNavigationValue('kazan-explore.registration') && `${baseUrl}${getNavigationValue('kazan-explore.registration')}`,
    recover: getNavigationValue('kazan-explore.recover') && `${baseUrl}${getNavigationValue('kazan-explore.recover')}`,
    profile: {
      url: getNavigationValue('kazan-explore.profile') && `${baseUrl}${getNavigationValue('kazan-explore.profile')}`,
      on: Boolean(getNavigationValue('kazan-explore.profile')),
      getUrl: (userId: string) => generatePath(`${baseUrl}/profile/:userId`, { userId })
    },
    tripNumber: {
      url: `${baseUrl}${getNavigationValue('kazan-explore.trip.number')}`,
      on: Boolean(getNavigationValue('kazan-explore.trip.number')),
      getUrl: (id: number) => generatePath(`${baseUrl}${getNavigationValue('kazan-explore.trip.number')}`, { id })
    },
  },
  api: {
    main: getConfigValue('kazan-explore.api'),
    users: getConfigValue('kazan-explore.users.api')
  },
  features: {
    quizzes: {
      sport: getKazanExploreFeatures()?.['sport.quiz'],
      results: getKazanExploreFeatures()?.['quiz.results']
    },
    transport: {
      map: getKazanExploreFeatures()?.['transport-page.map'],
      busSchedule: getKazanExploreFeatures()?.['transport-page.bus-schedule']
    }
  }
}
