const screen = {
    userProfile: document.querySelector('.profile-data'),
    rederUser(userData) {
        this.userProfile.innerHTML = `<div class="info">
                                           <img src="${userData.avatarUrl}" alt="Foto do perfil do usuário" />
                                      <div class="data">
                                           <h1>${userData.name ?? 'Não possui nome cadastrado 😥'}</h1>
                                           <p>${userData.bio ?? 'Não possui bio cadastrada 😥'}</p>
                                           <ul>
                                               <li>${userData.followingUrl}<strong> Seguindo 👥</strong></li>
                                               <li>${userData.followersUrl}<strong> Seguidores 👥</strong></li>
                                           </ul>
                                    </div>
                                 </div>`

        /* let repositoriesItens = ''
        userData.repositories.forEach(repo => repositoriesItens += `<li><a href="${repo.html_url}" 
        target="_blank">${repo.name}</a></li>`)

        if (userData.repositories.length > 0) {
            this.userProfile.innerHTML += `<div class="repositories section">
                                                <h2>Repositórios</h2>
                                                <ul>${repositoriesItens}</ul>
                                          </div>`
        } */
        let repositoriesItens = ''
        userData.repositories.forEach(repo => repositoriesItens +=
            `<a href='${repo.html_url}' target='_blank'>${repo.name}
                        <li href='${repo.html_url}' target='_blank'>
                        <div class='info-repo'>
                            <span class='info-repositories'>🍴 ${repo.stargazers_count}</span>
                            <span class='info-repositories'>⭐ ${repo.stargazers_count}</span>
                            <span class='info-repositories'>👀 ${repo.watchers_count}</span>
                            <span class='info-repositories'>👨‍💻 ${repo.language ?? ''}</span>
                        </div>
                        </li>
                        </a>`)

        if (userData.repositories.length > 0) {
            this.userProfile.innerHTML +=
                                                `<div class='repositories section'>
                                                      <h2>Repositórios</h2>
                                                      <ul>${repositoriesItens}</ul>
                                                  </div>`
        }

        let eventsItens = ''

        userData.events.forEach(event => {
            if (event.type === 'PushEvent') {
                eventsItens +=
                    `<li class='eventos'>
                            <a href='https://github.com/${event.repo.name}' target='_blank'>${event.repo.name}</a>
                            <span> - ${event.payload.commits[0].message ?? ''} </span>
                        </li>`
            } else {
                if (event.type === 'CreateEvent') {
                    eventsItens +=
                        `<li class='eventos'>
                                <a href='https://github.com/${event.repo.name}' target='_blank'>${event.repo.name}</a>
                                <span> - ${event.payload.description ?? event.type} </span>
                            </li>`
                }
            }
        })

        if (userData.events.length > 0) {
            this.userProfile.innerHTML +=
                                           `<div class='events section'>
                                                <h2>Eventos Recentes</h2>
                                                <ul>${eventsItens}</ul>
                                            </div>`
        }
    },
    renderNotFound() {
        this.userProfile.innerHTML = "<h3>Usuário não encontrado</h3>"
    }
}

export { screen }