export type NewsData = {
  id: string;
  image: string;
  title: string;
  text: string;
}

export type PlaceData = {
  id: string;
  type: string;
  image: string;
  head: string;
  text: string;
}

export type SportData = {
  id: string;
  sport: string;
  type: string;
  title: string;
  text: string;
  logo: string;
  logo_alt: string;
  image: string;
  img_alt: string;
  link: string;
}

export type TripScheduleData = {
  id: string;
  from: string;
  to: string;
  route_length: string;
  operating_mode_weekdays: string;
  operating_mode_weekend: string;
}

export type EventsData = {
  month: string;
  name: string;
  body: string;
  place: string;
}

export type EducationData = {
  image: string;
  title: string;
  text: string;
}

export type SelectorData = {
  title: string;
  text: string;
}

export type HistoryTextData = {
  image: string;
  title: string;
  text: string;
}

export type UserData = {
  _id: string;
  name: string;
  email: string;
  token: string;
}

export type LoginData = {
  email: string;
  password: string;
}

export type RegisterData = {
  name: string;
  email: string;
  password: string;
}

export type RecoverUserData = {
  email: string;
  password: string;
}

export type QuizResultData = {
  quizId: string;
  result: Number;
}
