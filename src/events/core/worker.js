import { EventHubConsumerClient } from "@azure/event-hubs";
import { BlobServiceClient } from "@azure/storage-blob";

function createWorker(callback) {
    const fullyQualifiedNamespace = "Endpoint=sb://eventhub-flash-food.servicebus.windows.net/;SharedAccessKeyName=RootManageSharedAccessPolicy;SharedAccessKey=F15BHDT/eXASYLnB3omw00Li523nmb4CW+AEhDQUIsE=;EntityPath=eventhub-flashfood";
    const eventHubName = "eventhub-flashfood";
    const consumerGroup = "cliente";

    const containerName = "blobcontainer-flashfood";

    const sasTokenContainer = "sp=racwdli&st=2023-05-19T02:07:00Z&se=2023-05-19T10:07:00Z&sv=2022-11-02&sr=c&sig=%2BMUfRuOPvFMEJ3x1btz8nx3F%2BANnmZQld0wh2DS3IPE%3D";
    const accountName = "storageacountflashfood";

    const blobServiceClient = new BlobServiceClient(
        `https://${accountName}.blob.core.windows.net/?${sasTokenContainer}`
    );

    const containerClient = blobServiceClient.getContainerClient(containerName);

    const client = new EventHubConsumerClient(
        consumerGroup,
        fullyQualifiedNamespace,
        eventHubName,
        null
    );

    console.log("Escucha");

    const subscription = client.subscribe({
        processEvents: async (events) => {
            console.log(events);
            if (events[0]?.body.type === "send_login") {
                const eventContent = JSON.stringify(events[0].body);
                const blobClient = containerClient.getBlobClient(containerName);
                const blockBlobClient = blobClient.getBlockBlobClient();

                // Upload the event to the container.
                await blockBlobClient.upload(eventContent, eventContent.length);

                // Llamar al callback con los nuevos eventos recibidos
                try {
                    callback(events);
                } catch (error) {
                    console.error(error)
                }
            }
        },
        processError: (err) => {
            console.error(err.message);
        },
    });

    return {
        terminate: () => {
            subscription.close();
            client.close();
            console.log("Cierre");
        },
    };
}

export { createWorker };
