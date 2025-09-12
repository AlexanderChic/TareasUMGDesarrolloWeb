export default function BasesDatos() {
  return (
    <main className="mt-4">
      <header className="mb-3">
        <h2 className="h3 fw-bold text-body-emphasis">🗄️ Bases de Datos</h2>
        <p className="m-0 text-subtle">Modelado, consultas SQL y normalización.</p>
      </header>

      <section className="row g-3">
        <div className="col-12 col-lg-8">
          <div className="card shadow-sm rounded-4">
            <div className="card-body text-body bg-surface">
              <h3 className="h5 fw-bold text-body-emphasis">Temas vistos</h3>
              <ul className="mb-0">
                <li>Modelo entidad-relación y diagramas</li>
                <li>Normalización (1FN, 2FN, 3FN)</li>
                <li>Consultas SELECT con filtros y joins</li>
                <li>Agregaciones: GROUP BY, HAVING</li>
                <li>Vistas, índices y buenas prácticas de consulta</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-12 col-lg-4">
          <div className="card shadow-sm rounded-4">
            <div className="card-body text-body bg-surface">
              <h3 className="h6 fw-bold text-body-emphasis">Recursos</h3>
              <ul className="mb-0">
                <li>Script de creación de esquema</li>
                <li>Consultas de ejemplo</li>
                <li>Diagrama ER (dbdiagram.io)</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-12">
          <div className="card shadow-sm rounded-4">
            <div className="card-body text-body bg-surface">
              <h3 className="h5 fw-bold text-body-emphasis">Proyecto / Evidencias</h3>
              <p className="mb-0">Caso: sistema de clientes con consultas de reporte y KPIs básicos.a</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
