import Layout from "../components/layout";
import { Accordion, Text } from "@mantine/core"
import { useState, useEffect } from "react";

const API_HOSTNAME = process.env.NEXT_PUBLIC_API_HOSTNAME;

const Quiz = () => {

    const [questions, setQuestions] = useState();

    useEffect(() => {
        (async () => {
            const res = await fetch(`${API_HOSTNAME}/api/quiz?populate=questions`);
            const { data } = await res.json();
            setQuestions(data.attributes.questions);
        })();
    }, []);

    return <Layout loading={!questions} meta={{ title: "Lunchtime Quiz - Sports Day" }}>
        {questions &&
            <>
                <Text align="center">Click on a question to view the answer!</Text>
                <Accordion styles={{
                    label: {
                        color: "white"
                    },
                    icon: {
                        color: "white"
                    },
                    item: {
                        color: "white"
                    },
                    control: {
                        "&:hover": {
                            backgroundColor: "#00000020",
                        }
                    }
                }}>
                    {questions.map((q, i) =>
                        <Accordion.Item label={`${i + 1}) ${q.question}`} key={i}>
                            <Text weight={500}>{q.answer_short}</Text>
                            {
                                q.answer_long && <Text size="sm">{q.answer_long}</Text>
                            }
                        </Accordion.Item>
                    )}
                </Accordion>
            </>
        }
    </Layout>
};
export default Quiz;
