let apiUsers = 'https://jsonplaceholder.typicode.com/users'
let userSelect = document.getElementById('userSelect')

async function getUsersApi(url) {
    let response = await fetch(url)
    let data = await response.json()
    return data
}

let res = getUsersApi(apiUsers)

function renderUser(res) {
    let user = document.getElementById('user')
    user.innerHTML = ''

    let userAvatar = document.createElement('img')
    userAvatar.setAttribute('class', 'user__avatar')
    userAvatar.setAttribute('src', './michael.jpg')
    user.append(userAvatar)

    let userName = document.createElement('div')
    userName.setAttribute('class', 'user__name')
    userName.innerText = res[0].name
    user.append(userName)

    let userWebsite = document.createElement('div')
    userWebsite.setAttribute('class', 'user__website')
    userWebsite.innerText = res[0].website
    user.append(userWebsite)
}

function getUsers(data) {
    let arr = []
    for (let item in data) {
        //проверка, есть ли такой альбом в массиве
        if (! arr.includes(data[item].name)) {
            arr.push(data[item].name)
        }
    }
    renderUsers(arr)
}

function renderUsers(arr) {
    let num = 1
    for (let value of arr)  {
        let option = document.createElement('option')
        option.setAttribute('value', value)
        option.textContent = value
        option.value = num
        userSelect.append(option)
        num++
    }
}

async function selectUsers(event) {
    let target = event.target.value
    if (target != 'all') {
        apiUsers += `?id=${target}`
    }
    userRequest()
    apiUsers = 'https://jsonplaceholder.typicode.com/users'
}

async function userRequest() {
    let res = await getUsersApi(apiUsers)
    renderUser(res)
}

async function usersPequest() {
    let res = await getUsersApi(apiUsers)
    getUsers(res)
}

userRequest()
usersPequest()

userSelect.addEventListener('change', selectUsers)


