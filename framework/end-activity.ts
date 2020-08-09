import { IActivity } from "./i-activity";
import { IInput } from "./i-input";
import { IOutput } from "./i-output";

export class EndActivity implements IActivity {
    private async beforeExecute(input: IInput, output: IOutput): Promise<void> {
        //do something here like logging of whatever
    }

    constructor() { }

    async execute(input: IInput, output: IOutput): Promise<boolean> {
        // this would ideally be the over all execution result
        console.log('EndActivity: true');

        return true;
    }

    private async afterExecute(input: IInput, output: IOutput): Promise<void> {
        //do something here like logging of whatever
    }

}