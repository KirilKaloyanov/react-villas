export default function formatDate(time: number) {
  const date = new Date(time * 1000);
  const weekDay = date.getDay();
  const day = date.getDate();
  const month = date.getMonth();
  const weekDayNames = [
    "Неделя",
    "Понеделник",
    "Вторник",
    "Сряда",
    "Четвъртък",
    "Петък",
    "Събота",
  ];

  const monthNames = [
    "Януари",
    "Февруари",
    "Март",
    "Април",
    "Май",
    "Юни",
    "Юли",
    "Август",
    "Септември",
    "Октомври",
    "Ноември",
    "Декември",
  ];

  return `${day} ${monthNames[month]} (${weekDayNames[weekDay]})`;
}
