import {Command} from "../protocols/Command";

export function mapCommandBody (body: string) : Command.Body {
    const raw = body.match(/(![^\s]+)\s(.+)/)
    if(!raw) {
        throw new Error('Ops command input is invalid!')
    }
    return {
        command: raw[1],
        args: raw[2].split(' ')
    }
}