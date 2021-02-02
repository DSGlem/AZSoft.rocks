export const state = () => ({
  sections: [
    {
      title: "Backend technology",
      link: {
        to: "/",
        text: "See all publications"
      },
      colors: {
        color: "#000",
        background: "#fff"
      },
      articles: [
        {
          image: {
            link: require("~/assets/images/blog/backend-1.jpg"),
            alt: "article image"
          },
          link: {
            to: "/",
            text: "Most Popular Backend Web Development Frameworks in 2020"
          },
          description:
            "The concept of digital transformation today touches every organization irrespective of their industry vertical or functional expertise. "
        },
        {
          image: {
            link: require("~/assets/images/blog/backend-2.jpg"),
            alt: "article image"
          },
          link: {
            to: "/",
            text: "10 Benefits of Software Development Outsourcing"
          },
          description:
            "Software development outsourcing has thrived on the premise that it leads to significant reduction in operational costs for the same work that has been done in-house since time immemorial."
        },
        {
          image: {
            link: require("~/assets/images/blog/backend-3.jpg"),
            alt: "article image"
          },
          link: {
            to: "/",
            text: "How to become a JavaScript Genius?"
          },
          description:
            "In the past decade, technology has evolved so much in all sectors, be it robotics, biotech, or be it safety and security. Similarly, there has been a boom in Web Development Technologies as well."
        }
      ]
    },
    {
      title: "Frontend technology",
      link: {
        to: "/",
        text: "See all publications"
      },
      colors: {
        color: "#fff",
        background: "#000"
      },
      articles: [
        {
          image: {
            link: require("~/assets/images/blog/frontend-1.jpg"),
            alt: "article image"
          },
          link: {
            to: "/",
            text: "Most Popular Backend Web Development Frameworks in 2020"
          },
          description:
            "The concept of digital transformation today touches every organization irrespective of their industry vertical or functional expertise. "
        },
        {
          image: {
            link: require("~/assets/images/blog/frontend-2.jpg"),
            alt: "article image"
          },
          link: {
            to: "/",
            text: "10 Benefits of Software Development Outsourcing"
          },
          description:
            "Software development outsourcing has thrived on the premise that it leads to significant reduction in operational costs for the same work that has been done in-house since time immemorial."
        },
        {
          image: {
            link: require("~/assets/images/blog/frontend-3.jpg"),
            alt: "article image"
          },
          link: {
            to: "/",
            text: "How to become a JavaScript Genius?"
          },
          description:
            "In the past decade, technology has evolved so much in all sectors, be it robotics, biotech, or be it safety and security. Similarly, there has been a boom in Web Development Technologies as well."
        }
      ]
    },
    {
      title: "Application world",
      link: {
        to: "/",
        text: "See all publications"
      },
      articles: [
        {
          image: {
            link: require("~/assets/images/blog/app-1.jpg"),
            alt: "article image"
          },
          link: {
            to: "/",
            text: "Most Popular Backend Web Development Frameworks in 2020"
          },
          description:
            "The concept of digital transformation today touches every organization irrespective of their industry vertical or functional expertise. "
        },
        {
          image: {
            link: require("~/assets/images/blog/app-2.jpg"),
            alt: "article image"
          },
          link: {
            to: "/",
            text: "10 Benefits of Software Development Outsourcing"
          },
          description:
            "Software development outsourcing has thrived on the premise that it leads to significant reduction in operational costs for the same work that has been done in-house since time immemorial."
        },
        {
          image: {
            link: require("~/assets/images/blog/app-3.jpg"),
            alt: "article image"
          },
          link: {
            to: "/",
            text: "How to become a JavaScript Genius?"
          },
          description:
            "In the past decade, technology has evolved so much in all sectors, be it robotics, biotech, or be it safety and security. Similarly, there has been a boom in Web Development Technologies as well."
        }
      ]
    },
    {
      title: "Design",
      link: {
        to: "/",
        text: "See all publications"
      },
      colors: {
        color: "#fff",
        background: "#000"
      },
      articles: [
        {
          image: {
            link: require("~/assets/images/blog/design-1.jpg"),
            alt: "article image"
          },
          link: {
            to: "/",
            text: "Most Popular Backend Web Development Frameworks in 2020"
          },
          description:
            "The concept of digital transformation today touches every organization irrespective of their industry vertical or functional expertise. "
        },
        {
          image: {
            link: require("~/assets/images/blog/design-2.jpg"),
            alt: "article image"
          },
          link: {
            to: "/",
            text: "10 Benefits of Software Development Outsourcing"
          },
          description:
            "Software development outsourcing has thrived on the premise that it leads to significant reduction in operational costs for the same work that has been done in-house since time immemorial."
        },
        {
          image: {
            link: require("~/assets/images/blog/design-3.jpg"),
            alt: "article image"
          },
          link: {
            to: "/",
            text: "How to become a JavaScript Genius?"
          },
          description:
            "In the past decade, technology has evolved so much in all sectors, be it robotics, biotech, or be it safety and security. Similarly, there has been a boom in Web Development Technologies as well."
        }
      ]
    }
  ]
});

export const getters = {
  get(state) {
    return state.blog;
  }
};
