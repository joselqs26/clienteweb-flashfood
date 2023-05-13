const { EventHubProducerClient, EventHubConsumerClient, earliestEventPosition } = require("@azure/event-hubs");
const { DefaultAzureCredential } = require("@azure/identity");
const { ContainerClient } = require("@azure/storage-blob");
const { BlobCheckpointStore } = require("@azure/eventhubs-checkpointstore-blob");

// Event hubs 
const fullyQualifiedNamespace = "Endpoint=sb://eventhub-flashfood.servicebus.windows.net/;SharedAccessKeyName=RootManageSharedAccessPolicy;SharedAccessKey=D7s1PbsGugJeWQaQpiwGJw199QvKqfIcX+AEhFJNPI4=;EntityPath=eventhub-flashfood";
const eventHubName = "eventhub-flashfood";
const consumerGroup = "$Default"; // name of the default consumer group

const blobConnectionString = "DefaultEndpointsProtocol=https;AccountName=azurestorageflashfood;AccountKey=Q6jixJ+fue/fsGGnVHn4Q2sVqpFM769twe+DyWMnoayFlvpwLjd0QRQKpoBYwbRdUp94Zo0plf20+AStea8meA==;EndpointSuffix=core.windows.net";
const containerName =  "blobcontainer-flashfood";

async function sendEvent(type, eventData) {
  // Create a producer client to send messages to the event hub.
  const producer = new EventHubProducerClient(fullyQualifiedNamespace, eventHubName);

  // Prepare a batch of three events.
  const batch = await producer.createBatch();
  batch.tryAdd({ body: { type, data: eventData } });

  // Send the batch to the event hub.
  await producer.sendBatch(batch);

  // Close the producer client.
  await producer.close();

  console.log("A batch of one events have been sent to the event hub");
}

async function recibeEvent() {
  async function main() {

    // Create a blob container client and a blob checkpoint store using the client.
    const checkpointStore = new BlobCheckpointStore(blobConnectionString, containerName);

    // Create a consumer client for the event hub by specifying the checkpoint store.
    const consumerClient = new EventHubConsumerClient(consumerGroup, fullyQualifiedNamespace, eventHubName, checkpointStore);

    // Subscribe to the events, and specify handlers for processing the events and errors.
    const subscription = consumerClient.subscribe({
      processEvents: async (events, context) => {
        if (events.length === 0) {
          console.log(`No events received within wait time. Waiting for next interval`);
          return;
        }

        for (const event of events) {
          console.log(`Received event: '${event.body}' from partition: '${context.partitionId}' and consumer group: '${context.consumerGroup}'`);
        }
        // Update the checkpoint.
        await context.updateCheckpoint(events[events.length - 1]);
      },

      processError: async (err, context) => {
        console.log(`Error : ${err}`);
      }
    },
      { startPosition: earliestEventPosition }
    );

    // After 30 seconds, stop processing.
    await new Promise((resolve) => {
      setTimeout(async () => {
        await subscription.close();
        await consumerClient.close();
        resolve();
      }, 30000);
    });
  }

  main().catch((err) => {
    console.log("Error occurred: ", err);
  });
}

export { sendEvent };