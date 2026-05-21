# Instrucciones Personalizadas del Proyecto

## REGLAS PARA INTEGRACIÓN DE GOOGLE DRIVE:
1. Para las imágenes alojadas en Google Drive, DEBES estructurar la etiqueta HTML utilizando el formato de enlace directo de Google. No uses el enlace de previsualización normal. El formato obligatorio es:
   `<img src="https://lh3.googleusercontent.com/d/ID_DE_LA_IMAGEN" ...>`
2. Para los videos alojados en Google Drive, DEBES utilizar una etiqueta `<iframe>` con el enlace de reproducción optimizado. El formato obligatorio es:
   `<iframe src="https://drive.google.com/file/d/ID_DEL_VIDEO/preview" class="w-full h-64" allow="autoplay"></iframe>`
3. En el código, deja la estructura lista y utiliza placeholders claros como `"ID_DE_TU_FOTO_AQUÍ"` o `"ID_DE_TU_VIDEO_AQUÍ"` para que solo se tenga que reemplazar el ID del archivo de Google Drive.

## REGLA PARA VIDEOS EN BUCLE (ALOJADOS EN CLOUDFLARE):
Para los videos de fondo o de paquetes que deben ser automáticos e infinitos, usa la etiqueta nativa `<video>` de HTML5 apuntando al archivo local. El código debe estructurarse exactamente así:
```html
<video autoplay loop muted playsinline class="w-full h-full object-cover">
    <source src="nombre_de_tu_video.mp4" type="video/mp4">
</video>
```
Nota: Es obligatorio incluir los atributos autoplay, loop, muted y playsinline unidos, para asegurar que Cloudflare entregue el video en streaming directo y los navegadores móviles no bloqueen la reproducción automática.
