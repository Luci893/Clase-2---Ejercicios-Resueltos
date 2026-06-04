/*
let segundos = 0;
let intervalo;

function actualizarCronometro() {
    const hrs = String(Math.floor(segundos / 3600)).padStart(2, "0");
    const mins = String(Math.floor((segundos % 3600) / 60)).padStart(2, "0");
    const secs = String(segundos % 60).padStart(2, "0");

    document.getElementById("cronometro").textContent = `${hrs}:${mins}:${secs}`;
}

document.getElementById("iniciar").addEventListener("click", () => {
    if (!intervalo) {
        intervalo = setInterval(() => {
            segundos++;
            actualizarCronometro();
        }, 1000);
    }
});

document.getElementById("pausar").addEventListener("click", () => {
    clearInterval(intervalo);
    intervalo = null;
});

document.getElementById("reiniciar").addEventListener("click", () => {
    segundos = 0;
    actualizarCronometro();
    clearInterval(intervalo);
    intervalo = null;
});
*/

// SCRIPT EJERCICIO 12
/*
const apiKey = "217529f02ab5e769161057f53dffc0c9"; // API KEY DE WEATHER

const provincias = [
    { nombre: "Buenos Aires", capital: "La Plata", region: "Pampeana", superficie: 307571, poblacion: "17.5M", lat: -34.9214, lon: -57.9547 },
    { nombre: "Catamarca", capital: "San Fernando del Valle de Catamarca", region: "Noroeste", superficie: 102602, poblacion: "430k", lat: -28.4696, lon: -65.7798 },
    { nombre: "Chaco", capital: "Resistencia", region: "Noreste", superficie: 99823, poblacion: "1.2M", lat: -27.4515, lon: -58.9869 },
    { nombre: "Chubut", capital: "Rawson", region: "Patagónica", superficie: 224686, poblacion: "580k", lat: -43.3002, lon: -65.1023 },
    { nombre: "Córdoba", capital: "Córdoba", region: "Pampeana", superficie: 165321, poblacion: "3.7M", lat: -31.4201, lon: -64.1888 },
    { nombre: "Corrientes", capital: "Corrientes", region: "Noreste", superficie: 88861, poblacion: "1.2M", lat: -27.4806, lon: -58.8196 },
    { nombre: "Entre Ríos", capital: "Paraná", region: "Litoral", superficie: 78781, poblacion: "1.4M", lat: -31.7333, lon: -60.5167 },
    { nombre: "Formosa", capital: "Formosa", region: "Noreste", superficie: 72066, poblacion: "600k", lat: -26.1828, lon: -58.1761 },
    { nombre: "Jujuy", capital: "San Salvador de Jujuy", region: "Noroeste", superficie: 53486, poblacion: "760k", lat: -24.1858, lon: -65.2995 },
    { nombre: "La Pampa", capital: "Santa Rosa", region: "Pampeana", superficie: 143440, poblacion: "350k", lat: -36.6167, lon: -64.2833 },
    { nombre: "La Rioja", capital: "La Rioja", region: "Cuyo", superficie: 89692, poblacion: "380k", lat: -29.4114, lon: -66.8558 },
    { nombre: "Mendoza", capital: "Mendoza", region: "Cuyo", superficie: 148827, poblacion: "2.0M", lat: -32.8895, lon: -68.8458 },
    { nombre: "Misiones", capital: "Posadas", region: "Noreste", superficie: 29813, poblacion: "1.2M", lat: -27.3657, lon: -55.8960 },
    { nombre: "Neuquén", capital: "Neuquén", region: "Patagónica", superficie: 94078, poblacion: "660k", lat: -38.9517, lon: -68.0590 },
    { nombre: "Río Negro", capital: "Viedma", region: "Patagónica", superficie: 203013, poblacion: "760k", lat: -40.8125, lon: -62.9969 },
    { nombre: "Salta", capital: "Salta", region: "Noroeste", superficie: 155488, poblacion: "1.4M", lat: -24.7858, lon: -65.4101 },
    { nombre: "San Juan", capital: "San Juan", region: "Cuyo", superficie: 89624, poblacion: "780k", lat: -31.5375, lon: -68.5364 },
    { nombre: "San Luis", capital: "San Luis", region: "Cuyo", superficie: 76748, poblacion: "520k", lat: -33.3000, lon: -66.3500 },
    { nombre: "Santa Cruz", capital: "Río Gallegos", region: "Patagónica", superficie: 243943, poblacion: "330k", lat: -51.6231, lon: -69.2168 },
    { nombre: "Santa Fe", capital: "Santa Fe", region: "Pampeana", superficie: 133007, poblacion: "3.6M", lat: -31.6333, lon: -60.7000 },
    { nombre: "Santiago del Estero", capital: "Santiago del Estero", region: "Noroeste", superficie: 136351, poblacion: "910k", lat: -27.7958, lon: -64.2614 },
    { nombre: "Tierra del Fuego", capital: "Ushuaia", region: "Patagónica", superficie: 21043, poblacion: "190k", lat: -54.8019, lon: -68.3030 },
    { nombre: "Tucumán", capital: "San Miguel de Tucumán", region: "Noroeste", superficie: 22535, poblacion: "1.7M", lat: -26.8083, lon: -65.2176 },
    { nombre: "Ciudad Autónoma de Buenos Aires", capital: "Ciudad Autónoma de Buenos Aires", region: "Pampeana", superficie: 203, poblacion: "3.1M", lat: -34.6083, lon: -58.3712 }
];

const tablaBody = document.querySelector("#tablaProvincias tbody");
const alertaTexto = document.getElementById("alertaTexto");
const radarHora = document.getElementById("radarHora");
let mapa;
let radarLayer;

function crearFilaProvincia(provincia) {
    const fila = document.createElement("tr");
    fila.innerHTML = `
        <td>${provincia.nombre}</td>
        <td>${provincia.capital}</td>
        <td>${provincia.region}</td>
        <td>${provincia.superficie.toLocaleString()}</td>
        <td>${provincia.poblacion}</td>
    `;
    return fila;
}

function inicializarTabla() {
    provincias.forEach((provincia) => {
        tablaBody.appendChild(crearFilaProvincia(provincia));
    });
}

function mostrarAlerta(texto) {
    alertaTexto.textContent = texto;
}

function actualizarHoraRadar(utcUnix) {
    if (!radarHora) return;
    const utcDate = new Date(utcUnix * 1000);
    const localDate = new Date(utcDate.getTime() - 3 * 60 * 60 * 1000);
    radarHora.textContent = `Radar actual: ${utcDate.toISOString().replace('T', ' ').slice(0, 16)} UTC / ${localDate.toLocaleString('es-AR')} hora local (UTC-3)`;
}

async function cargarRadar() {
    try {
        const metadataRes = await fetch('https://api.rainviewer.com/public/maps.json');
        const metadata = await metadataRes.json();
        const frames = metadata.radar?.past || [];
        const latestFrame = frames[frames.length - 1] || frames[0];
        if (!latestFrame) {
            if (radarHora) radarHora.textContent = 'No se encontró información de radar.';
            return;
        }

        const radarTime = latestFrame.time;
        const radarUrl = `https://tilecache.rainviewer.com/v2/radar/${radarTime}/256/{z}/{x}/{y}/2/1_1.png`;

        if (radarLayer && mapa.hasLayer(radarLayer)) {
            mapa.removeLayer(radarLayer);
        }

        radarLayer = L.tileLayer(radarUrl, {
            opacity: 0.55,
            attribution: 'Radar: RainViewer',
            zIndex: 10
        }).addTo(mapa);

        actualizarHoraRadar(radarTime);
    } catch (error) {
        if (radarHora) radarHora.textContent = 'No se pudo actualizar el radar en tiempo real.';
    }
}

function crearZonaMendoza(nombre, coordenadas) {
    L.polygon(coordenadas, {
        color: '#3b8dbd',
        weight: 3,
        dashArray: '8 6',
        fill: false
    }).addTo(mapa).bindPopup(nombre);
}

function inicializarZonasMendoza() {
    crearZonaMendoza('Zona cultivada Norte de Mendoza', [
        [-32.60, -68.95],
        [-32.60, -68.40],
        [-33.05, -68.40],
        [-33.05, -68.95]
    ]);

    crearZonaMendoza('Valle de Uco (Centro de Mendoza)', [
        [-33.80, -69.30],
        [-33.80, -68.75],
        [-34.25, -68.75],
        [-34.25, -69.30]
    ]);

    crearZonaMendoza('Zona cultivada Sur de Mendoza', [
        [-34.90, -69.30],
        [-34.90, -68.70],
        [-35.35, -68.70],
        [-35.35, -69.30]
    ]);
}

async function obtenerAlertasOWM(lat, lon) {
    if (!apiKey) {
        return { error: "Falta la API key. Agrégala en script.js para ver contingencias reales." };
    }

    const url = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=current,minutely,hourly,daily&lang=es&appid=${apiKey}`;
    try {
        const response = await fetch(url);
        if (!response.ok) {
            return { error: `Error al consultar la API (${response.status})` };
        }
        const data = await response.json();
        return data;
    } catch (error) {
        return { error: "No se pudo conectar con OpenWeather." };
    }
}

async function cargarContingencias(provincia) {
    mostrarAlerta(`Buscando contingencias para ${provincia.nombre}...`);
    const resultado = await obtenerAlertasOWM(provincia.lat, provincia.lon);

    if (resultado.error) {
        mostrarAlerta(resultado.error);
        return;
    }

    if (!resultado.alerts || resultado.alerts.length === 0) {
        mostrarAlerta(`No hay contingencias activas para ${provincia.nombre}.`);
        return;
    }

    const textos = resultado.alerts.map((alerta) => {
        const comienzo = new Date(alerta.start * 1000).toLocaleString("es-AR");
        const fin = alerta.end ? new Date(alerta.end * 1000).toLocaleString("es-AR") : "Sin fecha de fin";
        return `• ${alerta.event}: ${alerta.description} (${comienzo} - ${fin})`;
    });

    mostrarAlerta(`Contingencias en ${provincia.nombre}:\n${textos.join("\n")}`);
}

function inicializarMapa() {
    mapa = L.map("map").setView([-34.5, -64.0], 4);

    const capaBase = L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution: "&copy; OpenStreetMap contributors"
    }).addTo(mapa);

    provincias.forEach((provincia) => {
        const marcador = L.marker([provincia.lat, provincia.lon]).addTo(mapa);
        marcador.bindPopup(`
            <strong>${provincia.nombre}</strong><br>
            ${provincia.capital}<br>
            <button type="button" class="popup-button" data-provincia="${provincia.nombre}">Ver contingencias</button>
        `);
        marcador.on("popupopen", () => {
            const boton = document.querySelector(`button[data-provincia="${provincia.nombre}"]`);
            if (boton) {
                boton.addEventListener("click", () => cargarContingencias(provincia));
            }
        });
    });

    inicializarZonasMendoza();
    cargarRadar();
    setInterval(cargarRadar, 5 * 60 * 1000);
}

// Obtiene el id de buscar 
document.getElementById("buscar").addEventListener('click', async () => {
    
    const ciudad = document.getElementById("ciudad").value.trim();
    if (!ciudad) return alert("Ingrese una ciudad");

    try {
        // Hace la peticiòn a la API de OpenWeather para obtener el clima de la ciudad ingresada y espera
        const res = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&units=metric&lang=es&appid=${apiKey}`
        );
        // Convierte la respuesta traida a JSON y espera
        const data = await res.json();

        // Si el código de respuesta no es 200, muestra un mensaje de error y termina la función
        if (data.cod !== 200) {
            document.getElementById("resultado").innerHTML = "Ciudad no encontrada";
            return;
        }

        // Muestra los resultados en el contenedor de resultado del html
        document.getElementById("resultado").innerHTML = `
            <h2>${data.name}, ${data.sys.country}</h2>
            <p>Temperatura: ${data.main.temp} °C</p>
            <p>Viento: ${data.wind.speed} km/h</p>
            <p>Clima: ${data.weather[0].description}</p>
            <p>Humedad: ${data.main.humidity}%</p>
            <p>Presión: ${data.main.pressure} hPa</p>
            <p>Visibilidad: ${data.visibility / 1000} km</p>
            <p>Hora de la consulta: ${new Date().toLocaleTimeString()}</p>`;
    } catch (error) {
        document.getElementById("resultado").innerHTML = "Error al conectar con la API";
    }
});

inicializarTabla();
inicializarMapa(); */

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




