export default function Estructuras() {
  return (
    <main className="mt-4">
      <header className="mb-3">
        <h2 className="h3 fw-bold text-body-emphasis">🔗 Estructuras de Datos</h2>
        <p className="m-0 text-subtle">Listado de estructuras y análisis de complejidad.</p>
      </header>

      <section className="row g-3">
        <div className="col-12 col-lg-8">
          <div className="card shadow-sm rounded-4">
            <div className="card-body text-body bg-surface">
              <h3 className="h5 fw-bold text-body-emphasis">Temas vistos</h3>
              <ul className="mb-0">
                <li>Listas, pilas y colas</li>
                <li>Listas enlazadas (simple/doble)</li>
                <li>Árboles (BST) y recorridos</li>
                <li>Tablas hash: colisiones y dispersión</li>
                <li>Big-O: tiempo y espacio</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-12 col-lg-4">
          <div className="card shadow-sm rounded-4">
            <div className="card-body text-body bg-surface">
              <h3 className="h6 fw-bold text-body-emphasis">Recursos</h3>
              <ul className="mb-0">
                <li>Implementaciones en Java/JS</li>
                <li>Guía de Big-O</li>
                <li>Ejercicios tipo entrevista</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-12">
          <div className="card shadow-sm rounded-4">
            <div className="card-body text-body bg-surface">
              <h3 className="h5 fw-bold text-body-emphasis">Proyecto / Evidencias</h3>
              <p className="mb-0">Simulador de cola de atención con métricas de rendimiento.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
