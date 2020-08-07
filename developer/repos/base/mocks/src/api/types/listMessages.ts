/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: listMessages
// ====================================================

export interface listMessages_listMessages_items_sentBy {
  __typename: "User";
  id: string;
  name: string | null;
}

export interface listMessages_listMessages_items {
  __typename: "Message";
  id: string;
  sentBy: listMessages_listMessages_items_sentBy;
  createdAt: any;
  text: string;
  updatedAt: any;
}

export interface listMessages_listMessages {
  __typename: "MessageConnection";
  items: (listMessages_listMessages_items | null)[] | null;
}

export interface listMessages {
  listMessages: listMessages_listMessages | null;
}
