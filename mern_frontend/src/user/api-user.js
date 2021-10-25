import baseUrl from "../config"

const create = user => {
    return fetch(`${baseUrl}/api/users/`, {
        method: "POST",
        headers: {
            "Accept": "application/json",
            "Content-type": "application/json"
        },
        body: JSON.stringify(user),
    })
        .then(res => res.json())
        .catch(err => console.log(err))
}

const list = () => {
    return fetch(`${baseUrl}/api/users`, { method: "GET" })
        .then(res => res.json())
        .catch(err => console.log(err))
}

const read = (params, token) => {
    return fetch(`${baseUrl}/api/users/${params.userId}`, {
        method: "GET",
        headers: {
            "Accept": "application/json",
            "Content-type": "application/json",
            "Authorization": "Bearer " + token.t,
        }
    })
        .then(res => res.json())
        .catch(err => console.log(err))
}

const update = (params, token, user) => {
    return fetch(`${baseUrl}/api/users/${params.userId}`, {
        method: "PUT",
        headers: {
            "Accept": "application/json",
            "Content-type": "application/json",
            Authorization: "Bearer " + token
        },
        body: JSON.stringify(user)
    })
        .then(res => res.json())
        .catch(err => console.log(err))
}

const remove = (params, token) => {
    return fetch(`${baseUrl}/api/users/${params.userId}`, {
        method: "DELETE",
        headers: {
            "Accept": "application/json",
            "Content-type": "application/json",
            "Authorization": "Bearer " + token
        }
    })
        .then(res => res.json())
        .catch(err => console.log(err))
}

export { create, list, read, update, remove }