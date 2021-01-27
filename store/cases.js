export const state = () => ({
  list: [
    {
      title: "Project name",
      description:
        "A back end developer is a person who specializes in back end web development as it’s sometimes called.",
      background: {
        image: require("@/assets/images/cases/case-1.jpg"),
        color: "#000"
      },
      icons: [
        {
          image: require("@/assets/images/icons/js.svg"),
          alt: "JavaScript"
        },
        {
          image: require("@/assets/images/icons/angular.svg"),
          alt: "Angular"
        }
      ]
    },
    {
      title: "Project name",
      description:
        "A back end developer is a person who specializes in back end web development as it’s sometimes called.",
      background: {
        image: require("@/assets/images/cases/case-2.jpg"),
        color: "#000"
      },
      icons: [
        {
          image: require("@/assets/images/icons/js.svg"),
          alt: "JavaScript"
        },
        {
          image: require("@/assets/images/icons/angular.svg"),
          alt: "Angular"
        }
      ]
    },
    {
      title: "Project name",
      description:
        "A back end developer is a person who specializes in back end web development as it’s sometimes called.",
      background: {
        image: require("@/assets/images/cases/case-3.jpg"),
        color: "#000"
      },
      icons: [
        {
          image: require("@/assets/images/icons/js.svg"),
          alt: "JavaScript"
        },
        {
          image: require("@/assets/images/icons/angular.svg"),
          alt: "Angular"
        }
      ]
    },
    {
      title: "Project name",
      description:
        "A back end developer is a person who specializes in back end web development as it’s sometimes called.",
      background: {
        image: require("@/assets/images/cases/case-4.jpg"),
        color: "#000"
      },
      icons: [
        {
          image: require("@/assets/images/icons/js.svg"),
          alt: "JavaScript"
        },
        {
          image: require("@/assets/images/icons/angular.svg"),
          alt: "Angular"
        }
      ]
    },
    {
      title: "Project name",
      description:
        "A back end developer is a person who specializes in back end web development as it’s sometimes called.",
      background: {
        image: require("@/assets/images/cases/case-5.jpg"),
        color: "#000"
      },
      icons: [
        {
          image: require("@/assets/images/icons/js.svg"),
          alt: "JavaScript"
        },
        {
          image: require("@/assets/images/icons/angular.svg"),
          alt: "Angular"
        }
      ]
    },
    {
      title: "Project name",
      description:
        "A back end developer is a person who specializes in back end web development as it’s sometimes called.",
      background: {
        image: require("@/assets/images/cases/case-6.jpg"),
        color: "#000"
      },
      icons: [
        {
          image: require("@/assets/images/icons/js.svg"),
          alt: "JavaScript"
        },
        {
          image: require("@/assets/images/icons/angular.svg"),
          alt: "Angular"
        }
      ]
    },
    {
      title: "Project name",
      description:
        "A back end developer is a person who specializes in back end web development as it’s sometimes called.",
      background: {
        image: require("@/assets/images/cases/case-6.jpg"),
        color: "#000"
      },
      icons: [
        {
          image: require("@/assets/images/icons/js.svg"),
          alt: "JavaScript"
        },
        {
          image: require("@/assets/images/icons/angular.svg"),
          alt: "Angular"
        }
      ]
    },
    {
      title: "Project name",
      description:
        "A back end developer is a person who specializes in back end web development as it’s sometimes called.",
      background: {
        image: require("@/assets/images/cases/case-6.jpg"),
        color: "#000"
      },
      icons: [
        {
          image: require("@/assets/images/icons/js.svg"),
          alt: "JavaScript"
        },
        {
          image: require("@/assets/images/icons/angular.svg"),
          alt: "Angular"
        }
      ]
    }
  ]
});

export const getters = {
  get(state) {
    return state.cases;
  }
};
