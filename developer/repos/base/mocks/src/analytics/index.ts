import express from 'express';

export const analyticsRouter = express.Router();

interface AnalyticsPayload {
    Results: Record<string, any>;
}
analyticsRouter.post('/events', (req: express.Request, res: express.Response) => {
    const { BatchItem } = req.body;
    let payload: AnalyticsPayload = { Results: {} };

    for (let batchItemId in BatchItem) {
        const { Events } = BatchItem[batchItemId];

        for (let eventId in Events) {
            payload.Results[batchItemId] = {
                EndpointItemResponse: {
                    StatusCode: 202,
                    Message: 'Accepted'
                },
                EventsItemResponse: {
                    [eventId]: {
                        StatusCode: 202,
                        Message: 'Accepted'
                    }
                }
            }
        }
    }

    res.json(payload);
});
