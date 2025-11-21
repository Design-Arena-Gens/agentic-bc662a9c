import { implementationRoadmap } from "@/content/overview";

export function ImplementationTimeline() {
  return (
    <section className="space-y-8 rounded-3xl bg-gradient-to-br from-white via-slate-50 to-slate-100 p-8 ring-1 ring-slate-100">
      <header className="space-y-2">
        <h2 className="text-2xl font-bold text-slate-900">
          خارطة الطريق لتنزيل التقنيات البيداغوجية
        </h2>
        <p className="text-slate-600">
          مخطط عملي يساعد مسؤولي التكوين المهني على الانتقال من التشخيص إلى التعميم مع ضمان جودة التنفيذ والتتبع.
        </p>
      </header>
      <ol className="relative space-y-6 pl-6">
        <span className="absolute left-0 top-1 h-full w-px bg-gradient-to-b from-primary-400 to-primary-700" />
        {implementationRoadmap.map((step, index) => (
          <li key={step.step} className="relative rounded-2xl bg-white p-5 shadow-sm shadow-primary-100">
            <span className="absolute -left-6 flex size-10 items-center justify-center rounded-full bg-primary-600 text-sm font-bold text-white">
              {index + 1}
            </span>
            <h3 className="text-lg font-semibold text-primary-700">{step.step}</h3>
            <p className="mt-2 text-sm text-slate-600">{step.detail}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}
