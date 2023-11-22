// เก็บข้อมูล Token / email => local storage
export const authenticate = (response, next) => {
    if (window !== "undefined") {
        //เก็บข้อมูลลง local storage
        localStorage.setItem("token", JSON.stringify(response.data.token))
        localStorage.setItem("email", JSON.stringify(response.data.email))
    }
    next()
}

//ดึงข้อมูล token
export const getToken = () => {
    if (window !== "undefined") {
        if (localStorage.getItem("token")) {
            return JSON.parse(localStorage.getItem("token"))
        }
        else {
            return false
        }
    }
}