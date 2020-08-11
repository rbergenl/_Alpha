import { PubSub } from 'graphql-subscriptions';
import { listMessages_listMessages_items as MessageItem } from '../../../types/__generated__/listMessages';

const pubsub = new PubSub();

// TODO: integratie this with the auth implementation
const getUserName = (id: number) => {
    if (id == 1) return 'user1';
    if (id == 2) return 'user2'
    return 'NoUser';
}

export const resolvers = {
    Query: {
        listMessages: () => {
            return {
                items: []
            }
        }
    },
    Mutation: {
        createMessage(parent: any, args: any): MessageItem {
            const message: MessageItem = {
                __typename: 'Message',
                id: new Date().toUTCString(),
                createdAt: new Date(),
                updatedAt: new Date(),
                text: args.input.text || 'NoText',
                sentBy: {
                    __typename: 'User',
                    id: args.input.sentBy.eq,
                    name: getUserName(args.input.sentBy.eq)
                },
            };

            pubsub.publish('onCreateMessage', message);
            return message;
        }
    },
    Subscription: {
        onCreateMessage: {
            resolve: (payload: any) => {
                return payload;
            },
            subscribe: () => pubsub.asyncIterator('onCreateMessage')
            // TODO: sent message to a "channel" and filter messages based on that
        //   subscribe: withFilter(() => pubsub.asyncIterator('commentAdded'), (payload, variables) => {
        //     return payload.commentAdded.repository_name === variables.repoFullName;
        //  }),
        }
    },
};
