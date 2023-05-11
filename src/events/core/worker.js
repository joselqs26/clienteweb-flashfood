import { EventHubConsumerClient } from "@azure/event-hubs";
import { BlobServiceClient } from "@azure/storage-blob";

function createWorker(callback) {
    const fullyQualifiedNamespace = "Endpoint=sb://eventhub-flashfood.servicebus.windows.net/;SharedAccessKeyName=RootManageSharedAccessPolicy;SharedAccessKey=D7s1PbsGugJeWQaQpiwGJw199QvKqfIcX+AEhFJNPI4=;EntityPath=eventhub-flashfood";
    const eventHubName = "eventhub-flashfood";
    const consumerGroup = "cliente";

    const containerName = "blobcontainer-flashfood";

    const sasTokenContainer = "sp=racwdli&st=2023-05-06T02:25:16Z&se=2024-05-05T10:25:16Z&sv=2021-12-02&sr=c&sig=tOaeZ1cNsC41M360iaPr%2FDWZ9O00grFl0T4gPLLIdFA%3D";
    const accountName = "azurestorageflashfood";

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
