module.exports = {
    routes: [
        {
            method: "GET",
            path: "/results/totals",
            handler: "result.totals",
            config: {
                policies: []
            }
        }
    ]
}