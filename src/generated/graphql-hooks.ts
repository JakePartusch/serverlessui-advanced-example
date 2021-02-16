import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Date: any;
};


export type Query = {
  __typename?: 'Query';
  me: User;
  user?: Maybe<User>;
  allUsers?: Maybe<Array<Maybe<User>>>;
  search: Array<SearchResult>;
  myChats: Array<Chat>;
  allOrders?: Maybe<Array<Maybe<Order>>>;
};


export type QueryUserArgs = {
  id: Scalars['ID'];
};


export type QuerySearchArgs = {
  term: Scalars['String'];
};

export type Order = Node & {
  __typename?: 'Order';
  id: Scalars['ID'];
  customerFullName: Scalars['String'];
  totalPrice: Scalars['Int'];
  status: Status;
  createdDate: Scalars['Date'];
};

export enum Status {
  Pending = 'PENDING',
  Shipped = 'SHIPPED',
  Complete = 'COMPLETE'
}

export enum Role {
  User = 'USER',
  Admin = 'ADMIN'
}

export type Node = {
  id: Scalars['ID'];
};

export type SearchResult = User | Chat | ChatMessage;

export type User = Node & {
  __typename?: 'User';
  id: Scalars['ID'];
  username: Scalars['String'];
  email: Scalars['String'];
  role: Role;
};

export type Chat = Node & {
  __typename?: 'Chat';
  id: Scalars['ID'];
  users: Array<User>;
  messages: Array<ChatMessage>;
};

export type ChatMessage = Node & {
  __typename?: 'ChatMessage';
  id: Scalars['ID'];
  content: Scalars['String'];
  time: Scalars['Date'];
  user: User;
};

export type FindAllOrdersQueryVariables = Exact<{ [key: string]: never; }>;


export type FindAllOrdersQuery = (
  { __typename?: 'Query' }
  & { allOrders?: Maybe<Array<Maybe<(
    { __typename?: 'Order' }
    & DashboardFieldsFragment
  )>>> }
);

export type DashboardFieldsFragment = (
  { __typename?: 'Order' }
  & Pick<Order, 'id' | 'customerFullName' | 'totalPrice' | 'status' | 'createdDate'>
);

export const DashboardFieldsFragmentDoc = gql`
    fragment DashboardFields on Order {
  id
  customerFullName
  totalPrice
  status
  createdDate
}
    `;
export const FindAllOrdersDocument = gql`
    query findAllOrders {
  allOrders {
    ...DashboardFields
  }
}
    ${DashboardFieldsFragmentDoc}`;

/**
 * __useFindAllOrdersQuery__
 *
 * To run a query within a React component, call `useFindAllOrdersQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindAllOrdersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindAllOrdersQuery({
 *   variables: {
 *   },
 * });
 */
export function useFindAllOrdersQuery(baseOptions?: Apollo.QueryHookOptions<FindAllOrdersQuery, FindAllOrdersQueryVariables>) {
        return Apollo.useQuery<FindAllOrdersQuery, FindAllOrdersQueryVariables>(FindAllOrdersDocument, baseOptions);
      }
export function useFindAllOrdersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FindAllOrdersQuery, FindAllOrdersQueryVariables>) {
          return Apollo.useLazyQuery<FindAllOrdersQuery, FindAllOrdersQueryVariables>(FindAllOrdersDocument, baseOptions);
        }
export type FindAllOrdersQueryHookResult = ReturnType<typeof useFindAllOrdersQuery>;
export type FindAllOrdersLazyQueryHookResult = ReturnType<typeof useFindAllOrdersLazyQuery>;
export type FindAllOrdersQueryResult = Apollo.QueryResult<FindAllOrdersQuery, FindAllOrdersQueryVariables>;