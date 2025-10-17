import * as React from "react";

const TextAboutMe: React.FC = () => {
    return (
        <div className="text-justify mx-12">
            <p>Always up for a challenge. With <strong>7+ years in the field</strong> across <strong>F500s</strong>, national institutions, and NGOs. I’ve become a <strong>versatile engineer</strong> who uses technology to make a real impact. I don’t chase hype; I build things that matter.</p>
            <br />
            <p>I’m essentially a <strong>one-person product team</strong>. I take raw business needs, from workflow bottlenecks to new GenAI ideas, and turn them into working, <strong>production-grade applications</strong>. My experience spans the <strong>full stack</strong>, so I see the whole picture, not just the code.</p>
            <br />
            <p>I specialize in <strong>end-to-end delivery</strong> with a focus on <strong>cost-efficiency over scale</strong>. I build fast, data-driven apps using <strong>Python (FastAPI/Django)</strong> and architect them for flexible, optimized deployment on <strong>AWS, Azure, or internal clouds</strong>. If you need an <strong>AI-powered MVP or automation built right the first time</strong>, <a href="mailto:contact@isar.pro" className="underline text-blue-600 dark:text-blue-400">get in touch with me</a>.</p>
        </div>
    );
};

export default TextAboutMe;