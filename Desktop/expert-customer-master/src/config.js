const apiEndpoint = "http://35.225.64.66:4000/";
const adminAuthToken = sessionStorage.getItem('adminAuthToken');
const adminAuth = sessionStorage.getItem('adminAuth')
const userType = sessionStorage.getItem('userType');
const id = sessionStorage.getItem('expertId');
const chatTo=sessionStorage.getItem('expchat')
const userId=sessionStorage.getItem('userId')
function isAdminAuth(){
    if(adminAuthToken && adminAuth){
        if(adminAuthToken.length){
            return true;
        }
    }
    else{
        return false;
    }
}



export {apiEndpoint, adminAuthToken, adminAuth, isAdminAuth, userType, id,userId};

