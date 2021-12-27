import React,{useState} from 'react'

export const Auths = () => {

    const [email, setEmail]=useState(" ");
    const [password, setPassword]=useState(" ");
    const [allEntery, setAllEntry]= useState([]);

    const submitForm= (e) =>{
        e.preventDefault();
        if(email && password){

        const newEntery={email:email, password:password};

        setAllEntry([...allEntery,newEntery]);
        console.log(allEntery,newEntery);

        setEmail("");
        setPassword("");}
        else{
            alert("Please fill the data properly")
        }
    }

    return (

            <form action="" onSubmit={submitForm} className='col-sm'>
               
                <div >
                <label htmlFor="email" className='mt-3'>Email</label><br />
                <input type="text" name='email' id='email' autoComplete='off'
                value={email}
                onChange={(e)=>{setEmail(e.target.value)}}
                />
                </div>

                <div>
                <label htmlFor="password">Password</label><br/>
                <input type="text" name='password' id='password' autoComplete='off'
                value={password}
                onChange={(e)=>{setPassword(e.target.value)}}
                />
                </div><br />

                <div >
                <button type='submit'> Login</button>
                </div>

            </form>
            
    )
}
export default Auths;

