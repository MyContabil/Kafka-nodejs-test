const { Kafka } = require('kafkajs')

const kafka = new Kafka({
    clientId: 'meuprograma-nodejs-kafka-producer',
    brokers: ['localhost:29092'],
    // brokers: ['itchyno.local:9092']
});

const producer = kafka.producer()

async function start(mensagem) {

    // Connect to the producer
    await producer.connect()

    // Send an event to the demoTopic topic
    await producer.send(
        {
            topic: "demoTopic",
            messages: [
                { value: mensagem },
            ],
        }
    );

    // Disconnect the producer once we're done
    await producer.disconnect();

}

start("Mensagem adicionada a fila");