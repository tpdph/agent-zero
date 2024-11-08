# Inicio Rápido
Esta guía proporciona una introducción rápida al uso de Adolf SkyNet. Cubriremos cómo lanzar la interfaz web, iniciar un nuevo chat y ejecutar una tarea simple.

## Lanzamiento de la Interfaz Web
1. Asegúrate de tener Adolf SkyNet instalado y tu entorno configurado correctamente (consulta la [Guía de Instalación](installation.md) si es necesario).
2. Abre una terminal en el directorio de Adolf SkyNet y activa tu entorno conda (si estás usando uno).
3. Ejecuta el siguiente comando:

```bash
python run_ui.py
```

4. Aparecerá un mensaje similar a este en tu terminal, indicando que la interfaz web está en funcionamiento:

![](res/flask_link.png)

5. Abre tu navegador web y navega a la URL mostrada en la terminal (usualmente `http://127.0.0.1:50001`). Deberías ver la interfaz web de Adolf SkyNet.

![New Chat](res/ui_newchat1.png)

> [!TIP]
> Como puedes ver, la interfaz web tiene cuatro botones distintos para una fácil gestión de chats: 
> `Nuevo Chat`, `Reiniciar Chat`, `Guardar Chat` y `Cargar Chat`.
> Los chats pueden guardarse y cargarse individualmente en formato `json` y se almacenan en el
> directorio `/tmp/chats`.

    ![Chat Management](res/ui_chat_management.png)

## Ejecutando una Tarea Simple
Pidamos a Adolf SkyNet que descargue un video de YouTube. Así es como se hace:

1. Escribe "Descarga un video de YouTube para mí" en el campo de entrada del chat y presiona Enter o haz clic en el botón de enviar.

2. Adolf SkyNet procesará tu solicitud. Verás sus "pensamientos" y las acciones que toma mostradas en la interfaz. Encontrará una solución predeterminada ya existente, que implica usar la `code_execution_tool` para ejecutar un script de Python simple para realizar la tarea.

3. Luego, el agente te pedirá la URL del video de YouTube que deseas descargar.

## Usando las Funciones de Aryan_Developer
Aryan_Developer introduce capacidades avanzadas de procesamiento a Adolf SkyNet. Así es como puedes aprovechar estas funciones:

1. **Accediendo a las Funciones de Aryan_Developer**: Una vez que tengas Adolf SkyNet en funcionamiento, puedes acceder a las funciones de Aryan_Developer directamente a través de la interfaz de chat. Simplemente escribe un comando o pregunta que requiera procesamiento o análisis de datos avanzados.

2. **Tarea de Ejemplo**: Para ver Aryan_Developer en acción, intenta pedir a Adolf SkyNet que "Analice las tendencias recientes del mercado de valores usando Aryan_Developer". El agente utilizará las herramientas de procesamiento de datos mejoradas de Aryan_Developer para proporcionar un análisis detallado.

3. **Personalizando el Uso de Aryan_Developer**: Puedes personalizar cómo se utilizan las funciones de Aryan_Developer modificando los mensajes del sistema o integrando nuevas herramientas. Consulta la [Guía de Uso](usage.md) para más detalles sobre la personalización.

## Ejemplo de Interacción
Aquí tienes un ejemplo de lo que podrías ver en la interfaz web en el paso 3:
![1](res/image-24.png)

## Próximos Pasos
Ahora que has ejecutado una tarea simple, puedes experimentar con solicitudes más complejas. Intenta pedir a Adolf SkyNet que:

* Perform calculations
* Search the web for information
* Execute shell commands
* Explore web development tasks
* Create or modify files

> [!TIP]
> La [Guía de Uso](usage.md) proporciona información más detallada sobre el uso de las 
> diversas características de Adolf SkyNet, incluyendo la ingeniería de mensajes, el uso de herramientas y la cooperación multi-agente.

