import Link from "next/link";
import { useSelector } from "react-redux";

import type { RootState } from "@/store";
import Layout from "../layouts/Main";

const ProfilePage = () => {
  const { user } = useSelector((state: RootState) => state.user);

  return (
    <Layout>
      <section className="profile-page" style={{ padding: "60px 0", minHeight: "70vh" }}>
        <div className="container">
          <div style={{ display: "flex", alignItems: "center", marginBottom: "50px", gap: "25px" }}>
            <img 
              src={user.avatar || "/images/featured-1.jpg"} 
              alt={user.name} 
              style={{ width: "120px", height: "120px", borderRadius: "50%", objectFit: "cover", boxShadow: "0 8px 25px rgba(0,0,0,0.15)", border: "4px solid #fff" }} 
            />
            <div>
              <h2 style={{ fontSize: "32px", marginBottom: "8px", fontWeight: "700" }}>Hola, {user.name}</h2>
              <p style={{ color: "#777", fontSize: "16px" }}>Miembro VIP desde Enero 2026</p>
            </div>
          </div>

          <h3 style={{ fontSize: "22px", marginBottom: "25px", fontWeight: "600" }}>Tus Compras Recientes</h3>
          
          <div style={{ background: "#fff", borderRadius: "16px", boxShadow: "0 10px 40px rgba(0,0,0,0.08)", overflow: "hidden" }}>
            <div style={{ overflowX: "auto" }}>
              <table style={{ width: "100%", textAlign: "left", borderCollapse: "collapse" }}>
                <thead style={{ background: "#f8f9fa", borderBottom: "2px solid #eaeaea" }}>
                  <tr>
                    <th style={{ padding: "20px 25px", color: "#555", fontWeight: "600" }}>Pedido #</th>
                    <th style={{ padding: "20px 25px", color: "#555", fontWeight: "600" }}>Fecha</th>
                    <th style={{ padding: "20px 25px", color: "#555", fontWeight: "600" }}>Estado</th>
                    <th style={{ padding: "20px 25px", color: "#555", fontWeight: "600" }}>Total</th>
                    <th style={{ padding: "20px 25px", color: "#555", fontWeight: "600" }}>Acción</th>
                  </tr>
                </thead>
                <tbody>
                  <tr style={{ borderBottom: "1px solid #eaeaea", transition: "background 0.3s ease" }}>
                    <td style={{ padding: "20px 25px", fontWeight: "600", color: "#333" }}>#IN-8402</td>
                    <td style={{ padding: "20px 25px", color: "#666" }}>12 Mayo, 2026</td>
                    <td style={{ padding: "20px 25px" }}><span style={{ background: "#e8f5e9", color: "#2e7d32", padding: "6px 12px", borderRadius: "20px", fontSize: "13px", fontWeight: "600" }}>Entregado</span></td>
                    <td style={{ padding: "20px 25px", fontWeight: "700" }}>S/ 350.00</td>
                    <td style={{ padding: "20px 25px" }}><a href="#" style={{ color: "var(--color-orange)", fontWeight: "600" }}>Ver Recibo</a></td>
                  </tr>
                  <tr style={{ borderBottom: "1px solid #eaeaea", transition: "background 0.3s ease" }}>
                    <td style={{ padding: "20px 25px", fontWeight: "600", color: "#333" }}>#IN-8211</td>
                    <td style={{ padding: "20px 25px", color: "#666" }}>03 Abril, 2026</td>
                    <td style={{ padding: "20px 25px" }}><span style={{ background: "#e8f5e9", color: "#2e7d32", padding: "6px 12px", borderRadius: "20px", fontSize: "13px", fontWeight: "600" }}>Entregado</span></td>
                    <td style={{ padding: "20px 25px", fontWeight: "700" }}>S/ 110.00</td>
                    <td style={{ padding: "20px 25px" }}><a href="#" style={{ color: "var(--color-orange)", fontWeight: "600" }}>Ver Recibo</a></td>
                  </tr>
                  <tr>
                    <td style={{ padding: "20px 25px", fontWeight: "600", color: "#333" }}>#IN-7954</td>
                    <td style={{ padding: "20px 25px", color: "#666" }}>21 Marzo, 2026</td>
                    <td style={{ padding: "20px 25px" }}><span style={{ background: "#fff3e0", color: "#e65100", padding: "6px 12px", borderRadius: "20px", fontSize: "13px", fontWeight: "600" }}>En Camino</span></td>
                    <td style={{ padding: "20px 25px", fontWeight: "700" }}>S/ 245.50</td>
                    <td style={{ padding: "20px 25px" }}><a href="#" style={{ color: "var(--color-orange)", fontWeight: "600" }}>Ver Recibo</a></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          
          <div style={{ marginTop: "50px", textAlign: "right" }}>
            <Link href="/" className="btn btn--rounded btn--yellow">
              Cerrar Sesión
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ProfilePage;
