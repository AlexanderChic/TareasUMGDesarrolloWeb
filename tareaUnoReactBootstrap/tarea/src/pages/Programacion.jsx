export default function Programacion() {
  return (
    <main className="mt-4">
      <header className="mb-3">
        <h2 className="h3 fw-bold text-body-emphasis">💻 Programación I</h2>
        <p className="m-0 text-subtle">Sintaxis básica, control de flujo y buenas prácticas.</p>
      </header>

      <section className="row g-3">
        <div className="col-12 col-lg-8">
          <div className="card shadow-sm rounded-4">
            <div className="card-body text-body bg-surface">
              <h3 className="h5 fw-bold text-body-emphasis">Temas vistos</h3>
              <ul className="mb-0">
                <li>Variables, tipos de datos y operadores</li>
                <li>Estructuras de control: if/else, switch</li>
                <li>Bucles: for, while, do…while</li>
                <li>Funciones y alcance</li>
                <li>Arreglos, objetos y manejo de errores básico</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-12 col-lg-4">
          <div className="card shadow-sm rounded-4">
            <div className="card-body text-body bg-surface">
              <h3 className="h6 fw-bold text-body-emphasis">Recursos</h3>
              <ul className="mb-0">
                <li>Apuntes de clase (PDF)</li>
                <li>Ejercicios resueltos</li>
                <li>Repositorio de prácticas</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-12">
          <div className="card shadow-sm rounded-4">
            <div className="card-body text-body bg-surface">
              <h3 className="h5 fw-bold text-body-emphasis">Proyecto / Evidencias</h3>
              <p className="mb-0">Mini-proyecto: consola de cálculos con validaciones y menú interactivo.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
