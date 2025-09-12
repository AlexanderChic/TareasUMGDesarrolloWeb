export default function Redes() {
  return (
    <main className="mt-4">
      <header className="mb-3">
        <h2 className="h3 fw-bold text-body-emphasis">🌐 Redes</h2>
        <p className="m-0 text-subtle">Modelo OSI, direccionamiento y configuración básica.</p>
      </header>

      <section className="row g-3">
        <div className="col-12 col-lg-8">
          <div className="card shadow-sm rounded-4">
            <div className="card-body text-body bg-surface">
              <h3 className="h5 fw-bold text-body-emphasis">Temas vistos</h3>
              <ul className="mb-0">
                <li>Modelo OSI/TCP-IP y protocolos</li>
                <li>VLANs y trunking (802.1Q)</li>
                <li>Subnetting y VLSM</li>
                <li>Ruteo estático básico</li>
                <li>Herramientas: ping, traceroute, ipconfig</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-12 col-lg-4">
          <div className="card shadow-sm rounded-4">
            <div className="card-body text-body bg-surface">
              <h3 className="h6 fw-bold text-body-emphasis">Recursos</h3>
              <ul className="mb-0">
                <li>Diagramas de topología</li>
                <li>Comandos de configuración (Cisco)</li>
                <li>Laboratorios Packet Tracer</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-12">
          <div className="card shadow-sm rounded-4">
            <div className="card-body text-body bg-surface">
              <h3 className="h5 fw-bold text-body-emphasis">Proyecto / Evidencias</h3>
              <p className="mb-0">Topología de 3 switches con VLANs, trunk y pruebas de conectividad.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
