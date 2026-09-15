function FeatureCard({ icon, title, description }) {
    return (
        <div className=" p-6 rounded-2xl   bg-[var(--card-bg)] transition duration-300 hover:-translate-y-1">
            <div className="feature-ico  w-16 h-16  flex items-center justify-center rounded-xl bg-[var(--accent-bg)] text-2xl text-[var(--primary-color)] mb-5">
                {icon}
            </div>

            <h3 className="text-xl font-semibold text-[var(--text-color)]">
                {title}
            </h3>

            <p className="text-base leading-6 text-[var(--muted-text)]">
                {description}
            </p>
        </div>
    );
}

export default FeatureCard;