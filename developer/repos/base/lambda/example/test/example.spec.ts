import * as trader from '../index';
import * as event_default from './events/default.json';
import { LambdaResult, LambdaResultStatus } from '../../../types/lambda';

describe('Example', () => {
    describe('default', () => {
        it('returns success', async () => {
            const result = await trader.handler(event_default);
            expect(result).toEqual({ status: LambdaResultStatus.SUCCESS });
        });
    });
});
