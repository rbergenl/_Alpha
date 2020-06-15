import { gql } from 'apollo-boost';

const LIST_MESSAGES = gql`
    query listMessages {
        listMessages {
            items {
                id
                sentBy {
                    id
                    name
                }
                createdAt
                text
                updatedAt
            }
        }
    }
`;
