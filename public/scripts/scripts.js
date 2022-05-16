if (document.querySelector('.login-form')) {
    document.querySelector('.login-form').onsubmit = (e) => {
        e.preventDefault()
        const username = document.querySelector('#inputEmail').value
        const password = document.querySelector('#inputPassword').value
        const _csrf_token = document.querySelector('input[name="_csrf_token"]').value
        fetch('/api/login', {
            method: 'POST',
            body: JSON.stringify({_username: username, _password: password, _csrf_token: _csrf_token})
        })
        .then(res => res.json())
        .then(data => console.log(data))
        .catch(err => console.log(err))
    }

}