const destinations = [
  {
    name: "MejoraTuWeb",
    url: "https://www.mejoratuweb.org",
    className: "hotspot--mejoratuweb",
  },
  {
    name: "Sistema Maestro IA",
    url: "https://sistemamaestroia.com",
    className: "hotspot--sistema-maestro-ia",
  },
  {
    name: "VendeConIA",
    url: "https://vendeconia.org",
    className: "hotspot--vendeconia",
  },
  {
    name: "Automatiza Tu Negocio",
    url: "https://automatizatunegocio.org",
    className: "hotspot--automatiza-tu-negocio",
  },
  {
    name: "AbroChat",
    url: "https://app.abrochat.com",
    className: "hotspot--abrochat",
  },
  {
    name: "InfoVendeConIA",
    url: "https://infovendeconia.com",
    className: "hotspot--infovendeconia",
  },
];

export default function App() {
  return (
    <main className="page">
      <div className="poster" aria-label="Presentación de Josué Cabello y sus proyectos">
        <img
          className="poster__image"
          src="/reference.png"
          alt="Josué Cabello en el centro y sus seis proyectos: Sistema Maestro IA, VendeConIA, MejoraTuWeb, Automatiza Tu Negocio, AbroChat e InfoVendeConIA."
          width="1590"
          height="989"
          fetchPriority="high"
        />
        <nav className="project-links" aria-label="Enlaces a los proyectos">
          {destinations.map((project) => (
            <a
              key={project.name}
              className={`hotspot ${project.className}`}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Abrir ${project.name} en una pestaña nueva`}
              title={`Abrir ${project.name}`}
            />
          ))}
        </nav>
      </div>
    </main>
  );
}
