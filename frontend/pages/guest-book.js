import Layout from "../components/layout";
import { Button, Group, Stack, Textarea, Text, Blockquote } from "@mantine/core"
import { Send } from "tabler-icons-react";
import { useRef, useEffect, useState } from "react";
import { useListState } from "@mantine/hooks"

const API_HOSTNAME = process.env.NEXT_PUBLIC_API_HOSTNAME

const Map = () => {

    const textAreaRef = useRef();
    const [sendBtnHeight, setSendBtnHeight] = useState("auto");
    const [currentMessage, setCurrentMessage] = useState("");
    const [messages, messageHandlers] = useListState([]);
    const [loading, setLoading] = useState(true);

    const handleMessageChange = (e) => setCurrentMessage(e.target.value);

    const handleSendMessage = async () => {
        if (!currentMessage.length)
            return;

        await fetch(`${API_HOSTNAME}/api/guest-book-entries`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                data: {
                    text: currentMessage
                }
            })
        });
        messageHandlers.prepend(currentMessage);
        setCurrentMessage("");

    }

    useEffect(() => {
        setSendBtnHeight(textAreaRef.current?.clientHeight || "auto")
    }, [textAreaRef.current?.clientHeight])

    useEffect(() => {
        (async () => {
            const res = await fetch(`${API_HOSTNAME}/api/guest-book-entries`);
            const { data } = await res.json();
            const formattedData = data.map((el) => el.attributes.text).reverse();
            messageHandlers.setState(formattedData);
            setLoading(false);
        })();
    }, []);

    return <Layout loading={loading}>
        <Stack style={{ height: "100%" }}>
            <div>
                <Text pb={0} color="white">Your Message</Text>
                <Group>
                    <Textarea
                        ref={textAreaRef}
                        style={{ flexGrow: 1 }}
                        styles={{
                            input: {
                                backgroundColor: "transparent",
                                color: "white",
                                "&:focus": {
                                    borderColor: "#a39161"
                                }
                            }
                        }}
                        placeholder="Say hi!"
                        value={currentMessage}
                        onChange={handleMessageChange}
                    />
                    <Button style={{ height: sendBtnHeight, backgroundColor: "#a39161" }} onClick={handleSendMessage}>
                        <Send />
                    </Button>
                </Group>
            </div>

            <Stack spacing="xs">
                {messages.map((msg, i) =>
                    <Blockquote
                        key={i}
                        styles={{
                            body: { color: 'white' },
                            icon: { color: 'white' },
                        }}
                    >{msg}</Blockquote>
                )}
            </Stack>

        </Stack>
    </Layout>
};
export default Map;
