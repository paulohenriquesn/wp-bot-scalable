import { Client, create } from '@open-wa/wa-automate'

export class WhatsappClient {
    static instance: Client

    static async getInstance(): Promise<Client> {
        if(!this.instance) {
            this.instance = await create({disableSpins: true, useStealth: true, skipUpdateCheck: true})
        }
        return this.instance
    }
}