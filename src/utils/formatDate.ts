export default function formatDate(time: number) {
  const date = new Date(time * 1000);
  const weekDay = date.getDay();
  const day = date.getDate();
  const month = date.getMonth();
  const weekDayNames = [
    "неделя",
    "понеделник",
    "вторник",
    "сряда",
    "четвъртък",
    "петък",
    "събота",
  ];

  const monthNames = [
    "януари",
    "февруари",
    "март",
    "април",
    "май",
    "юни",
    "юли",
    "август",
    "септември",
    "октомври",
    "ноември",
    "декември",
  ];

  return `${day} ${monthNames[month]} (${weekDayNames[weekDay]})`;
}
