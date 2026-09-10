import { FiCode, FiBarChart2, FiUsers, FiBookOpen } from "react-icons/fi";
import FeatureCard from "../atoms/FeatureCard";

function WhyChooseUs() {
    return (
        <section className="px-10 py-20">

            <div className="text-center mb-12">

                <span className=" px-5 py-2 rounded-full border border-[var(--primary-color)] text-[var(--primary-color)] text-xs font-semibold inline-block  mb-5">
                    WHY CHOOSE US
                </span>

                <h2 className="text-4xl font-semibold text-[var(--text-color)] ">
                    Everything You{" "}
                    <span className="text-[var(--primary-color)]">
                        Need to Grow
                    </span>
                </h2>

                <p className="mt-3 text-lg text-[var(--muted-text)]">
                    Practice. Compete. Learn. All in one place.
                </p>

            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">

                <FeatureCard
                    icon={<FiCode />}
                    title="Wide Range of Problems"
                    description="Solve problems across different difficulty levels and topics."
                />

                <FeatureCard
                    icon={<FiBarChart2 />}
                    title="Instant Feedback"
                    description="Get real-time results and improve faster."
                />

                <FeatureCard
                    icon={<FiUsers />}
                    title="Compete & Grow"
                    description="Participate in contests and climb the leaderboard."
                />

                <FeatureCard
                    icon={<FiBookOpen />}
                    title="Learn Anytime"
                    description="Strengthen your concepts with practice and analysis."
                />

            </div>

        </section>
    );
}

export default WhyChooseUs;