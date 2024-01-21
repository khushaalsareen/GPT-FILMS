export const checkValidData = (email,password,myName)=>{
    const isEmailValid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email);
    const isPasswordValid = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/.test(password)
    const isNameValid = /^[\p{L} ,.'-]+$/u.test(myName)

    if(myName!=null && !isNameValid) return "Name is not valid"

    if(!isEmailValid) return "Email ID is not valid"

    if(!isPasswordValid) return "Password should be minimum of 8 characters and must be combination of capital letter, small letter, number and special character"

    return null;
}

