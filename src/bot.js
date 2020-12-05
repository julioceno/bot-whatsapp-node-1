import { Client } from 'whatsapp-web.js'
import qrcode from 'qrcode-terminal'

import helpCommand from './parts/commands/help'
import everyoneEvent from './parts/commands/everyone'


const client = new Client()

client.on('qr', qr => {
    qrcode.generate(qr, { small: true })
})

client.on('ready', msg => {
    console.log('bot on !')
})

// Help - List of bot commands;
client.on('message', msg => helpCommand(msg))

// Everyone - function to call all group participants;
client.on('message', async msg => everyoneEvent(msg))


client.initialize()

export default client