import { Grid, SimpleGrid, Stack, Text } from "@mantine/core";
import { Checklist, Map, FileInfo, Home as HomeIcon, ChartBar, QuestionMark, BrandTwitter, Photo, Book, Messages } from "tabler-icons-react"
import Layout, { DesignedBy } from "../components/layout";
import { createElement, useState, useEffect } from "react"
import Marquee from "react-fast-marquee"

const API_HOSTNAME = process.env.NEXT_PUBLIC_API_HOSTNAME

const MenuItem = ({ icon, title, href = "#" }) =>
  <a {...{ href }} style={{ textDecoration: "none", color: "white", marginTop: 8, marginBottom: 8 }}>
    <Stack style={{ gap: 0 }}>
      {createElement(icon, { size: 48, style: { margin: "auto" } })}
      <Text size="xl" align="center">{title}</Text>
    </Stack>
  </a>


const Home = () => {
  useEffect(() => {
    (async () => {
      const res = await fetch(`${API_HOSTNAME}/api/news`);
      const json = await res.json();
      setNews(json.data.map(el => el.attributes.text));
    })();
  }, [])

  const [news, setNews] = useState([
    "We're having some techincal issues now but we hope you have a great sports day!",
  ]);

  return <Layout hideDesignedBy>
    <Stack style={{ height: "100%" }}>
      <SimpleGrid cols={3} spacing="xl" m="auto" style={{ transform: "translateY(-15%)" }}>
        <MenuItem icon={Checklist} title="Programme" href="/events" />
        <MenuItem icon={Map} title="Map" href="/map" />
        <MenuItem icon={FileInfo} title="Information Letter" href="/letter" />
        <MenuItem icon={ChartBar} title="Results" href="/results" />
        <MenuItem icon={Photo} title="Photos" href="/photos" />
        <MenuItem icon={HomeIcon} title="House Information" href="/houses" />
        <MenuItem icon={QuestionMark} title="Lunchtime Quiz" href="/quiz" />
        <MenuItem icon={BrandTwitter} title="Twitter" href="/twitter" />
        <MenuItem icon={Book} title="Guest Book" href="/guest-book" />
      </SimpleGrid>


      <Stack style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "10%", backgroundColor: "#011841" }}>
        <DesignedBy sx={(theme) => ({
          [`@media (max-width: ${theme.breakpoints.xs}px)`]: {
            transform: "translateY(-200%)"
          },
          top: 0, transform: "translateY(-100%)", lineHeight: "0"
        })} />

        <Text size="xl" sx={(theme) => ({
          position: "absolute",
          top: 0,
          transform: "translateY(-50%)",
          left: 48,
          [`@media (max-width: ${theme.breakpoints.xs}px)`]: {
            left: 8
          },
          backgroundColor: "#a39161",
          paddingLeft: 12,
          paddingRight: 12,
        })}>Breaking News</Text>

        <Marquee style={{ backgroundColor: "white", width: "100%", top: "50%", height: "50%", transform: "translateY(-50%)", position: "absolute" }}>
          {news.map((s, i) => <div key={i} style={{ height: "100%", flex: 1, display: "flex", flexDirection: "column" }}>
            <Text style={{ color: "black", paddingRight: 128, whiteSpace: "nowrap", marginTop: "auto", marginBottom: "auto" }}>{s}</Text>
          </div>)}
        </Marquee>

      </Stack>
    </Stack>
  </Layout>
};


export default Home;