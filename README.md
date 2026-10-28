# OyM ch34t by Osc4r 🕷
Una extensión bacana pa curarse con la uni
// estado de la extensión según funciones: 99% //

https://chromewebstore.google.com/detail/oym-ch34t-by-osc4r/afahmbfpmgojkabkgpdglalckfeldfmo

<img width="299" height="325" alt="image" src="https://github.com/user-attachments/assets/3f519d34-c1d2-443e-be70-e41bb0495cf2" /> <img width="265" height="301" alt="image" src="https://github.com/user-attachments/assets/e8e2cdba-a22c-4abd-a6e9-e2cffa8ecf1b" />

<img width="304" height="120" alt="image" src="https://github.com/user-attachments/assets/fb7f097b-60de-4897-8c80-aee9acb68f85" />






- ✅ Modo oscuro
- ✅ Bypass AntiTrampa para examenes
- ✅ AntiAFK para sesiones
- ✅ Botón de pausa para tiempo de examenes
- ✅ Escaner de materias, examenes, etc... [NEW]
- ✅ Extracción de respuestas correctas. (con ia) POR FIN
---

##  Change Log

### V 0 – Base inicial
<img width="291" height="241" alt="image" src="https://github.com/user-attachments/assets/33b6743b-2458-4ffc-8944-384e1630e35c" />

- `manifest.json` → configuración básica  
- `popup.html` → panel con interruptor para **Bypass anti-trampa**  
- `popup.js` → escuchaba cambios y mandaba mensajes  
- `background.js` → inyectaba `blocker.js` si estaba activado  
- `blocker.js` → bloqueaba eventos de visibilidad y blur/focus  
- Implementación de imagen de fondo  

**Resultado:** un solo switch funcional, pero recargaba la página al desactivarlo.

---

### V 0.1
<img width="297" height="246" alt="image" src="https://github.com/user-attachments/assets/57965340-bd31-4557-8a93-86be8208837e" />

---

### V 0.2
<img width="307" height="283" alt="image" src="https://github.com/user-attachments/assets/55dbd7aa-cf88-4784-b579-ce23a4de65ad" />

**Fase 2 – Interfaz con más interruptores**
- Se añadieron switches para:
  - Ver respuestas correctas  
  - Pausar/modificar tiempo  
  - Anti-AFK  
- Por ahora solo imprimían en consola (`console.log`).

**Resultado:** interfaz con cuatro interruptores, pero solo el de Anti-trampa tenía lógica real.

---

### Fase 3 – Modularidad
- Separación de funciones en archivos:
  - `respuestas.js`  
  - `tiempo.js`  
  - `antiafk.js`  
  - `blocker.js`  
- `popup.js` solo manda mensajes, `background.js` decide qué inyectar.  

**Resultado:** arquitectura modular lista para crecer.

---

### Fase 4 – Estilo visual
- Interruptores ovalados con círculo rojo apagado y verde encendido.  
- CSS personalizado (`popup.css`) para look moderno.  

**Resultado:** switches con estilo gamer/profesional.

---

### V 0.3
<img width="295" height="282" alt="image" src="https://github.com/user-attachments/assets/a584640d-5361-43cd-b2c8-1567df227fd9" />

**Fase 5 – Fondo y jerarquía visual**
- Fondo con imagen (`background-image`).  
- Opacidad ajustada en aviso y estado.  
- Aviso cambiado a `<h3>` para estilizar aparte.  
- Título alineado a la izquierda.  

**Resultado:** interfaz más ordenada y clara.

---

### Fase 6 – Personalización
- Enlace en el título a Instagram.  
- Estilo con color y grosor distinto.  

**Resultado:** panel con identidad personal.

---

### V 0.4
<img width="358" height="359" alt="image" src="https://github.com/user-attachments/assets/99a13152-9354-40d0-97a0-96845df34b78" />

**Fase 7 – Animación**
- Degradado animado en el texto “Osc4r”.  
- Movimiento con `@keyframes gradientMove`.  

**Resultado:** nombre con efecto animado elegante.

---

### Fase 8 – Switches deshabilitados
<img width="826" height="225" alt="image" src="https://github.com/user-attachments/assets/d61ee168-4ea6-47a1-9956-8768dfe1db3e" />

- Switches sin lógica → `disabled`.  
- Evita confusión, muestra que están “en construcción”.

---

### Fase 9 – Tooltips flotantes
<img width="300" height="297" alt="image" src="https://github.com/user-attachments/assets/7e0b853a-610f-4856-84ee-676fc68d411a" />

- Ícono `?` junto a cada switch deshabilitado.  
- Tooltip flotante con explicación breve.  
- Fondo oscuro, texto claro, transición suave.  

---

