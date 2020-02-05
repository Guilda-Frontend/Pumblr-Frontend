import api from './api'

const users = [
    {
        name: "Jhon",
        login: "jhon",
        pass: "123456"
    },
    {
        name: "David",
        login: "david",
        pass: "123456"
    },
    {
        name: "Frank",
        login: "frank",
        pass: "123456"
    },
    {
        name: "Veh",
        login: "veh",
        pass: "123456"
    },
    {
        name: "Filipe",
        login: "filipe",
        pass: "123456"
    }
]

export function login (form) {
    return api.post('login', form)
}