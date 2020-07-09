
export type Resolver = (ctx: ApiResolverPayload) => Promise<LambdaResult>;
export type TypeHandler = Record<string, Resolver | undefined>;

export interface ApiResolverPayload {
    typeName: string; /* Filled dynamically based on @function usage location */
    fieldName: string; /* Filled dynamically based on @function usage location */
    arguments?: Record<string, {}>; /* GraphQL field arguments via $ctx.arguments */
    identity?: Record<string, {}>; /* AppSync identity object via $ctx.identity */
    source?: Record<string, {}>; /* The object returned by the parent resolver. E.G. if resolving field 'Post.comments', the source is the Post object. */
    request?: Record<string, {}>; /* AppSync request object. Contains things like headers. */
    prev?: Record<string, {}>; /* If using the built-in pipeline resolver support, this contains the object returned by the previous function. */
}

export enum LambdaResult {
    SUCCES = 'success',
    ERROR = 'error',
}
