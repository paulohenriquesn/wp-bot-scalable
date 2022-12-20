import {Client} from "@open-wa/wa-automate";
import {SelectorCommand} from "../utils/SelectorCommand";
import {mapCommandBody} from "../../application/mappers/mapCommandBody";

export function CommandHandler(client: Client) {
    client.onAnyMessage(async message => {
        const { body, sender, from } = message;
        try {
            const {command, args} = mapCommandBody(body)
            const event = await SelectorCommand({
                command,
                client
            })

            const { response } = await event.handle({
                client,
                sender: sender.shortName,
                command,
                args
            })

            await client.sendText(from, response)
        } catch {
            await client.sendText(from, 'Ops, invalid input!')
            return;
        }
    })
}