### Fase 10 – Experiencia de usuario
- Tooltips minimalistas con círculo `?`.  
- Texto flotante con padding y bordes redondeados.  
- Estética gamer/profesional mantenida.  

**Resultado:** interfaz más profesional y con feedback inmediato.

---

V0.7

### Fase 11 – Anti-AFK funcionando
<img width="306" height="295" alt="image" src="https://github.com/user-attachments/assets/aea45e63-054e-4461-bf16-1af29e00e53d" />
<img width="225" height="56" alt="image" src="https://github.com/user-attachments/assets/fef06c2e-645e-43f4-b56f-9de768872f3a" />

- Implementación del script Anti-AFK con reloj activo.  
- Inspirado en extensión simple de “keep-alive”.  

---

### Fase 12 - anti trampa api blocker mejorado
Ahora se re injecta para evitar un bug que había al entrar nuevamente a una pagina que se había registrado que lo tenía activado, el panel mostraba que si pero el script no estaba, ahora también se puede reiniciar la pagina sin problema que se desinjecte.


## v0.7 Registro persistente
- Se reemplazó la inyección puntual con `chrome.scripting.executeScript` por **registro persistente** usando `chrome.scripting.registerContentScripts`.
- Ahora `blocker.js` queda registrado en el mundo MAIN y se ejecuta automáticamente en cada carga de página.
- **Resultado:** el Anti‑Trampa ya no se pierde al refrescar la página.

---

## v0.7.1 – Activación inmediata
- Al activar el switch, además de registrar el script, se **inyecta inmediatamente** en la pestaña actual con `executeScript`.
- Esto asegura que el Anti‑Trampa empiece a funcionar **sin necesidad de refrescar manualmente**.
- **Resultado:** activación instantánea + persistencia en reloads.

---

## v0.7.2 – Desactivación con recarga
- Al desactivar el switch, se llama a `unregisterContentScripts` para quitar el registro persistente.
- Se fuerza un `chrome.tabs.reload(tabId)` para limpiar los overrides en la pestaña actual.
- **Resultado:** el Anti‑Trampa se desactiva correctamente y la página vuelve a su estado normal.


- **Antes:** solo funcionaba al activarlo, pero se perdía al refrescar.
- **Después:** funciona al instante, se mantiene en reloads, y se limpia al desactivar con recarga.


---


## v0.9 - AFK Actualizado 100%

<img width="168" height="48" alt="image" src="https://github.com/user-attachments/assets/aa1baa3a-728e-4766-b154-8c5725b5067a" />
<img width="168" height="44" alt="image" src="https://github.com/user-attachments/assets/e2daeba3-32d1-4a9a-b081-59a6b76ff548" />



- Sacando datos de acciones con el burp repliqué el rquest que se envía al pulsar los botones pero sin acción alguna manteniendo al servidor activo
- Remplacé el reloj de hora actual por un contador ascendente en formato hh:mm:ss.
- El contador inicia en 00:00:00 al activar el Anti‑AFK y se reinicia al apagar el interruptor.
- Estilo visual mejorado:
  - fondo mejor para dark y normal mode
  - ahora es rojo en vez de verde
- **Resultado:** Ahora ya no es un "Funciona a veces" la regla funciona correctamente y es lo que necesita la pagina para mantener la sesión


---


## V 0.9.3 – Modo Oscuro Independiente y Optimizado


<img width="296" height="296" alt="image" src="https://github.com/user-attachments/assets/924920ca-9965-4a96-8fb1-3022d4ea9bd4" />


### Fase 13 – Módulo de Modo Oscuro (`dark.js`)

- Separación de la lógica del modo oscuro en una carpeta dedicada (`darkmode/`) y un script independiente (`dark.js`), dejando libre el `content.js` para otras tareas de la plataforma.
- Implementación de **ejecución ultra-temprana** (`run_at: "document_start"`) para interceptar la página desde el milisegundo cero y evitar parpadeos blancos al recargar.
- Soporte para **persistencia por dominio**: guarda automáticamente el estado usando `chrome.storage.local` tomando como clave el hostname actual de la pestaña.

  <img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/b59f5d51-8dfb-4f3e-9cc1-f3703fde3612" />


### Fase 14 – Afinación de Filtros y Contraste

- Ajuste fino de la inversión de colores aplicando un filtro compuesto: `filter: invert(100%) hue-rotate(180deg) contrast(120%)` para darle mayor definición a los textos y negros más profundos.
- Corrección específica en selectores complejos de la interfaz (como la barra lateral izquierda `div.sidebar-left.open.rtl-ps-none.ps`, botones principales y elementos `.nav-pills`) aplicando una inversión de `111%` para mantener la armonía visual sin destellos molestos.

<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/5105a73c-4d49-442f-8262-38695d9ac2d6" />


