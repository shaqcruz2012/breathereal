import axios from 'axios';


export const signUp = async(name, email, password, state, city) => {
    let response = await axios.post('api/v1/user/signup/' , {
        'name': name,
        'email' : email,
        'password' : password,
        'state' : state,
        'city' : city
    })
    console.log("signUP:",response.data.success)
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

export const deleteAccount = async () => {
    let response = await axios.post('api/v1/user/delete/')
    if (response.data.delete){
        return true
    }
}

export const updateAccountName = async (newName) => {
    let response = await axios.post('api/v1/user/update/', { name: newName });
    return response.data.success;
};



export const deletePost = async (postId) => {
    let response = await axios.delete(`api/v1/posts/${postId}/delete/`);
    if (response.data.success){
        return true
    } else {
        return false
    }
}

export const getPosts = async() => {
    let response = await axios.get("api/v1/posts/")
    console.log(response.data.posts)
    return response.data.posts;
}
export const getUserPosts = async() => {
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
    let response = await axios.get(`https://api.ipgeolocation.io/ipgeo?apiKey=${A}`)
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

export const getSpotifyTracks = async(data) => {
    console.log('data:',data)
    const queryParams = {search: data['Search Input']}
    const response = await axios.get('api/v1/spotify/tracks/', {params:queryParams})
    return response.data.tracks.items
}

export const postContentUpdate = async(content, id) => {
    console.log('content:',content)
    console.log('id:',id)
    let response = await axios.put(`api/v1/posts/${id}/`, {
        'content' : content
    })
    console.log('response:',response)
    return response.data.success
}