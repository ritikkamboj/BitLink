import connectDB from "@/app/lib/mongodb"
import Url from "@/app/model/url";

export async function POST(request) {
    const body = await request.json();
    await connectDB();
    const results = await Url.insertOne(body)



    return Response.json({ message: "Hello World" })
}