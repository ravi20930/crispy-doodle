// const fs = require("fs");
// const latex = require("node-latex");

export const data = {
  mainTitle: "Exploring Next.js: The Future of React Development",
  mainSubtitle: "Unlocking the Power of Server-Side Rendering and More",
  bgImagePath: "https://via.placeholder.com/1600x900", // Wide landscape image
  introName: "Introduction to Next.js",
  introContent:
    "Next.js, a React framework, has emerged as a game-changer in the world of web development. It offers a powerful combination of server-side rendering, static site generation, and seamless client-side navigation. This article dives deep into the features and benefits of Next.js, showcasing its potential to revolutionize how we build web applications.",
  chapterOneName: "Server-Side Rendering",
  chapterOneContent:
    "One of the standout features of Next.js is its support for server-side rendering (SSR), which greatly enhances performance and SEO. By rendering pages on the server and sending fully-formed HTML to the client, Next.js ensures faster load times and improved search engine visibility. Developers can leverage SSR to create dynamic web experiences without sacrificing performance.",
  chapterOneImage: "https://via.placeholder.com/300x300", // Square image
  chapterTwoName: "Static Site Generation",
  chapterTwoContent:
    "Next.js also excels in static site generation (SSG), allowing developers to pre-render pages at build time. This approach enables lightning-fast page loads and reduces the burden on servers, making it ideal for content-heavy websites and blogs. With Next.js SSG, developers can achieve the benefits of both static and dynamic websites, striking a balance between performance and flexibility.",
  chapterTwoImage: "https://via.placeholder.com/300x300", // Square image
  chapterThreeName: "Incremental Static Regeneration",
  chapterThreeContent:
    "Taking static site generation to the next level, Next.js introduces incremental static regeneration (ISR). ISR enables developers to update static content without rebuilding the entire site, ensuring real-time updates while maintaining fast performance. This innovative feature is particularly useful for websites with frequently changing data, such as e-commerce platforms and news portals.",
  chapterThreeImage: "https://via.placeholder.com/300x300", // Square image
  chapterFourName: "Client-Side Routing and Navigation",
  chapterFourContent:
    "In addition to server-side rendering and static site generation, Next.js simplifies client-side routing and navigation. With its built-in routing system, developers can create complex navigation structures with ease, enhancing the user experience across multi-page applications. Next.js seamlessly integrates client-side routing with server-side rendering, offering a unified approach to building modern web applications.",
  chapterFourImage: "https://via.placeholder.com/300x300", // Square image
  conclusionName: "Unlocking the Future of Web Development",
  conclusionContent:
    "Next.js represents the future of web development, empowering developers to build high-performance, SEO-friendly web applications with ease. By combining the best of server-side rendering, static site generation, and client-side navigation, Next.js offers a versatile framework for building modern web experiences. Whether you're a seasoned developer or just getting started, Next.js provides the tools and flexibility to bring your ideas to life on the web.",
};

export const data2 = {
  pages: [
    {
      title: "Exploring Next.js: The Future of React Development",
      subtitle: "Unlocking the Power of Server-Side Rendering and More",
      image: "https://via.placeholder.com/1600x900", // Wide landscape image
      content: [
        {
          title: "Introduction to Next.js",
          content:
            "Next.js, a React framework, has emerged as a game-changer in the world of web development. It offers a powerful combination of server-side rendering, static site generation, and seamless client-side navigation. This article dives deep into the features and benefits of Next.js, showcasing its potential to revolutionize how we build web applications.",
          image: "https://via.placeholder.com/300x300", // Square image
        },
        {
          title: "Server-Side Rendering",
          content:
            "One of the standout features of Next.js is its support for server-side rendering (SSR), which greatly enhances performance and SEO. By rendering pages on the server and sending fully-formed HTML to the client, Next.js ensures faster load times and improved search engine visibility. Developers can leverage SSR to create dynamic web experiences without sacrificing performance.",
          image: "https://via.placeholder.com/300x300", // Square image
        },
        {
          title: "Static Site Generation",
          content:
            "Next.js also excels in static site generation (SSG), allowing developers to pre-render pages at build time. This approach enables lightning-fast page loads and reduces the burden on servers, making it ideal for content-heavy websites and blogs. With Next.js SSG, developers can achieve the benefits of both static and dynamic websites, striking a balance between performance and flexibility.",
          image: "https://via.placeholder.com/300x300", // Square image
        },
        {
          title: "Incremental Static Regeneration",
          content:
            "Taking static site generation to the next level, Next.js introduces incremental static regeneration (ISR). ISR enables developers to update static content without rebuilding the entire site, ensuring real-time updates while maintaining fast performance. This innovative feature is particularly useful for websites with frequently changing data, such as e-commerce platforms and news portals.",
          image: "https://via.placeholder.com/300x300", // Square image
        },
        {
          title: "Client-Side Routing and Navigation",
          content:
            "In addition to server-side rendering and static site generation, Next.js simplifies client-side routing and navigation. With its built-in routing system, developers can create complex navigation structures with ease, enhancing the user experience across multi-page applications. Next.js seamlessly integrates client-side routing with server-side rendering, offering a unified approach to building modern web applications.",
          image: "https://via.placeholder.com/300x300", // Square image
        },
        {
          title: "Unlocking the Future of Web Development",
          content:
            "Next.js represents the future of web development, empowering developers to build high-performance, SEO-friendly web applications with ease. By combining the best of server-side rendering, static site generation, and client-side navigation, Next.js offers a versatile framework for building modern web experiences. Whether you're a seasoned developer or just getting started, Next.js provides the tools and flexibility to bring your ideas to life on the web.",
        },
      ],
    },
  ],
};

