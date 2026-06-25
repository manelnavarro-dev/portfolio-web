import pythonIcon from "@/shared/assets/skills/python.svg";
import javaIcon from "@/shared/assets/skills/java.svg";
import javascriptIcon from "@/shared/assets/skills/javascript.svg";
import cppIcon from "@/shared/assets/skills/cpp.svg";
import sqliteIcon from "@/shared/assets/skills/sqlite.svg";
import mongodbIcon from "@/shared/assets/skills/mongodb.svg";
import nodejsIcon from "@/shared/assets/skills/nodejs.svg";
import jsonIcon from "@/shared/assets/skills/json.svg";
import dockerIcon from "@/shared/assets/skills/docker.svg";
import linuxIcon from "@/shared/assets/skills/linux.svg";
import bashIcon from "@/shared/assets/skills/bash.svg";
import gitIcon from "@/shared/assets/skills/git.svg";
import redisIcon from "@/shared/assets/skills/redis.svg";
import cloudflareIcon from "@/shared/assets/skills/cloudflare.svg";
import netlifyIcon from "@/shared/assets/skills/netlify.svg";
import deepstreamIcon from "@/shared/assets/skills/deepstream.svg";
import gstreamerIcon from "@/shared/assets/skills/gstreamer.svg";
import ultralyricsIcon from "@/shared/assets/skills/ultralyrics.svg";
import onnxIcon from "@/shared/assets/skills/onnx.svg";
import claudeIcon from "@/shared/assets/skills/claude.svg";
import htmlIcon from "@/shared/assets/skills/html.svg";
import cssIcon from "@/shared/assets/skills/css.svg";
import figmaIcon from "@/shared/assets/skills/figma.svg";
import marlinIcon from "@/shared/assets/skills/marlin.svg";
import onshapeIcon from "@/shared/assets/skills/onshape.svg";
import prusaslicerIcon from "@/shared/assets/skills/prusaslicer.svg";
import zigbeeIcon from "@/shared/assets/skills/zigbee.svg";
import mqttIcon from "@/shared/assets/skills/mqtt.svg";
import zigbee2mqttIcon from "@/shared/assets/skills/zigbee2mqtt.svg";
import home_assistantIcon from "@/shared/assets/skills/home-assistant.svg";

import type { SkillCategory } from "@/entities/skill/model/skill.types";

export const skillCategories: SkillCategory[] = [
  {
    id: "software",
    label: "Software",
    title: "Software Development",
    skills: [
      {
        id: "software-python",
        name: "Python",
        icon: pythonIcon,
        level: 45,
        color: "python",
      },
      {
        id: "software-java",
        name: "Java",
        icon: javaIcon,
        level: 40,
        color: "java",
      },
      {
        id: "software-javascript",
        name: "JavaScript",
        icon: javascriptIcon,
        level: 30,
        color: "js",
      },
      {
        id: "software-c-c",
        name: "C / C++",
        icon: cppIcon,
        level: 35,
        color: "cpp",
      },
      {
        id: "software-sqlite",
        name: "SQLite",
        icon: sqliteIcon,
        level: 10,
        color: "sqlite",
      },
      {
        id: "software-mongodb",
        name: "MongoDB",
        icon: mongodbIcon,
        level: 25,
        color: "mongodb",
      },
      {
        id: "software-node-js",
        name: "Node.js",
        icon: nodejsIcon,
        level: 10,
        color: "nodejs",
      },
      {
        id: "software-json",
        name: "JSON",
        icon: jsonIcon,
        level: 45,
        color: "json",
      },
    ],
  },
  {
    id: "systems",
    label: "Sistemas",
    title: "Systems, DevOps & Cloud",
    skills: [
      {
        id: "systems-docker-docker-compose",
        name: "Docker & Docker Compose",
        icon: dockerIcon,
        level: 50,
        color: "docker",
      },
      {
        id: "systems-linux",
        name: "Linux",
        icon: linuxIcon,
        level: 45,
        color: "linux",
      },
      {
        id: "systems-bash",
        name: "Bash",
        icon: bashIcon,
        level: 35,
        color: "bash",
      },
      {
        id: "systems-git",
        name: "Git",
        icon: gitIcon,
        level: 10,
        color: "git",
      },
      {
        id: "systems-redis",
        name: "Redis",
        icon: redisIcon,
        level: 45,
        color: "redis",
      },
      {
        id: "systems-cloudflare-dns-management",
        name: "Cloudflare - DNS Management",
        icon: cloudflareIcon,
        level: 35,
        color: "cloudflare",
      },
      {
        id: "systems-netlify-hosting-web",
        name: "Netlify - Hosting Web",
        icon: netlifyIcon,
        level: 35,
        color: "netlify",
      },
    ],
  },
  {
    id: "ai",
    label: "IA",
    title: "Artificial Intelligence & Computer Vision",
    skills: [
      {
        id: "ai-nvidia-deepstream",
        name: "NVIDIA DeepStream",
        icon: deepstreamIcon,
        level: 60,
        color: "deepstream",
      },
      {
        id: "ai-gstreamer",
        name: "GStreamer",
        icon: gstreamerIcon,
        level: 50,
        color: "gstreamer",
      },
      {
        id: "ai-ultralyrics",
        name: "Ultralyrics",
        icon: ultralyricsIcon,
        level: 55,
        color: "ultralyrics",
      },
      {
        id: "ai-onnx-tensorrt",
        name: "ONNX & TensorRT",
        icon: onnxIcon,
        level: 40,
        color: "onnx",
      },
      {
        id: "ai-ai-agents",
        name: "AI Agents",
        icon: claudeIcon,
        level: 10,
        color: "claude",
      },
    ],
  },
  {
    id: "web",
    label: "Web",
    title: "Web Development",
    skills: [
      {
        id: "web-html5",
        name: "HTML5",
        icon: htmlIcon,
        level: 45,
        color: "html",
      },
      {
        id: "web-css",
        name: "CSS",
        icon: cssIcon,
        level: 40,
        color: "css",
      },
      {
        id: "web-javascript",
        name: "JavaScript",
        icon: javascriptIcon,
        level: 30,
        color: "js",
      },
      {
        id: "web-figma",
        name: "Figma",
        icon: figmaIcon,
        level: 10,
        color: "figma",
      },
    ],
  },
  {
    id: "printing",
    label: "Impresión 3D",
    title: "3D Printing",
    skills: [
      {
        id: "printing-marlin",
        name: "Marlin",
        icon: marlinIcon,
        level: 50,
        color: "marlin",
      },
      {
        id: "printing-onshape",
        name: "Onshape",
        icon: onshapeIcon,
        level: 40,
        color: "onshape",
      },
      {
        id: "printing-prusaslicer",
        name: "PrusaSlicer",
        icon: prusaslicerIcon,
        level: 55,
        color: "prusaslicer",
      },
    ],
  },
  {
    id: "iot",
    label: "IoT",
    title: "IoT & Smart Home",
    skills: [
      {
        id: "iot-zigbee",
        name: "Zigbee",
        icon: zigbeeIcon,
        level: 40,
        color: "zigbee",
      },
      {
        id: "iot-mqtt",
        name: "MQTT",
        icon: mqttIcon,
        level: 45,
        color: "mqtt",
      },
      {
        id: "iot-zigbee2mqtt",
        name: "Zigbee2MQTT",
        icon: zigbee2mqttIcon,
        level: 50,
        color: "zigbee2mqtt",
      },
      {
        id: "iot-home-assistant",
        name: "Home Assistant",
        icon: home_assistantIcon,
        level: 65,
        color: "homeassistant",
      },
    ],
  },
];
