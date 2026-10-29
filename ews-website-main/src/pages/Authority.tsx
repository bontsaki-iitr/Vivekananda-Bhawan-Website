import appContent from "../assets/data/appContent.json";
import PageHeader from "../components/PageHeader";
import TeamSection from "../components/TeamSection";

const Authority = () => {
  const { team } = appContent;

  return (
    <>
      <PageHeader title="Bhawan Authority" subtitle="The wardens, student secretaries and office staff who run the Bhawan." />
      <section className="px-4 sm:px-6 py-12 sm:py-16">
        <div className="max-w-7xl mx-auto">
          <TeamSection wardens={team.wardens} secretaries={team.secretaries} staff={team.staff} />
        </div>
      </section>
    </>
  );
};

export default Authority;
