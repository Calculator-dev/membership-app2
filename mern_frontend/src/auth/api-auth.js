import baseUrl from "../config"

const signin = user => {
    return fetch(`${baseUrl}/auth/signin`, {
        method: "POST",
        headers: {
            "Accept": "application/json",
            "Content-type": "application/json"
        },
        body: JSON.stringify(user)
    })
        .then(res => res.json())
        .catch(err => console.log(err))
}

const signout = () => {
    return fetch(`${baseUrl}/auth/signout`, { method: "GET" })
        .then(res => res.json())
        .catch(err => console.log(err))
}

export { signin, signout }