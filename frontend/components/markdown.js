import ReactMarkdown from "react-markdown";
import remarkGfm from 'remark-gfm';
import rehypeRaw from "rehype-raw";
import { List, ListItem, Text, Title } from "@mantine/core";

const Markdown = (props) => <ReactMarkdown
    {...props}
    remarkPlugins={[[remarkGfm, { singleTilde: false }]]}
    rehypePlugins={[rehypeRaw]}
    components={{
        "p": ({ node, ...props }) => <Text {...props} />,
        "ul": ({ node, ...props }) => <List {...props} style={{ color: "white", ...(props.style || {}) }} />,
        "ol": ({ node, ...props }) => <List type="ordered" {...props} style={{ color: "white", ...(props.style || {}) }} />,
        "li": ({ node, ...props }) => <ListItem {...props} />,
        ...Object.fromEntries([...new Array(6)].map(
            (_, i) => [`h${i + 1}`, ({ node, ...props }) => <Title order={i + 1} {...props} />]
        ))
    }}
/>

export default Markdown;