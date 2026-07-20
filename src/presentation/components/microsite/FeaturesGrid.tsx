import { RiApps2AiFill } from "react-icons/ri";

import GlowCard from "@/presentation/components/microsite/GlowCard";
import type { AppFeature } from "@/domain/entities/app-entity";

interface FeaturesGridProps {
  features: AppFeature[];
  glowClassName?: string;
  iconColor?: string;
}

export default function FeaturesGrid({
  features,
  glowClassName,
  iconColor = "#FFF",
}: FeaturesGridProps) {
  return (
    <div className="py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
        {features.map((feature) => (
          <GlowCard
            key={feature.id}
            identifier={`feature-${feature.id}`}
            className={glowClassName}
          >
            <div className="p-3 relative">
              <div className="flex items-center gap-x-8 px-3 py-5">
                <div className="text-red-500 transition-all duration-300 hover:scale-125">
                  <RiApps2AiFill size={36} color={iconColor} />
                </div>
                <div>
                  <p className="text-base sm:text-xl mb-2 font-medium uppercase">
                    {feature.title}
                  </p>
                  <p className="text-sm sm:text-base">{feature.description}</p>
                </div>
              </div>
            </div>
          </GlowCard>
        ))}
      </div>
    </div>
  );
}
