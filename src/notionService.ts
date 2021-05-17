import { Block, Database, Page, PaginatedList } from "./notionTypes";

import { Client } from "@notionhq/client";
import { config } from "dotenv";

config();

const notionPages = {
    today: "24dffb3bccac430c912a94db6b10aecc",
    dailyBoard: "a311538a-d0d1-4f43-aafb-1f4afda58692",
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

const useRetrieveNotionBlockChildren = async (
    blockId: string
): Promise<PaginatedList<Block>> => {
    return await notion.blocks.children.list({
        block_id: blockId,
    });
};

(async () => {
    const dailyBoard = await useRetrieveNotionBlockChildren(
        notionPages.dailyBoard
    );
    console.log(dailyBoard.results);
})();
