import client from '../../bot'

function helpCommand(msg) {
    if (msg.body == '/help') {
        msg.reply('*🤖 COMANDOS DO BOT*\n\n*/everyone* _Com esse comando você está chamando todos os membros do grupo._\n\n*/create-list: [name]* _Com esse comando você pode criar uma lista para algum evento ou projeto._ [EM BREVE]\n\n*/rename-list: [name]* _Com esse comando você pode renomear uma lista existente._ [EM BREVE]\n\n*/remove-list: [name]* _Com esse comando você pode deletar uma lista existente._ [EM BREVE]\n\n*/add-participant: [name]* _Com esse comando você pode adicionar um participante na lista._ [EM BREVE]\n\n*/rename-participant: [number]* _Com esse comando você pode mudar o nome do usuário do índice x._ [EM BREVE]\n\n*/remove-participant: [number]* _Com esse comando você pode remover o usuário com índice x._ [EM BREVE]')
    }
}

export default helpCommand