import getTimeZone from "./timezones";

export default function convertTime(dateStr: string, from: string, to: string): string | null {
    try {
        const sourceDate = new Date(
            new Intl.DateTimeFormat('en-US', {
                timeZone: getTimeZone(from),
                year: 'numeric',
                month: '2-digit',
                day: '2-digit',
                hour: '2-digit',
                minute: '2-digit',
                second: '2-digit',
                hour12: false
            }).format(new Date(dateStr))
        );

        const formatter =  new Intl.DateTimeFormat('en-US', {
            timeZone: getTimeZone(to),
            year: 'numeric',
            month: '2-digit',
            day: '2-digit',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            hour12: false
        });

        return formatter.format(sourceDate);
    } catch(err: unknown) {
        if (err instanceof Error) {
        console.error("Invalid timezone or date: ", err.message);
        } else {
            console.error("Unexpected error: ", err);
        }

        return null
    } 
}