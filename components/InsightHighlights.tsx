const highlights = [
  {
    title: "الهندسة المستندة إلى البيانات",
    description:
      "استغلال لوحات القيادة وتحليلات التتبع الرقمي للكشف المبكر عن صعوبات التعلم وضبط التدخلات الفردية." 
  },
  {
    title: "المختبرات المفتوحة",
    description:
      "تطوير مساحات تعلم هجينة تسمح بالابتكار وتجريب حلول صناعية واقعية داخل مراكز التكوين." 
  },
  {
    title: "الشراكات الذكية",
    description:
      "إبرام اتفاقيات مع مؤسسات رائدة لتقاسم التجهيزات، تحديث البرامج، وتوفير فرص الإدماج المهني." 
  }
];

export function InsightHighlights() {
  return (
    <section className="grid gap-6 lg:grid-cols-3">
      {highlights.map((item) => (
        <article
          key={item.title}
          className="rounded-3xl border border-slate-100 bg-white p-6 shadow-sm"
        >
          <h3 className="text-lg font-semibold text-slate-900">{item.title}</h3>
          <p className="mt-2 text-sm text-slate-600">{item.description}</p>
        </article>
      ))}
    </section>
  );
}
