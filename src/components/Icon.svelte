<script>
    export let name;
    //export let focusable = true;
    let icons = [
        {
          box: 30,
          name: "adress",
          svg: `
        <path d="M10.1341 11.6875C11.5332 11.6875 12.6675 10.4563 12.6675 8.9375C12.6675 7.41872 11.5332 6.1875 10.1341 6.1875C8.73486 6.1875 7.60059 7.41872 7.60059 8.9375C7.60059 10.4563 8.73486 11.6875 10.1341 11.6875Z" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M16.4671 8.9375C16.4671 15.125 10.1335 19.9375 10.1335 19.9375C10.1335 19.9375 3.7998 15.125 3.7998 8.9375C3.7998 7.11414 4.4671 5.36545 5.65489 4.07614C6.84268 2.78683 8.45367 2.0625 10.1335 2.0625C11.8133 2.0625 13.4242 2.78683 14.612 4.07614C15.7998 5.36545 16.4671 7.11414 16.4671 8.9375V8.9375Z" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        `
        },
        {
          box: 30,
          name: "clock",
          svg: `<path d="M11 19.25C15.5563 19.25 19.25 15.5563 19.25 11C19.25 6.44365 15.5563 2.75 11 2.75C6.44365 2.75 2.75 6.44365 2.75 11C2.75 15.5563 6.44365 19.25 11 19.25Z" />
        <path d="M11 6.1875V11H15.8125"/>
        `
        }
    ];
    let displayIcon = icons.find((e) => e.name === name);
</script>
<svg
  class={$$props.class}
  fill="none"
  stroke="currentColor"
  stroke-linecap="round"
  stroke-linejoin="round"
  stroke-width="2"
  viewBox="0 0 {displayIcon.box} {displayIcon.box}">{@html displayIcon.svg}</svg>