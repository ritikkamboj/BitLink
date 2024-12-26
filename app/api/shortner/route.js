import clientPromise from "@/app/lib/mongodb";

export async function POST(request) {
    const body = await request.json();
    const res = await clientPromise;
    const db = res.db('bitlink');
    const collection = db.collection('urls');

    const doc = await collection.findOne({ shorturl: body.shorturl });
    if (doc) {
        return Response.json({ success: false, message: "shorturl already exists" });
    }

    await collection.insertOne({
        url: body.url,
        shorturl: body.shorturl
    })

    return Response.json({ success: true, message: "data inserted successfully 2" });

}