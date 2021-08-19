import React, {useEffect, useState} from "react";
import {JsonEditor as Editor} from 'jsoneditor-react';
import 'jsoneditor-react/es/editor.min.css';
import {fetchRandomData} from "./fetchRandomData";

export default function RandomData() {
    const [data, setData] = useState(null);

    useEffect(() => {
        // handle first component load
        fetchRandomData(setData);
    }, []);

    if (data) return <Editor value={data} onChange={setData} />;
    return null;
};
