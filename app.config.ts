export default defineAppConfig({
  speaker: {
    details: [
      { label: "Name", val: "Tim Benniks" },
      {
        label: "Company",
        val: "Hygraph",
        link: "https://hygraph.com",
      },
      {
        label: "Title",
        val: "Developer Relations Lead for outreach and awareness",
      },
      { label: "Location", val: "Greater Toulouse Area, France" },
      { label: "E-mail", val: "timbenniks.dev@gmail.com" },
      {
        label: "Website",
        val: "https://timbenniks.dev",
        link: "https://timbenniks.dev",
      }
    ]
  },
  timeline: {
    items: [
      {
        date: '2020-01-01',
        title: 'Started New Job',
        text: 'Joined the company as a junior developer.',
        image: 'https://example.com/images/job-start.jpg',
      },
      {
        date: '2021-06-15',
        title: 'Promotion to Mid-Level Developer',
        text: 'Promoted to mid-level developer after a year of excellent performance.',
        image: 'https://example.com/images/promotion.jpg',
      },
      {
        date: '2022-11-30',
        title: 'Completed Major Project',
        text: 'Successfully led the development of a major project that increased company revenue by 20%.',
        image: 'https://example.com/images/project-completion.jpg',
      },
      {
        date: '2023-05-20',
        title: 'Attended Tech Conference',
        text: 'Represented the company at a major tech conference and gave a talk on modern web development.',
        image: 'https://example.com/images/conference.jpg',
      },
    ]
  }
})