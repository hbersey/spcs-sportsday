import Layout from "../components/layout";
import { Image, Box } from "@mantine/core"
import { useState, useEffect } from "react";

const API_HOSTNAME = process.env.NEXT_PUBLIC_API_HOSTNAME;

const Map = () => {

    const [imageUrls, setImageUrls] = useState();

    useEffect(() => {
        (async () => {
            const res = await fetch(`${API_HOSTNAME}/api/maps?populate=image`);
            const { data } = await res.json();

            const formattedData = data.map(
                el => `${API_HOSTNAME}${el.attributes.image.data.attributes.url}`
            );

            setImageUrls(formattedData);
        })();
    }, []);

    return <Layout loading={imageUrls == undefined} meta={{ title: "Map - Sports Day" }}>
        {imageUrls && <Box style={{ flex: 1, display: "flex" }}>
            <Box style={{ margin: "auto" }}>
                {imageUrls.map((url, i) => <a href={url} key={i} target="_blank" rel="noreferrer" style={{ textDecoration: "none" }}>
                    <Image
                        src={url}
                        style={{ height: "100%" }}
                        styles={(theme) => ({
                            caption: {
                                color: theme.colors.gray[1],
                            }
                        })}
                        alt="Map"
                        caption="Click to expand."
                    />

                </a>)}
            </Box>
        </Box>}
    </Layout>
};
export default Map;
