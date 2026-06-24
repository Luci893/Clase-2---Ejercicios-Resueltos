// SCRIPT EJERCICIO 13
const inputUsuario = document.getElementById('usuario');
const botonBuscar = document.getElementById('buscar');
const resultado = document.getElementById('resultado');
function formatearFecha(iso) {
    return new Date(iso).toLocaleString('es-AR', {
        dateStyle: 'medium',
        timeStyle: 'short'
    });
}
function crearFilaDetalle(etiqueta, valor) {
    return valor ? `<div class="detail-row"><span>${etiqueta}</span><strong>${valor}</strong></div>` : '';
}
function mostrarMensaje(texto) {
    resultado.innerHTML = `<div class="message">${texto}</div>`;
}
function mostrarCargando(usuario) {
    resultado.innerHTML = `<div class="message">Buscando <strong>${usuario}</strong> en GitHub...</div>`;
}
async function obtenerDatosGitHub(path) {
    const respuesta = await fetch(`https://api.github.com/${path}`);
    if (respuesta.status === 404) {
        throw new Error('Usuario no encontrado en GitHub');
    }
    if (!respuesta.ok) {
        throw new Error(`Error de GitHub: ${respuesta.status}`);
    }
    return respuesta.json();
}
async function buscarUsuario() {
    const usuario = inputUsuario.value.trim();
    if (!usuario) {
        mostrarMensaje('Ingresa un nombre de usuario de GitHub para comenzar.');
        inputUsuario.focus();
        return;
    }
    mostrarCargando(usuario);
    try {
        const [user, repos] = await Promise.all([
            obtenerDatosGitHub(`users/${encodeURIComponent(usuario)}`), // fetch que trae informaciòn del usuario
            obtenerDatosGitHub(`users/${encodeURIComponent(usuario)}/repos?per_page=8&sort=updated`) // fetch que trae repositorio del usuario
        ]);
        resultado.innerHTML = crearContenidoUsuario(user, repos);
        const rawJson = document.getElementById('jsonRaw');
        if (rawJson) {
            rawJson.textContent = JSON.stringify({ user, repos }, null, 2);
        }
    } catch (error) {
        mostrarMensaje(error.message);
    }
}
function crearContenidoUsuario(user, repos) {
    const detalles = [];
    detalles.push(crearFilaDetalle('Nombre real', user.name || 'Sin nombre'));
    detalles.push(crearFilaDetalle('Usuario', user.login));
    detalles.push(crearFilaDetalle('Bio', user.bio || 'No disponible'));
    detalles.push(crearFilaDetalle('Empresa', user.company || 'No disponible'));
    detalles.push(crearFilaDetalle('Ubicación', user.location || 'No disponible'));
    detalles.push(crearFilaDetalle('Sitio web', user.blog ? `<a href="${user.blog.startsWith('http') ? user.blog : 'https://' + user.blog}" target="_blank" rel="noopener">${user.blog}</a>` : 'No disponible'));
    detalles.push(crearFilaDetalle('Twitter', user.twitter_username ? `<a href="https://twitter.com/${user.twitter_username}" target="_blank" rel="noopener">@${user.twitter_username}</a>` : 'No disponible'));
    detalles.push(crearFilaDetalle('Email', user.email || 'No disponible'));
    detalles.push(crearFilaDetalle('Tipo de cuenta', user.type));
    detalles.push(crearFilaDetalle('Admin de GitHub', user.site_admin ? 'Sí' : 'No'));
    detalles.push(crearFilaDetalle('Cuenta creada', user.created_at ? formatearFecha(user.created_at) : 'No disponible'));
    detalles.push(crearFilaDetalle('Última actualización', user.updated_at ? formatearFecha(user.updated_at) : 'No disponible'));
    const estadisticas = [
        { etiqueta: 'Repos públicos', valor: user.public_repos },
        { etiqueta: 'Gists públicos', valor: user.public_gists },
        { etiqueta: 'Seguidores', valor: user.followers },
        { etiqueta: 'Siguiendo', valor: user.following }
    ];
    const reposHtml = repos.length > 0 ? repos.map(repo => `
            <article class="repo-card">
                <h3><a href="${repo.html_url}" target="_blank" rel="noopener">${repo.name}</a></h3>
                <p>${repo.description ? repo.description : 'Sin descripción disponible.'}</p>
                <div class="repo-meta">
                    <span>🧩 ${repo.language || 'Lenguaje no disponible'}</span>
                    <span>⭐ ${repo.stargazers_count}</span>
                    <span>🍴 ${repo.forks_count}</span>
                    <span>🕒 ${repo.updated_at ? formatearFecha(repo.updated_at) : 'Sin fecha'}</span>
                </div>
            </article>
        `).join('') : '<div class="message">Este usuario no tiene repositorios públicos recientes.</div>';
    return `
        <article class="profile-card">
            <div class="profile-header">
                <img class="avatar" src="${user.avatar_url}" alt="Avatar de ${user.login}">
                <div>
                    <div class="badges">
                        <span class="badge">${user.type}</span>
                        ${user.site_admin ? '<span class="badge">Admin</span>' : ''}
                        ${user.hireable ? '<span class="badge">Disponible</span>' : ''}
                    </div>
                    <h2>${user.name || user.login}</h2>
                    <p>${user.bio || 'Sin biografía disponible.'}</p>
                    <p class="profile-links"><a class="link-button" href="${user.html_url}" target="_blank" rel="noopener">Ver perfil en GitHub</a></p>
                </div>
            </div>
            <div class="stats-grid">
                ${estadisticas.map(stat => `
                    <div class="stat">
                        <strong>${stat.valor}</strong>
                        <span>${stat.etiqueta}</span>
                    </div>
                `).join('')}
            </div>
            <div class="details">
                ${detalles.join('')}
            </div>
            <section class="repos-section">
                <h2>Repositorios recientes</h2>
                ${reposHtml}
            </section>
            <details class="details-json">
                <summary>Ver todos los datos JSON devueltos por la API</summary>
                <pre id="jsonRaw"></pre>
            </details>
        </article>
    `;
}
botonBuscar.addEventListener('click', buscarUsuario);
inputUsuario.addEventListener('keydown', event => {
    if (event.key === 'Enter') {
        buscarUsuario();
    }
}); 