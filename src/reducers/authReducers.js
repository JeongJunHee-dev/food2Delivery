export const SignInReducer = (state,action) => {// 로그인 부분에 토큰 액션 취하기
    switch(action.type){
        case 'UPDATE_SIGN_IN' : 
            return{
                userToken:action.payload.userToken
            }
        default:
            return state
    }
}