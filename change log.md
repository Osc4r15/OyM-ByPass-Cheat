Change Log 19/8/2026

V 0
<img width="291" height="241" alt="image" src="https://github.com/user-attachments/assets/33b6743b-2458-4ffc-8944-384e1630e35c" />


 Fase 1 – Base inicial
- Se creó la estructura mínima de la extensión con:
  - `manifest.json` → configuración básica.
  - `popup.html` → panel con un interruptor para **Bypass anti-trampa**.
  - `popup.js` → escuchaba el cambio del switch y mandaba mensaje.
  - `background.js` → inyectaba `blocker.js` si estaba activado.
  - `blocker.js` → bloqueaba eventos de visibilidad y blur/focus.
- Implementación de imagen de fondo
 Resultado: un solo switch funcional, pero recargaba la página al desactivarlo.

---

V 0.1
<img width="297" height="246" alt="image" src="https://github.com/user-attachments/assets/57965340-bd31-4557-8a93-86be8208837e" />


V 0.2
<img width="307" height="283" alt="image" src="https://github.com/user-attachments/assets/55dbd7aa-cf88-4784-b579-ce23a4de65ad" />

 Fase 2 – Interfaz con más interruptores
- Se añadieron los demás switches en el `popup.html`:
  - **Ver respuestas correctas**
  - **Pausar/modificar tiempo**
  - **Anti-AFK**
- Por ahora solo imprimían en consola (`console.log`) cuando se activaban.


 Resultado: interfaz con cuatro interruptores, pero solo el de Anti-trampa tenía lógica real.

---

 Fase 3 – Modularidad
- Se planteó separar cada función en su propio archivo:
  - `respuestas.js`
  - `tiempo.js`
  - `antiafk.js`
  - `blocker.js`
- El `popup.js` solo manda mensajes, y el `background.js` decide qué archivo inyectar.
- Esto permite arreglar cada función sin tocar el resto.

 Resultado: arquitectura modular lista para crecer.

---

 Fase 4 – Estilo visual
- Se cambió el diseño de los interruptores a **switches ovalados** con círculo rojo apagado y verde encendido.
- Se añadió CSS personalizado (`popup.css`) para darles ese look moderno.
- Se probó en vivo con DevTools para ajustar estilos.

 Resultado: switches con estilo gamer/profesional.

---

V 0.3
<img width="295" height="282" alt="image" src="https://github.com/user-attachments/assets/a584640d-5361-43cd-b2c8-1567df227fd9" />

 Fase 5 – Fondo y jerarquía visual
- Se añadió un **fondo con imagen** (`background-image`).
- Se bajó la opacidad del aviso (`h3`) y del estado (`.status`) para que los switches resalten más.
- Se cambió el aviso de `<p>` a `<h3>` para poder estilizarlo aparte.
- Se alineó el título a la izquierda para que combine con el fondo.

 Resultado: interfaz más ordenada y con jerarquía visual clara.

---

 Fase 6 – Personalización
- Se añadió un enlace en el título a tu **Instagram** (`<h2>OyM ch34t by <a>Osc4r</a></h2>`).
- Se estilizó el enlace con color y grosor distinto.
- Se probó opacidad y negritas para balancear la interfaz.

 Resultado: panel con identidad personal y estilo único.

---

V 0.4
<img width="358" height="359" alt="image" src="https://github.com/user-attachments/assets/99a13152-9354-40d0-97a0-96845df34b78" />


 Fase 7 – Animación
- Se aplicó un **degradado animado** al texto del enlace “Osc4r”.
- El degradado se mueve lentamente con `@keyframes gradientMove`.
- Se sugirió hover para acelerar la animación al pasar el mouse.

 Resultado: tu nombre brilla con un efecto animado elegante.

---

 Estado actual
- Extensión modular con cuatro switches.  
- Anti-trampa funcional, los demás listos para lógica futura.  
- Interfaz con fondo, jerarquía visual, opacidad controlada.  
- Switches estilizados (rojo apagado, verde encendido).  
- Título personalizado con enlace a tu IG y degradado animado.  

---

👉 Próximo paso natural: crear **placeholders en `respuestas.js`, `tiempo.js` y `antiafk.js`** para que ya estén listos y solo metas la lógica cuando toque. ¿Quieres que te arme esos tres archivos vacíos pero bien estructurados para completar el setup?
