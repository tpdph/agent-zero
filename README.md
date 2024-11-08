# Adolf SkyNet

[![Únete a nuestra Comunidad de Skool](https://img.shields.io/badge/Skool-Únete%20a%20nuestra%20Comunidad-4A90E2?style=for-the-badge&logo=skool&logoColor=white)](https://www.skool.com/adolf-skynet) [![Únete a nuestro Discord](https://img.shields.io/badge/Discord-Únete%20a%20nuestro%20servidor-5865F2?style=for-the-badge&logo=discord&logoColor=white)](https://discord.gg/B8KZKNsPpj) [![Suscríbete en YouTube](https://img.shields.io/badge/YouTube-Suscríbete-red?style=for-the-badge&logo=youtube&logoColor=white)](https://www.youtube.com/@AdolfSkyNetFW) [![Conéctate en LinkedIn](https://img.shields.io/badge/LinkedIn-Conéctate-blue?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/jan-tomasek/) [![Síguenos en X.com](https://img.shields.io/badge/X.com-Síguenos-1DA1F2?style=for-the-badge&logo=x&logoColor=white)](https://x.com/JanTomasekDev)


[![Intro Video](/docs/res/new_vid.jpg)](https://www.youtube.com/watch?v=U_Gl0NPalKA)

**Marco de IA personal y orgánico**
- Adolf SkyNet no es un marco agentico predefinido. Está diseñado para ser dinámico, crecer orgánicamente y aprender a medida que lo usas.
- Adolf SkyNet es completamente transparente, legible, comprensible, personalizable e interactivo.
- Adolf SkyNet utiliza la computadora como una herramienta para realizar sus (tus) tareas.

## Ahora con UI Responsiva, Memoria Automática y Reflexión:
![Interfaz Web](/docs/res/win_webui2.gif)

## Integración de Aryan_Developer
Aryan_Developer es una poderosa extensión integrada en Adolf SkyNet para mejorar sus capacidades. Proporciona características avanzadas de procesamiento que permiten a Adolf SkyNet manejar tareas de manera más eficiente y efectiva. Con Aryan_Developer, Adolf SkyNet ahora puede aprovechar herramientas mejoradas de procesamiento y análisis de datos, haciéndolo más robusto en el manejo de tareas complejas.

### Nuevas Características y Capacidades
- **Procesamiento de Datos Avanzado**: Aryan_Developer introduce nuevos algoritmos para un procesamiento de datos más rápido y preciso.
- **Herramientas de Análisis Mejoradas**: Proporciona herramientas para obtener conocimientos más profundos y análisis, mejorando los procesos de toma de decisiones.
- **Eficiencia Mejorada**: Optimiza el manejo de tareas, reduciendo el tiempo de procesamiento y aumentando la eficiencia general.

## Conceptos Clave
1. **Asistente de propósito general**
- Adolf SkyNet no está preprogramado para tareas específicas (pero puede estarlo). Está destinado a ser un asistente personal de propósito general. Dale una tarea, y recopilará información, ejecutará comandos y código, cooperará con otras instancias de agentes, y hará su mejor esfuerzo para lograrlo.
- Tiene una memoria persistente, lo que le permite memorizar soluciones anteriores, código, hechos, instrucciones, etc., para resolver tareas más rápido y de manera más confiable en el futuro.

2. **La computadora como herramienta**
- Adolf SkyNet utiliza el sistema operativo como una herramienta para realizar sus tareas. No tiene herramientas preprogramadas de un solo propósito. En cambio, puede escribir su propio código y usar el terminal para crear y usar sus propias herramientas según sea necesario.
- Las únicas herramientas predeterminadas en su arsenal son la búsqueda en línea, las funciones de memoria, la comunicación (con el usuario y otros agentes) y la ejecución de código/terminal. Todo lo demás es creado por el propio agente o puede ser ampliado por el usuario.
- La funcionalidad de uso de herramientas se ha desarrollado desde cero para ser la más compatible y confiable, incluso con modelos muy pequeños.

* **Herramientas Predeterminadas:** Adolf SkyNet incluye herramientas como conocimiento, contenido de páginas web, ejecución de código y comunicación.
* **Creación de Herramientas Personalizadas:** Extiende la funcionalidad de Adolf SkyNet creando tus propias herramientas personalizadas.
* **Instrumentos:** Los instrumentos son un nuevo tipo de herramienta que te permiten crear funciones y procedimientos personalizados que pueden ser llamados por Adolf SkyNet.

3. **Cooperación Multi-agente**
- Cada agente tiene un agente superior que le da tareas e instrucciones. Cada agente luego informa a su superior.
- En el caso del primer agente en la cadena (Agente 0), el superior es el usuario humano; el agente no ve diferencia.
- Cada agente puede crear su agente subordinado para ayudar a desglosar y resolver subtareas. Esto ayuda a todos los agentes a mantener su contexto limpio y enfocado.

4. **Completamente personalizable y extensible**
- Casi nada en este marco está codificado. Nada está oculto. Todo puede ser ampliado o cambiado por el usuario.
- Todo el comportamiento está definido por un mensaje del sistema en el archivo **prompts/default/agent.system.md**. Cambia este mensaje y cambia el marco dramáticamente.
- El marco no guía ni limita al agente de ninguna manera. No hay rieles codificados que los agentes deban seguir.
- Cada mensaje, cada pequeña plantilla de mensaje enviada al agente en su bucle de comunicación, se puede encontrar en la carpeta **prompts/** y cambiar.
- Cada herramienta predeterminada se puede encontrar en la carpeta **python/tools/** y cambiar o copiar para crear nuevas herramientas predefinidas.
- Por supuesto, es de código abierto (excepto por algunas herramientas como Perplexity, pero eso será reemplazado con una alternativa de código abierto en el futuro).

5. **La comunicación es clave**
- Dale a tu agente un mensaje del sistema adecuado e instrucciones, y puede hacer milagros.
- Los agentes pueden comunicarse con sus superiores y subordinados, haciendo preguntas, dando instrucciones y proporcionando orientación. Instruye a tus agentes en el mensaje del sistema sobre cómo comunicarse efectivamente.
- La interfaz de terminal es transmitida en tiempo real e interactiva. Puedes detenerte e intervenir en cualquier momento. Si ves que tu agente se dirige en la dirección equivocada, simplemente detente y díselo de inmediato.
- Hay mucha libertad en este marco. Puedes instruir a tus agentes para que informen regularmente a los superiores pidiendo permiso para continuar. Puedes instruirlos para que usen sistemas de puntuación al decidir cuándo delegar subtareas. Los superiores pueden verificar los resultados de los subordinados y disputar. Las posibilidades son infinitas.

![Adolf SkyNet](/docs/res/splash_wide.png)

## Características agradables de tener
- La salida es muy limpia, colorida, legible e interactiva; nada está oculto.
- La misma salida colorida que ves en el terminal se guarda automáticamente en un archivo HTML en la carpeta **logs/** para cada sesión.
- La salida del agente se transmite en tiempo real, permitiendo al usuario leer e intervenir en cualquier momento.
- No se requiere codificación, solo habilidades de comunicación y redacción de mensajes.
- Con un mensaje del sistema sólido, el marco es confiable incluso con modelos pequeños, incluyendo el uso preciso de herramientas.

![Carga del Sistema del Agente 1](/docs/res/ui_screen.png)

## Ten en cuenta
1. **¡Adolf SkyNet puede ser peligroso!**
Con la instrucción adecuada, Adolf SkyNet es capaz de muchas cosas, incluso potencialmente peligrosas para tu computadora, datos o cuentas. Siempre ejecuta Adolf SkyNet en un entorno aislado (como el contenedor docker incorporado) y ten cuidado con lo que deseas.

2. **Adolf SkyNet no está preprogramado; está basado en mensajes.**
Todo el marco contiene solo una cantidad mínima de código y no guía al agente de ninguna manera.
Todo está en el mensaje del sistema en la carpeta **prompts/**. Aquí puedes reescribir el comportamiento completo del marco a tus necesidades.
Si tu agente no se comunica correctamente, usa herramientas, razona, usa la memoria, encuentra respuestas, simplemente instrúyelo mejor.

3. **Si no puedes proporcionar el entorno ideal, hazlo saber a tu agente.**
Adolf SkyNet está hecho para ser usado en un entorno virtual aislado (por seguridad) con algunas herramientas preinstaladas y configuradas.
Si no puedes proporcionar todas las condiciones necesarias o claves API, simplemente cambia el mensaje del sistema y dile a tu agente qué sistema operativo y herramientas tiene a su disposición. Nada está codificado; si no le dices a tu agente sobre una herramienta en particular, no lo sabrá y no intentará usarla.

[![Video de David Ondrej](/docs/res/david_vid.jpg)](https://www.youtube.com/watch?v=_Pionjv4hGc)

## Problemas conocidos
1. El mensaje del sistema apesta. Puedes hacerlo mejor. Si lo haces, ayúdame por favor :)
2. La comunicación entre agentes y terminal en el Contenedor Docker a través de SSH a veces puede romperse y dejar de producir salidas. A veces es porque el agente ejecuta algo como "server.serve_forever()" que hace que el terminal se cuelgue, a veces puede ocurrir un error aleatorio. Reiniciar el agente y/o el contenedor docker ayuda.
3. El agente puede romper su sistema operativo. A veces el agente puede desactivar el entorno virtual, desinstalar paquetes, cambiar la configuración, etc. Nuevamente, eliminar el contenedor docker y limpiar el **work_dir/** es suficiente para solucionar eso.

## Entorno ideal
- **Contenedor Docker**: El entorno perfecto para ejecutar Adolf SkyNet es el contenedor docker incorporado. El agente puede descargar la imagen **frdel/adolf-skynet-exe** por sí solo e iniciar el contenedor, solo necesitas tener docker en ejecución (como la aplicación Docker Desktop).
- **Python**: Python debe estar instalado en el sistema para ejecutar el marco.
- **Acceso a Internet**: El agente necesitará acceso a Internet para usar su herramienta de conocimiento en línea y ejecutar comandos y scripts que requieran una conexión. Si no necesitas que tu agente esté en línea, puedes modificar sus mensajes en la carpeta **prompts/** y hacerlo completamente local.

![Ejemplo de Tiempo](/docs/res/time_example.jpg)

## Configuración
Una guía de configuración detallada para Windows, macOS y Linux con un video se puede encontrar en la nueva Documentación de Adolf SkyNet en [esta página](docs/installation.md#in-depth-guide-for-windows-and-macos).

## Consulta la Documentación
La documentación profundiza en el marco y sus características. Es un buen lugar para comenzar si eres nuevo en Adolf SkyNet. Haz clic [aquí](docs/README.md) para ver la Documentación.

## Próximamente
- **Binarios preinstalados y scripts de empaquetado**
- **Herramienta de conocimiento de código abierto y herramienta de raspado web**
- **Mejoras en la interacción del usuario**
- **LLMs conmutables en contexto**

### Registro de cambios [desde la versión 0.7]

#### v0.7.1
- **Chats Persistentes** - Serializados en /tmp/chats y cargados automáticamente en run_ui.py al inicio
- **Pila de documentación fusionada en el repositorio**
- **Corrección de errores**

#### v0.7
- **Memoria automática**
- **Mejoras en la UI**
- **Instrumentos**
- **Marco de extensiones**
- **Mensajes de reflexión**
- **Corrección de errores**

> [!NOTA]  
> **Cambios en los archivos de lanzamiento desde la v0.6:**  
> - El archivo main.py ha sido reemplazado por los archivos de lanzamiento run_ui.py (webui) y run_cli.py (terminal).
> - La configuración se ha movido a initialize.py para ambos archivos de lanzamiento webui y terminal.

