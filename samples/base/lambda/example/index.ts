import { ApiResolverPayload, LambdaResult, TypeHandler } from '../types';

export const handler = async (payload: ApiResolverPayload): Promise<LambdaResult> => {
    const typeHandler = resolvers[payload.typeName];
    if (typeHandler) {
        const resolver = typeHandler[payload.fieldName];
        if (resolver) {
            return await resolver(payload);
        }
    }
    throw new Error('Resolver not found.');
};

const resolvers: Record<string, TypeHandler | undefined> = {
    Mutation: {
        async exampleField(): Promise<LambdaResult> {
            return LambdaResult.SUCCES;
        },
    },
};
