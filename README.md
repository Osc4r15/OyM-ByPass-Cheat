# OyM ch34t by Osc4r 🕷
Una extensión bacana pa curarse con la uni
<img width="296" height="299" alt="image" src="https://github.com/user-attachments/assets/ed6f2fee-3676-476a-91d4-0ab05a9a1c2a" />


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

### Fase 11 – Anti-AFK funcionando
<img width="306" height="295" alt="image" src="https://github.com/user-attachments/assets/aea45e63-054e-4461-bf16-1af29e00e53d" />
<img width="225" height="56" alt="image" src="https://github.com/user-attachments/assets/fef06c2e-645e-43f4-b56f-9de768872f3a" />

- Implementación del script Anti-AFK con reloj activo.  
- Inspirado en extensión simple de “keep-alive”.  

---

##  Estado actual
- Extensión modular con cuatro switches.  
- Anti-trampa funcional.  
- Anti-AFK funcionando.  
- Switches deshabilitados con tooltips explicativos.  
- Interfaz con fondo, jerarquía visual y opacidad controlada.  
- Título personalizado con enlace a IG y degradado animado.  

---

##  Ideas futuras
- Que las **respuestas correctas** funcionen como el Anti-AFK:  
  - Recargarse en tiempo real.  
  - Marco verde rodeando la respuesta correcta.  
  - Mensaje flotante indicando cuál es la correcta.  
- Re-inyección automática al cambiar de pregunta/página.  

---