function generateLaTeX(data) {
  const {
    mainTitle,
    mainSubtitle,
    bgImagePath,
    introName,
    introContent,
    chapterOneName,
    chapterOneContent,
    chapterOneImage,
    chapterTwoName,
    chapterTwoContent,
    chapterTwoImage,
    chapterThreeName,
    chapterThreeContent,
    chapterThreeImage,
    chapterFourName,
    chapterFourContent,
    chapterFourImage,
    conclusionName,
    conclusionContent,
  } = data;

  return `
\\documentclass[12pt]{article}
\\usepackage[landscape]{geometry}
\\usepackage{multicol}
\\usepackage{graphicx}
\\usepackage{lipsum} % For dummy text
\\usepackage{xcolor} % For colors
\\usepackage{sectsty} % For section styling
\\usepackage{background}
\\usepackage{fancyhdr}
\\usepackage{fontawesome}
\\usepackage{float}

% Global Variables start
\\newcommand{\\bgImagePath}{${bgImagePath}}
\\newcommand{\\mainTitle}{${mainTitle}}
\\newcommand{\\mainSubtitle}{${mainSubtitle}}
% intro
\\newcommand{\\introName}{${introName}}
\\newcommand{\\introContent}{${introContent}}
% chapters
\\newcommand{\\pageHashtag}{\\#hashtag}
\\newcommand{\\chapterOneName}{${chapterOneName}}
\\newcommand{\\chapterOneContent}{${chapterOneContent}}
\\newcommand{\\chapterOneImage}{${chapterOneImage}}
\\newcommand{\\chapterTwoName}{${chapterTwoName}}
\\newcommand{\\chapterTwoContent}{${chapterTwoContent}}
\\newcommand{\\chapterTwoImage}{${chapterTwoImage}}
\\newcommand{\\chapterThreeName}{${chapterThreeName}}
\\newcommand{\\chapterThreeContent}{${chapterThreeContent}}
\\newcommand{\\chapterThreeImage}{${chapterThreeImage}}
\\newcommand{\\chapterFourName}{${chapterFourName}}
\\newcommand{\\chapterFourContent}{${chapterFourContent}}
\\newcommand{\\chapterFourImage}{${chapterFourImage}}
% conclusion
\\newcommand{\\conclusionName}{${conclusionName}}
\\newcommand{\\conclusionContent}{${conclusionContent}}
% Global Variables end

% Set page margins
\\geometry{
  a4paper,
  top=1in,
  bottom=1in,
  left=1in,
  right=1in
}

% Define header and footer
\\pagestyle{fancy}
\\fancyhf{}
\\renewcommand{\\headrulewidth}{0.2pt} % Header line thickness
\\renewcommand{\\footrulewidth}{0.2pt} % Footer line thickness

% Define header and footer content
\\fancyhead[L]{\\textcolor{gray}{\\textbf{\\mainTitle}}} % Left side of the header
\\fancyhead[R]{\\textcolor{blue}{\\thepage}} % Right side of the header
\\fancyfoot[L]{\\faArrowRight}
\\fancyfoot[R]{\\textcolor{blue}{\\pageHashtag}} % Page number color

% Section styling
\\sectionfont{\\color{blue}\\sffamily} % Section font and color

\\begin{document}

% Landing Page
\\newpage
\\thispagestyle{empty} % Remove header and footer
\\backgroundsetup{
  scale=0.9,
  angle=0,
  opacity=0.2,
  contents={%
      \\includegraphics[width=\\paperwidth,height=\\paperheight]{\\bgImagePath}
  }
}
\\BgThispage
\\null\\vfill
\\begin{center}
  \\Huge{\\textbf{\\mainTitle}}\\\\
  \\large\\textcolor{blue}{\\mainSubtitle}\\\\
\\end{center}
\\vfill\\null
\\newpage
\\backgroundsetup{contents={}} % Clear the background

% Main Content
\\begin{multicols}{2}
  \\section*{\\introName}
  \\introContent

  \\section*{\\chapterOneName}
  \\chapterOneContent
  \\begin{figure}[H]
      \\centering
      \\includegraphics[width=0.5\\textwidth]{\\chapterOneImage}
  \\end{figure}

  \\section*{\\chapterTwoName}
  \\chapterTwoContent
  \\begin{figure}[H]
      \\centering
      \\includegraphics[width=0.5\\textwidth]{\\chapterTwoImage}
  \\end{figure}

  \\section*{\\chapterThreeName}
  \\chapterThreeContent
  \\begin{figure}[H]
      \\centering
      \\includegraphics[width=0.5\\linewidth]{\\chapterThreeImage}
  \\end{figure}

  \\section*{\\chapterFourName}
  \\chapterFourContent
  \\begin{figure}[H]
      \\centering
      \\includegraphics[width=0.5\\textwidth]{\\chapterFourImage}
  \\end{figure}

  \\section*{\\conclusionName}
  \\conclusionContent
\\end{multicols}

\\end{document}
`;
}

// // Generate LaTeX code
// const latexContent = generateLaTeX(data);

// // Write LaTeX content to a file
// fs.writeFileSync("document.tex", latexContent, "utf8");

// // Compile LaTeX to PDF
// const compileLatex = async () => {
//   try {
//     // Compile LaTeX to PDF
//     const pdfStream = await latex()
//       .input(fs.createReadStream("document.tex"))
//       .output();
//     const pdfWriteStream = fs.createWriteStream("document.pdf");
//     pdfStream.pipe(pdfWriteStream);

//     // On successful compilation
//     pdfWriteStream.on("finish", () => {
//       console.log("PDF generated successfully.");
//     });

//     // On error during compilation
//     pdfStream.on("error", (err) => {
//       console.error("Error during PDF generation:", err);
//     });
//   } catch (err) {
//     console.error("Error during PDF generation:", err);
//   }
// };

// compileLatex();
