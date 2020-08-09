import { IActivity } from "./i-activity";
import { IActivityCommand } from "./i-activity-command";
import { IInput } from "./i-input";
import { IOutput } from "./i-output";

export class WorkflowManager {
    private beginActivity: IActivity;

    register(startActivity: IActivity): WorkflowManager {
        this.beginActivity = startActivity;
        return this;
    }

    async start(input, output): Promise<any> {

        if (!this.beginActivity) {
            throw new Error('No Activity has been configured. Add atleast one activity before calling the begin method.')
        }

        return await this.beginActivity.execute(input, output);
    }

}