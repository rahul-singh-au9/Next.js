import User from "../components/user";

const users = ({ users }) => {
  return (
    <>
      <h1>
        <center> Users List</center>
      </h1>
      {users.map((user) => {
        return (
          <div key={user.id}>
            <User user={user} />
          </div>
        );
      })}
    </>
  );
};

export default users;

export const getStaticProps = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await response.json();
  // console.log(data);

  // the convension here to return an object, this object will contain a property called "props", which again must be an object, this object then contain any key-value pairs which will be automatically injected as props into the component.
  return {
    props: {
      users: data,
    },
  };
};
