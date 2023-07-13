import { useEffect, useState } from "react";
import { Link,} from "react-router-dom";
import Swal from "sweetalert2";

const AllUser = () => {
    const [users,setUsers] = useState([])
 
 useEffect(()=> {
  fetch('https://crud-job-task-server.vercel.app/users')
  .then(res => res.json())
  .then(data => setUsers(data))


},[])
 
 
 
 const handleDeleteUser = (id) => {

console.log(id)
Swal.fire({
    title: "Are you sure?",
    text: "You won't be able to revert this!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, delete it!",
  }).then((result) => {
    if (result.isConfirmed) {
     
      fetch(`https://crud-job-task-server.vercel.app/users/${id}`,{
          method : 'DELETE'
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data)
          if (data.deletedCount > 0) {
            Swal.fire("Deleted!", "User has been deleted.", "success");
        
            const remaining = users.filter(user => user._id !== id)
           setUsers(remaining)
        
        }
        });
    }
  });


 }


 return (
        <div>
       <Link to='/createUser'><button className="btn btn-wide flex mx-auto mt-4 btn-outline text-white bg-green-400">Add User</button></Link>
        <div className="overflow-x-auto py-8 px-28">
  <table className="table border-2 rounded-md">
    {/* head */}
    <thead>
      <tr>
        <th>#</th>
        <th>Name</th>
        <th>ID</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      

      {
        users.map((user,index) => <tr key={user.id}>
            <th>{index + 1}</th>
            <td>{user.name}</td>
            <td>{user.id}</td>
            <td className="flex gap-3">
           <Link to='/userDetails'> <button className="btn text-white btn-xs btn-outline bg-teal-600">View</button></Link>
         
           <Link to='/updateUser'> <button className="btn btn-outline  text-white bg-teal-600 btn-xs">Edit</button></Link>
            <button onClick={()=> handleDeleteUser(user._id)} className="btn btn-outline  text-white bg-red-400 btn-xs">Delete</button>
            </td>
          </tr>)
      }
     
    </tbody>
  </table>
</div>
        </div>
    );
};

export default AllUser;