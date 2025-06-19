<template>
  <div
    class="min-h-screen min-w-screen dark:bg-gray-800 dark:text-white flex items-center justify-center flex-col"
  >
    <div class="flex items-center justify-center py-6">
      <h1 class="text-4xl font-bold mb-4 mt-4">DHM Sound Archive</h1>

      <select
        v-model="selectedYear"
        class="border-[3px] border-gray-700 dark:border-gray-300 rounded-2xl py-2 px-4 mx-4 my-4"
      >
        <option value="2024">2024</option>
        <option value="2025">2025</option>
      </select>
      <button
        @click="playAll"
        class="text-5xl cursor-pointer"
        v-if="teams[selectedYear].length > 0"
      >
        💥
      </button>
    </div>

    <p
      class="border-[3px] border-gray-700 dark:border-gray-300 rounded-2xl p-3 mx-4 mb-8"
      v-if="teams[selectedYear].length > 0"
    >
      Disclaimer: I don&#39;t own the copyright to any of these sounds. Use at
      your own risk. <br />
      If you want your sound removed or want to change anything about your
      sounds, contact me on Discord.
    </p>
    <div class="flex my-4 flex-col gap-2">
      <div
        class="hidden md:flex flex-row gap-2"
        v-if="teams[selectedYear].length > 0"
      >
        <h2 class="font-bold text-xl w-[25vw] text-center">Team</h2>
        <h2 class="font-bold text-xl w-[25vw] text-center">Sound</h2>
        <h2 class="font-bold text-xl w-[25vw] text-center">Notes</h2>
      </div>
      <div
        class="inline-flex flex-col mb-2 md:mb-0 md:flex-row md:items-center"
        v-for="team in teams[selectedYear]"
        v-if="teams[selectedYear].length > 0"
      >
        <h2
          class="my-auto text-center text-2xl mb-2 font-bold md:font-normal md:text-base md:mb-0 md:my-0 md:w-[25vw]"
        >
          {{ team.name }}
        </h2>
        <audio
          class="w-[70vw] md:w-[23vw] mx-auto inline md:mx-[1vw] mb-1 md:mb-0"
          controls
          preload="auto"
          :src="`${baseURL}sounds/${selectedYear}/${team.sound}`"
          :title="team.name"
          :id="`audio-${team.name}`"
        ></audio>

        <div
          class="my-auto text-center mb-2 md:mb-0 md:my-0 md:w-[25vw] py-auto"
          v-if="team.name == 'ICE 1337'"
        >
          <input
            type="checkbox"
            id="train-on-time"
            v-model="isTrainOnTime"
          /><label for="train-on-time" class="ml-2">Pünktlich</label>
        </div>
        <p
          v-else
          v-html="team.notes"
          class="my-auto text-center mb-2 md:mb-0 md:my-0 md:w-[25vw] py-auto"
        ></p>
      </div>
      <div
        v-else
        class="border-[3px] border-gray-700 dark:border-gray-300 rounded-2xl p-3 mx-4 text-center"
      >
        Coming soon!
      </div>
    </div>

    <footer class="flex flex-col gap-2 items-center justify-center mt-8">
      <span class="mt-2"
        >Inspired by
        <a
          class="underline cursor-pointer"
          href="https://outsparkled.github.io/dhm-2024-sound-archive/"
          >the DHM 2024 sound archive by @outsparkled</a
        >.</span
      >
      <span class="mt-1 mb-2">Made by @AaronDewes.</span>
    </footer>
  </div>
</template>

<script setup lang="ts">
const selectedYear = ref<2024 | 2025>(2025);
const isTrainOnTime = ref(false);

onMounted(() => {
  isTrainOnTime.value = Math.random() > 0.75;
});

const teams = computed(() => ({
  2024: [
    {
      name: "CornFlags",
      sound: "CornFlags.mp3",
      notes: "",
    },
    {
      name: "hs᜵nib᜵",
      sound: "hs᜵nib᜵.mp3",
      notes: "",
    },
    {
      name: "‮u+202e",
      sound: "‮u+202e.mp3",
      notes: "",
    },
    {
      name: "ENOFLAG",
      sound: "ENOFLAG.mp3",
      notes:
        '<a href="https://youtube.com/watch?v=B_2NNvrXVQg">Full Version</a>',
    },
    {
      name: "APT1337",
      sound: "APT1337.mp3",
      notes: "",
    },
    {
      name: "LD_RELOAD",
      sound: "LD_RELOAD.mp3",
      notes: "",
    },
    {
      name: "Rückwärtsmuschel",
      sound: "Rückwärtsmuschel.mp3",
      notes: "",
    },
    {
      name: "Platypwnies",
      sound: "Platypwnies.mp3",
      notes: "",
    },
    {
      name: "upbhack",
      sound: "upbhack.mp3",
      notes:
        '<a href="https://m.youtube.com/watch?v=K_I7ZBFr0WE">Full Version</a>',
    },
    {
      name: "MCR_Geldschrank-Vertrieb",
      sound: "MCR_Geldschrank-Vertrieb.mp3",
      notes:
        '<a href="https://mcr-geldschrank-vertrieb.gmbh/">Full Version</a>',
    },
    {
      name: "Pwn-la-Chapelle",
      sound: "Pwn-la-Chapelle.mp3",
      notes: "",
    },
    {
      name: "h4tum",
      sound: "h4tum.mp3",
      notes: '<a href="https://www.youtube.com/watch?v=amYzBQMT4VI">Source</a>',
    },
    {
      name: "KITCTF",
      sound: "KITCTF.mp3",
      notes:
        '<a href="https://pp.ipd.kit.edu/MetalMint/mp3s/KIT-Hymne-Remix4.mp3">Full Version</a>',
    },
    {
      name: "Fluxfingers",
      sound: "Fluxfingers.mp3",
      notes: "",
    },
  ],
  2025: [
    {
      name: "KuK Hofhackerei",
      sound: "KuK Hofhackerei.mp3",
      notes: "",
    },
    {
      name: "Boomers :-)",
      sound: "Boomers :-).mp3",
      notes: "",
    },
    {
      name: "ICE 1337",
      sound: isTrainOnTime.value ? "ICE 1337.wav" : "ICE 1337_delayed.mp3",
      notes: "",
    },
    {
      name: "中国「DOS」联盟",
      sound: "中国「DOS」联盟.mp3",
      notes: "",
    },
    {
      name: "Urform Verschmutzer",
      sound: "Urform Verschmutzer.mp3",
      notes: "",
    },
    {
      name: ":(){ :|:& };:",
      sound: ":(){ :|:& };:.mp3",
      notes: "",
    },
    {
      name: "Holzhelm",
      sound: "holzhelm.mp3",
      notes: "Wirkt heavily inspired by movaps [rsp+50h],xmm0",
    },
    {
      name: "movaps [rsp+50h],xmm0",
      sound: "movaps [rsp+50h],xmm0.mp3",
      notes: "",
    },
  ],
}));

function playAll() {
  teams.value[selectedYear.value].forEach((team) => {
    const audio = document.getElementById(
      `audio-${team.name}`
    ) as HTMLAudioElement;
    audio.play();
  });
}

const config = useRuntimeConfig();

const baseURL = config.app.baseURL;
</script>
