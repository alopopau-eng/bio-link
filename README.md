This is a [Next.js](https://nextjs.org/) project.

## Firestore setup

Create `.env.local` with:

```bash
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your-project-id
NEXT_PUBLIC_FIREBASE_API_KEY=your-web-api-key
NEXT_PUBLIC_FIRESTORE_LINKS_COLLECTION=links
```

The home page (`/`) reads links from Firestore and shows them as cards.
Use `/dashboard` to create and update links in Firestore.
