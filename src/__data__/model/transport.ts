export type InfoData = {
    id: string;
}

export type BusData = {
    id: string;
}

export type TrulData = {
    id: string;
}

export type TripScheduleData = {
    id: string;
    from: string;
    to: string;
    route_lenght: string;
    operating_mode_weekdays: string;
    operating_mode_weekend: string;
}
  
export type EventsData = {
    month: string;
    name: string;
    body: string;
    place: string;
}
