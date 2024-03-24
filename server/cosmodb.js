// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

/**
 * @summary Uses AAD credentials to authenticate with the CosmosClient.
 */

import * as dotenv from "dotenv";
dotenv.config();

// import { UsernamePasswordCredential } from "@azure/identity";
import { DefaultAzureCredential } from "@azure/identity";

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { CosmosClient } from "@azure/cosmos";
// import { handleError, finish, logStep } from "./Shared/handleError";

const key = process.env.COSMOS_KEY || "<cosmos key>";
const endpoint = process.env.COSMOS_ENDPOINT || "<cosmos endpoint>";
const existingContainerId = process.env.COSMOS_CONTAINER || "<cosmos container>";
const tenant_id = process.env.AZURE_TENANT_ID;
const client_id = process.env.AZURE_CLIENT_ID;

async function run() {
//   logStep("Create credential object from @azure/identity");
  const credentials = new DefaultAzureCredential(
    tenant_id,
    client_id
  );
//   logStep("Pass credentials to client object with key aadCredentials");
  const aadClient = new CosmosClient({
    endpoint,
    aadCredentials: credentials,
  });

  const genericClient = new CosmosClient({
    endpoint,
    key: key,
  });

  // fails
  await aadClient.databases.readAll({}).fetchAll();
  // succeeds
  await genericClient.databases.readAll({}).fetchAll();

  // succeeds
  await aadClient.database("example").container(existingContainerId).items.readAll();
  // succeeds
  await genericClient.database("example").container(existingContainerId).items.readAll();

}

run();