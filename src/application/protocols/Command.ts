export namespace Command {
    export type Body = {
        command: string
        args: string[]
    }
    export type Input = {
        client: unknown
        sender: string
    } & Body;
    export type Output = {
        response: string
    };
    export interface Contract {
        handle(input: Input) : Promise<Output>
    }
}