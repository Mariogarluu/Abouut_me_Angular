# 🚀 About Me - Angular Portfolio

[![Angular](https://img.shields.io/badge/Angular-19.2.0-DD0031?style=flat&logo=angular&logoColor=white)](https://angular.io/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.7.2-3178C6?style=flat&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

Una aplicación web personal desarrollada con Angular que presenta un portafolio interactivo con información sobre mí y mis proyectos. Esta aplicación demuestra el uso de componentes standalone de Angular, enrutamiento y formularios reactivos.

## 📋 Características

- ✨ **Página de Inicio Interactiva**: Formulario simple que captura y muestra nombres de usuario
- 👤 **Sección About Me**: Página de perfil personal con foto y enlaces a redes sociales
- 🎨 **Diseño Responsivo**: Interfaz limpia y moderna
- 🔄 **Navegación Fluida**: Navegación entre páginas con Angular Router
- 🎯 **Componentes Standalone**: Arquitectura moderna de Angular sin módulos NgModule

## 🛠️ Tecnologías Utilizadas

- **Framework**: Angular 19.2.0
- **Lenguaje**: TypeScript 5.7.2
- **CLI**: Angular CLI 19.2.18
- **Testing**: Jasmine + Karma
- **Estilos**: CSS3
- **Gestión de Estado**: RxJS 7.8.0

## 📦 Estructura del Proyecto

```
About_me/
├── src/
│   ├── app/
│   │   ├── homr/                 # Componente de página principal
│   │   │   ├── homr.component.ts
│   │   │   ├── homr.component.html
│   │   │   ├── homr.component.css
│   │   │   └── homr.component.spec.ts
│   │   ├── aboutme/              # Componente de perfil
│   │   │   ├── aboutme.component.ts
│   │   │   ├── aboutme.component.html
│   │   │   ├── aboutme.component.css
│   │   │   └── aboutme.component.spec.ts
│   │   ├── app.component.ts      # Componente principal
│   │   ├── app.component.html    # Plantilla con navegación
│   │   ├── app.config.ts         # Configuración de la aplicación
│   │   └── app.routes.ts         # Definición de rutas
│   ├── index.html                # Página HTML principal
│   ├── main.ts                   # Punto de entrada de la aplicación
│   └── styles.css                # Estilos globales
├── public/                       # Archivos estáticos
├── angular.json                  # Configuración de Angular
├── package.json                  # Dependencias del proyecto
└── tsconfig.json                 # Configuración de TypeScript
```

## 🚀 Prerequisitos

Antes de comenzar, asegúrate de tener instalado:

- **Node.js** (versión 18.x o superior)
- **npm** (viene con Node.js)
- **Angular CLI** (se instalará con las dependencias del proyecto)

Para verificar tus instalaciones:

```bash
node --version
npm --version
```

## 💻 Instalación

1. **Clonar el repositorio**

```bash
git clone https://github.com/Mariogarluu/Abouut_me_Angular.git
cd Abouut_me_Angular
```

2. **Instalar dependencias**

```bash
npm install
```

3. **Iniciar el servidor de desarrollo**

```bash
npm start
# o
ng serve
```

4. **Abrir en el navegador**

Navega a `http://localhost:4200/`. La aplicación se recargará automáticamente cuando modifiques los archivos fuente.

## 📜 Scripts Disponibles

| Comando | Descripción |
|---------|-------------|
| `npm start` | Inicia el servidor de desarrollo en http://localhost:4200 |
| `npm run build` | Compila el proyecto para producción en el directorio `dist/` |
| `npm run watch` | Compila el proyecto en modo desarrollo con watch mode |
| `npm test` | Ejecuta las pruebas unitarias con Karma |
| `ng generate component <nombre>` | Genera un nuevo componente |
| `ng generate service <nombre>` | Genera un nuevo servicio |

## 🌐 Uso

### Navegación

La aplicación cuenta con dos páginas principales:

1. **Home** (`/homr`): 
   - Página de inicio con un formulario interactivo
   - Escribe un nombre y presiona Enter para visualizarlo
   - Demuestra el uso de two-way data binding con `[(ngModel)]`

2. **About Me** (`/aboutme`):
   - Información personal del desarrollador
   - Enlaces a redes sociales (GitHub, LinkedIn)
   - Foto de perfil

### Compilación para Producción

Para crear una versión optimizada para producción:

```bash
npm run build
```

Los archivos compilados se almacenarán en el directorio `dist/about-me/` y estarán listos para ser desplegados en cualquier servidor web.

## 🧪 Testing

Ejecutar las pruebas unitarias:

```bash
npm test
```

Este comando ejecutará todas las pruebas utilizando Karma y mostrará los resultados en el navegador.

## 🔧 Configuración de Angular

- **Versión de Angular**: 19.2.0
- **Modo**: Standalone Components (sin NgModules)
- **Routing**: Configurado con Angular Router
- **Optimizaciones de Producción**: Habilitadas por defecto
- **Source Maps**: Habilitados en modo desarrollo

## 🎨 Personalización

Para personalizar la aplicación:

1. **Estilos globales**: Edita `src/styles.css`
2. **Configuración de rutas**: Modifica `src/app/app.routes.ts`
3. **Componentes**: Los componentes están en `src/app/[nombre-componente]/`
4. **Assets**: Coloca archivos estáticos en el directorio `public/`

## 📱 Características de los Componentes

### HomrComponent
- Formulario con validación
- Manejo de eventos de teclado (Enter)
- Binding bidireccional de datos
- Visualización condicional con `*ngIf`

### AboutmeComponent
- Visualización de imagen de perfil
- Enlaces externos a redes sociales
- Diseño centrado y responsive

## 🐛 Solución de Problemas

### Error: "ng: command not found"
```bash
npm install -g @angular/cli
```

### Error al instalar dependencias
```bash
# Limpiar caché de npm
npm cache clean --force
# Eliminar node_modules y package-lock.json
rm -rf node_modules package-lock.json
# Reinstalar
npm install
```

### Puerto 4200 ya en uso
```bash
# Usa un puerto diferente
ng serve --port 4201
```

## 🤝 Contribuir

Las contribuciones son bienvenidas. Para cambios importantes:

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 👨‍💻 Autor

**Mario García Luque**

- GitHub: [@Mariogarluu](https://github.com/Mariogarluu)
- LinkedIn: [Mario García Luque](https://www.linkedin.com/in/mario-garcia-luque/)

## 📄 Licencia

Este proyecto está bajo la Licencia MIT - ver el archivo [LICENSE](LICENSE) para más detalles.

## 🙏 Agradecimientos

- [Angular Team](https://angular.io/) por el excelente framework
- [Angular CLI](https://cli.angular.io/) por las herramientas de desarrollo
- Comunidad de Angular por la documentación y recursos

## 📚 Recursos Adicionales

- [Documentación oficial de Angular](https://angular.dev/)
- [Angular CLI Command Reference](https://angular.dev/tools/cli)
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)
- [RxJS Documentation](https://rxjs.dev/)

---

⭐️ Si este proyecto te resultó útil, considera darle una estrella en GitHub!
