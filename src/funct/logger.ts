import logger from "pino";
import dayjs from "dayjs";

const log =logger (
{
    transport:{
        target: 'pino-pretty',
        options: {
            levelFirst: true,
            ignore: 'pid,hostname',
        },
    },
    timestamp: () => `,"time 🕰": "${dayjs().format()}"`,

}
)

export default log;