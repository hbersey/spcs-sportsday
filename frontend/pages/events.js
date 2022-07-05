import { Box, Stack, Group, Button } from "@mantine/core";
import Layout from "../components/layout";
import { Friends, School } from "tabler-icons-react"
import { useEffect, useState, useRef } from "react"
import { Worker, Viewer } from "@react-pdf-viewer/core"
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';


const API_HOSTNAME = process.env.NEXT_PUBLIC_API_HOSTNAME



const Events = () => {

    const [mainSchoolUrl, setMainSchoolUrl] = useState();
    const [prePrepUrl, setPrePrepUrl] = useState();

    const [prePrep, setPrePrep] = useState(false);

    const defaultLayoutPluginInstance = defaultLayoutPlugin();

    useEffect(() => {
        (async () => {
            const res = await fetch(`${API_HOSTNAME}/api/programme?populate[0]=main_school&populate[1]=pre_prep`);
            const { data } = await res.json();

            setMainSchoolUrl(`${API_HOSTNAME}${data.attributes.main_school.data[0].attributes.url}`);
            setPrePrepUrl(`${API_HOSTNAME}${data.attributes.pre_prep.data[0].attributes.url}`)

        })();
    }, []);



    return <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.14.305/build/pdf.worker.min.js">
        <Layout meta={{title: "Programme - Sports Day"}}>
            <Stack style={{ height: "100%" }}>
                <Group position="center">
                    <Button
                        style={{
                            backgroundColor: prePrep ? "#a39161" : "white",
                            color: prePrep ? "white" : "#a39161",
                        }}
                        onClick={() => setPrePrep(false)}
                        rightIcon={<School />}
                    >
                        Main School
                    </Button>

                    <Button
                        style={{
                            backgroundColor: prePrep ? "white" : "#a39161",
                            color: prePrep ? "#a39161" : "white"
                        }}
                        onClick={() => setPrePrep(true)}
                        rightIcon={<Friends />}
                    >
                        Pre-Prep
                    </Button>
                </Group>

                <div style={{ flexGrow: 1, position: "relative" }}>
                    <div style={{ position: "absolute", top: 8, bottom: 0, left: 0, right: 0 }}>

                        {(mainSchoolUrl && !prePrep)
                            && <Viewer fileUrl={mainSchoolUrl} plugins={[defaultLayoutPluginInstance]} />
                        }


                        {(prePrepUrl && prePrep)
                            && <Viewer fileUrl={prePrepUrl} plugins={[defaultLayoutPluginInstance]} />
                        }
                    </div>

                </div>

            </Stack>
        </Layout >
    </Worker>
};
export default Events;
