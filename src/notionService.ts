import { Database, Page } from "./notionTypes";

import { Client } from "@notionhq/client";
import { config } from "dotenv";

config();

const notionPages = {
    today: "24dffb3bccac430c912a94db6b10aecc",
};

const notion = new Client({
    auth: process.env.NOTION_TOKEN,
});

const useRetrieveNotionPage = async (pageId: string): Promise<Page> => {
    return await notion.pages.retrieve({
        page_id: pageId,
    });
};

const useRetrieveNotionDatabase = async (dbId: string): Promise<Database> => {
    return await notion.databases.retrieve({
        database_id: dbId,
    });
};

(async () => {
    const dailyBoard = await useRetrieveNotionPage(notionPages.today);
    console.log(dailyBoard);
})();
