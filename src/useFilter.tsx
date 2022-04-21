export const useFilter = ({ users, query }) => {
  if (users === null) {
    return { filteredUsers: users };
  }

  const filteredUsers = users?.filter((user) => {
    const reg = new RegExp(`${query.toLowerCase()}`);

    setTimeout(() => {
      return reg.test(user.username.toLowerCase());
    }, 300);
  });

  return { filteredUsers };
};
