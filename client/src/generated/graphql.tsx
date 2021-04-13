import gql from 'graphql-tag';
import * as Urql from 'urql';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Query = {
  __typename?: 'Query';
  posts: Array<Post>;
  post?: Maybe<Post>;
  me?: Maybe<User>;
  vendors: Array<Vendor>;
  vendor?: Maybe<Vendor>;
};


export type QueryPostArgs = {
  id: Scalars['Int'];
};


export type QueryVendorArgs = {
  id: Scalars['String'];
};

export type Post = {
  __typename?: 'Post';
  id: Scalars['Float'];
  createdAt: Scalars['String'];
  updatedAt: Scalars['String'];
  title: Scalars['String'];
};

export type User = {
  __typename?: 'User';
  id: Scalars['Float'];
  createdAt: Scalars['String'];
  updatedAt: Scalars['String'];
  username: Scalars['String'];
  email: Scalars['String'];
};

export type Vendor = {
  __typename?: 'Vendor';
  id: Scalars['String'];
  createdAt: Scalars['String'];
  createdBy: User;
  modifiedBy?: Maybe<User>;
  updatedAt: Scalars['String'];
  name: Scalars['String'];
  value: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createPost: Post;
  updatePost?: Maybe<Post>;
  deletePost?: Maybe<Post>;
  register: UserResponse;
  login: UserResponse;
  logout: Scalars['Boolean'];
  forgotPassword: Scalars['Boolean'];
  changePassword: UserResponse;
  createVendor: VendorResponse;
  updateVendor?: Maybe<VendorResponse>;
  deleteVendor?: Maybe<Vendor>;
};


export type MutationCreatePostArgs = {
  title: Scalars['String'];
};


export type MutationUpdatePostArgs = {
  title?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
};


export type MutationDeletePostArgs = {
  id: Scalars['Int'];
};


export type MutationRegisterArgs = {
  options: UsernamePasswordInput;
};


export type MutationLoginArgs = {
  password: Scalars['String'];
  usernameOrEmail: Scalars['String'];
};


export type MutationForgotPasswordArgs = {
  email: Scalars['String'];
};


export type MutationChangePasswordArgs = {
  token: Scalars['String'];
  newPassword: Scalars['String'];
};


export type MutationCreateVendorArgs = {
  name: Scalars['String'];
};


export type MutationUpdateVendorArgs = {
  name?: Maybe<Scalars['String']>;
  id: Scalars['String'];
};


export type MutationDeleteVendorArgs = {
  id: Scalars['String'];
};

export type UserResponse = {
  __typename?: 'UserResponse';
  errors?: Maybe<Array<FieldError>>;
  user?: Maybe<User>;
};

export type FieldError = {
  __typename?: 'FieldError';
  field: Scalars['String'];
  message: Scalars['String'];
};

export type UsernamePasswordInput = {
  username: Scalars['String'];
  password: Scalars['String'];
  email: Scalars['String'];
};

export type VendorResponse = {
  __typename?: 'VendorResponse';
  errors?: Maybe<Array<FieldError>>;
  vendor?: Maybe<Vendor>;
};

export type RegularErrorFragment = (
  { __typename?: 'FieldError' }
  & Pick<FieldError, 'field' | 'message'>
);

export type UserInfoFragment = (
  { __typename?: 'User' }
  & Pick<User, 'id' | 'username'>
);

export type ChangePasswordMutationVariables = Exact<{
  token: Scalars['String'];
  newPassword: Scalars['String'];
}>;


export type ChangePasswordMutation = (
  { __typename?: 'Mutation' }
  & { changePassword: (
    { __typename?: 'UserResponse' }
    & { errors?: Maybe<Array<(
      { __typename?: 'FieldError' }
      & RegularErrorFragment
    )>>, user?: Maybe<(
      { __typename?: 'User' }
      & UserInfoFragment
    )> }
  ) }
);

export type CreateVendorMutationVariables = Exact<{
  name: Scalars['String'];
}>;


