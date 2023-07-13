import { useLoaderData } from "react-router-dom";

const UserDetails = () => {
    const users = useLoaderData()
    console.log(users)
    
    return (
        <div>
          <div className="overflow-x-auto py-8 px-28">
  <table className="table border-2 rounded-md">
    {/* head */}
    <thead>
      <tr>
        <th>#</th>
        <th>Name</th>
        <th>ID</th>
        <th>Email</th>
        <th>Phone</th>

      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      

      {
        users.map((user,index) => <tr key={user.id}>
            <th>{index + 1}</th>
            <td>{user.name}</td>
            <td>{user.id}</td>
            <td> {user.email} </td>
            <td> {user.number} </td>
            
          </tr>)
      }
     
    </tbody>
  </table>
</div>
        </div>
    );
};

export default UserDetails;