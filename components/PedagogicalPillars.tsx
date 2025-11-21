import { pedagogicalPillars } from "@/content/overview";

export function PedagogicalPillars() {
  return (
    <section
      id="pillars"
      className="space-y-8 rounded-3xl bg-white p-8 shadow-lg ring-1 ring-slate-100"
    >
      <header className="space-y-2">
        <h2 className="text-2xl font-bold text-slate-900">
          الركائز الاستراتيجية للتقنيات البيداغوجية
        </h2>
        <p className="text-slate-600">
          تمثل هذه الركائز إطاراً مرجعياً لضمان الملاءمة مع سوق الشغل، جودة التعلم، واستدامة التطوير المهني للمدربين والمتكونين.
        </p>
      </header>
      <div className="grid gap-6 md:grid-cols-3">
        {pedagogicalPillars.map((pillar) => (
          <article
            key={pillar.title}
            className="flex flex-col gap-3 rounded-2xl border border-slate-100 bg-slate-50/60 p-5"
          >
            <h3 className="text-lg font-semibold text-primary-700">{pillar.title}</h3>
            <ul className="space-y-2 text-sm text-slate-600">
              {pillar.points.map((point) => (
                <li key={point} className="flex items-start gap-2">
                  <span className="mt-1 size-2 rounded-full bg-primary-500" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
