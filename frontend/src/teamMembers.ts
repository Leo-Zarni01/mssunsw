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

const committeeMembers: CommitteeTeam = {
  2025: {
    executives: [
      {
        name: "Nile Yar",
        title: "President",
        imageUrl: "",
      },

      {
        name: "Myat Thuzar Nwe",
        title: "Vice President",
        imageUrl: "",
      },

      {
        name: "Arkar Myo",
        title: "Events Director",
        imageUrl: "",
      },

      {
        name: "Myat Thadar Kyaw",
        title: "Events Director",
        imageUrl: "",
      },

      {
        name: "Aye Chan San",
        title: "Events Director",
        imageUrl: "",
      },

      {
        name: "Ada Daewi Aung",
        title: "Media and Publicity Director",
        imageUrl: "",
      },

      {
        name: "Thet Htar Aung",
        title: "Secretary",
        imageUrl: "",
      },
      {
        name: "Phyo Mon Su",
        title: "Arc Delegate",
        imageUrl: "",
      }
    ],
    subcommittees: [

    ],
  },

  2024: {
    executives: [
      {
        name: "Hein Sett Aung",
        title: "President",
        imageUrl: "",
      },

      {
        name: "Nile Yar",
        title: "Vice President",
        imageUrl: "",
      },

      {
        name: "Shun Le Yee Aung",
        title: "Secretary",
        imageUrl: "",
      },

      {
        name: "Zayar Htut",
        title: "Treasurer",
        imageUrl: "",
      },

      {
        name: "Myat Thuzar Nwe",
        title: "Arc Delegate",
        imageUrl: "",
      },

      {
        name: "Kyi Sin Lin Htun",
        title: "Media and Publicity Director",
        imageUrl: "",
      },

      {
        name: "May Lynn Let Aung",
        title: "Events Director",
        imageUrl: "",
      },

    ],
    subcommittees: [
      {
        name: "Kaung Pyae Sone",
        title: "Events",
        imageUrl: "",
      },

      {
        name: "Khant Zarni",
        title: "Events",
        imageUrl: "",
      },

      {
        name: "Arkar Myo",
        title: "Events",
        imageUrl: "",
      },

      {
        name: "Nyi Minn Aung",
        title: "Events",
        imageUrl: "",
      },
      {
        name: "Myat Thadar Kyaw",
        title: "Events",
        imageUrl: "",
      },

      {
        name: "Aye Chan San",
        title: "Events",
        imageUrl: "",
      },

      {
        name: "Paing Paing",
        title: "Media & Publicity",
        imageUrl: "",
      },
      {
        name: "Ada Daewi Aung",
        title: "Media & Publicity",
        imageUrl: "",
      },
      {
        name: "Zin Wai Lwin Naing",
        title: "Media & Publicity",
        imageUrl: "",
      },
      {
        name: "Chaw Su Thwe",
        title: "Media & Publicity",
        imageUrl: "",
      },
    ],
  },

  2023: {
    executives: [
      {
        name: "Mya Thit Khet",
        title: "President",
        imageUrl: "",
      },

      {
        name: "Jospeh Aung",
        title: "Vice President",
        imageUrl: "",
      },

      {
        name: "Shun Le Yee Aung",
        title: "Secretary",
        imageUrl: "",
      },

      {
        name: "Nile Yar",
        title: "Treasurer",
        imageUrl: "",
      },

      {
        name: "Hsu Wati Htun",
        title: "Grievance and Welfare Director",
        imageUrl: "",
      },

      {
        name: "Hein Sett Aung",
        title: "Arc Delegate",
        imageUrl: "",
      },

      {
        name: "Eindray Aung",
        title: "Media and Publicity Director",
        imageUrl: "",
      },

      {
        name: "Paing Paing",
        title: "Media and Publicity Director",
        imageUrl: "",
      },

      {
        name: "Kyi Sin Lin Htun",
        title: "Media and Publicity Director",
        imageUrl: "",
      },

      {
        name: "May Lynn Let Aung",
        title: "Events Director",
        imageUrl: "",
      },

      {
        name: "Valerie Lee",
        title: "Events Director",
        imageUrl: "",
      },

      {
        name: "Rose Susan",
        title: "Catering Director",
        imageUrl: "",
      },

      {
        name: "John Htike",
        title: "Logistics Director",
        imageUrl: "",
      },
      {
        name: "Aung Phyo San",
        title: "Logistics Director",
        imageUrl: "",
      },
      {
        name: "Zayar Htut",
        title: "Logistics Director",
        imageUrl: "",
      },
      {
        name: "Pyae Phyo Han",
        title: "Logistics Director",
        imageUrl: "",
      },

    ],
    subcommittees: [

    ],
  },

  2022: {
    executives: [
      {
        name: "Mya Thit Khet",
        title: "President",
        imageUrl: "",
      },

      {
        name: "Patrick Min",
        title: "Vice President",
        imageUrl: "",
      },

      {
        name: "Kyi Shinn Khin",
        title: "Secretary",
        imageUrl: "",
      },

      {
        name: "Zu Zu Kyaw Lwin",
        title: "Treasurer",
        imageUrl: "",
      },

      {
        name: "Joseph Aung Thu",
        title: "Arc Delegate",
        imageUrl: "",
      },

      {
        name: "Yamone Khin",
        title: "Events Director",
        imageUrl: "",
      },

      {
        name: "Khine Zarr Hein",
        title: "Publicity Director",
        imageUrl: "",
      },

      {
        name: "Grace San",
        title: "Media Director",
        imageUrl: "",
      },

    ],
    subcommittees: [

    ],
  },

}
