// import { BarChart, Bar, ResponsiveContainer, XAxis, YAxis, Label, Cell } from "recharts";
// import { Box, Card, List, SimpleGrid, Text, Button, Stack, Group } from "@mantine/core";
// import Layout, { DesignedBy } from "../components/layout";
// import { useEffect, useState } from "react";

import Layout from "../components/layout";
import { Stack, Group, Text, Title } from "@mantine/core"
import { Clock } from "tabler-icons-react"

// const API_HOSTNAME = process.env.NEXT_PUBLIC_API_HOSTNAME

// const fills = [
//     "#FFD700",
//     "#C0C0C0",
//     "#CD7F32",
//     "#FFFFFF"
// ]


// const ResultCard = ({ result }) => <Card shadow="sm" p="lg" style={{ height: "fit-content" }}>
//     <Text weight={500}>{result.name}</Text>
//     <Text weight={500} size="sm" color="gray">{result.year}
//         {result.sex && <>
//             {" - "}
//             {result.sex == "male" ? "Boys" : "Girls"}
//         </>}
//     </Text>
//     <List type="ordered" size="sm">
//         {result.results.map(({ pupil, house }) =>
//             <List.Item key={house.name}>
//                 <span style={{ color: house.colour }}>
//                     {pupil || house.name}
//                 </span>
//             </List.Item>
//         )}
//     </List>
// </Card>


const Results = () => {

    // const [scores, setScores] = useState([]);
    // const [results, setResults] = useState()


    // useEffect(() => {
    //     (async () => {
    //         const res = await fetch(`${API_HOSTNAME}/api/live-score`);
    //         let { data } = await res.json();

    //         data.attributes["De-la-Mare"] = data.attributes["De_La_Mare"];
    //         delete data.attributes["De_La_Mare"];

    //         const newScores = Object.fromEntries(Object.keys(scores).map(house => [house, data.attributes[house]]));
    //         setScores(newScores);
    //     })();
    // }, []);

    // useEffect(() => {
    //     (async () => {
    //         // Get Scores
    //         const scoresRes = await fetch(`${API_HOSTNAME}/api/results/totals`);
    //         let scoresData = (await scoresRes.json());

    //         let _scores = Object.entries(scoresData).map(([house, score]) => ({ house, score })).reverse();

    //         console.log(_scores);

    //         setScores(_scores);

    //         // Get Results
    //         const resultsRes = await fetch(`${API_HOSTNAME}/api/results?${[... new Array(4)].map((_, i) => `populate[${i}]=place_${i + 1}`).join("&")}`);
    //         let resultsData = (await resultsRes.json()).data;

    //         const formattedResultsData = resultsData.map((el) => {

    //             let obj = {
    //                 name: el.attributes.event,
    //                 year: el.attributes.year,
    //                 sex: el.attributes.sex,
    //                 results: []
    //             }

    //             for (let i = 0; i < 4; i++) {
    //                 if (el.attributes[`place_${i + 1}`] == null || el.attributes[`place_${i + 1}`].data == null)
    //                     break;


    //                 obj.results.push({
    //                     pupil: el.attributes[`place_${i + 1}_pupil`] ?? undefined,
    //                     house: {
    //                         name: el.attributes[`place_${i + 1}`].data.attributes.Name,
    //                         colour: el.attributes[`place_${i + 1}`].data.attributes.colour
    //                     }
    //                 })

    //             }
    //             console.log(obj.results);


    //             return obj;
    //         })

    //         setResults(formattedResultsData);

    //     })();
    // }, []);

    // const sortedScores = scores.sort((a, b) => b.score - a.score).map(({ house }) => house);

    return <Layout meta={{ title: "Results - Sports Day" }} >
        <Stack style={{ height: "100%" }} justify="center">

            <Group style={{ marginLeft: "auto", marginRight: "auto" }}>
                <Title position="center">You will just have to wait and see!</Title>
                <Clock size={48} />
            </Group>
            <Text align="center">The final results will be announced at 3:25 PM</Text>
        </Stack>
    </Layout>


    // return <Layout meta={{ title: "Results - Sports Day" }} hideDesignedBy>
    //     <Stack style={{ minHeight: "100%", overflow: "hidden" }}>
    //         <Box style={{ width: "100%", flexGrow: 1, position: "relative" }}>
    //             <div style={{ position: "absolute", top: 0, bottom: 0, left: 0, right: 0, }}>
    //                 <ResponsiveContainer width="100%" height="99%">
    //                     <BarChart data={scores}>
    //                         <XAxis dataKey="house" stroke="white">
    //                             <Label value="House" offset={0} position="insideBottom" style={{ fill: "white" }} />
    //                         </XAxis>
    //                         <YAxis stroke="white" />
    //                         <Bar dataKey="score" fill="#ffffff">
    //                             {scores.map(({ house }) => <Cell key={house} fill={fills[sortedScores.indexOf(house)]} />)}
    //                         </Bar>
    //                     </BarChart>
    //                 </ResponsiveContainer>
    //             </div>
    //         </Box>

    //         <Group position="center">
    //             <Button style={{ backgroundColor: "#a39161" }} component="a" href="#results">Goto Results</Button>
    //         </Group>

    //     </Stack>
    //     {results && <SimpleGrid breakpoints={[
    //         { minWidth: 'sm', cols: 1 },
    //         { minWidth: 'md', cols: 2 },
    //         { minWidth: 'lg', cols: 3 },
    //     ]}
    //         spacing="xs"
    //         id="results" >
    //         {results.map((result, i) => <ResultCard key={i} {...{ result }} />)}
    //     </SimpleGrid>}

    //     <DesignedBy />

    // </Layout>

};

export default Results;