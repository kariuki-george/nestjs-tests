export const GET_USER_OPERATION_NAME = 'GetUser';

export const GET_USER_QUERY = `query GetUser($userId: String!) {
  user(id: $userId) {
    _id
    firstName
    lastName
    email
    role
  }
}`;

export const generateGetUserVariable = (userId: string) => {
  return {
    userId,
  };
};