export type CreateVendorMutation = (
  { __typename?: 'Mutation' }
  & { createVendor: (
    { __typename?: 'VendorResponse' }
    & { errors?: Maybe<Array<(
      { __typename?: 'FieldError' }
      & RegularErrorFragment
    )>>, vendor?: Maybe<(
      { __typename?: 'Vendor' }
      & Pick<Vendor, 'name' | 'id'>
      & { createdBy: (
        { __typename?: 'User' }
        & Pick<User, 'username'>
      ), modifiedBy?: Maybe<(
        { __typename?: 'User' }
        & Pick<User, 'username'>
      )> }
    )> }
  ) }
);

export type DeleteVendorMutationVariables = Exact<{
  id: Scalars['String'];
}>;


export type DeleteVendorMutation = (
  { __typename?: 'Mutation' }
  & { deleteVendor?: Maybe<(
    { __typename?: 'Vendor' }
    & Pick<Vendor, 'id' | 'name'>
  )> }
);

export type ForgotPasswordMutationVariables = Exact<{
  email: Scalars['String'];
}>;


export type ForgotPasswordMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'forgotPassword'>
);

export type LoginMutationVariables = Exact<{
  usernameOrEmail: Scalars['String'];
  password: Scalars['String'];
}>;


export type LoginMutation = (
  { __typename?: 'Mutation' }
  & { login: (
    { __typename?: 'UserResponse' }
    & { errors?: Maybe<Array<(
      { __typename?: 'FieldError' }
      & RegularErrorFragment
    )>>, user?: Maybe<(
      { __typename?: 'User' }
      & UserInfoFragment
    )> }
  ) }
);

export type LogoutMutationVariables = Exact<{ [key: string]: never; }>;


export type LogoutMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'logout'>
);

export type MeQueryVariables = Exact<{ [key: string]: never; }>;


export type MeQuery = (
  { __typename?: 'Query' }
  & { me?: Maybe<(
    { __typename?: 'User' }
    & UserInfoFragment
  )> }
);

export type PostsQueryVariables = Exact<{ [key: string]: never; }>;


export type PostsQuery = (
  { __typename?: 'Query' }
  & { posts: Array<(
    { __typename?: 'Post' }
    & Pick<Post, 'id' | 'createdAt' | 'updatedAt' | 'title'>
  )> }
);

export type RegisterMutationVariables = Exact<{
  options: UsernamePasswordInput;
}>;


export type RegisterMutation = (
  { __typename?: 'Mutation' }
  & { register: (
    { __typename?: 'UserResponse' }
    & { errors?: Maybe<Array<(
      { __typename?: 'FieldError' }
      & RegularErrorFragment
    )>>, user?: Maybe<(
      { __typename?: 'User' }
      & UserInfoFragment
    )> }
  ) }
);

export type UpdateVendorMutationVariables = Exact<{
  id: Scalars['String'];
  name: Scalars['String'];
}>;


export type UpdateVendorMutation = (
  { __typename?: 'Mutation' }
  & { updateVendor?: Maybe<(
    { __typename?: 'VendorResponse' }
    & { errors?: Maybe<Array<(
      { __typename?: 'FieldError' }
      & RegularErrorFragment
    )>>, vendor?: Maybe<(
      { __typename?: 'Vendor' }
      & Pick<Vendor, 'name' | 'id'>
      & { createdBy: (
        { __typename?: 'User' }
        & Pick<User, 'username'>
      ), modifiedBy?: Maybe<(
        { __typename?: 'User' }
        & Pick<User, 'username'>
      )> }
    )> }
  )> }
);

export type VendorsQueryVariables = Exact<{ [key: string]: never; }>;


export type VendorsQuery = (
  { __typename?: 'Query' }
  & { vendors: Array<(
    { __typename?: 'Vendor' }
    & Pick<Vendor, 'name' | 'id'>
    & { createdBy: (
      { __typename?: 'User' }
      & Pick<User, 'username'>
    ), modifiedBy?: Maybe<(
      { __typename?: 'User' }
      & Pick<User, 'username'>
    )> }
  )> }
);

export const RegularErrorFragmentDoc = gql`
    fragment RegularError on FieldError {
  field
  message
}
    `;
export const UserInfoFragmentDoc = gql`
    fragment UserInfo on User {
  id
  username
}
    `;
