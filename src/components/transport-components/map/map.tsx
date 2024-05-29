import React from "react";

import { Image, MapWrapper } from "./map.styled";

export const Map = ({ image, index }) => (
    <MapWrapper>
        <Image key={index} src={image} className="img-map" alt="карта маршрутов" />
    </MapWrapper>
);
