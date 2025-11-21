import Link from "next/link";

const pillars = [
  "الكفاءات المهنية",
  "الهندسة التكوينية",
  "الرقمنة والتجريب",
  "الشراكات مع المؤسسة"
];

export function Hero() {
  return (
    <section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary-500 via-primary-600 to-slate-900 px-8 py-16 text-white shadow-xl">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute -left-16 top-8 h-48 w-48 rounded-full bg-white/30 blur-3xl" />
        <div className="absolute right-12 top-1/2 h-64 w-64 -translate-y-1/2 rounded-full bg-teal-300/20 blur-3xl" />
      </div>
      <div className="relative z-10 flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
        <div className="max-w-3xl space-y-4">
          <span className="inline-block rounded-full bg-white/20 px-4 py-1 text-sm font-semibold tracking-wide">
            رؤية التكوين المهني 2030
          </span>
          <h1 className="text-3xl font-bold leading-tight sm:text-4xl md:text-5xl">
            مرجع متكامل للتقنيات البيداغوجية في التكوين المهني
          </h1>
          <p className="text-lg text-slate-100/90">
            وثيقة عملية لتجديد الممارسات الصفية والورشية، تجمع بين المقاربة بالكفاءات، الرقمنة، والتجريب الميداني، مع أدوات جاهزة للتنفيذ والتقييم.
          </p>
          <div className="flex flex-wrap gap-2 text-xs font-semibold uppercase tracking-wide">
            {pillars.map((item) => (
              <span
                key={item}
                className="rounded-full border border-white/30 bg-white/10 px-3 py-1"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-4 rounded-2xl bg-white/10 p-6 backdrop-blur">
          <strong className="text-sm uppercase tracking-widest text-white/80">
            خريطة الطريق المختصرة
          </strong>
          <ol className="space-y-2 text-sm text-slate-100/80">
            <li>1. التشخيص الدقيق للقطاع والمهارات الحرجة</li>
            <li>2. تصميم وضعيات تعلم مهنية واقعية</li>
            <li>3. دمج الوسائط الرقمية والتحليل البياني</li>
            <li>4. التقييم بالمخرجات والدليل المهني</li>
          </ol>
          <Link
            href="#pillars"
            className="inline-flex items-center justify-center rounded-full bg-white px-4 py-2 text-sm font-semibold text-primary-700 transition hover:translate-x-1 hover:bg-teal-100"
          >
            استكشاف الركائز
          </Link>
        </div>
      </div>
    </section>
  );
}
