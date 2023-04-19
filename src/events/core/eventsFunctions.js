const { EventHubProducerClient } = require("@azure/event-hubs");
const { DefaultAzureCredential } = require("@azure/identity");

// Event hubs 
const fullyQualifiedNamespace = "Endpoint=sb://eventhub-flashfood.servicebus.windows.net/;SharedAccessKeyName=RootManageSharedAccessPolicy;SharedAccessKey=D7s1PbsGugJeWQaQpiwGJw199QvKqfIcX+AEhFJNPI4=;EntityPath=eventhub-flashfood"; 
const eventHubName = "eventhub-flashfood";

async function sendEvent(eventData) {

  // Create a producer client to send messages to the event hub.
  const producer = new EventHubProducerClient(fullyQualifiedNamespace, eventHubName);

  // Prepare a batch of three events.
  const batch = await producer.createBatch();
  batch.tryAdd( eventData );

  // Send the batch to the event hub.
  await producer.sendBatch(batch);

  // Close the producer client.
  await producer.close();

  console.log("A batch of one events have been sent to the event hub");
}

export {sendEvent};