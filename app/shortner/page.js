"use client";

import React, { useState } from "react";

function Shortner() {
    const [url, setUrl] = useState();
    const [newUrl, setNewUrl] = useState();
    const [generate, setGenerate] = useState(false);

    function handleChange() {

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
                <button className='bg-purple-500 p-3 py-1 font-bold rounded-full shadow-lg text-white my-3'>Generate </button>
            </div>
        </div>
    );
}

export default Shortner;
