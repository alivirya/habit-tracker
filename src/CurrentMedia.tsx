import React, { useEffect, useState } from "react";
import { notionPages, useRetrieveNotionDatabase } from "./notionService";

export const CurrentMedia = (): JSX.Element => {
    const [readingList, updateReadingList] = useState("");
    useEffect(() => {
        getDbInfo();
    });

    const getDbInfo = async () => {
        const result = await useRetrieveNotionDatabase(notionPages.readingList);
        updateReadingList(result);
    };
    return <div>{readingList}</div>;
};
