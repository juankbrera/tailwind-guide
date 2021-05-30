<template>
  <div>
    <ui-section-container id="whats-tailwind">
      <ui-section-title>What's Tailwind</ui-section-title>
      <img
        alt="tailwind"
        src="@/assets/images/tailwindcss-logo.svg"
        class="my-12 mx-auto w-72"
      />
      <p>
        Tailwind is self-described as
        <i>
          "A utility-first CSS framework packed with utility classes like flex,
          pt-4, text-center and rotate-90 that can be composed to build any
          design, directly in your markup".
        </i>
        In short, Tailwind is a set of predefined utility classes that will help
        us to rapidly build modern websites without ever leaving our html.
      </p>
      <p>
        Tailwind was released in 2017 by Adam Wathan and since then it has
        become the most popular utility-first CSS framework.
        <a
          href="https://adamwathan.me/css-utility-classes-and-separation-of-concerns/"
          target="_blank"
        >
          This entry
        </a>
        from the personal blog of Adam Wathan is a good starting point to become
        in love with Tailwind and the utility-first concept.
      </p>
      <p class="text-right">
        <a href="https://tailwindcss.com/" target="_blank">More Info</a>
      </p>
    </ui-section-container>

    <ui-section-container id="utility-first">
      <ui-section-title>Utility-first CSS</ui-section-title>

      <p>
        Utility-first CSS is about write low-level utility classes named
        according to their intended purpose, like "text-right, bg-white or
        shadow-lg" instead of semantical classes like "header-container,
        sidebar-red-button or header-profile-picture". This approach allows us
        to implement a completely custom component design without writing a
        single line of custom CSS.
      </p>

      <ui-section-subtitle>Benefits</ui-section-subtitle>
      <ul class="ml-12 list-disc">
        <li>
          <strong>You aren’t wasting energy inventing class names.</strong> No
          more adding silly class names like sidebar-inner-wrapper just to be
          able to style something, and no more agonizing over the perfect
          abstract name for something that’s really just a flex container.
        </li>
        <li>
          <strong>Your CSS stops growing.</strong> Using a traditional approach,
          your CSS files get bigger every time you add a new feature. With
          utilities, everything is reusable so you rarely need to write new CSS.
        </li>
        <li>
          <strong>Making changes feels safer.</strong> CSS is global and you
          never know what you’re breaking when you make a change. Classes in
          your HTML are local, so you can change them without worrying about
          something else breaking.
        </li>
      </ul>

      <p class="text-right">
        <a href="https://tailwindcss.com/docs/utility-first" target="_blank"
          >More Info</a
        >
      </p>
    </ui-section-container>
  </div>
</template>
