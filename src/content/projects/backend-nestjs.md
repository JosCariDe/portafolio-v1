---

title: "Backend escalable y seguro en NestJS"
description: "Desarrollo de una API RESTful utilizando NestJS Basado en una pokedex."
publishDate: 2025-07-02
tags: ["Backend", "NestJS", "TypeScript","Docker", "MongoDB" ,"API REST"]
mainImage: "../../assets/images/nestjs-main.jpeg"
#gallery: 
#  - "~/assets/images/nestjs-gallery-1.jpg"
#  - "~/assets/images/nestjs-gallery-2.jpg"
repoUrl: "https://github.com/JosCariDe/pokedex-nest-learn"
demoUrl: "https://github.com/JosCariDe/pokedex-nest-learn"
---

### Desafíos

Este proyecto representa el desarrollo de una Pokédex como API REST utilizando NestJS, con el objetivo de aplicar conceptos fundamentales del desarrollo backend moderno. El desafío principal fue estructurar una aplicación modular y escalable desde cero, siguiendo las buenas prácticas de NestJS, incluyendo la separación clara de responsabilidades entre controladores, servicios, módulos y DTOs. Además, se trabajó en la preparación del entorno de desarrollo y despliegue mediante Docker, lo que facilita la contenedorización y futura integración con bases de datos y frontend.

### Solución

La solución implementada organiza toda la lógica relacionada con los Pokémon en un módulo dedicado que maneja tanto la recepción como el procesamiento de datos. Se utilizaron DTOs para validar las solicitudes y definir estructuras de datos consistentes, y se creó una entidad base para representar los Pokémon, dejando lista la arquitectura para su conexión con una base de datos en el futuro. También se integró un archivo HTML estático como vista base y se preparó un entorno de desarrollo limpio con archivos de configuración como docker-compose.yaml, TypeScript y Prettier.

### Resultados

Como resultado, se logró una API funcional y mantenible, construida sobre una base sólida que puede escalar fácilmente. El proyecto demuestra dominio en el uso de NestJS y preparación para integrar tecnologías adicionales como bases de datos, autenticación, pruebas automatizadas y un frontend dinámico. Este desarrollo no solo representa un avance técnico, sino también una base reutilizable para futuros proyectos más complejos en el ecosistema JavaScript y TypeScript.
