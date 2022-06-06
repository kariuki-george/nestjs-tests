# ------------------------------------------------------
# THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
# ------------------------------------------------------

type User {
  _id: String!

  """User firstName """
  firstName: String!

  """User lastName """
  lastName: String!

  """User email """
  email: String!

  """User role"""
  role: String!
}

type PageDataDto {
  count: Float!
  limit: Float!
  offset: Float!
}

type ListUsersResponse {
  page: UserConnection!
  pageData: PageDataDto
}

type UserConnection {
  edges: [UserEdge!]
  pageInfo: UserPageInfo
}

type UserEdge {
  cursor: String
  node: User
}

type UserPageInfo {
  startCursor: String
  endCursor: String
  hasPreviousPage: Boolean!
  hasNextPage: Boolean!
}

type Query {
  listUsersWithLimitAndOffset(listUsersInput: ListUsersInput!): [User!]!
  listUsersWithCursor(args: ConnectionArgs!): ListUsersResponse!
  user(id: String!): User!
}

input ListUsersInput {
  """classical limit"""
  limit: Float!

  """classical offset"""
  offset: Float!
}

input ConnectionArgs {
  """Paginate before opaque cursor"""
  before: String

  """Paginate after opaque cursor"""
  after: String

  """Paginate first"""
  first: Float

  """Paginate last"""
  last: Float
}

type Mutation {
  createUser(createUserInput: CreateUserInput!): User!
  updateUser(updateUserInput: UpdateUserInput!): User!
  removeUser(id: String!): User!
}

input CreateUserInput {
  """First nameof the user"""
  firstName: String!

  """last name"""
  lastName: String!

  """email name"""
  email: String!

  """role"""
  role: String!
}

input UpdateUserInput {
  """First nameof the user"""
  firstName: String

  """last name"""
  lastName: String

  """email name"""
  email: String

  """role"""
  role: String
  _id: String!
}