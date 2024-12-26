"use client";

import Link from "next/link";
import React, { useState } from "react";

function Shortner() {
    const [url, setUrl] = useState();
    const [newUrl, setNewUrl] = useState();
    const [generate, setGenerate] = useState("");

    function generateLink() {
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        const raw = JSON.stringify({
            "url": url,
            "shorturl": newUrl
        });

        const requestOptions = {
            method: "POST",
            headers: myHeaders,
            body: raw,
            redirect: "follow"
        };

        fetch("/api/shortner", requestOptions)
            .then((response) => response.json())
            .then((result) => {
                setGenerate(`${process.env.NEXT_PUBLIC_HOST}/${newUrl}`);
                setUrl("");
                setNewUrl('');
                console.log(result)
            })
            .catch((error) => console.error(error));

    }
    return (
        <div className="mx-auto max-w-md my-16 p-8 bg-purple-100 rounded-lg flex flex-col gap-4">
            <h1 className="font-bold text-2xl">Generate your URL Shortner </h1>
            <div className="flex flex-col gap-3">
                <input className="p-4 py-2 rounded-md"
                    value={url}
                    type="text"
                    placeholder="Enter Your URL"
                    onChange={(e) => setUrl(e.target.value)}
                />
                <input className="p-4 py-2 rounded-md"
                    value={newUrl}
                    type="text"
                    placeholder="Enter your desired short text"
                    onChange={(e) => setNewUrl(e.target.value)}
                />
                <button onClick={generateLink} className='bg-purple-500 p-3 py-1 font-bold rounded-full shadow-lg text-white my-3'>Generate</button>
            </div>
            {
                generate && <code>
                    <Link target="_blank" href={generate}>{generate}</Link>
                </code>

            }
        </div>
    );
}

export default Shortner;
