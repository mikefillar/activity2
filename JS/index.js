function signUpFOrm()
    {
        let user1 = document.getElementById("user").value;
        let pass1 = document.getElementById("pass").value;
        if (user1 == "" || pass1 == "")
            {
                alert("Field must not be empty!");
            }
        else
            {
                alert("Account Successfully Created! Login your account");
                let accounts = {
                    username: user1,
                    password: pass1
                }
                console.log(accounts);
                localStorage.setItem("Accounts",JSON.stringify(accounts));
            }
    }
function loginForm()
    {
        
        let result = JSON.parse(localStorage.getItem("Accounts"));
        let user = document.getElementById("username").value;
        let pass = document.getElementById("password").value;
        if (user == "" || pass == "")
            {
                alert("Please enter Username or Password!");
            }
        else if (user.trim()==result.username && pass.trim()==result.password)
        {
            alert("Welcome "+user+" !");
            location.href = "main.html";
        }
        else
            {
                alert("Username or Password is incorrect!");
            }
    }
window.onload = function()
    {
        let btnLogin = document.getElementById("login");
        btnLogin.onclick = loginForm;
        let btnSign = document.getElementById("btnSign");
        btnSign.onclick = signUpFOrm;
    }