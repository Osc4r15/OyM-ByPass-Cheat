# OyM ch34t by Osc4r 🕷
Una extensión bacana pa curarse con la uni
// estado de la extensión según funciones: 50% //

<img width="297" height="298" alt="image" src="https://github.com/user-attachments/assets/d540a00c-3e4b-404e-9c4c-00f494f49131" />


Revisando los sources y elements de la plataforma y una búsqueda de un buen rato, logré encontrar las herramientas de seguridad básicas que utiliza, bloqueándolas logrando engañarla dentro de los exámenes dándole base a esto.
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



##  Estado actual

- Extensión modular con cuatro switches:
  - **Anti‑trampa** funcional con registro persistente (`registerContentScripts`), inyección inmediata al activarlo y recarga automática al desactivarlo para limpiar la página.
  - **Anti‑AFK** funcionando con contador ascendente y simulación de actividad periódica.
  - Switches deshabilitados con tooltips explicativos para las funciones en construcción.
- Interfaz con fondo personalizado, jerarquía visual clara y opacidad controlada.
- Interruptores estilizados (rojo apagado, verde encendido) con estética gamer/profesional.
- Título personalizado con enlace a Instagram y degradado animado en el texto “Osc4r”.
- Tooltips flotantes minimalistas con ícono `?` para feedback inmediato.
- Arquitectura modular lista para crecer (`respuestas.js`, `tiempo.js`, `antiafk.js`, `blocker.js`).
- ojo el anti afk no está funcionando como se aparenta | SOLUCIONADO
- **Anti‑AFK** operando al 100% con simulación de peticiones reales, contador ascendente y diseño adaptado.
- Se remplazó la idea de "Pausar tiempo" por modo oscuro para la plataforma
- **Modo Oscuro** totalmente funcional, independiente, con persistencia por dominio, inyección ultra-temprana sin parpadeos y contraste mejorado (`120%`).


---

## Cosas por arreglar
Anti AFK; se muestra correctamente el reloj y persiste la injección al cambiar de interfaz o actualizar la pagina, pero no cumple con los requisitos de la plataforma
SOLUCIONADO!!!!!!!!!!!!!!

---

##  Ideas futuras
- Que las **respuestas correctas** funcionen como el Anti-AFK:  
  - Recargarse en tiempo real.  
  - Marco verde rodeando la respuesta correcta.  
  - Mensaje flotante indicando cuál es la correcta.
  - Al iguar que el reloj afk poner una burbuja flotante abajo que diga cual es la respuesta correcta, ya sea el numero de esta (1-4) o el texto de la respuesta completa, O AMBAS. en caso que se complique el cuadro verde
- Re-inyección automática al cambiar de pregunta/página.
- Legalizar la extensión al completarla en la chrome store para que los demás la instalen mas facil sin el empaquetado (tal vez).
- POSIBLE FUNCIÓN DE REMPLAZO O AGREGADO; habilitar el envío de tareas aunque ya esté vencida (COMPLICADO, SE HIZO CON DARKMODE MIENTRAS TANTO)

## Tener en cuenta para la extracción de datos de respuestas correctas:
  - Dev recorder
  - DOM screenchot
  - Guardar html de cada pregunta (poco probable que sirva
    
  - burp suite:
  - Ver http history en cada respuesta
  - interceptar cada respuesta (con buscar con correct/incorrect false/true)
  - interceptar el envío final del examen (en busqueda de: catidad de correctas/incorrectas, porcentaje de examen final)
      

https://github.com/Osc4r15/OyM-ByPass-Cheat-files
