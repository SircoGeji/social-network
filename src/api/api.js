import * as axios from "axios";

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        "API-KEY": "646f41d1-2e2c-4c40-a242-bc447ba72df3"
    }
})

export const usersAPI = {
    getUsers (currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data);
    },
    unfollow(userId) {
        return instance.delete(`follow/${userId}`)
    },
    follow(userId) {
        return instance.post(`follow/${userId}`, {})
    },
    getProfile (userId) {
        console.warn('Obsolete method. Please, use profileAPI instead.');
        return profileAPI.getProfile(userId);
    },
}

export const profileAPI = {
    getProfile (userId) {
        return instance.get(`profile/` + userId)
    },
    getStatus (userId) {
        return instance.get(`profile/status/` + userId)
    },
    updateStatus (status) {
        return instance.put(`profile/status/`, {status: status});
    },
}

export const authAPI = {
    me () {
      return instance.get(`auth/me`);
    },
    login (email, password, rememberMe = false) {
        return instance.post(`auth/login`, {email, password, rememberMe});
    },
    logout () {
        return instance.delete(`auth/login`);
    },
}