export const ChangePasswordDocument = gql`
    mutation ChangePassword($token: String!, $newPassword: String!) {
  changePassword(token: $token, newPassword: $newPassword) {
    errors {
      ...RegularError
    }
    user {
      ...UserInfo
    }
  }
}
    ${RegularErrorFragmentDoc}
${UserInfoFragmentDoc}`;

export function useChangePasswordMutation() {
  return Urql.useMutation<ChangePasswordMutation, ChangePasswordMutationVariables>(ChangePasswordDocument);
};
export const CreateVendorDocument = gql`
    mutation CreateVendor($name: String!) {
  createVendor(name: $name) {
    errors {
      ...RegularError
    }
    vendor {
      name
      id
      createdBy {
        username
      }
      modifiedBy {
        username
      }
    }
  }
}
    ${RegularErrorFragmentDoc}`;

export function useCreateVendorMutation() {
  return Urql.useMutation<CreateVendorMutation, CreateVendorMutationVariables>(CreateVendorDocument);
};
export const DeleteVendorDocument = gql`
    mutation DeleteVendor($id: String!) {
  deleteVendor(id: $id) {
    id
    name
  }
}
    `;

export function useDeleteVendorMutation() {
  return Urql.useMutation<DeleteVendorMutation, DeleteVendorMutationVariables>(DeleteVendorDocument);
};
export const ForgotPasswordDocument = gql`
    mutation ForgotPassword($email: String!) {
  forgotPassword(email: $email)
}
    `;

export function useForgotPasswordMutation() {
  return Urql.useMutation<ForgotPasswordMutation, ForgotPasswordMutationVariables>(ForgotPasswordDocument);
};
export const LoginDocument = gql`
    mutation Login($usernameOrEmail: String!, $password: String!) {
  login(usernameOrEmail: $usernameOrEmail, password: $password) {
    errors {
      ...RegularError
    }
    user {
      ...UserInfo
    }
  }
}
    ${RegularErrorFragmentDoc}
${UserInfoFragmentDoc}`;

export function useLoginMutation() {
  return Urql.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument);
};
export const LogoutDocument = gql`
    mutation Logout {
  logout
}
    `;

export function useLogoutMutation() {
  return Urql.useMutation<LogoutMutation, LogoutMutationVariables>(LogoutDocument);
};
export const MeDocument = gql`
    query Me {
  me {
    ...UserInfo
  }
}
    ${UserInfoFragmentDoc}`;

export function useMeQuery(options: Omit<Urql.UseQueryArgs<MeQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<MeQuery>({ query: MeDocument, ...options });
};
export const PostsDocument = gql`
    query Posts {
  posts {
    id
    createdAt
    updatedAt
    title
  }
}
    `;

export function usePostsQuery(options: Omit<Urql.UseQueryArgs<PostsQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<PostsQuery>({ query: PostsDocument, ...options });
};
export const RegisterDocument = gql`
    mutation Register($options: UsernamePasswordInput!) {
  register(options: $options) {
    errors {
      ...RegularError
    }
    user {
      ...UserInfo
    }
  }
}
    ${RegularErrorFragmentDoc}
${UserInfoFragmentDoc}`;

export function useRegisterMutation() {
  return Urql.useMutation<RegisterMutation, RegisterMutationVariables>(RegisterDocument);
};
export const UpdateVendorDocument = gql`
    mutation UpdateVendor($id: String!, $name: String!) {
  updateVendor(id: $id, name: $name) {
    errors {
      ...RegularError
    }
    vendor {
      name
      id
      createdBy {
        username
      }
      modifiedBy {
        username
      }
    }
  }
}
    ${RegularErrorFragmentDoc}`;

export function useUpdateVendorMutation() {
  return Urql.useMutation<UpdateVendorMutation, UpdateVendorMutationVariables>(UpdateVendorDocument);
};
export const VendorsDocument = gql`
    query Vendors {
  vendors {
    name
    id
    createdBy {
      username
    }
    modifiedBy {
      username
    }
  }
}
    `;

export function useVendorsQuery(options: Omit<Urql.UseQueryArgs<VendorsQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<VendorsQuery>({ query: VendorsDocument, ...options });
};