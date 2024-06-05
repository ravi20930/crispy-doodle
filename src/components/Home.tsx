import Head from "next/head";
import { useEffect } from "react";
import data from "../utils/data";

export default function Home() {
  useEffect(() => {
    renderContent(data);
  }, []);

  const renderContent = (data) => {
    const contentDiv = document.getElementById("content");
    let imageLeft = true; // To alternate image position

    data.forEach((pageData) => {
      const pageDiv = document.createElement("div");
      pageDiv.classList.add("page", "bg-white");

      if (pageData.header) {
        const headerDiv = document.createElement("div");
        headerDiv.classList.add("header", "py-4", "bg-gray-200");
        headerDiv.innerHTML = `<h1 class="text-xl">${pageData.header}</h1>`;
        pageDiv.appendChild(headerDiv);
      }

      const contentWrapper = document.createElement("div");
      contentWrapper.classList.add(
        "content",
        "mt-20",
        "flex",
        "justify-between"
      );

      if (pageData.content.title) {
        contentWrapper.innerHTML = `
          <div class="w-full text-center">
              <h1 class="text-5xl font-bold mb-4">${pageData.content.title}</h1>
              <h2 class="text-2xl text-gray-700">${pageData.content.subtitle}</h2>
              <img src="${pageData.content.landing_page_image}" alt="Cover Image" class="mt-8 mx-auto">
          </div>
        `;
      } else if (pageData.content.heading) {
        const textWrapper = document.createElement("div");
        textWrapper.classList.add("text-placeholder", "mr-4");

        textWrapper.innerHTML = `<h2 class="text-3xl font-bold mb-6">${pageData.content.heading}</h2>`;

        if (pageData.content.text) {
          textWrapper.innerHTML += `<p class="text-lg column-text">${pageData.content.text}</p>`;
        } else if (pageData.content.items) {
          const ul = document.createElement("ul");
          ul.classList.add("list-disc", "pl-5");
          pageData.content.items.forEach((item) => {
            const li = document.createElement("li");
            li.classList.add("mb-4");
            li.innerHTML = `
              <span class="font-bold">${item.chapter}</span> - Page ${item.page}
              <img src="${item.image}" alt="${item.chapter}" class="mt-2 w-full h-32 object-cover">
            `;
            ul.appendChild(li);
          });
          textWrapper.appendChild(ul);
        }

        const imageWrapper = document.createElement("div");
        imageWrapper.classList.add("image-placeholder", "ml-4");
        imageWrapper.innerHTML = `<img src="${
          pageData.content.items ? pageData.content.items[0].image : ""
        }" alt="Page Image" class="w-full h-64 object-cover">`;

        if (imageLeft) {
          contentWrapper.appendChild(imageWrapper);
          contentWrapper.appendChild(textWrapper);
        } else {
          contentWrapper.appendChild(textWrapper);
          contentWrapper.appendChild(imageWrapper);
        }

        imageLeft = !imageLeft;
      }

      pageDiv.appendChild(contentWrapper);

      if (pageData.footer) {
        const footerDiv = document.createElement("div");
        footerDiv.classList.add("footer", "py-4", "bg-gray-200");
        footerDiv.innerHTML = `<p>${pageData.footer}</p>`;
        pageDiv.appendChild(footerDiv);
      }

      contentDiv.appendChild(pageDiv);
    });
  };

  return (
    <div>
      <Head>
        <title>Human by Design</title>
        <link
          href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css"
          rel="stylesheet"
        />
        <style>{`
          @page { margin: 0; }
          body { margin: 0; }
          .page { page-break-after: always; padding: 2rem; }
          .header, .footer { width: 100%; text-align: center; position: fixed; }
          .header { top: 0; }
          .footer { bottom: 0; }
          .content { margin: 60px 0; }
          .column-text { column-count: 2; column-gap: 1.5rem; }
          .image-placeholder { width: 40%; height: auto; }
          .text-placeholder { width: 55%; }
        `}</style>
      </Head>

      <main className="bg-gray-100 text-gray-900">
        <div id="content"></div>
      </main>
    </div>
  );
}
