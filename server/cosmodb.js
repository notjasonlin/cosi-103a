const credential = new DefaultAzureCredential();

const client = new CosmosClient({
    endpoint,
    aadCredentials: credential
});

const database = client.database('cosmicworks');
const container = database.container('products');

var item = {
    'id': '70b63682-b93a-4c77-aad2-65501347265f',
    'category': 'gear-surf-surfboards',
    'name': 'Yamba Surfboard',
    'quantity': 12,
    'price': 850.00,
    'clearance': false
};

var response = await container.items.upsert(item);
console.log(item);