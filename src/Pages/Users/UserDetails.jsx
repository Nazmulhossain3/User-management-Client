import { useEffect, useState } from "react";

const UserDetails = () => {

    const [users,setUsers] = useState([])
 
    useEffect(()=> {
     fetch('https://crud-job-task-server.vercel.app/users')
     .then(res => res.json())
     .then(data => setUsers(data))
   
   
   },[])
    



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
         <th>Number</th>
       </tr>
     </thead>
     <tbody>
       {/* row 1 */}
       
 
       {
         users.map((user,index) => <tr key={user.id}>
             <th>{index + 1}</th>
             <td>{user.name}</td>
             <td>{user.id}</td>
             <td> {user.email}  </td> 
             <td> {user.number}  </td> 
           
             
           </tr>)
       }
      
     </tbody>
   </table>
 </div>
         </div>
    );
};

export default UserDetails;