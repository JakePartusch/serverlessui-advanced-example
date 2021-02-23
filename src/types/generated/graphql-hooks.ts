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
  findOrders?: Maybe<Array<Maybe<Order>>>;
};


export type QueryFindOrdersArgs = {
  statuses: Array<Status>;
};

export enum Status {
  Pending = 'PENDING',
  Shipped = 'SHIPPED',
  Delivered = 'DELIVERED'
}

export type Node = {
  id: Scalars['ID'];
};

export type Order = Node & {
  __typename?: 'Order';
  id: Scalars['ID'];
  customer: Customer;
  totalPrice: Scalars['Int'];
  status: Status;
  createdDate: Scalars['Date'];
};

export type Customer = Node & {
  __typename?: 'Customer';
  id: Scalars['ID'];
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  fullName: Scalars['String'];
};

export type FindOrdersQueryVariables = Exact<{
  statuses: Array<Status> | Status;
}>;


export type FindOrdersQuery = (
  { __typename?: 'Query' }
  & { findOrders?: Maybe<Array<Maybe<(
    { __typename?: 'Order' }
    & DashboardFieldsFragment
  )>>> }
);

export type DashboardFieldsFragment = (
  { __typename?: 'Order' }
  & Pick<Order, 'id' | 'totalPrice' | 'status' | 'createdDate'>
  & { customer: (
    { __typename?: 'Customer' }
    & Pick<Customer, 'fullName'>
  ) }
);

export const DashboardFieldsFragmentDoc = gql`
    fragment DashboardFields on Order {
  id
  totalPrice
  status
  createdDate
  customer {
    fullName
  }
}
    `;
export const FindOrdersDocument = gql`
    query findOrders($statuses: [Status!]!) {
  findOrders(statuses: $statuses) {
    ...DashboardFields
  }
}
    ${DashboardFieldsFragmentDoc}`;

/**
 * __useFindOrdersQuery__
 *
 * To run a query within a React component, call `useFindOrdersQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindOrdersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindOrdersQuery({
 *   variables: {
 *      statuses: // value for 'statuses'
 *   },
 * });
 */
export function useFindOrdersQuery(baseOptions: Apollo.QueryHookOptions<FindOrdersQuery, FindOrdersQueryVariables>) {
        return Apollo.useQuery<FindOrdersQuery, FindOrdersQueryVariables>(FindOrdersDocument, baseOptions);
      }
export function useFindOrdersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FindOrdersQuery, FindOrdersQueryVariables>) {
          return Apollo.useLazyQuery<FindOrdersQuery, FindOrdersQueryVariables>(FindOrdersDocument, baseOptions);
        }
export type FindOrdersQueryHookResult = ReturnType<typeof useFindOrdersQuery>;
export type FindOrdersLazyQueryHookResult = ReturnType<typeof useFindOrdersLazyQuery>;
export type FindOrdersQueryResult = Apollo.QueryResult<FindOrdersQuery, FindOrdersQueryVariables>;