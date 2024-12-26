import { redirect } from 'next/navigation'
import clientPromise from '../lib/mongodb'

export default async function Page({ params }) {
    // const router = useRouter()
    const shorturl = (await params).shorturl

    const res = await clientPromise;
    const db = res.db('bitlink');
    const collection = db.collection('urls');

    const doc = await collection.findOne({ shorturl: shorturl });
    if (doc) {
        redirect(doc.url);
    }
    else {
        redirect(`${process.env.NEXT_PUBLIC_HOST}`)
    }

    return Response.json({ success: true, message: "data inserted successfully 2" });
    const url = (await params).url
    return <p>Post: {url}</p>
}