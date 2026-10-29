import { useState } from "react";
import TeamCard from "./TeamCard";

interface TeamMember {
  name: string;
  post: string;
  imageUrl: string;
  email: string;
  number: string;
}

interface TeamSectionProps {
  wardens: TeamMember[];
  secretaries: TeamMember[];
  staff: TeamMember[];
}

const TeamSection = ({ wardens, secretaries, staff }: TeamSectionProps) => {
  const [activeTab, setActiveTab] = useState<"wardens" | "secretaries" | "staff">("wardens");

  const currentMembers =
    activeTab === "wardens" ? wardens : activeTab === "secretaries" ? secretaries : staff;

  return (
    <div className="w-full">
      {/* Tab Buttons */}
      <div className="flex justify-center gap-3 sm:gap-4 mb-8 sm:mb-10">
        <button
          onClick={() => setActiveTab("wardens")}
          className={`px-5 sm:px-6 py-2.5 sm:py-3 rounded-full font-semibold text-sm sm:text-base transition-all duration-300 ${
            activeTab === "wardens"
              ? "bg-brand-700 text-white shadow-lg"
              : "bg-white text-slate-700 border border-slate-200 hover:bg-slate-100"
          }`}
        >
          Wardens
        </button>
        <button
          onClick={() => setActiveTab("secretaries")}
          className={`px-5 sm:px-6 py-2.5 sm:py-3 rounded-full font-semibold text-sm sm:text-base transition-all duration-300 ${
            activeTab === "secretaries"
              ? "bg-brand-700 text-white shadow-lg"
              : "bg-white text-slate-700 border border-slate-200 hover:bg-slate-100"
          }`}
        >
          Secretaries
        </button>
        <button
          onClick={() => setActiveTab("staff")}
          className={`px-5 sm:px-6 py-2.5 sm:py-3 rounded-full font-semibold text-sm sm:text-base transition-all duration-300 ${
            activeTab === "staff"
              ? "bg-brand-700 text-white shadow-lg"
              : "bg-white text-slate-700 border border-slate-200 hover:bg-slate-100"
          }`}
        >
          Staff
        </button>
      </div>

      {/* Team Members Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {currentMembers.map((member, index) => (
          <TeamCard
            key={`${member.name}-${index}`}
            name={member.name}
            post={member.post}
            imageUrl={member.imageUrl}
            email={member.email}
            number={member.number}
          />
        ))}
      </div>
    </div>
  );
};

export default TeamSection;
