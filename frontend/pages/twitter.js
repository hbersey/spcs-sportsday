import Layout from "../components/layout";
import { TwitterTimelineEmbed } from "react-twitter-embed";

const Twitter = () => {
    return <Layout meta={{ title: "Twitter Feed- Sports Day" }}>
        <TwitterTimelineEmbed
            sourceType="profile"
            screenName="stpaulscathsch"
        // options={{ height: 400 }}
        />
    </Layout>
};
export default Twitter;
