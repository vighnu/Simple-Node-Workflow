import { IOutput } from "./i-output";
import { IInput } from "./i-input";

export interface IActivityCommand {
    run(input: IInput, output: IOutput): Promise<any>
}