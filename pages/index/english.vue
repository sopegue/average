<template>
  <div class="py-15 flex flex-col space-y-5">
    <img src="/chart.png" alt="" class="mx-auto" />
    <div class="w-min mx-auto">
      <span class="whitespace-nowrap md:text-3xl text-2xl col-white"
        >Scan me</span
      >
    </div>
    <div class="w-fit mx-auto pt-5">
      <a
        href="/resume/resume.pdf"
        class="text-sm button rounded-full no-outlines bg-transparent sombre-text"
      >
        <svg
          class="w-6 h-6 mr-1.5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13"
          ></path>
        </svg>
        Get my resume
        <a
          href="/resume/resume.pdf"
          target="_blank"
          class="ml-5 sombre-text"
          title="Open the resume in a new tab"
        >
          <svg
            class="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
            ></path></svg
        ></a>
        <a
          href="/resume/resume.pdf"
          class="ml-3 sombre-text"
          download
          title="Download the resume"
          ><svg
            class="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
            ></path></svg
        ></a>
      </a>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped></style>
