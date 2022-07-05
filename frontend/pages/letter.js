import Layout from "../components/layout";
import Markdown from "../components/markdown";
import { useState, useEffect } from "react";

const API_HOSTNAME = process.env.NEXT_PUBLIC_API_HOSTNAME

const Letter = () => {
    const [body, setBody] = useState("");

    useEffect(() => {
        (async () => {
            const res = await fetch(`${API_HOSTNAME}/api/information-letter`);
            const { data } = await res.json();
            const { content } = data.attributes;

            setBody(content);
        })();
    }, []);


    return <Layout meta={{ title: "Information Letter - Sports Day" }}>
        <Markdown>
            {body}
        </Markdown>
    </Layout>
};
export default Letter;
