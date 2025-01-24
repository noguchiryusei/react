import React from 'react';
import './Calendar.css';
import { Events } from './Events'; // Eventsをインポート

interface CalendarProps {
  month: number;
  year: number;
  events: Events;
}

interface Day {
  date: number;
  dayOfWeek: number;
}

const Calendar: React.FC<CalendarProps> = ({ month, year, events }) => {
  const getDaysInMonth = (month: number, year: number): number => {
    return new Date(year, month + 1, 0).getDate();
  };

  const getFirstDayOfMonth = (month: number, year: number): number => {
    return new Date(year, month, 1).getDay();
  };

  const calendarDays: Day[] = [];
  const daysInMonth = getDaysInMonth(month, year);
  const firstDay = getFirstDayOfMonth(month, year);

  for (let i = 0; i < firstDay; i++) {
    calendarDays.push({ date: 0, dayOfWeek: (i % 7) });
  }

  for (let date = 1; date <= daysInMonth; date++) {
    const dayOfWeek = (firstDay + date - 1) % 7;
    calendarDays.push({ date, dayOfWeek });
  }

  const renderCalendarBody = () => {
    const rows = [];
    for (let i = 0; i < calendarDays.length; i += 7) {
      const weekDays = calendarDays.slice(i, i + 7);
      rows.push(
        <tr key={i}>
          {weekDays.map((day, index) => {
            if (day.date === 0) {
              return <td key={index}></td>; // 空白のセル
            }

            let textColorClass;
            if (day.dayOfWeek === 6) textColorClass = 'blue-text';
            else if (day.dayOfWeek === 0) textColorClass = 'red-text';
            else textColorClass = 'black-text';

            return (
              <td key={index} className={textColorClass}>
                {day.date}
                <div className="small-text">
                  {events[day.date] || "予定なし"}
                </div>
              </td>
            );
          })}
        </tr>
      );
    }
    return rows;
  };

  return (
    <div className="calendar-container">
      <h2 className="calendar-header">{year}年 {month + 1}月</h2>
      <table className="calendar-table">
        <thead>
          <tr>
            <th className="red-text">日</th>
            <th>月</th>
            <th>火</th>
            <th>水</th>
            <th>木</th>
            <th>金</th>
            <th className="blue-text">土</th>
          </tr>
        </thead>
        <tbody>
          {renderCalendarBody()}
        </tbody>
      </table>
    </div>
  );
};

export default Calendar;