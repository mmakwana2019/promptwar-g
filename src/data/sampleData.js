export const currentUser = {
  id: "usr_123",
  name: "Alex Jensen",
  role: "Attendee",
  company: "TechNexus",
  ticketType: "VIP Pass",
  qrCodeData: "Lumiere_Event_Alex_Jensen_VIP_12345",
  avatarUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=Alex",
};

export const announcements = [
  {
    id: 1,
    title: "Keynote moved to Main Stage A",
    time: "10 min ago",
    urgent: true,
  },
  {
    id: 2,
    title: "Lunch is now served in the courtyard",
    time: "1 hour ago",
    urgent: false,
  }
];

export const agendaItems = [
  {
    id: "session_1",
    title: "Opening Keynote: Future of Spatial Computing",
    speaker: "Elena Rodriguez",
    speakerRole: "VP of Product, Visionary Inc.",
    time: "09:00 AM - 10:30 AM",
    location: "Main Stage A",
    track: "Keynote",
    description: "Join us as we explore the boundaries of ambient computing and spatial interfaces.",
    saved: true,
  },
  {
    id: "session_2",
    title: "Designing for Attention in a Distracted World",
    speaker: "Marcus Chen",
    speakerRole: "Lead Designer, StudioX",
    time: "11:00 AM - 12:00 PM",
    location: "Room 204",
    track: "Design",
    description: "A deep dive into cognitive load and minimalism in modern UI.",
    saved: true,
  },
  {
    id: "session_3",
    title: "Web Performance Optimization Masterclass",
    speaker: "Sarah Jenkins",
    speakerRole: "Performance Engineer",
    time: "01:30 PM - 03:00 PM",
    location: "Room 101",
    track: "Engineering",
    description: "Learn cutting-edge techniques to make your web apps load instantly.",
    saved: false,
  },
  {
    id: "session_4",
    title: "Networking Mixer",
    speaker: "Event Staff",
    speakerRole: "Host",
    time: "04:00 PM - 06:00 PM",
    location: "Courtyard Terrace",
    track: "Social",
    description: "Unwind and meet fellow attendees.",
    saved: false,
  }
];

export const venueZones = [
  { id: "z1", name: "Main Stage A", status: "Active Session", icon: "Mic" },
  { id: "z2", name: "Room 204", status: "Upcoming", icon: "Monitor" },
  { id: "z3", name: "Courtyard Terrace", status: "Open", icon: "Coffee" },
  { id: "z4", name: "Registration Desk", status: "Quiet", icon: "UserCheck" },
];
