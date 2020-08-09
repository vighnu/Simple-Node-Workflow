import { IActivity, IBooleanActivity } from "./i-activity";
import { IActivityCommand } from "./i-activity-command";
import { IOutput } from "./i-output";
import { IInput } from "./i-input";

export class BooleanActivity implements IBooleanActivity {

    private ok: IActivity;
    private ko: IActivity;
    constructor(private command: IActivityCommand) {

    }

    private async beforeExecute(input: IInput, output: IOutput): Promise<void> {
        //do something here like logging of whatever
    }

    async execute(input: IInput, output: IOutput): Promise<boolean> {
        await this.beforeExecute(input, output);
        const result = await this.command.run(input, output)
        await this.afterExecute(input, output, result);

        if (result) {
            return await this.ok.execute(input, output);
        }
        return await this.ko.execute(input, output);
    }

    private async afterExecute(input: IInput, output: IOutput, resultOfCheck: boolean): Promise<void> {
        //do something here like logging of whatever
        output.activityResult = output.activityResult && resultOfCheck;
        output.previousCheckResult = resultOfCheck;
    }

    registerOk(ok: IActivity): BooleanActivity {
        this.ok = ok;
        return this;
    }

    registerKo(ko: IActivity): BooleanActivity {
        this.ko = ko;
        return this;
    }

    public static factory(command: IActivityCommand): BooleanActivity {
        return new BooleanActivity(command);
    }
}