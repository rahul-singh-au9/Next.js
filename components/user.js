const User = ({ user }) => {
  return (
    <center>
      <p>{user.name}</p>
      <p>{user.email}</p>
    </center>
  );
};

export default User;
