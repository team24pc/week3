export const Login = () => {
    
    function getValue(e) {
        e.preventDefault();
        const checkId = 'admin';
        const checkPw = 'password';

        console.log(e.target[0].value);
        if (checkId !== e.target[0].value) {
            alert('없는 아이디입니다.')
        } else {
            if (checkPw !== e.target[1].value) {
                alert('비밀번호가 틀렸습니다.')
            } else {
                alert('로그인 되었습니다.')
            }
        }
    }

    return (
        <form id="login" onSubmit={getValue}>
            <h1>로그인</h1>
            <div>
                <label>아이디 : </label>
                <input type="text" placeholder="아이디"></input>
            </div>
            <div>
                <label>비밀번호 : </label>
                <input type="text" placeholder="비밀번호"></input>
            </div>
            <input type="submit" />
        </form>
    )
}

