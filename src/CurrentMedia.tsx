import { notionPages, useRetrieveNotionDatabase } from "./notionService";

import React from "react";

export const CurrentMedia = (): JSX.Element => {
    const readingList = useRetrieveNotionDatabase(notionPages.readingList);
    return <div>{readingList}</div>;
};
