const TimeZones: Record<string, string> = {
    "utc": "Etc/UTC",
    "est": "America/New_York",
    "in": "Asia/Kolkata",
    "de": "Europe/Berlin"
}
//console.log(TimeZones["in"]);

const server = Bun.serve({
    port: 8080,
    routes: {
        "/": () => new Response("Hello, World!"),
        "/api/v1/time-convert":  {
            GET: () => new Response(JSON.stringify({
                "msg": "Hello, World!"
            })),
            POST: (req) => {
                const url = new URL(req.url);
                const source = url.searchParams.get("src") ?? "utc";
                const target = url.searchParams.get("trg") ?? "est";
                const sourceTime = url.searchParams.get("src_time");
                const targetTime = new Date().toLocaleString("en-US", { timeZone: TimeZones[target] });

                const body = JSON.stringify(
                    {
                        "source_timezone": TimeZones[source],
                        "target_timezone": TimeZones[target],
                        "original_time": sourceTime,
                        "converted_time": targetTime
                    }
                )

                return new Response(body);
            }
        }
    }
})

console.log(`Listening on ${server.url}`);