// เก็บข้อมูล Token / email => session storage
export const authenticate = (response, next) => {
    if (window !== "undefined") {
        //เก็บข้อมูลลง Session storage
        sessionStorage.setItem("token", JSON.stringify(response.data.token))
        sessionStorage.setItem("token", JSON.stringify(response.data.email))
    }
    next()
}