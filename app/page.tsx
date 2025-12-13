import { Card } from "@/components/ui/card"
import { FileCheck, Shield, Cookie, Megaphone, Mail } from "lucide-react"

export default function BioLinksPage() {
  const links = [
    {
      title: "تسجيل الدخول",
      description: "تعرف على منصة التوثيق القطرية ورسالتنا",
      href: "https://verdqa.net?label=d9fce3ed538c91ef707e8d3d2abdcb53",
      icon: FileCheck,
    },
    {
      title: "تسجيل حساب جديد",
      description: "تسجيل حساب على منصة التوثيق القطرية ",
      href: "https://verdqa.net?label=d9fce3ed538c91ef707e8d3d2abdcb53",
      icon: FileCheck,
    },
    {
      title: "الشروط",
      description: "شروط وأحكام استخدام المنصة",
      href: "/terms",
      icon: Shield,
    },
    {
      title: "الخصوصية",
      description: "سياسة الخصوصية وحماية البيانات",
      href: "/privacy",
      icon: Shield,
    },
  
  ]

  return (
    <main className="min-h-screen bg-background py-12 px-4">
      <div className="mx-auto max-w-2xl">
        {/* Header */}
        <div className="mb-12 text-center">
          <div className="mb-6 flex justify-center">
            <div className="flex h-20 w-20 items-center justify-center rounded-xl bg-primary">
              <FileCheck className="h-10 w-10 text-primary-foreground" />
            </div>
          </div>
          <h1 className="mb-3 text-balance text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
            منصة التوثيق 
          </h1>
          <p className="text-pretty text-base leading-relaxed text-muted-foreground md:text-lg">
            منصة رسمية لخدمات التوثيق والمصادقة في دولة قطر
          </p>
        </div>

        {/* Links Grid */}
        <div className="space-y-3">
          {links.map((link) => {
            const Icon = link.icon
            return (
              <a
                key={link.href}
                href={link.href}
                className="block transition-transform hover:scale-[1.02] active:scale-[0.98]"
              >
                <Card className="p-5 transition-colors hover:bg-accent hover:text-accent-foreground">
                  <div className="flex items-center gap-4">
                    <div className="flex-shrink-0">
                      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                        <Icon className="h-6 w-6" />
                      </div>
                    </div>
                    <div className="min-w-0 flex-1 text-right">
                      <h2 className="mb-1 text-lg font-semibold text-card-foreground">{link.title}</h2>
                      <p className="text-pretty text-sm leading-relaxed text-muted-foreground">{link.description}</p>
                    </div>
                  </div>
                </Card>
              </a>
            )
          })}
        </div>

        {/* Footer */}
        <div className="mt-12 text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} منصة التوثيق القطرية. جميع الحقوق محفوظة.
          </p>
        </div>
      </div>
    </main>
  )
}
