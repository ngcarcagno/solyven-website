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

  const sectionTitle = MissionVisionContent.missionVision.title;
  const sectionSubtitle = MissionVisionContent.missionVision.subtitle;

  return (
    <section id="mission" style={{ display: "flex", justifyContent: "center", padding: "4rem 1rem" }}>
      <div style={{ width: "100%", maxWidth: 1200, textAlign: "center" }}>
        <div className="services-title-container">
          <h6 style={{ margin: 0 }}>{sectionTitle}</h6>
        </div>

        {sectionSubtitle && (
          <div className="section-description">
            <p className="subtitle">{sectionSubtitle}</p>
          </div>
        )}

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
                    className="flex flex-col items-center text-center rounded-2xl"
                    style={{
                      minHeight: "100%",
                      background: "linear-gradient(180deg, rgba(20,20,20,0.95), rgba(36,36,36,0.95))",
                      color: "var(--color-text-primary)",
                      border: "1px solid rgba(255,255,255,0.06)",
                      boxShadow: "0 18px 40px rgba(0,0,0,0.6), 0 0 40px rgba(247,88,0,0.06)",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "flex-start", // align content to top
                      paddingTop: "7rem", // increase top padding so text sits below header
                      position: "relative",
                      overflow: "hidden",
                    }}>
                    <div
                      style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        right: 0,
                        height: "3rem",
                        display: "flex",
                        alignItems: "center",
                        gap: 12,
                        padding: "0 1rem",
                        borderBottom: "1px solid rgba(255,255,255,0.04)",
                        background: "linear-gradient(180deg, rgba(255,255,255,0.02), rgba(255,255,255,0.005))",
                      }}>
                      <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                        <Icon size={28} color="var(--color-secondary)" />
                      </div>
                      <div style={{ textAlign: "left" }}>
                        <h3 style={{ fontSize: "1.0625rem", fontWeight: 700, margin: 0, textTransform: "uppercase" }}>
                          {c.title}
                        </h3>
                      </div>
                    </div>

                    <div
                      style={{
                        padding: "0 1rem",
                        marginTop: 8,
                        display: "flex",
                        alignItems: "flex-start",
                        justifyContent: "center",
                      }}>
                      <p
                        style={{
                          maxWidth: 640,
                          margin: "0 auto",
                          color: "rgba(255,255,255,0.9)",
                          textTransform: "uppercase",
                        }}>
                        {c.text}
                      </p>
                    </div>
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
