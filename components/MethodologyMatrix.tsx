import { methodologicalFamilies } from "@/content/overview";

export function MethodologyMatrix() {
  return (
    <section className="space-y-8">
      <header className="space-y-3">
        <h2 className="text-2xl font-bold text-slate-900">
          عائلات التقنيات البيداغوجية المتكاملة
        </h2>
        <p className="text-slate-600">
          يجمع هذا القسم أبرز العائلات البيداغوجية المعتمدة في التكوين المهني، مع إبراز أهدافها، أدواتها، ومداخل تقويمها لضمان اكتساب الكفاءات.
        </p>
      </header>
      <div className="space-y-12">
        {methodologicalFamilies.map((family) => (
          <article
            key={family.id}
            className="rounded-3xl border border-slate-100 bg-white shadow-sm shadow-primary-50"
          >
            <div className="border-b border-slate-100 bg-slate-50 px-6 py-5">
              <h3 className="text-xl font-semibold text-primary-700">
                {family.title}
              </h3>
              <p className="mt-2 text-sm text-slate-600">{family.focus}</p>
            </div>
            <div className="grid gap-6 px-6 py-6 lg:grid-cols-2">
              {family.methods.map((method) => (
                <div
                  key={method.id}
                  className="flex flex-col gap-4 rounded-2xl border border-slate-200 bg-slate-50/60 p-5"
                >
                  <div>
                    <h4 className="text-lg font-semibold text-slate-800">
                      {method.title}
                    </h4>
                    <p className="mt-2 text-sm leading-relaxed text-slate-600">
                      {method.description}
                    </p>
                  </div>
                  <div className="grid gap-3 text-sm text-slate-600">
                    <div>
                      <p className="font-semibold text-slate-800">الأهداف التطبيقية</p>
                      <ul className="mt-1 space-y-1">
                        {method.objectives.map((objective) => (
                          <li key={objective} className="flex gap-2">
                            <span className="mt-1 inline-flex size-1.5 rounded-full bg-primary-500" />
                            <span>{objective}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <p className="font-semibold text-slate-800">أدوات التنفيذ</p>
                      <ul className="mt-1 flex flex-wrap gap-2">
                        {method.tools.map((tool) => (
                          <li
                            key={tool}
                            className="rounded-full border border-primary-100 bg-primary-50 px-3 py-1 text-xs text-primary-700"
                          >
                            {tool}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <p className="font-semibold text-slate-800">منهجية التقويم</p>
                      <p className="mt-1 text-slate-600">{method.evaluation}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
