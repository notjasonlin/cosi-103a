require('dotenv').config();
const { CosmosClient } = require('@azure/cosmos');
const { ClientSecretCredential } = require('@azure/identity');

// Make sure these environment variables are set in your .env file
const tenantId = process.env.AZURE_TENANT_ID;
const clientId = process.env.AZURE_CLIENT_ID;
const clientSecret = process.env.AZURE_CLIENT_SECRET;
const endpoint = process.env.COSMOS_ENDPOINT;

console.log({
    tenantId,
    clientId,
    clientSecret,
    endpoint
});

// Using ClientSecretCredential for clarity
const credential = new ClientSecretCredential(tenantId, clientId, clientSecret);

async function upsertItem() {
    const client = new CosmosClient({
        endpoint,
        aadCredentials: credential
    });

    // Your Cosmos DB and container details
    const databaseId = 'cosi103cosmosdbdatabase';
    const containerId = 'recipe1';

    // Your item details
    const item = {
        id: '70b63682-b93a-4c77-aad2-65501347265f',
        category: 'gear-surf-surfboards',
        name: 'Yamba Surfboard',
        quantity: 12,
        price: 850.00,
        clearance: false
    };

    try {
        const { resource } = await client.database(databaseId).container(containerId).items.upsert(item);
        console.log('Upserted item:', resource);
    } catch (error) {
        console.error('Error upserting item:', error);
    }
}

upsertItem();
