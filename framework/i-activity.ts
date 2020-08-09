import { IOutput } from "./i-output";
import { IInput } from "./i-input";

export interface IActivity {
    execute(input: IInput, output: IOutput): Promise<any>;
}

export interface IBooleanActivity extends IActivity {
    registerOk(ok: IActivity): IActivity
    registerKo(ok: IActivity): IActivity
}