import UserContact from "./UserContact";

const UserList = (props) => {
  return (
    <div>
      {props.users.map(user => {
        return <UserContact key={user.login.uuid} user={user} />
      })}
    </div>
  )
}

export default UserList;