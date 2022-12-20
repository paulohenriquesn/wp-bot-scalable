import {Command} from "../../application/protocols/Command";
import {isOpenWaClient} from "../../application/types/open-wa";
import {makeHelloCommand} from "../factories/commands/makeHelloCommand";

export const SelectorCommand = (input: { client: unknown, command: string }): Command.Contract => {
    const { client } = input

    if(!isOpenWaClient(client)) {
        throw new Error("This software is not provided for another client instead of open wa client.");
    }
        return makeHelloCommand()
}