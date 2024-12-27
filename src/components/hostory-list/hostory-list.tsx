import React from "react";

export const HistoryList = ({
    head,
    title,
    content }) => (
    <div>
        <h2>{head}</h2>
        <h3>{title}</h3>
        <p>{content}</p>
    </div>
);
