import React from 'react';

export default function CompaniesMarquee({ darkMode }: any) {
    const companies = [
        'JavaScript', 'TypeScript', 'React', 'Next.js', 'Node.js',
        'Express', 'NestJS', 'MongoDB', 'PostgreSQL', "SQL", 'NoSql'
    ];

    return (
        <section className="bg-gradient-to-r from-purple-600 to-purple-500 py-8 overflow-hidden">
            <div className="flex animate-marquee whitespace-nowrap">
                {[...companies, ...companies].map((company, i) => (
                    <span key={i} className="mx-12 text-2xl font-semibold text-white/90">
                        {company}
                    </span>
                ))}
            </div>
        </section>
    );
}