import React from "react";

import { Image, MapWrapper } from "./map.styled";

export const Map = ({ image }) => (
    <MapWrapper>
        <Image src={image} className="img-map" alt="карта маршрутов" />
    </MapWrapper>
);
