export const calendarData = {
  month: "October 2021",
  days: 31,
  weekDays: ["Mon", "Tues", "Wed", "Thurs", "Fri", "Sat", "Sun"],
  startDay: 0, // 0 = Monday
  appointments: {
    25: ["10:00", "11:00", "12:00"],
    26: ["08:00", "09:00", "11:00", "12:00"],
    27: ["12:00", "___", "13:00"],
    28: ["10:00", "11:00", "___"],
    29: ["___", "14:00", "16:00"],
    30: ["12:00", "14:00", "15:00"],
    31: ["09:00", "11:00"]
  }
};

export const detailedAppointments = [
  {
    title: "Dentist",
    time: "09:00-11:00",
    doctor: "Dr. Cameron Williamson",
    color: "#4f46e5",
    textColor: "#fff",
    icon: "🦷"
  },
  {
    title: "Physiotherapy Appointment",
    time: "11:00-12:00",
    doctor: "Dr. Kevin Djones",
    color: "#f3f4fa",
    textColor: "#22223b",
    icon: "💪"
  }
];