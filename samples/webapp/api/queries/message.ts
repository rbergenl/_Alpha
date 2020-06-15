import { gql } from 'apollo-boost';

export const LIST_MESSAGES = gql`
    query listMessages {
        listMessages {
            items {
                id
                createdAt
                updatedAt
                text
                sentBy {
                    id
                    name
                }
            }
        }
    }
`;

export const CREATE_MESSAGE = gql`
    mutation createMessage($text: String!, $sentBy: IDInput!) {
        createMessage(input: { text: $text, sentBy: $sentBy }) {
            id
            createdAt
            updatedAt
            text
            sentBy {
                id
                name
            }
        }
    }
`;

export const ON_CREATE_MESSAGE = gql`
    subscription onCreateMessage {
        onCreateMessage {
            id
            createdAt
            updatedAt
            text
            sentBy {
                id
                name
            }
        }
    }
`;
