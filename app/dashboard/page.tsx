"use client"

import { FormEvent, useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { FirestoreLink, createLink, getLinks, updateLink } from "@/lib/firestore-links"

const emptyForm = { title: "", description: "", href: "" }

export default function DashboardPage() {
  const [links, setLinks] = useState<FirestoreLink[]>([])
  const [form, setForm] = useState(emptyForm)

  const loadLinks = async () => {
    const docs = await getLinks()
    setLinks(docs)
  }

  useEffect(() => {
    loadLinks().catch(() => setLinks([]))
  }, [])

  const handleCreate = async (event: FormEvent) => {
    event.preventDefault()
    await createLink(form)
    setForm(emptyForm)
    await loadLinks()
  }

  const handleUpdate = async (link: FirestoreLink) => {
    await updateLink(link)
    await loadLinks()
  }

  return (
    <main className="mx-auto max-w-3xl space-y-6 p-6">
      <h1 className="text-2xl font-bold">Links Dashboard</h1>

      <Card className="p-4">
        <form className="space-y-3" onSubmit={handleCreate}>
          <input
            className="w-full rounded border p-2"
            placeholder="Title"
            value={form.title}
            onChange={(event) => setForm((current) => ({ ...current, title: event.target.value }))}
            required
          />
          <input
            className="w-full rounded border p-2"
            placeholder="Description"
            value={form.description}
            onChange={(event) => setForm((current) => ({ ...current, description: event.target.value }))}
            required
          />
          <input
            className="w-full rounded border p-2"
            placeholder="URL"
            value={form.href}
            onChange={(event) => setForm((current) => ({ ...current, href: event.target.value }))}
            required
          />
          <Button type="submit">Add Link</Button>
        </form>
      </Card>

      <div className="space-y-3">
        {links.map((link) => (
          <Card key={link.id} className="space-y-2 p-4">
            <input
              className="w-full rounded border p-2"
              value={link.title}
              onChange={(event) =>
                setLinks((current) => current.map((item) => (item.id === link.id ? { ...item, title: event.target.value } : item)))
              }
            />
            <input
              className="w-full rounded border p-2"
              value={link.description}
              onChange={(event) =>
                setLinks((current) =>
                  current.map((item) => (item.id === link.id ? { ...item, description: event.target.value } : item)),
                )
              }
            />
            <input
              className="w-full rounded border p-2"
              value={link.href}
              onChange={(event) =>
                setLinks((current) => current.map((item) => (item.id === link.id ? { ...item, href: event.target.value } : item)))
              }
            />
            <Button onClick={() => handleUpdate(link)}>Update</Button>
          </Card>
        ))}
      </div>
    </main>
  )
}
