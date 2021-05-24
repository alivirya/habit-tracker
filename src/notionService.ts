import { config } from "dotenv";

config();

export const notionPages = {
    today: "24dffb3bccac430c912a94db6b10aecc",
    dailyBoard: "a311538a-d0d1-4f43-aafb-1f4afda58692",
    readingList:
        "ebf89872d3d6416f8ae0e4170270ec08?v=ec98f34416274dfea005f5fcf2e66c01",
};

const request = new Request("https://api.notion.com/v1", {
    hostname: "api.notion.com",
    path: "/v1/databases",
    method: "GET",
    headers: {
        "Notion-Version": "2021-05-13",
        Authorization: `Bearer ${process.env.integration_token}`,
    },
};

const makeRequest = (options) => {
    return new Promise((resolve, reject) => {
        const req = https.request(options, (res) => {
            let buffer = "";
            res.on("data", (d) => {
                buffer += d;
            });

            res.on("end", () => {
                resolve(JSON.parse(buffer));
            });

            res.on("error", (error) => reject(error));
        });

        req.end();
    });
};

const getDbInformation = async (db_id) => {
    const options = {
        ...defaultOptions,
        path: `${defaultOptions.path}/${db_id}`,
    };

    const info = await makeRequest(options);
    console.log(info.properties);
};

getDbInformation(process.env.places_db);
