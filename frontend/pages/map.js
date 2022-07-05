import Layout from "../components/layout";
import { Image, Box } from "@mantine/core"
import { useState, useEffect } from "react";

const API_HOSTNAME = process.env.NEXT_PUBLIC_API_HOSTNAME;

const Map = () => {

    const [imageUrl, setImageUrl] = useState();

    useEffect(() => {
        (async () => {
            const res = await fetch(`${API_HOSTNAME}/api/map?populate=image`);
            const { data } = await res.json();

            const url = `${API_HOSTNAME}${data.attributes.image.data.attributes.url}`;
            setImageUrl(url);

        })();
    }, []);

    return <Layout loading={imageUrl == undefined} meta={{ title: "Map - Sports Day" }}>
        <Box style={{ flex: 1, display: "flex" }}>
            <Box style={{ margin: "auto" }}>
                <a href={imageUrl}  target="_blank" rel="noreferrer">
                    <Image src={imageUrl} style={{ height: "100%" }} />

                </a>
            </Box>
        </Box>
    </Layout>
};
export default Map;
