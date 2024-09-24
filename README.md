# Weather App ☀️🌧️❄️

**Weather App** es una aplicación web sencilla que permite a los usuarios obtener información meteorológica en tiempo real de cualquier ciudad del mundo. Utiliza la API de OpenWeatherMap para mostrar datos como la temperatura, la humedad, la velocidad del viento, y una descripción del clima actual con iconos gráficos.

## Características 📋

- **Búsqueda por ciudad**: Introduce el nombre de una ciudad y obtén el clima actual en unidades métricas (°C).
- **Iconos dinámicos**: Muestra un icono correspondiente a las condiciones meteorológicas (sol, lluvia, nieve, nubes, etc.).
- **Detalles del clima**: Visualiza la temperatura actual, descripción del clima, humedad y velocidad del viento.
- **Interfaz amigable**: Diseño sencillo y fácil de usar, con animaciones suaves para la visualización de los datos.
- **Manejo de errores**: Notificaciones y manejo visual en caso de que la ciudad no se encuentre (error 404).

## Tecnologías utilizadas 🛠️

- **HTML5**: Estructura de la aplicación.
- **CSS3**: Estilos y animaciones para una mejor experiencia de usuario.
- **JavaScript**: Lógica de la aplicación y manipulación del DOM.
- **API de OpenWeatherMap**: Servicio externo para obtener datos meteorológicos en tiempo real.

## Instalación 🚀

1. Clona el repositorio:
   ```bash
   git clone https://github.com/tu-usuario/weather-app.git
   ```
2. Navega a la carpeta del proyecto:
   ```bash
   cd weather-app
   ```
3. Abre el archivo index.html en tu navegador o ejecuta un servidor local para ver la aplicación en acción.

## Uso 🔍

1. Escribe el nombre de una ciudad en el cuadro de búsqueda.
2. Presiona "Enter" o haz clic en el botón de búsqueda.
3. Visualiza la información meteorológica de la ciudad solicitada.

## API Key 🔑

Este proyecto utiliza la API de [OpenWeatherMap](https://openweathermap.org/api). Asegúrate de obtener una **API Key** e incluirla en tu código. Puedes reemplazar el valor de la variable `APIKey` en el código con tu propia clave:

```javascript
const APIKey = "tu-api-key-aqui";
```

## Contribución 🤝

Si te gustaría contribuir a este proyecto, ¡no dudes en hacer un fork y enviar un pull request! También puedes abrir un issue para sugerencias o mejoras.
