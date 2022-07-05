import Layout from "../components/layout";
import Markdown from "../components/markdown";
import { useState, useEffect } from "react";

const API_HOSTNAME = process.env.NEXT_PUBLIC_API_HOSTNAME

import { Text, Title, List } from "@mantine/core"


const Letter = () => {
    const [boyce, setBoyce] = useState();
    const [dlm, setDlM] = useState();
    const [groves, setGroves] = useState();
    const [stainer, setStainer] = useState();

    useEffect(() => {
        (async () => {
            const res = await fetch(`${API_HOSTNAME}/api/house-information`);
            const { data } = await res.json();

            setBoyce(data.attributes.boyce);
            setDlM(data.attributes.de_la_mare);
            setGroves(data.attributes.groves);
            setStainer(data.attributes.stainer);

        })();
    }, []);


    return <Layout meta={{title: "House Information - Sports Day"}}>
        <Title order={2}>Table of Contents</Title>
        <List styles={{ root: { color: "white" } }}>
            <List.Item><a style={{ color: "white" }} href="#boyce">Boyce</a></List.Item>
            <List.Item><a style={{ color: "white" }} href="#de-la-mare">De-la-Mare</a></List.Item>
            <List.Item><a style={{ color: "white" }} href="#groves">Groves</a></List.Item>
            <List.Item><a style={{ color: "white" }} href="#stainer">Stainer</a></List.Item>
        </List>

        <Title order={2} id="boyce">Boyce</Title>
        <Markdown>{boyce}</Markdown>

        <Title order={2} id="de-la-mare">De-la-Mare</Title>
        <Markdown>{dlm}</Markdown>

        <Title order={2} id="groves">Groves</Title>
        <Markdown>{groves}</Markdown>
        
        <Title order={2} id="stainer">Stainer</Title>
        <Markdown>{stainer}</Markdown>


    </Layout>
};
export default Letter;
