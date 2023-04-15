const { EventHubProducerClient } = require("@azure/event-hubs");
const { DefaultAzureCredential } = require("@azure/identity");

// Event hubs 
const fullyQualifiedNamespace = "Endpoint=sb://eventhub-flashfood.servicebus.windows.net/;SharedAccessKeyName=RootManageSharedAccessPolicy;SharedAccessKey=D7s1PbsGugJeWQaQpiwGJw199QvKqfIcX+AEhFJNPI4=;EntityPath=eventhub-flashfood"; 
const eventHubName = "eventhub-flashfood";

// Azure Identity - passwordless authentication
const credential = new DefaultAzureCredential();

async function main() {

  // Create a producer client to send messages to the event hub.
  const producer = new EventHubProducerClient(fullyQualifiedNamespace, eventHubName);

  // Prepare a batch of three events.
  const batch = await producer.createBatch();
  batch.tryAdd({ body: "passwordless First event" });
  batch.tryAdd({ body: "passwordless Second event" });
  batch.tryAdd({ body: "passwordless Third event" });    

  // Send the batch to the event hub.
  await producer.sendBatch(batch);

  // Close the producer client.
  await producer.close();

  console.log("A batch of three events have been sent to the event hub");
}

main().catch((err) => {
  console.log("Error occurred: ", err);
});