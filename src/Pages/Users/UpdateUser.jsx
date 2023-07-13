// import Swal from "sweetalert2";

const UpdateUser = () => {

    const handleUpdateUser = (event)=> {
        event.preventDefault()
        const form = event.target 
        const name = form.name.value 
        const email = form.email.value 
        const number = form.number.value 
        const id = form.id.value 
       
        const users = {
            name,
            email,
            number,
            id
        }
        console.log(users)

        fetch(`http://localhost:5000/users/${users.id}`,{
            method : 'PUT',
            headers : {
                'content-type' : 'application/json'
            },
            body : JSON.stringify(users)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            // if(data.insertedId){
            //     form.reset()
            //     Swal.fire(
            //         'Good job!',
            //         'User is Added!',
            //         'success'
            //       )
            // }
        })
    }



    return (
        <div>
        <form onSubmit={handleUpdateUser} className="border-2 w-[50%] mx-auto mt-6 bg-slate-600 rounded-2xl">
         <div className=" flex md:flex-row justify-center gap-5 mt-12 mb-4 px-5">
         <input name='name' type="text" placeholder="Name" className="input input-bordered input-sm  w-full max-w-xs" />
         <input name='email' type="email" placeholder="Email" className="input input-bordered input-sm  w-full max-w-xs" />
         </div>
        
         <div className=" flex md:flex-row justify-center gap-5 px-5">
         <input name='number' type="text" placeholder="Phone" className="input input-bordered input-sm  w-full max-w-xs" />
         <input name='id' type="text" placeholder="ID" className="input input-bordered input-sm  w-full max-w-xs" />
         </div>
        <input className="text-white border-2 mt-8 mb-4 w-96 ml-20 rounded-lg bg-green-500  btn-outline" type="submit" value="Update" />
       </form>
      </div>
    );
};

export default UpdateUser;