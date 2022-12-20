import {Client} from "@open-wa/wa-automate";

export const isOpenWaClient = (client: unknown): client is Client =>{
    return true
}