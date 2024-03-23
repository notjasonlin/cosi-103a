const { CosmosClient } = require('@azure/cosmos');
const { ClientSecretCredential } = require('@azure/identity');
import { setLogLevel } from "@azure/logger";

setLogLevel("info");
require('dotenv').config(); // Make sure this comes before using process.env

const endpoint = process.env.COSMOS_ENDPOINT || 'https://cosi103cosmosdbdatabase.documents.azure.com:443/';
const tenantId = process.env.AZURE_TENANT_ID;
const clientId = process.env.AZURE_CLIENT_ID;
const clientSecret = process.env.AZURE_CLIENT_SECRET;

const credential = new DefaultAzureCredential({
    loggingOptions: { allowLoggingAccountIdentifiers: true },
  });

async function upsertItem() {
    const client = new CosmosClient({
        endpoint,
        aadCredentials: credential
    });

    const database = client.database('cosi103cosmosdbdatabase');
    const container = database.container('recipe1');

    var item = {
        'id': '70b63682-b93a-4c77-aad2-65501347265f',
        'category': 'gear-surf-surfboards',
        'name': 'Yamba Surfboard',
        'quantity': 12,
        'price': 850.00,
        'clearance': false
    };

    try {
        var response = await container.items.upsert(item);
        console.log('Upserted item:', response.resource);
    } catch (error) {
        console.error('Error upserting item:', error);
    }
}

// Call the async function
upsertItem();
