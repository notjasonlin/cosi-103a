// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.
import * as dotenv from "dotenv";
dotenv.config();
import { DefaultAzureCredential } from "@azure/identity";
import { CosmosClient } from "@azure/cosmos";
const endpoint =
	process.env.COSMOS_ENDPOINT || "https://altakie.documents.azure.com:443/";
const key =
	"j55ce1vlcvkHhvubzcIeQuIhRyawFmg4VeO8ZAv96izxrISwB1x7p3zMvWdV1PHgCVXQdISboQ3HACDbetfiGA==";

export default async function run() {
	console.log("1");
	const key =
		"j55ce1vlcvkHhvubzcIeQuIhRyawFmg4VeO8ZAv96izxrISwB1x7p3zMvWdV1PHgCVXQdISboQ3HACDbetfiGA==";
	const credentials = new DefaultAzureCredential();

	console.log("2");
	const aadClient = new CosmosClient({
		endpoint,
		// aadCredentials: credentials,
		key,
	});

	const database = aadClient.database("AvocadoDB");
	const container = database.container("Recipes");
	console.log("3");
	const query = "SELECT * FROM c ORDER BY c.id";
	var response = await container.items.query(query).fetchAll();
	console.log("4");
	// console.log(response.resources);
	return response.resources; // Return the array of documents directly
}
