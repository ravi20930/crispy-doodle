interface ChapterItem {
  image?: string;
}

interface PageData {
  page: number;
  header?: string;
  content: {
    title?: string;
    subtitle?: string;
    landing_page_image?: string;
    image?: string;
    heading?: string;
    text?: string;
    items?: ChapterItem[];
  };
  footer?: string;
}

const data: PageData[] = [
  {
    page: 1,
    content: {
      title: "Human by Design",
      subtitle: "Exploring the Essence of Human Existence",
      landing_page_image:
        "https://images.freeimages.com/images/large-previews/3ff/chain-link-fence-1187948.jpg",
    },
  },
  {
    page: 2,
    header: "Human by Design",
    content: {
      heading: "Foreword",
      text: "In this book, we delve into the fundamental aspects of what it means to be human. From our biology to our psychology, and from our individual experiences to our collective societies, we explore the intricacies that make us unique. The journey through these pages aims to shed light on the complex design of humanity.",
      items: {
        image:
          "https://images.freeimages.com/images/large-previews/3ff/chain-link-fence-1187948.jpg",
      },
    },
    footer: "Page 2",
  },
  {
    page: 3,
    header: "Human by Design",
    content: {
      heading: "Contents",
      items: [
        {
          chapter: "1. Introduction",
          page: 5,
          image: "introduction_image.jpg",
        },
        {
          chapter: "2. The Biological Blueprint",
          page: 10,
          image: "biological_blueprint.jpg",
        },
        {
          chapter: "3. The Psychological Framework",
          page: 20,
          image: "psychological_framework.jpg",
        },
        {
          chapter: "4. The Social Fabric",
          page: 30,
          image: "social_fabric.jpg",
        },
        {
          chapter: "5. The Technological Influence",
          page: 40,
          image: "technological_influence.jpg",
        },
        {
          chapter: "6. The Future of Humanity",
          page: 50,
          image: "future_humanity.jpg",
        },
      ],
    },
    footer: "Page 3",
  },
  {
    page: 4,
    header: "Human by Design",
    content: {
      heading: "Introduction",
      text: "The concept of 'Human by Design' is an exploration into the various facets that construct human identity and existence. This chapter introduces the key themes and questions that will be addressed in this book, setting the stage for a deeper understanding of our place in the world.",
    },
    footer: "Page 4",
  },
  {
    page: 5,
    header: "Human by Design",
    content: {
      heading: "The Biological Blueprint",
      text: "Our biological makeup is the foundation of our existence. This chapter delves into the genetic and physiological aspects of being human, discussing how our bodies are designed and the evolutionary processes that have shaped us.",
    },
    footer: "Page 5",
  },
  {
    page: 6,
    header: "Human by Design",
    content: {
      heading: "The Psychological Framework",
      text: "Beyond our biology, the human mind plays a crucial role in defining who we are. This chapter explores the psychological aspects of human nature, including cognition, emotions, and behavior.",
    },
    footer: "Page 6",
  },
  {
    page: 7,
    header: "Human by Design",
    content: {
      heading: "The Social Fabric",
      text: "Humans are inherently social beings. This chapter examines the social structures and cultural norms that influence our interactions and shape our societies.",
    },
    footer: "Page 7",
  },
  {
    page: 8,
    header: "Human by Design",
    content: {
      heading: "The Technological Influence",
      text: "Technology has always been a driving force in human development. This chapter looks at how technological advancements have impacted our lives and continue to redefine what it means to be human.",
    },
    footer: "Page 8",
  },
  {
    page: 9,
    header: "Human by Design",
    content: {
      heading: "The Future of Humanity",
      text: "What does the future hold for humanity? In this concluding chapter, we explore potential future scenarios and the ethical considerations that come with advancements in science and technology.",
    },
    footer: "Page 9",
  },
  {
    page: 10,
    header: "Human by Design",
    content: {
      heading: "Conclusion",
      text: "In conclusion, the exploration of human existence from various perspectives reveals the complexity and beauty of our design. We hope this book has provided valuable insights into what it means to be human and has inspired further thought and discussion on the topic.",
    },
    footer: "Page 10",
  },
  {
    page: 11,
    header: "Human by Design",
    content: {
      heading: "References",
      text: "1. Reference one\n2. Reference two\n3. Reference three\n4. Reference four\n5. Reference five\n6. Reference six",
    },
    footer: "Page 11",
  },
];

export default data;
