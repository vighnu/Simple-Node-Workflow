import { IActivityCommand } from "./i-activity-command";
import { IInput } from "./i-input";
import { IOutput } from "./i-output";

export abstract class BaseActivity {
    private async beforeExecute(input: IInput, output: IOutput): Promise<void> {
        //do something here like logging of whatever
    }

    constructor(protected command: IActivityCommand) {


    }



    abstract execute(input: IInput, output: IOutput): Promise<any>;

    private async afterExecute(input: IInput, output: IOutput): Promise<void> {
        //do something here like logging of whatever
    }
}