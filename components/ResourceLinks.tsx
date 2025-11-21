import { resources } from "@/content/overview";

export function ResourceLinks() {
  return (
    <section className="space-y-6 rounded-3xl border border-slate-100 bg-white p-8 shadow-sm">
      <header>
        <h2 className="text-2xl font-bold text-slate-900">موارد داعمة للتعمق</h2>
        <p className="mt-2 text-sm text-slate-600">
          مجموعة انتقائية من المراجع والمنصات المهنية لتعزيز البحث والتجديد البيداغوجي داخل مراكز التكوين.
        </p>
      </header>
      <ul className="space-y-4 text-sm">
        {resources.map((resource) => (
          <li
            key={resource.link}
            className="flex flex-col gap-1 rounded-2xl border border-slate-100 bg-slate-50/60 p-4 hover:border-primary-200"
          >
            <span className="text-sm font-semibold text-primary-700">
              {resource.name}
            </span>
            <span className="text-xs text-slate-500">{resource.type}</span>
            <a
              href={resource.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-primary-600 underline underline-offset-4"
            >
              زيارة المصدر
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
