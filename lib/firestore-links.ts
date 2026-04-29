export type FirestoreLink = {
  id: string
  title: string
  description: string
  href: string
}

type FirestoreStringField = { stringValue?: string }

type FirestoreDocument = {
  name: string
  fields?: {
    title?: FirestoreStringField
    description?: FirestoreStringField
    href?: FirestoreStringField
  }
}

const projectId = process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID
const apiKey = process.env.NEXT_PUBLIC_FIREBASE_API_KEY
const collection = process.env.NEXT_PUBLIC_FIRESTORE_LINKS_COLLECTION || "links"

function getBaseUrl() {
  if (!projectId || !apiKey) {
    throw new Error("Missing NEXT_PUBLIC_FIREBASE_PROJECT_ID or NEXT_PUBLIC_FIREBASE_API_KEY")
  }

  return `https://firestore.googleapis.com/v1/projects/${projectId}/databases/(default)/documents/${collection}?key=${apiKey}`
}

function toLink(document: FirestoreDocument): FirestoreLink {
  return {
    id: document.name.split("/").pop() || crypto.randomUUID(),
    title: document.fields?.title?.stringValue || "",
    description: document.fields?.description?.stringValue || "",
    href: document.fields?.href?.stringValue || "",
  }
}

export async function getLinks(): Promise<FirestoreLink[]> {
  const response = await fetch(getBaseUrl(), { cache: "no-store" })
  if (!response.ok) {
    throw new Error("Unable to load links")
  }

  const data = await response.json()
  return (data.documents || []).map(toLink)
}

export async function createLink(link: Omit<FirestoreLink, "id">): Promise<void> {
  const response = await fetch(getBaseUrl(), {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      fields: {
        title: { stringValue: link.title },
        description: { stringValue: link.description },
        href: { stringValue: link.href },
      },
    }),
  })

  if (!response.ok) {
    throw new Error("Unable to create link")
  }
}

export async function updateLink(link: FirestoreLink): Promise<void> {
  if (!projectId || !apiKey) {
    throw new Error("Missing NEXT_PUBLIC_FIREBASE_PROJECT_ID or NEXT_PUBLIC_FIREBASE_API_KEY")
  }

  const endpoint = `https://firestore.googleapis.com/v1/projects/${projectId}/databases/(default)/documents/${collection}/${link.id}?updateMask.fieldPaths=title&updateMask.fieldPaths=description&updateMask.fieldPaths=href&key=${apiKey}`

  const response = await fetch(endpoint, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      fields: {
        title: { stringValue: link.title },
        description: { stringValue: link.description },
        href: { stringValue: link.href },
      },
    }),
  })

  if (!response.ok) {
    throw new Error("Unable to update link")
  }
}
