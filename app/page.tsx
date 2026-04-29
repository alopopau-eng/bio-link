"use client"

import { useEffect, useState } from "react"
import { Card } from "@/components/ui/card"
import { FileCheck, Shield } from "lucide-react"
import { FirestoreLink, getLinks } from "@/lib/firestore-links"

const defaultLinks: FirestoreLink[] = [
  {
    id: "terms",
    title: "الشروط",
    description: "شروط وأحكام استخدام المنصة",
    href: "/terms",
  },
  {
    id: "privacy",
    title: "الخصوصية",
    description: "سياسة الخصوصية وحماية البيانات",
    href: "/privacy",
  },
]

export default function BioLinksPage() {
  const [links, setLinks] = useState<FirestoreLink[]>(defaultLinks)

  useEffect(() => {
    const loadLinks = async () => {
      try {
        const firestoreLinks = await getLinks()
        setLinks([...firestoreLinks, ...defaultLinks])
      } catch {
        setLinks(defaultLinks)
      }
    }

    loadLinks()
  }, [])

  return (
    <main className="min-h-screen bg-background py-12 px-4">
      <div className="mx-auto max-w-2xl">
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

        <div className="space-y-3">
          {links.map((link) => {
            const Icon = link.id === "terms" || link.id === "privacy" ? Shield : FileCheck
            return (
              <a key={link.id} href={link.href} className="block transition-transform hover:scale-[1.02] active:scale-[0.98]">
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
      </div>
    </main>
  )
}
