const { Kafka } = require('kafkajs')

const kafka = new Kafka({
    clientId: 'meuprograma-nodejs-kafka-consumer',
    brokers: ['localhost:29092'],
    // brokers: ['itchyno.local:9092']
})

const consumer = kafka.consumer({ groupId: 'test-group' })

async function start() {

    await consumer.connect()
    await consumer.subscribe({ topic: 'demoTopic', fromBeginning: true })

    await consumer.run(
        {
            eachMessage: async ({ topic, partition, message }) => {
                console.log({
                value: message.value.toString(),
                })
            },
        }
    )

}

start();