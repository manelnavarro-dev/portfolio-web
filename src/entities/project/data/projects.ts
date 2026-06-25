import type { Project } from "@/entities/project/model/project.types";

export const projects: Project[] = [
  {
    "id": "bastetai",
    "tag": "AI",
    "title": "🐱 BastetAI",
    "summary": "Sistema de visión por computador para análisis de comportamiento de gatos domésticos en tiempo real.",
    "detailTitle": "Sistema de visión por computador para análisis de comportamiento de gatos domésticos en tiempo real",
    "paragraphs": [
      {
        "text": "Proyecto de la universidad.",
        "emphasized": true
      },
      {
        "text": "Sistema completo de visión artificial desplegado sobre contenedores Docker en Jetson Nano, orientado al análisis del comportamiento de gatos mediante técnicas de Visión por Computador e Inteligencia Artificial.",
        "emphasized": false
      },
      {
        "text": "El sistema procesa múltiples streams RTSP utilizando un pipeline optimizado, basado en NVIDIA DeepStream y GStreamer, donde se realiza detección de objetos con YOLOv8, tracking multiobjeto y reidentificación mediante embeddings. La información procesada se estructura en formato JSON y se publica en tiempo real en un sistema externo Redis.",
        "emphasized": false
      },
      {
        "text": "La arquitectura está diseñada como un servicio desacoplado mediante contenedores Docker, permitiendo escalabilidad y despliegue en entornos reales. Se han implementado mecanismos avanzados de recuperación ante fallos en streams RTSP, así como optimización de inferencia mediante TensorRT, ONNX con batch dinámico y fine-tunning de modelos.",
        "emphasized": false
      }
    ],
    "groups": [
      {
        "title": "🔧 Tecnologías",
        "items": [
          "Python",
          "NVIDIA DeepStream",
          "GStreamer",
          "Ultralyrics",
          "PyTorch",
          "ONNX",
          "TensorRT",
          "Redis",
          "Docker"
        ],
        "displayAsTags": true
      },
      {
        "title": "🎯 Objetivo",
        "items": [
          "Detectar y seguir gatos en tiempo real mediante inferencia optimizada en GPU.",
          "Identificar individuos utilizando embeddings generados por modelos de ReID.",
          "Integrar un servicio cognitivo que interprete las detecciones y genere eventos de alto nivel mediante análisis espacial y comparación de embeddings."
        ],
        "displayAsTags": false,
        "introduction": "Construir un sistema completo de visión por computador capaz de:"
      },
      {
        "title": "🚀 Alcance",
        "items": [
          "Pipeline completo de visión en producción.",
          "Procesamiento en GPU en tiempo real.",
          "Arquitectura modular y desplegable.",
          "Sistema tolerante a fallos con recuperación."
        ],
        "displayAsTags": false
      }
    ]
  },
  {
    "id": "portfolio",
    "tag": "Web",
    "title": "🌐 Personal Portfolio",
    "summary": "Web responsive para presentación profesional y proyectos técnicos.",
    "detailTitle": "Web responsive para presentación profesional y proyectos técnicos",
    "paragraphs": [
      {
        "text": "Desarrollo de una web personal orientada a la presentación de proyectos, habilidades técnicas y contacto profesional, con un enfoque minimalista, limpio y responsive.",
        "emphasized": false
      },
      {
        "text": "El proyecto se centra en la correcta estructuración semántica del contenido mediante HTML5, el diseño adaptable con CSS, Flexbox y Grid, y una interacción básica con JavaScript. El diseño ha sido previamente prototipado en Figma, manteniendo coherencia visual y experiencia de usuario.",
        "emphasized": false
      },
      {
        "text": "El sitio está desplegado en producción mediante hosting en Netlify y gestionado con dominio propio y configuración de DNS a través de Cloudflare.",
        "emphasized": false
      }
    ],
    "groups": [
      {
        "title": "🔧 Tecnologías",
        "items": [
          "HTML5",
          "CSS",
          "JavaScript",
          "Netlify",
          "Cloudflare"
        ],
        "displayAsTags": true
      },
      {
        "title": "🎯 Objetivo",
        "items": [
          "Mostrar proyectos técnicos.",
          "Presentar habilidades de forma clara.",
          "Servir como punto de contacto."
        ],
        "displayAsTags": false,
        "introduction": "Crear una plataforma profesional para:"
      },
      {
        "title": "🚀 Alcance",
        "items": [
          "Web responsive completa.",
          "Deploy real con dominio propio.",
          "Diseño UX/UI básico funcional."
        ],
        "displayAsTags": false
      }
    ]
  },
  {
    "id": "smart-home",
    "tag": "IoT",
    "title": "🏠 Smart Home System",
    "summary": "Sistema domótico completo con automatización, seguridad y control remoto.",
    "detailTitle": "Sistema domótico completo con automatización, seguridad y control remoto",
    "paragraphs": [
      {
        "text": "Diseño e implementación de un sistema IoT doméstico basado en Home Assistant, integrando sensores, automatizaciones y control remoto seguro.",
        "emphasized": false
      },
      {
        "text": "El sistema utiliza Zigbee2MQTT para la gestión de dispositivos Zigbee, y MQTT como protocolo de comunicación entre componentes. Se han desarrollado automatizaciones complejas y componentes custom tanto en YAML como en la interfaz de Home Assistant, incluyendo lógica de seguridad, notificaciones críticas e integración y control mediante NFC.",
        "emphasized": false
      },
      {
        "text": "La infraestructura está completamente desplegada en contenedores con Docker, incluyendo servicios como Home Assistant, Zigbee2MQTT y túneles de acceso remoto mediante Cloudflare Tunnel, permitiendo acceso seguro desde internet con dominio propio y autentificación de dos factores M2F.",
        "emphasized": false
      }
    ],
    "groups": [
      {
        "title": "🔧 Tecnologías",
        "items": [
          "Home Assistant",
          "Zigbee",
          "Zigbee2MQTT",
          "MQTT",
          "Docker",
          "Cloudflare",
          "NFC"
        ],
        "displayAsTags": true
      },
      {
        "title": "🎯 Objetivo",
        "items": [
          "Automatizar procesos del hogar.",
          "Implementar lógica de seguridad.",
          "Permitir control remoto seguro."
        ],
        "displayAsTags": false,
        "introduction": "Desarrollar un sistema domótico capaz de:"
      },
      {
        "title": "🚀 Alcance",
        "items": [
          "Sistema IoT real en producción.",
          "Integración completa hardware-software.",
          "Automatizaciones avanzadas.",
          "Acceso remoto seguro mediante DNS propio."
        ],
        "displayAsTags": false
      }
    ]
  },
  {
    "id": "environmental",
    "tag": "IoT",
    "title": "🌊 Environmental Monitoring System",
    "summary": "Control de riesgos ambientales y afluencia en una playa.",
    "detailTitle": "Control de riesgos ambientales y afluencia en una playa",
    "paragraphs": [
      {
        "text": "Proyecto de la universidad.",
        "emphasized": true
      },
      {
        "text": "Sistema IoT basado en ESP8266 para la monitorización ambiental y estimación de afluencia de personas en entornos abiertos como playas.",
        "emphasized": false
      },
      {
        "text": "El dispositivo combina sensores físicos de temperatura, humedad y radiación UV, con técnicas avanzadas de análisis de red, utilizando el modo promiscuo del ESP8266 para capturar paquetes WiFi IEEE 802.11 y detectar dispositivos cercanos mediante análisis de Probe Requests.",
        "emphasized": false
      },
      {
        "text": "El sistema implementa algoritmos de fingerprinting para evitar duplicados incluso cuando las direcciones MAC están aleatorizadas, permitiendo una estimación más precisa de la afluencia.",
        "emphasized": false
      },
      {
        "text": "Los datos son enviados a la plataforma IoT Ubidots para su visualización en tiempo real mediante dashboards. Además, el sistema soporta actualizaciones OTA y está optimizado energéticamente mediante el modo deep sleep del ESP8266 y alimentación autónoma con batería y panel solar.",
        "emphasized": false
      }
    ],
    "groups": [
      {
        "title": "🔧 Tecnologías",
        "items": [
          "C / C++",
          "Arduino",
          "ESP8266",
          "IEEE 802.11",
          "Ubidots",
          "HTTP"
        ],
        "displayAsTags": true
      },
      {
        "title": "🎯 Objetivo",
        "items": [
          "Monitorizar condiciones ambientales como UV, temperatura y humedad.",
          "Estimar afluencia de personas mediante WiFi.",
          "Visualizar datos en tiempo real."
        ],
        "displayAsTags": false
      },
      {
        "title": "🚀 Alcance",
        "items": [
          "Sistema embebido completo.",
          "Integración hardware y software.",
          "Procesamiento de red a bajo nivel.",
          "IoT autónomo con bajo consumo energético."
        ],
        "displayAsTags": false
      }
    ]
  },
  {
    "id": "cubic-labyrinth",
    "tag": "3D",
    "title": "🧩 Cubic Labyrinth",
    "summary": "Diseño y fabricación de estructura 3D compleja mediante modelado paramétrico e impresión aditiva.",
    "detailTitle": "Diseño y fabricación de estructura 3D compleja mediante modelado paramétrico e impresión aditiva",
    "paragraphs": [
      {
        "text": "Proyecto de la universidad.",
        "emphasized": true
      },
      {
        "text": "Proyecto académico centrado en el diseño y fabricación de una estructura tridimensional compleja tipo laberinto, desarrollada mediante modelado CAD en Onshape y posteriormente fabricada mediante impresión 3D.",
        "emphasized": false
      },
      {
        "text": "El diseño consiste en una geometría cúbica multicapa con caminos internos interconectados, requiriendo planificación espacial, control de tolerancias y optimización para fabricación aditiva. Se ha tenido en cuenta la imprimibilidad del modelo, evitando soportes innecesarios y ajustando parámetros de diseño para garantizar la correcta fabricación.",
        "emphasized": false
      },
      {
        "text": "El modelo final ha sido preparado para impresión mediante PrusaSlicer en modo experto, configurando perfiles personalizados de material y parámetros de impresión. Además, se han realizado ajustes en firmware Marlin para optimizar el comportamiento de la impresora.",
        "emphasized": false
      }
    ],
    "groups": [
      {
        "title": "🔧 Tecnologías",
        "items": [
          "Onshape",
          "PrusaSlicer",
          "Marlin",
          "FDM"
        ],
        "displayAsTags": true
      },
      {
        "title": "🎯 Objetivo",
        "items": [
          "Diseñar una estructura 3D compleja funcional.",
          "Aplicar conceptos de modelado paramétrico.",
          "Validar el diseño mediante fabricación real."
        ],
        "displayAsTags": false
      },
      {
        "title": "🚀 Alcance",
        "items": [
          "Diseño completo de geometría multicapa compleja.",
          "Optimización para impresión sin fallos estructurales.",
          "Integración diseño, slicing y fabricación.",
          "Ajuste de parámetros de impresión y hardware."
        ],
        "displayAsTags": false
      }
    ]
  }
];
