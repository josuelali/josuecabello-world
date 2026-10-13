# josuecabello.world — V1

Web de presentación fiel a la imagen original. La imagen se conserva sin retoques y se muestra en su proporción original; seis enlaces HTML transparentes se superponen sobre sus proyectos. En teclado, el enlace activo muestra un contorno visible. En pantalla táctil, cada zona abre el sitio correspondiente.

## Probar en local

Requisitos: Node.js 20 o posterior.

```bash
npm install
npm run dev
```

Vite mostrará la dirección local (normalmente `http://localhost:5173`). Para comprobar la versión de producción local:

```bash
npm run build
npm run preview
```

## Destinos enlazados

| Proyecto | Dirección |
| --- | --- |
| MejoraTuWeb | https://www.mejoratuweb.org |
| Sistema Maestro IA | https://sistemamaestroia.com |
| VendeConIA | https://vendeconia.org |
| Automatiza Tu Negocio | https://automatizatunegocio.org |
| AbroChat | https://app.abrochat.com |
| InfoVendeConIA | https://infovendeconia.com |

Todos se abren en una pestaña nueva. Las áreas pulsables están definidas en `src/App.tsx` y alineadas en `src/styles.css` con la imagen de `public/reference.png` (1590 × 989 px).

## Despliegue posterior

Proyecto Vite listo para Vercel: importar la carpeta `josuecabello-world`, usar `npm run build` como comando de compilación y `dist` como directorio de salida. No se ha conectado a Vercel ni publicado.
