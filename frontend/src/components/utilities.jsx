import axios from 'axios';


export const signUp = async(name, email, password) => {
    let response = await axios.post('api/v1/user/signup/' , {
        'name': name,
        'email' : email,
        'password' : password
    })
    console.log(response.data.success)
    return response.data.success
}


export const logIn = async(email, password, setUser) => {
    let response = await axios.post('api/v1/user/login/', {
        'email' : email,
        'password' : password
    })

    setUser(response.data)
}

export const currUser = async() =>{
    let response = await axios.get('api/v1/user/curruser/')
    console.log(response.data)
    return response.data
}

export const logOut = async(setUser, navigate) => {
    let response = await axios.post('api/v1/user/logout/')
    if(response.data.logout){
        setUser(null)
        navigate('/')

    }
}

export const getPosts = async() => {
    let response = await axios.get("api/v1/posts/")
    return response.data.posts
}

export const createPost = async(content) => {
    let response = await axios.post('api/v1/posts/', {
        'content' : content
    })
    return response.data.success
}

