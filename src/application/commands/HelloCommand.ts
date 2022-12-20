import {Command} from "../protocols/Command";
export class HelloCommand implements Command.Contract {
    async handle({ sender } : Command.Input): Promise<Command.Output> {
        return {
            response: `Hello ${sender}`
        }
    }

}