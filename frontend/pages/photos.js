import Layout from "../components/layout";
import { Stack, Image, SimpleGrid, Pagination, Group } from "@mantine/core"
import { useEffect, useState } from "react";
import { useListState } from "@mantine/hooks"
import LazyLoad from "react-lazyload";

const API_HOSTNAME = process.env.NEXT_PUBLIC_API_HOSTNAME
const PHOTOS_PER_PAGE = 10;

const Photos = () => {

    const [photos, photosHandler] = useListState()
    const [page, setPage] = useState(1);

    useEffect(() => {
        (async () => {
            const res = await fetch(`${API_HOSTNAME}/api/photo?populate=photos`);
            const data = (await res.json()).data.attributes.photos.data;

            const photos = data.map(p => `${API_HOSTNAME}${p.attributes.url}`);

            photosHandler.setState(photos);
        })();
    }, []);


    const MyPagination = () => <Group position="center">
        <Pagination total={Math.ceil(photos.length / PHOTOS_PER_PAGE)} page={page} onChange={setPage} styles={{
            item: {
                backgroundColor: "#a39161",
                color: "white",
                border: "none"
            },
            active: {
                backgroundColor: "#011841",
                border: "1px solid white"
            }
        }} />
    </Group>


    return <Layout meta={{ title: "Photos - Sports Day" }} loading={!photos.length}>
        <Stack style={{ height: "100%" }}>
            <MyPagination />

            <SimpleGrid breakpoints={[
                { minWidth: 'xs', cols: 1 },
                { minWidth: 'sm', cols: 2 },
                { minWidth: 'lg', cols: 3 },
            ]}
                spacing="xs">
                {photos.slice(PHOTOS_PER_PAGE * (page - 1), PHOTOS_PER_PAGE * page).map(url =>
                    <LazyLoad key={url}>
                        <Image src={url} imageProps={{ loading: "lazy" }} fit="contain" style={{ paddingBottom: 20 }} />
                    </LazyLoad>
                )}
            </SimpleGrid>

            <MyPagination />

        </Stack>
    </Layout >
};
export default Photos;
