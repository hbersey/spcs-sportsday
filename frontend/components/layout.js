import { Stack, Title, Box, Loader, Global, Group, Text } from "@mantine/core"
import Logo from "../svg/SPCS_Colour_Logo.svg"
import Link from "next/link";
import Head from "next/head";

// backgroundColor: "#c81d4a"

export const DesignedBy = (props) => <Group position="right" {...props} >
    <Text>Site designed and developed by <a href="https://www.linkedin.com/in/hbersey/" target="_blank" rel="noreferrer" style={{ color: "white", marginRight: 8 }}>Henry Bersey</a></Text>
</Group>;

const Layout = ({ children, loading = false, meta = { title: "Sports Day" }, hideDesignedBy = false }) => {

    return <>

        <Head>
            <title>{meta.title}</title>
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />

        </Head>

        <Global styles={(theme) => ({
            body: {
                ...theme.fn.fontStyles(),
                color: "white"
            },

        })}>
        </Global>

        <Stack style={{ position: "absolute", top: 0, bottom: 0, left: 0, right: 0, }} id="asdasd">
            <Stack mt={4} spacing={0} align="center" style={{ height: "15%" }}>
                <Link href="/">
                    <Logo />
                </Link>
                <Title style={{ fontWeight: 400, fontSize: 28, color: "white" }} > Sports Day</Title>
            </Stack>
            <Stack sx={(theme) => ({
                width: "66%",
                [`@media (max-width: ${theme.breakpoints.md}px)`]: {
                    width: "80%"
                },

                marginLeft: "auto",
                marginRight: "auto",
                flexGrow: 1,
                paddingBottom: 16,
            })}>
                {loading ? <Box style={{ flex: 1, display: "flex" }}>
                    <Box style={{ margin: "auto" }}>

                        <Loader color="white" />

                    </Box>
                </Box>
                    : children
                }
            </Stack>

            {!hideDesignedBy && <DesignedBy />}
        </Stack>


    </>
}
export default Layout;