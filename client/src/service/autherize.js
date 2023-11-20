// เก็บข้อมูล Token / email => session storage
export const authenticate = (response, next) => {
    if (window !== "undefined") {
        //เก็บข้อมูลลง Session storage
        localStorage.setItem("token", JSON.stringify(response.data.token))
        localStorage.setItem("token", JSON.stringify(response.data.email))
    }
    next()
}