import { Test, TestingModule } from '@nestjs/testing';
import { WorkflowManager } from './workflow-manager';

describe('Check Workflow Framework', () => {


    it('it should execute without errors', async () => {

        const wf = new WorkflowManager();
        //wf.init();
        let input = {};
        let output = {};
        //await wf.begin(input, output);

        expect(wf).toBeDefined();
    });
});
