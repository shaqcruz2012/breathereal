import axios from 'axios';


export const signUp = async(name, email, password, state, city) => {
    let response = await axios.post('api/v1/user/signup/' , {
        'name': name,
        'email' : email,
        'password' : password,
        'state' : state,
        'city' : city
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
    console.log(response.data.posts)
    return response.data.posts;
}

export const createPost = async(content, selectedMusic) => {
    let response = await axios.post('api/v1/posts/', {
        'content' : content,
        'selectedMusic' : selectedMusic
    })
    return response.data.success
}

export const getLocation = async() => {
    const A = await import.meta.env.VITE_A
    console.log(A);
    console.log(import.meta.env);
    // see vite.config.js for how to set env variables
    let response = await axios.get(`https://api.ipgeolocation.io/ipgeo?apiKey=${A}`)
    // let response = await axios.get('https://api.ipgeolocation.io/ipgeo?apiKey=f90dbca0b5e647bea26eddee90017320')
    return {"state" : response.data.state_prov, "city" : response.data.city};
}

export const getSong = async() => {
    let response = await axios.get('https://api.spotify.com/v1/search?q=stronger&type=track&market=US', {
        headers: {
            'Authorization': `Bearer ${import.meta.env.VITE_SPOTIFY_TOKEN}`
        }
    })
    return response.data.tracks.items[0].preview_url
}

// export const getSpotifyToken = async() => {
//     let params = {'grant_type':'client_credentials', 'client_id':`${import.meta.env.VITE_CLIENT_ID}`, 'client_secret':`${import.meta.env.VITE_CLIENT_SECRET}`}
//     const response = await axios.get('https://accounts.spotify.com/api/token', params, {auth: {client_secret: }})
//     console.log(response)
//     return response.data.access_token
// }

// 
// export const getSpotifyToken = async () => {
//     const client_id = import.meta.env.VITE_CLIENT_ID;
//     const client_secret = import.meta.env.VITE_CLIENT_SECRET;
    
//     const response = await axios({
//         url: 'https://accounts.spotify.com/api/token',
//         method: 'post',
//         params: {
//             grant_type: 'client_credentials',
//         },
//         headers: {
//             'Accept':'application/json',
//             'Content-Type': 'application/x-www-form-urlencoded',
//             'X-Csrftoken': undefined,
//         },
//         auth: {
//             username: client_id,
//             password: client_secret
//         }
//     })
//     console.log(response)
// };

export const getSpotifyTracks = async(data) => {
    // calls backend to get the token SC 5/10/2023 1:09 PM
    console.log(data)
    const queryParams = {search: data['Search Input']}
    const response = await axios.get('api/v1/spotify/tracks/', {params:queryParams})
    // const response = await axios.get(`api/v1/spotify/tracks/?search=${data['SomethingTest']}`);
    return response.data.tracks.items
}