---
### V 0.9.5
### Fase 15 - Legalización en la chrome store - optimización y mejora del blocker + darkmode

- La versión se simplificó a lite quitando los permisos '<all_urls>' y solo dejando los dominios de la plataforma (para evitar semanas de revisión)
- Se pagó la cuota de desarrollador y se publicó correctamente en la plataforma de manera oculta temporalmente en lo que se termina la ultima función
- se mejoró mucho mas el Anti-Trampa y se evitó errores en capa 8
- se cambió la parte inferior por un log interactivo

  <img width="1094" height="740" alt="image" src="https://github.com/user-attachments/assets/b31bc877-161b-4711-8e30-d3f85c11a6c9" />

  <img width="163" height="60" alt="image" src="https://github.com/user-attachments/assets/95ffb42e-fbf3-4f9a-bbdf-28c2273da192" />


---

### V 0.9.7
- Se pulieron algunas cosas del darkmode para que algunos objetos no se inviertan
- se eliminó que lo pdf de la plataforma sean afectados por el darkmode
- se juntó la función del login y la pagina principal de la plataforma para que estén sincronizados con el darkmode sin aplicarlo a todas las paginas con la idea de usar el <all_url> en un futuro y no sea afectado


---

<img width="647" height="139" alt="image" src="https://github.com/user-attachments/assets/f14c4816-286d-4a77-9020-f529d3b873b9" />
<img width="436" height="79" alt="image" src="https://github.com/user-attachments/assets/9bf25eb0-d3b8-412b-a000-8c1e1e0077d9" />

### V 0.9.7 
- Se agregó un botón para pausar el tiempo dentro de los examenes modificando el $('#clock').countdown
- Se reforzó la reinyección del Api Blocker para evitar confuciones y reinicios entre paginas
- 

### V 0.9.8.5

<img width="329" height="445" alt="image" src="https://github.com/user-attachments/assets/a0ba399f-4040-47db-91b2-89ccd42633e5" />

.
<img width="462" height="96" alt="image" src="https://github.com/user-attachments/assets/0a3697a0-e938-40e2-8021-730c61c5704c" />

<img width="497" height="99" alt="image" src="https://github.com/user-attachments/assets/c166945e-6645-4faa-89ed-ef758d515631" />



<img width="602" height="175" alt="image" src="https://github.com/user-attachments/assets/732cd24a-e459-416f-8ed8-3995c4c5e4ba" />


- Escaner de materias y examenes
  - automatización de scanneos cuando no se está presente
  - almacenamiento de los datos para recargas y otras sesiones
  - direccionamiento a cada materia

- Minimización del botón de pausar tiempo 


### V 0.9.8.8 POR FIN SE LOGRÓ

<img width="304" height="120" alt="image" src="https://github.com/user-attachments/assets/fb58a775-7994-413e-9b4a-d85c3e160399" />

- Botón de respuesta de examenes
    - conecta con una función previa que ya había hecho que al activarse encierra en un contorno rojo una respuesta en especifico de cada pregunta
    - se usa una IA que recibe los parametros necesarios de preguntas y respuestas de todo el DOM y responde con un JSON indicando la respuesta correcta de cada pregunta
    - los scripts de answer lo interpretan y conectan con la función de contorno rojo
    - se usan varios motores de IA para evitar atascos aunque sea una sola API


<img width="486" height="467" alt="image" src="https://github.com/user-attachments/assets/568a9a07-b441-4fa5-917b-a3480d077da2" /> <br>

  <img width="276" height="72" alt="image" src="https://github.com/user-attachments/assets/f75e1495-6a57-4177-a53e-12c3307f0e0d" />







### Estado actual
- Extensión modular con funciones especializadas:
    - Anti‑trampa funcional con registro persistente (registerContentScripts) e inyección inmediata.
    - Anti‑AFK operando al 100% con simulación de peticiones reales, contador ascendente en formato hh:mm:ss y diseño adaptado (ahora solo se reinicia al cerrar sesión).
    - Scanner de Tareas automático mediante alarmas (chrome.alarms) con caché optimizada por huella digital // sistema de direccionamiento a cada tarea/examen.
    - Burbuja de Respuestas Correctas exclusiva para entornos de examen.
    - Modo Oscuro totalmente funcional, independiente, con persistencia por dominio e inyección ultra-temprana.
    - Pausar tiempo de emergencia condicionado a los últimos 30 segundos del examen.<br><br>
Publicada en la Chrome Store de manera controlada.






### Cosas por arreglar
- por ahora nada

### Ideas futuras
- whitelist para la IA
- organizar los apartados de permisos
- re-ordenar las notas en todo el codigo
- quitarle la memoria de estado al interruptor

https://github.com/Osc4r15/OyM-ByPass-Cheat-files
