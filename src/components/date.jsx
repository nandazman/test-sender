import dayjs from "dayjs";
import "dayjs/locale/id";

export default function Date({ date }) {
  dayjs.locale("id");
  const dateString = dayjs(date).locale("id").format("dddd, DD MMMM YYYY");
  return <time dateTime={dateString}>{dateString}</time>;
}
