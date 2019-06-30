import FetchNet from "../FetchNet";

const LoginModel={
    login(param,success,fail){
        FetchNet.fetchPostJson("pub/admin/login1.do",param,success,fail);
    },
    findRoleList(param,success,fail){
        FetchNet.fetchPostJson("pub/admin/user/role/findRoleList.do",param,success,fail);
    },
    sprole(param,success,fail){
        FetchNet.fetchPostJson("pub/admin/user/organization/sprole.do",param,success,fail);
    },
    register(param,success,fail){
        FetchNet.fetchPostJson("pub/admin/login1.do",param,success,fail);
    }
}

export default LoginModel;