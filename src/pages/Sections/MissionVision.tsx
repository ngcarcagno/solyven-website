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
    <div id="mission" style={{ height: "600px", position: "relative" }}>
      <CardSwap cardDistance={60} verticalDistance={70} delay={6000} pauseOnHover={true} onCardClick={() => {}}>
        {cards.map((c) => {
          const Icon = iconMap[c.icon] ?? (() => null);
          return (
            <CardAny key={c.id}>
              <div className="flex flex-col items-center text-center bg-gradient-to-br from-[#181818] to-[#2f2f2f] text-white rounded-2xl p-8 shadow-lg h-full">
                <div className="mb-4">
                  <Icon size={48} />
                </div>
                <h3 className="text-xl font-semibold mb-3">{c.title}</h3>
                <p className="text-base max-w-prose">{c.text}</p>
              </div>
            </CardAny>
          );
        })}
      </CardSwap>
    </div>
  );
};

export default MissionVision;
