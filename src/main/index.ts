import {WhatsappClient} from "../drivers/wp-automate";
import {CommandHandler} from "./handlers/CommandHandler";
import {Client} from "@open-wa/wa-automate";

const makeWhatsappClient = WhatsappClient.getInstance()

makeWhatsappClient.then((client: Client) => CommandHandler(client))