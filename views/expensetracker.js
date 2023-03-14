

async function signup(e){
    try{
    e.preventDefault();

    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    const userDetails = {
        name,
        email,
        password
    }

    console.log(userDetails)

   const response = await axios.post('http://localhost:3000/user/signup',userDetails)
     if(response.status === 201)
     {
        window.location.href="signin.html"
     }
     else{
        throw new Error('Failed to Login')
     }
}catch(err){
    document.body.innerHTML +=`<div style="color:red">${err}</div>`;
    }
}

 async function signin(e){
   
        e.preventDefault();
        const loginDetails = {
            email:e.target.email.value,
            password:e.target.password.value
        }
    
        console.log(loginDetails)
    
    await axios.post('http://localhost:3000/user/signin',loginDetails)
        .then(response =>{ 
            alert(response.data.message) }) 
    .catch(err=>{
        console.log(JSON.stringify(err))
        document.body.innerHTML +=`<div style="color:red">${err.message}</div>`
    })
    }