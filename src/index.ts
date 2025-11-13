import convertTime  from './utility'
import getTimeZone from './timezones'

const server = Bun.serve({
    port: 8080,
    routes: {
        "/": () => new Response("Hello, World!"),
        "/api/v1/time-convert/":  {
            GET: (req) => {
                const url = new URL(req.url);
                const source = url.searchParams.get("src") ?? "utc";
                const target = url.searchParams.get("trg") ?? "est";
                const sourceTime = url.searchParams.get("src_time") ?? "2025-01-01 00:00:00.00";
                const targetTime = convertTime(sourceTime, source, target);

                const body = JSON.stringify(
                    {
                        "source_timezone": getTimeZone(source),
                        "target_timezone": getTimeZone(target),
                        "original_time": sourceTime,
                        "converted_time": targetTime
                    }
                )

                return new Response(body);
            }
        }
    },

    fetch(req) {
        return new Response("404: Not Found", { status: 404 });
    }
})

console.log(`Listening on ${server.url}`);