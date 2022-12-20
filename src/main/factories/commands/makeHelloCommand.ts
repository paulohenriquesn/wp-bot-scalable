import {HelloCommand} from "../../../application/commands/HelloCommand";
import {Command} from "../../../application/protocols/Command";

export const makeHelloCommand = (): HelloCommand=> {
    return new HelloCommand()
}