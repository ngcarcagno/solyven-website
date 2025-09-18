import React from "react";
import CardSwap, { Card } from "../../components/CardSwap/CardSwap";
import MissionVisionContent from "../../content/MissionVisionContent.json";
// @ts-ignore: may not have types installed for lucide-react in this project
import { ShieldCheck, Globe } from "lucide-react";

const iconMap: Record<string, React.FC<any>> = {
  ShieldCheck,
  Globe,
};

const MissionVision = () => {
  const cards = MissionVisionContent.missionVision.cards;

  const CardAny: any = Card;

  return (
    <section id="mission" style={{ display: "flex", justifyContent: "center", padding: "4rem 1rem" }}>
      <div style={{ width: "100%", maxWidth: 1200, textAlign: "center" }}>
        <h2 style={{ margin: "0 0 1rem 0", fontSize: "1.75rem", color: "var(--color-text-primary)" }}>
          {"Misión & Visión"}
        </h2>
        <p style={{ margin: "0 0 2rem 0", color: "rgba(255,255,255,0.75)" }}>
          Protegiendo lo esencial — Soluciones integrales de monitoreo y seguridad.
        </p>

        <div style={{ display: "flex", justifyContent: "center" }}>
          <CardSwap
            width={900}
            height={520}
            cardDistance={60}
            verticalDistance={70}
            delay={6000}
            pauseOnHover={true}
            onCardClick={() => {}}>
            {cards.map((c) => {
              const Icon = iconMap[c.icon] ?? (() => null);
              return (
                <CardAny key={c.id}>
                  <div
                    className="flex flex-col items-center text-center rounded-2xl p-10"
                    style={{
                      minHeight: "100%",
                      background: "linear-gradient(180deg, rgba(20,20,20,0.95), rgba(36,36,36,0.95))",
                      color: "var(--color-text-primary)",
                      border: "1px solid rgba(255,255,255,0.06)",
                      boxShadow: "0 18px 40px rgba(0,0,0,0.6), 0 0 40px rgba(247,88,0,0.06)",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      padding: "2rem",
                    }}>
                    <div style={{ marginBottom: 16 }}>
                      <Icon size={72} color="var(--color-secondary)" />
                    </div>
                    <h3 style={{ fontSize: "1.25rem", fontWeight: 700, marginBottom: 12 }}>{c.title}</h3>
                    <p style={{ maxWidth: 640, margin: "0 auto", color: "rgba(255,255,255,0.9)" }}>{c.text}</p>
                  </div>
                </CardAny>
              );
            })}
          </CardSwap>
        </div>
      </div>
    </section>
  );
};

export default MissionVision;
