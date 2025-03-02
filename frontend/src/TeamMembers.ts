export interface ExecProps {
  name: string;
  title: string;
  imageUrl: string;
  memory?: string;
}

export interface CommitteeTeam {
  [key: number]: {
    executives: ExecProps[];
    subcommittees: {
      name: string,
      title: string,
      imageUrl: string,
    }[]
  }
}

const formatImageFileName = (year: string, position: string, name: string) => {
  return `teams/${year}/${position}/${name.replace(/ /g, " ")}.jpeg`;
};

const placeHolderUrl: string = "https://www.svgrepo.com/show/508699/landscape-placeholder.svg"

export const committeeMembers: CommitteeTeam = {
  2025: {
    executives: [
      {
        name: "Nile Yar",
        title: "President",
        imageUrl: formatImageFileName("2025", "executives", "Nile Yar"),
        memory: "Being a part of the Myanmar Students' Society (MSS) has been one of the most memorable experiences of my university life at UNSW. From planning cultural events like Thingyan, Da Saung Taing, and Thadingyut  to collaborating with other societies and helping communities back home, each moment has been filled with pride and purpose. MSS has helped me stay connected to my roots while giving me the opportunity to celebrate and share our culture with the wider community. The friendships and memories I’ve made here will always hold a special place in my heart.",
      },
      {
        name: "Myat Thuzar Nwe",
        title: "Vice President",
        imageUrl: formatImageFileName("2025", "executives", "Myat Thuzar Nwe"),
        memory: "Each event brings its own share of ‘chaos,’ but I will always cherish the late nights spent celebrating the International Night Markets with the team. Amidst the hustle and bustle, team spirit shone brightly as everyone embraced the chaos and made the most of it.",
      },
      {
        name: "Thet Htar Aung",
        title: "Secretary",
        imageUrl: formatImageFileName("2025", "executives", "Thet Htar Aung"),
        memory: "My favorite memory with MSS is when we went out for a catch- up dinner after Summer Holidays. Post dinner, we went to sing Karaoke at TownHall and it was probably one of the very rare fun moments I’ve had in a while since I was under a lot of stress at the time. For someone who was still fairly new to the MSS team, all of us dancing to လပ်တီး and jamming to random Burmese songs was quite a memory I’d always cherish. Hanging out with everyone on the team gave me a sense of belonging especially when I was away from home.",
      },
      {
        name: "Phyo Mon Su",
        title: "Arc Delegate",
        imageUrl: formatImageFileName("2025", "executives", "Phyo Mon Su"),
        memory: "Definitely T3 2023 Fresher Welcome! Having Nangyi Thoke with Burmese friends after such a long time is something I’ll never forget. It was like a comforting, warm embrace, especially after not hearing or speaking Burmese for so long—it felt like reconnecting with a part of me I’d missed.",
      },
      {
        name: "Myat Thadar Kyaw",
        title: "Treasurer",
        imageUrl: formatImageFileName("2025", "executives", "Myat Thadar Kyaw"),
        memory: "Definitely 2024 Thingyan. The stormy weather brought strong winds and heavy rain, knocking down our loudspeaker and collapsing the tent. We were drenched in our traditional clothes, but instead of letting it ruin the day, we laughed, helped each other, and embraced the chaos. Despite everything, the festival spirit stayed strong, making it a truly memorable celebration!",
      },
      {
        name: "Arkar Myo",
        title: "Events Director",
        imageUrl: formatImageFileName("2025", "executives", "Arkar Myo"),
        memory: "I hope everyone will remember the 2024 Thingyan. It was an unforgettable day, had bad weather, filled with joy and laughter. Being away from home can be tough, but this society has made me feel at home again. The people here are kind and warm-hearted, and I will truly miss all the events with MSS.",
      },
      {
        name: "Aye Chan San",
        title: "Events Director",
        imageUrl: formatImageFileName("2025", "executives", "Aye Chan San"),
        memory: "As a food lover, I really enjoyed the moments we made Nan Gyi Thoke together. A lot tiring, but the taste never let me down. Shared laughter, enjoyed the food we made ourselves together with lovely mates - such a unique experience which makes me feel like home.",
      },
      {
        name: "Ada Daewi Aung",
        title: "Media and Publicity Director",
        imageUrl: formatImageFileName("2025", "executives", "Ada Daewi Aung"),
        memory: "Being a part of MSS has allowed me to connect with my Burmese culture and find a community that makes me feel like I’m not so far away from home. As someone who has always felt a bit alienated from my Burmese heritage, I will never forget how welcome I felt at my first couple MSS events. I was driven to create the same feeling of belonging for other Burmese students who desired to feel more connected to their Burmese culture. My favourite memories during my time in MSS have definitely been the ones that have come from working within my team, such as the chaos of cooking food for events and organising Thingyan.",
      },
    ],
    subcommittees: [],
  },
  2024: {
    executives: [
      {
        name: "Hein Sett Aung",
        title: "President",
        imageUrl: formatImageFileName("2024", "executives", "Hein Sett Aung"),
      },
      {
        name: "Nile Yar",
        title: "Vice President",
        imageUrl: formatImageFileName("2024", "executives", "Nile Yar"),
      },
      {
        name: "Shun Le Yee Aung",
        title: "Secretary",
        imageUrl: formatImageFileName("2024", "executives", "Shun Le Yee Aung"),
      },
      {
        name: "Zayar Htut",
        title: "Treasurer",
        imageUrl: formatImageFileName("2024", "executives", "Zayar Htut"),
      },
      {
        name: "Myat Thuzar Nwe",
        title: "Arc Delegate",
        imageUrl: formatImageFileName("2024", "executives", "Myat Thuzar Nwe"),
      },
      {
        name: "Kyi Sin Lin Htun",
        title: "Media and Publicity Director",
        imageUrl: formatImageFileName("2024", "executives", "Kyi Sin Lin Htun"),
      },
      {
        name: "Phoebe Aung",
        title: "Events Director",
        imageUrl: formatImageFileName("2024", "executives", "Phoebe Aung"),
      },
    ],
    subcommittees: [
      {
        name: "Kaung Pyae Sone",
        title: "Events",
        imageUrl: formatImageFileName("2024", "subcommittees", "Kaung Pyae Sone"),
      },
      {
        name: "Khant Zarni",
        title: "Events",
        imageUrl: formatImageFileName("2024", "subcommittees", "Khant Zarni"),
      },
      {
        name: "Arkar Myo",
        title: "Events",
        imageUrl: formatImageFileName("2024", "subcommittees", "Arkar Myo"),
      },
      {
        name: "Nyi Minn Aung",
        title: "Events",
        imageUrl: formatImageFileName("2024", "subcommittees", "Nyi Minn Aung"),
      },
      {
        name: "Myat Thadar Kyaw",
        title: "Events",
        imageUrl: formatImageFileName("2024", "subcommittees", "Myat Thadar Kyaw"),
      },
      {
        name: "Aye Chan San",
        title: "Events",
        imageUrl: formatImageFileName("2024", "subcommittees", "Aye Chan San"),
      },
      {
        name: "Paing Paing",
        title: "Media & Publicity",

        imageUrl: formatImageFileName("2024", "subcommittees", "Paing Paing"),
      },
      {
        name: "Ada Daewi Aung",
        title: "Media & Publicity",
        imageUrl: formatImageFileName("2024", "subcommittees", "Ada Daewi Aung"),
      },
      {
        name: "Zin Wai Lwin Naing",
        title: "Media & Publicity",
        imageUrl: formatImageFileName("2024", "subcommittees", "Zin Wai Lwin Naing"),
      },
      {
        name: "Chaw Su Thwe",
        title: "Media & Publicity",
        imageUrl: formatImageFileName("2024", "subcommittees", "Chaw Su Thwe"),
      },
    ],
  },
  2023: {
    executives: [
      {
        name: "Mya Thit Khet",
        title: "President",
        imageUrl: formatImageFileName("2023", "executives", "Mya Thit Khet"),
      },
      {
        name: "Joseph Aung Thu",
        title: "Vice President",
        imageUrl: formatImageFileName("2023", "executives", "Joseph Aung Thu"),
      },
      {
        name: "Shun Le Yee Aung",
        title: "Secretary",
        imageUrl: formatImageFileName("2023", "executives", "Shun Le Yee Aung"),
      },
      {
        name: "Nile Yar",
        title: "Treasurer",
        imageUrl: formatImageFileName("2023", "executives", "Nile Yar"),
      },
      {
        name: "Hsu Wati Htun",
        title: "Grievance and Welfare Director",
        imageUrl: formatImageFileName("2023", "executives", "Hsu Wati Htun"),
      },
      {
        name: "Hein Sett Aung",
        title: "Arc Delegate",
        imageUrl: formatImageFileName("2023", "executives", "Hein Sett Aung"),
      },
      {
        name: "Eindray Aung",
        title: "Media and Publicity Director",
        imageUrl: formatImageFileName("2023", "executives", "Eaindray Aung"),
      },

      {
        name: "Paing Paing",
        title: "Media and Publicity Director",
        imageUrl: formatImageFileName("2023", "executives", "Paing Paing"),
      },

      {
        name: "Kyi Sin Lin Htun",
        title: "Media and Publicity Director",
        imageUrl: formatImageFileName("2023", "executives", "Kyi Sin Lin Htun"),
      },

      {
        name: "Phoebe Aung",
        title: "Events Director",
        imageUrl: formatImageFileName("2023", "executives", "Phoebe Aung"),
      },

      {
        name: "Valerie Lee",
        title: "Events Director",
        imageUrl: formatImageFileName("2023", "executives", "Valerie Lee"),
      },

      {
        name: "Rose Susan",
        title: "Catering Director",
        imageUrl: formatImageFileName("2023", "executives", "Rose Susan"),
      },

      {
        name: "Kyaw Lin Htike",
        title: "Logistics Director",
        imageUrl: formatImageFileName("2023", "executives", "Kyaw Lin Htike"),
      },
      {
        name: "Aung Phyo San",
        title: "Logistics Director",
        imageUrl: formatImageFileName("2023", "executives", "Aung Phyo San"),
      },
      {
        name: "Zayar Htut",
        title: "Logistics Director",
        imageUrl: formatImageFileName("2023", "executives", "Zayar Htut"),
      },
      {
        name: "Pyae Phyo Han",
        title: "Logistics Director",
        imageUrl: formatImageFileName("2023", "executives", "Pyae Phyo Han"),
      },

    ],
    subcommittees: [],
  },
  2022: {
    executives: [
      {
        name: "Mya Thit Khet",
        title: "President",
        imageUrl: formatImageFileName("2022", "executives", "Mya Thit Khet"),
      },
      {
        name: "Patrick Min",
        title: "Vice President",
        imageUrl: placeHolderUrl,
      },
      {
        name: "Kyi Shinn Khin",
        title: "Secretary",
        imageUrl: placeHolderUrl,
      },
      {
        name: "Zu Zu Kyaw Lwin",
        title: "Treasurer",
        imageUrl: placeHolderUrl,
      },
      {
        name: "Joseph Aung Thu",
        title: "Arc Delegate",
        imageUrl: formatImageFileName("2022", "executives", "Joseph Aung Thu"),
      },
    ],
    subcommittees: [],
  },
};
