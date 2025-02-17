interface ExecProps {
  name: string;
  title: string;
  imageUrl: string;
}

interface CommitteeTeam {
  [key: number]: {
    executives: ExecProps[];
    subcommittees: {
      name: string,
      title: string,
      imageUrl: string,
    }[]
  }
}
const placeHolderUrl: string = "https://www.svgrepo.com/show/508699/landscape-placeholder.svg"

export const committeeMembers: CommitteeTeam = {
  2025: {
    executives: [
      {
        name: "Nile Yar",
        title: "President",
        imageUrl: placeHolderUrl,
      },
      {
        name: "Myat Thuzar Nwe",
        title: "Vice President",
        imageUrl: placeHolderUrl,
      },
      {
        name: "Arkar Myo",
        title: "Events Director",
        imageUrl: placeHolderUrl,
      },
      {
        name: "Myat Thadar Kyaw",
        title: "Events Director",
        imageUrl: placeHolderUrl,
      },
      {
        name: "Aye Chan San",
        title: "Events Director",
        imageUrl: placeHolderUrl,
      },
      {
        name: "Ada Daewi Aung",
        title: "Media and Publicity Director",
        imageUrl: placeHolderUrl,
      },
      {
        name: "Thet Htar Aung",
        title: "Secretary",
        imageUrl: placeHolderUrl,
      },
      {
        name: "Phyo Mon Su",
        title: "Arc Delegate",
        imageUrl: placeHolderUrl,
      }
    ],
    subcommittees: [],
  },
  2024: {
    executives: [
      {
        name: "Hein Sett Aung",
        title: "President",
        imageUrl: placeHolderUrl,
      },
      {
        name: "Nile Yar",
        title: "Vice President",
        imageUrl: placeHolderUrl,
      },
      {
        name: "Shun Le Yee Aung",
        title: "Secretary",
        imageUrl: placeHolderUrl,
      },
      {
        name: "Zayar Htut",
        title: "Treasurer",
        imageUrl: placeHolderUrl,
      },
      {
        name: "Myat Thuzar Nwe",
        title: "Arc Delegate",
        imageUrl: placeHolderUrl,
      },
      {
        name: "Kyi Sin Lin Htun",
        title: "Media and Publicity Director",
        imageUrl: placeHolderUrl,
      },
      {
        name: "May Lynn Let Aung",
        title: "Events Director",
        imageUrl: placeHolderUrl,
      },
    ],
    subcommittees: [
      {
        name: "Kaung Pyae Sone",
        title: "Events",
        imageUrl: placeHolderUrl,
      },
      {
        name: "Khant Zarni",
        title: "Events",
        imageUrl: placeHolderUrl,
      },
      {
        name: "Arkar Myo",
        title: "Events",
        imageUrl: placeHolderUrl,
      },
      {
        name: "Nyi Minn Aung",
        title: "Events",
        imageUrl: placeHolderUrl,
      },
      {
        name: "Myat Thadar Kyaw",
        title: "Events",
        imageUrl: placeHolderUrl,
      },
      {
        name: "Aye Chan San",
        title: "Events",
        imageUrl: placeHolderUrl,
      },
      {
        name: "Paing Paing",
        title: "Media & Publicity",
        imageUrl: placeHolderUrl,
      },
      {
        name: "Ada Daewi Aung",
        title: "Media & Publicity",
        imageUrl: placeHolderUrl,
      },
      {
        name: "Zin Wai Lwin Naing",
        title: "Media & Publicity",
        imageUrl: placeHolderUrl,
      },
      {
        name: "Chaw Su Thwe",
        title: "Media & Publicity",
        imageUrl: placeHolderUrl,
      },
    ],
  },
  2023: {
    executives: [
      {
        name: "Mya Thit Khet",
        title: "President",
        imageUrl: placeHolderUrl,
      },
      {
        name: "Joseph Aung Thu",
        title: "Vice President",
        imageUrl: placeHolderUrl,
      },
      {
        name: "Shun Le Yee Aung",
        title: "Secretary",
        imageUrl: placeHolderUrl,
      },
      {
        name: "Nile Yar",
        title: "Treasurer",
        imageUrl: placeHolderUrl,
      },
      {
        name: "Hsu Wati Htun",
        title: "Grievance and Welfare Director",
        imageUrl: placeHolderUrl,
      },
      {
        name: "Hein Sett Aung",
        title: "Arc Delegate",
        imageUrl: placeHolderUrl,
      },
      {
        name: "Eindray Aung",
        title: "Media and Publicity Director",
        imageUrl: placeHolderUrl,
      },

      {
        name: "Paing Paing",
        title: "Media and Publicity Director",
        imageUrl: placeHolderUrl,
      },

      {
        name: "Kyi Sin Lin Htun",
        title: "Media and Publicity Director",
        imageUrl: placeHolderUrl,
      },

      {
        name: "May Lynn Let Aung",
        title: "Events Director",
        imageUrl: placeHolderUrl,
      },

      {
        name: "Valerie Lee",
        title: "Events Director",
        imageUrl: placeHolderUrl,
      },

      {
        name: "Rose Susan",
        title: "Catering Director",
        imageUrl: placeHolderUrl,
      },

      {
        name: "John Htike",
        title: "Logistics Director",
        imageUrl: placeHolderUrl,
      },
      {
        name: "Aung Phyo San",
        title: "Logistics Director",
        imageUrl: placeHolderUrl,
      },
      {
        name: "Zayar Htut",
        title: "Logistics Director",
        imageUrl: placeHolderUrl,
      },
      {
        name: "Pyae Phyo Han",
        title: "Logistics Director",
        imageUrl: placeHolderUrl,
      },

    ],
    subcommittees: [],
  },
  2022: {
    executives: [
      {
        name: "Mya Thit Khet",
        title: "President",
        imageUrl: placeHolderUrl,
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
        imageUrl: placeHolderUrl,
      },
    ],
    subcommittees: [],
  },
};
