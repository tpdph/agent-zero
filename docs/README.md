![Logo de Adolf SkyNet](res/header.png)
# Documentación de Adolf SkyNet
Para comenzar con Adolf SkyNet, sigue los enlaces a continuación para obtener guías detalladas sobre varios temas:

- **[Instalación](installation.md):** Configura (o [actualiza](installation.md#how-to-update-agent-zero)) Adolf SkyNet en tu sistema.
- **[Inicio Rápido](quickstart.md):** Comienza a usar Adolf SkyNet con ejemplos prácticos.
- **[Guía de Uso](usage.md):** Explora características y capacidades avanzadas.
- **[Integración de Aryan_Developer](#boltnew-integration):** Descubre las nuevas capacidades introducidas por Aryan_Developer.
- **[Descripción de la Arquitectura](architecture.md):** Comprende el funcionamiento interno del marco.
- **[Contribuir](contribution.md):** Aprende cómo contribuir al proyecto Adolf SkyNet.
- **[Solución de Problemas y Preguntas Frecuentes](troubleshooting.md):** Encuentra respuestas a problemas comunes y preguntas.
##
### Integración de Aryan_Developer
Aryan_Developer es una poderosa extensión integrada en Adolf SkyNet para mejorar sus capacidades. Proporciona características avanzadas de procesamiento que permiten a Adolf SkyNet manejar tareas de manera más eficiente y efectiva. Con Aryan_Developer, Adolf SkyNet ahora puede aprovechar herramientas mejoradas de procesamiento y análisis de datos, haciéndolo más robusto en el manejo de tareas complejas.

### Nuevas Características y Capacidades
- **Procesamiento de Datos Avanzado**: Aryan_Developer introduce nuevos algoritmos para un procesamiento de datos más rápido y preciso.
- **Herramientas de Análisis Mejoradas**: Proporciona herramientas para obtener conocimientos más profundos y análisis, mejorando los procesos de toma de decisiones.
- **Eficiencia Mejorada**: Optimiza el manejo de tareas, reduciendo el tiempo de procesamiento y aumentando la eficiencia general.

### Tu experiencia con Adolf SkyNet comienza ahora!

- **Descarga Adolf SkyNet:** Descarga la última versión desde la [página de lanzamientos de GitHub](https://github.com/frdel/agent-zero/releases).
- **Únete a la Comunidad:** Únete a la comunidad de Adolf SkyNet en [Skool](https://www.skool.com/agent-zero) o [Discord](https://discord.gg/Z2tun2N3) para discutir ideas, hacer preguntas y colaborar con otros contribuyentes.
- **Comparte tu Trabajo:** Comparte tus creaciones, flujos de trabajo y descubrimientos de Adolf SkyNet en nuestra área de [Show and Tell](https://github.com/frdel/agent-zero/discussions/categories/show-and-tell) en GitHub.
- **Reporta Problemas:** Usa el [rastreador de problemas de GitHub](https://github.com/frdel/agent-zero/issues) para reportar errores relacionados con el marco o sugerir nuevas características.
##
## Table of Contents

- [Bienvenido a la Documentación de Adolf SkyNet](#agent-zero-documentation)
  - [Características Clave](#key-features)
    - [Comienza tu experiencia con Adolf SkyNet](#your-experience-with-agent-zero-starts-now)
  - [Tabla de Contenidos](#table-of-contents)
- [Guía de Instalación para Windows, MacOS y Linux](installation.md)
  - [Inicio Rápido en Windows](installation.md#windows-quick-start)
  - [Inicio Rápido en macOS](installation.md#macos-quick-start)
  - [Inicio Rápido en Linux](installation.md#linux-quick-start)
  - [Guía Detallada para Windows y MacOS](installation.md#in-depth-guide-for-windows-and-macos)
    - [1. Instalar Conda (miniconda)](installation.md#1-install-conda-miniconda)
    - [2. Instalar Docker (aplicación Docker Desktop)](installation.md#2-install-docker-docker-desktop-application)
    - [3. Descargar Adolf SkyNet](installation.md#3-download-agent-zero)
    - [4. Configurar el entorno Conda](installation.md#4-set-up-conda-environment)
    - [5. Configurar Adolf SkyNet](installation.md#5-configure-agent-zero)
    - [6. Ejecutar Adolf SkyNet](installation.md#6-run-agent-zero)
    - [Elegir tus LLMs](installation.md#choosing-your-llms)
      - [Instalación y Uso de Ollama](installation.md#installing-and-using-ollama-local-models)
    - [Cómo actualizar Adolf SkyNet](installation.md#how-to-update-agent-zero)
    - [Cómo crear archivos ejecutables para Adolf SkyNet](installation.md#how-to-create-executable-files-for-agent-zero-in-windows-macos-and-linux)
    - [Conclusión](installation.md#conclusion)
- [Inicio Rápido](quickstart.md)
  - [Lanzamiento de la Interfaz Web](quickstart.md#launching-the-web-ui)
  - [Ejecutar una Tarea Simple](quickstart.md#running-a-simple-task)
  - [Interacción de Ejemplo](quickstart.md#example-interaction)
  - [Próximos Pasos](quickstart.md#next-steps)
- [Guía de Uso](usage.md)
- [Integración de Aryan_Developer](#boltnew-integration)
  - [Uso de Herramientas](usage.md#tool-usage)
  - [Ingeniería de Mensajes](usage.md#prompt-engineering)
  - [Ejemplo de Uso de Herramientas](usage.md#example-of-tools-usage-web-search-and-code-execution)
  - [Gestión de Memoria](usage.md#memory-management)
  - [Cooperación Multi-Agente](usage.md#multi-agent-cooperation)
  - [Comportamiento del Agente](usage.md#agent-behavior)
  - [Usar Adolf SkyNet en tu dispositivo móvil](usage.md#using-agent-zero-on-your-mobile-device)
  - [Usar code_execution_tool fuera del Contenedor Docker](usage.md#using-code_execution_tool-outside-of-the-docker-container)
- [Integración de Aryan_Developer](#boltnew-integration)
- [Descripción de la Arquitectura](architecture.md)
  - [Componentes Clave](architecture.md#core-components)
  - [Jerarquía y Comunicación de Agentes](architecture.md#agent-hierarchy-and-communication)
  - [Flujo de Interacción](architecture.md#interaction-flow)
  - [Sistema de Memoria](architecture.md#memory-system)
  - [Herramientas](architecture.md#tools)
  - [Conocimiento](architecture.md#knowledge)
  - [Mensajes](architecture.md#prompts)
  - [Extensiones](architecture.md#extensions)
    - [Estructura de Extensiones](architecture.md#structure-of-extensions)
    - [Tipos de Extensiones Predeterminadas](architecture.md#types-of-default-extensions)
  - [Archivos Clave](architecture.md#key-files)
  - [Estructura de Directorios](architecture.md#directory-structure)
  - [Personalización](architecture.md#customization)
    - [Mensajes Personalizados](architecture.md#custom-prompts)
      - [Cambiar la Carpeta de Mensajes del Sistema](architecture.md#changing-the-system-prompt-folder)
    - [Configuración del Agente](architecture.md#agentconfig)
    - [Agregar Herramientas](architecture.md#adding-tools)
    - [Agregar Instrumentos](architecture.md#adding-instruments)
    - [Agregar Extensiones](architecture.md#adding-extensions)
- [Contribuir a Adolf SkyNet](contribution.md)
  - [Comenzando](contribution.md#getting-started)
  - [Haciendo Cambios](contribution.md#making-changes)
  - [Enviando un Pull Request](contribution.md#submitting-a-pull-request)
  - [Pila de Documentación](contribution.md#documentation-stack)
- [Preguntas Frecuentes y Solución de Problemas](troubleshooting.md)
- [Integración de Aryan_Developer](#boltnew-integration)
  - [Preguntas Frecuentes](troubleshooting.md#frequently-asked-questions)
- [Preguntas Frecuentes y Solución de Problemas](troubleshooting.md#troubleshooting)
- [Integración de Aryan_Developer](#boltnew-integration)

