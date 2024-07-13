<template>
  <div
    class="min-h-screen min-w-screen dark:bg-gray-800 dark:text-white flex items-center justify-center flex-col"
  >
    <h1 class="text-4xl font-bold mb-4 mt-4">DHM 2024 Sound Archive</h1>

    <p
      class="border-[3px] border-gray-700 dark:border-gray-300 rounded-2xl p-3 mx-4"
    >
      Disclaimer: I don&#39;t own the copyright to any of these sounds. Use at
      your own risk. <br />
      If you want your sound removed or want to add a note, contact me on
      Discord.
    </p>

    <div class="flex my-4 flex-col gap-2">
      <div class="hidden md:flex flex-row gap-2">
        <h2 class="font-bold text-xl w-[25vw] text-center">Team</h2>
        <h2 class="font-bold text-xl w-[25vw] text-center">Sound</h2>
        <h2 class="font-bold text-xl w-[25vw] text-center">Notes</h2>
      </div>
      <div class="inline-flex flex-col mb-2 md:mb-0 md:flex-row md:items-center" v-for="team in teams">
        <h2 class="my-auto text-center text-2xl mb-2 font-bold md:font-normal md:text-base md:mb-0 md:my-0 md:w-[25vw]">{{ team.name }}</h2>
          <audio
            class="w-[70vw] md:w-[23vw] mx-auto inline md:mx-[1vw] mb-1 md:mb-0"
            controls
            preload="metadata"
            :src="`/dhm-2024-sound-archive/sounds/${team.sound}`"
            :title="team.name"
            :id="`audio-${team.name}`"
          ></audio>
          <p v-html="team.notes" class="my-auto text-center mb-2 md:mb-0 md:my-0 md:w-[25vw] py-auto"></p>
      </div>
    </div>
    
    <button @click="playAll" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        💥
    </button>

    <span class="mt-2"
      >Inspired by
      <a
        class="underline cursor-pointer"
        href="https://outsparkled.github.io/dhm-2024-sound-archive/"
        >the DHM 2024 sound archive by @outsparkled</a
      >.</span
    >
    <span class="mt-1 mb-2"
      >Made by @AaronDewes.</span
    >
  </div>
</template>

<script setup lang="ts">
const teams = [
  {
    "name": "CornFlags",
    "sound": "CornFlags.mp3",
    "notes": ""
  },
  {
    "name": "hs᜵nib᜵",
    "sound": "hs᜵nib᜵.mp3",
    "notes": ""
  },
  {
    "name": "e202+u",
    "sound": "e202+u.mp3",
    "notes": ""
  },
  {
    "name": "ENOFLAG",
    "sound": "ENOFLAG.mp3",
    "notes": "<a href=\"https://youtube.com/watch?v=B_2NNvrXVQg\">Full Version</a>"
  },
  {
    "name": "APT1337",
    "sound": "APT1337.mp3",
    "notes": ""
  },
  {
    "name": "LD_RELOAD",
    "sound": "LD_RELOAD.mp3",
    "notes": ""
  },
  {
    "name": "Rückwärtsmuschel",
    "sound": "Rückwärtsmuschel.mp3",
    "notes": ""
  },
  {
    "name": "Platypwnies",
    "sound": "Platypwnies.mp3",
    "notes": ""
  },
  {
    "name": "upbhack",
    "sound": "upbhack.mp3",
    "notes": "<a href=\"https://m.youtube.com/watch?v=K_I7ZBFr0WE\">Full Version</a>"
  },
  {
    "name": "MCR_Geldschrank-Vertrieb",
    "sound": "MCR_Geldschrank-Vertrieb.mp3",
    "notes": "<a href=\"https://mcr-geldschrank-vertrieb.gmbh/\">Full Version</a>"
  },
  {
    "name": "Pwn-la-Chapelle",
    "sound": "Pwn-la-Chapelle.mp3",
    "notes": ""
  },
  {
    "name": "h4tum",
    "sound": "h4tum.mp3",
    "notes": "<a href=\"https://www.youtube.com/watch?v=amYzBQMT4VI\">Source</a>"
  },
  {
    "name": "KITCTF",
    "sound": "KITCTF.mp3",
    "notes": "<a href=\"https://pp.ipd.kit.edu/MetalMint/mp3s/KIT-Hymne-Remix4.mp3\">Full Version</a>"
  },
  {
    "name": "Fluxfingers",
    "sound": "Fluxfingers.mp3",
    "notes": ""
  }
];

function playAll() {
  teams.forEach((team) => {
    const audio = document.getElementById(`audio-${team.name}`) as HTMLAudioElement;
    audio.play();
  });
}

</script>