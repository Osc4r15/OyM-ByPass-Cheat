Change Log 19/8/2026

V 0
<img width="291" height="241" alt="image" src="https://github.com/user-attachments/assets/33b6743b-2458-4ffc-8944-384e1630e35c" />


 Fase 1 – Base inicial
 
 Se creó la estructura mínima de la extensión con:
   
   `manifest.json` → configuración básica.
   
   `popup.html` → panel con un interruptor para **Bypass anti-trampa**.
   
   `popup.js` → escuchaba el cambio del switch y mandaba mensaje.
   
   `background.js` → inyectaba `blocker.js` si estaba activado.
  
   `blocker.js` → bloqueaba eventos de visibilidad y blur/focus.
 
 Implementación de imagen de fondo

 Resultado: un solo switch funcional, pero recargaba la página al desactivarlo.

---

V 0.1

<img width="297" height="246" alt="image" src="https://github.com/user-attachments/assets/57965340-bd31-4557-8a93-86be8208837e" />


V 0.2

<img width="307" height="283" alt="image" src="https://github.com/user-attachments/assets/55dbd7aa-cf88-4784-b579-ce23a4de65ad" />


 
 
 Fase 2 – Interfaz con más interruptores
 
 
 Se añadieron los demás switches en el `popup.html`:
   
   **Ver respuestas correctas**
   
   **Pausar/modificar tiempo**
 
   **Anti-AFK**

 Por ahora solo imprimían en consola (`console.log`) cuando se activaban.


 Resultado: interfaz con cuatro interruptores, pero solo el de Anti-trampa tenía lógica real.

---


 
 
 Fase 3 – Modularidad
 

 Se planteó separar cada función en su propio archivo:
   
   `respuestas.js`
   
   `tiempo.js`
   
   `antiafk.js`
 
   `blocker.js`
 
 El `popup.js` solo manda mensajes, y el `background.js` decide qué archivo inyectar.

 Esto permite arreglar cada función sin tocar el resto.

 Resultado: arquitectura modular lista para crecer.

---


 
 
 Fase 4 – Estilo visual
 
 
 Se cambió el diseño de los interruptores a **switches ovalados** con círculo rojo apagado y verde encendido.
 
 Se añadió CSS personalizado (`popup.css`) para darles ese look moderno.

 Se probó en vivo con DevTools para ajustar estilos.

 Resultado: switches con estilo gamer/profesional.

---

V 0.3
<img width="295" height="282" alt="image" src="https://github.com/user-attachments/assets/a584640d-5361-43cd-b2c8-1567df227fd9" />


 
 
 Fase 5 – Fondo y jerarquía visual
 
 
 Se añadió un **fondo con imagen** (`background-image`).
 
 Se bajó la opacidad del aviso (`h3`) y del estado (`.status`) para que los switches resalten más.
 
 Se cambió el aviso de `<p>` a `<h3>` para poder estilizarlo aparte.
 
 Se alineó el título a la izquierda para que combine con el fondo.

 Resultado: interfaz más ordenada y con jerarquía visual clara.

---


 
 
 Fase 6 – Personalización
 
 
 Se añadió un enlace en el título a tu **Instagram** (`<h2>OyM ch34t by <a>Osc4r</a></h2>`).
 
 Se estilizó el enlace con color y grosor distinto.
 
 Se probó opacidad y negritas para balancear la interfaz.

 Resultado: panel con identidad personal y estilo único.

---

V 0.4

<img width="358" height="359" alt="image" src="https://github.com/user-attachments/assets/99a13152-9354-40d0-97a0-96845df34b78" />



 
 
 Fase 7 – Animación
 
 
 Se aplicó un **degradado animado** al texto del enlace “Osc4r”.
 
 El degradado se mueve lentamente con `@keyframes gradientMove`.
 
 Se sugirió hover para acelerar la animación al pasar el mouse.

 Resultado: nombre brilla con un efecto animado elegante.





 
 
 Fase 8 – Switches deshabilitados
 
 
 Se añadió la propiedad `disabled` a los interruptores que aún no tienen lógica implementada.  
 
 Esto evita confusión y muestra claramente que esas funciones están “en construcción”.  
 
 Visualmente, los switches siguen apareciendo, pero no se pueden activar.

 Resultado: interfaz más clara, sin switches que parecen funcionar pero no hacen nada.

<img width="826" height="225" alt="image" src="https://github.com/user-attachments/assets/d61ee168-4ea6-47a1-9956-8768dfe1db3e" />

---


 
 
 Fase 9 – Tooltips flotantes
 

Se agregó un ícono `?` al lado de cada switch deshabilitado.  
 
 Al pasar el mouse sobre el ícono, aparece un **tooltip flotante** con explicación breve y entendible de lo que hará esa función.  

 El tooltip tiene fondo oscuro, texto claro y aparece con transición suave (`opacity` + `visibility`).

 Resultado: el usuario entiende qué hará cada función en el futuro, sin necesidad de documentación externa.

<img width="300" height="297" alt="image" src="https://github.com/user-attachments/assets/7e0b853a-610f-4856-84ee-676fc68d411a" />

---


 
 
 Fase 10 – Experiencia de usuario
 
 
 Los tooltips se diseñaron con estilo minimalista: círculo pequeño con `?`, texto flotante con padding y bordes redondeados.  
 
 Se mantiene la estética gamer/profesional del panel.  
 
 El panel ahora comunica mejor las funciones futuras y evita frustración por switches inactivos.

 Resultado: interfaz más profesional, con **jerarquía visual clara** y **feedback inmediato** al usuario.

---


 Estado actual

 
 
 Extensión modular con cuatro switches.  
 
 Anti-trampa funcional, los demás listos para lógica futura.  
 
 Switches deshabilitados con tooltips explicativos.  
 
 Interfaz con fondo, jerarquía visual, opacidad controlada.  

 Título personalizado con enlace a tu IG y degradado animado.  




