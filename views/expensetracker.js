

function signup(e){
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

    axios.post('http://localhost:3000/user',userDetails)
    .then(result=>{
        console.log(result)
    })
    .catch(err=>console.log(err))
}