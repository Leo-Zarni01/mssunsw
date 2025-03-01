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
      },
      {
        name: "Myat Thuzar Nwe",
        title: "Vice President",
        imageUrl: formatImageFileName("2025", "executives", "Myat Thuzar Nwe"),
      },
      {
        name: "Arkar Myo",
        title: "Events Director",
        imageUrl: formatImageFileName("2025", "executives", "Arkar Myo"),
      },
      {
        name: "Myat Thadar Kyaw",
        title: "Events Director",
        imageUrl: formatImageFileName("2025", "executives", "Myat Thadar Kyaw"),
      },
      {
        name: "Aye Chan San",
        title: "Events Director",
        imageUrl: formatImageFileName("2025", "executives", "Aye Chan San"),
      },
      {
        name: "Ada Daewi Aung",
        title: "Media and Publicity Director",
        imageUrl: formatImageFileName("2025", "executives", "Ada Daewi Aung"),
      },
      {
        name: "Thet Htar Aung",
        title: "Secretary",
        imageUrl: formatImageFileName("2025", "executives", "Thet Htar Aung"),
      },
      {
        name: "Phyo Mon Su",
        title: "Arc Delegate",
        imageUrl: formatImageFileName("2025", "executives", "Phyo Mon Su"),
      }
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
