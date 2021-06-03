import { config } from "dotenv";
config();

export const notionPages = {
    today: "24dffb3bccac430c912a94db6b10aecc",
    dailyBoard: "a311538a-d0d1-4f43-aafb-1f4afda58692",
    readingList:
        "ebf89872d3d6416f8ae0e4170270ec08?v=ec98f34416274dfea005f5fcf2e66c01",
};

const createDbUrl = (dbPath: string): string => {
    const dbUrl = new URL(`/v1/databases/${dbPath}`, "https://api.notion.com");
    return dbUrl.toString();
};

export const useRetrieveNotionDatabase = async (dbId: string): Promise<any> => {
    const request = new Request(createDbUrl(dbId), {
        method: "GET",
        headers: new Headers({
            "Notion-Version": "2021-05-13",
            Authorization: `Bearer ${process.env.NOTION_TOKEN}`,
        }),
        mode: "no-cors",
    });
    const response = await fetch(request);
    console.log(response);
    return response.json();
};
