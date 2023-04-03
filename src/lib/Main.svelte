<script>
    import "@fontsource/noto-sans/100.css";
    import { cubicInOut, linear, quadInOut } from "svelte/easing";
    import { fade, slide, scale, fly, draw } from "svelte/transition";
    import { onMount, tick } from "svelte";

    let ready = false;
    onMount(() => (ready = true));
    opening();

    async function opening() {
        await tick();
        await new Promise((resolve) => setTimeout(resolve, 3000));
        ready = false;
    }

    let full_name =
        "G          a       r     r    e        t    t        D         a       l      B         y      r    d      ";
</script>

{#if ready}
    <div class="fullname">
        {#each full_name as char, i}
            <div
                class="character"
                in:fly={{
                    delay: 100 + 20 * i,
                    duration: 1000,
                    easing: cubicInOut,
                    y: 400 * (-1) ** Math.floor(Math.random() * 2),
                    x: 400 * (1 - 2 * Math.random()),
                }}
                out:fly={{
                    delay: 20 * i,
                    duration: 1500,
                    easing: cubicInOut,
                    y: 1000 * (-1) ** Math.floor(Math.random() * 2),
                    x: 1000 * (1 - 2 * Math.random()),
                }}
            >
                <span class="character_span">
                    {char}&#8203;
                    <!-- Keep &#8203; above, idk why. it affects spacing -->
                </span>
            </div>
        {/each}
    </div>
    <div
        class="svelte_statement"
        in:fade={{
            delay: 2500,
            duration: 500,
            easing: cubicInOut,
        }}
        out:fade={{
            delay: 1000,
            duration: 1500,
            easing: cubicInOut,
        }}
    >
        made with svelte
    </div>
{/if}

{#if !ready}
    <ul
        class="menu"
        in:fade={{
            delay: 2500,
            duration: 1000,
        }}
    >
        <div class="menu_tab">menu 1</div>
        <div class="menu_tab">menu 2</div>
        <div class="menu_tab">menu 3</div>
    </ul>
    <div
        class="mainpage"
        in:fade={{
            delay: 2500,
            duration: 1000,
        }}
    >
        <h1
            class="header"
            in:fade={{
                delay: 2500,
                duration: 1000,
            }}
        >
            GARRETT DAL BYRD
        </h1>
        <div
            class="background"
            in:fade={{
                delay: 2500,
                duration: 1000,
            }}
        >
            placeholder
        </div>
    </div>
{/if}

<style>
    :global(body) {
        color: rgb(255, 255, 255);
        background-color: rgb(30, 30, 30);
    }
    div {
        color: rgb(255, 255, 255);
        background-color: rgb(30, 30, 30);
        font-family: Noto Sans, sans-serif;
        font-size: 8vw;
        display: box;
    }

    h1 {
        color: rgb(255, 255, 255);
        background-color: rgb(30, 30, 30);
        font-family: Noto Sans, sans-serif;
        font-size: 8vw;
        width: 100vw;
        height: 8vh;
        margin: 0%;
        padding: 0%;
        border: 0%;
        display: flex;
    }

    .header {
        position: relative;
        bottom: 0;
        right: 0;
        width: 100vw;
        height: 8vh;
        margin: 0%;
        padding: 0%;
        border: 0%;
        background-color: rgb(30, 30, 30);
        display: flexbox;
        font-size: 4vw;
    }

    .background {
        position: fixed;
        bottom: 0;
        right: 0;
        width: 50vw;
        height: 50vh;
        margin: 0%;
        padding: 0%;
        border: 0%;
        background-color: rgb(30, 30, 30);
        display: flex;
    }

    .mainpage {
        position: relative;
        bottom: 0;
        right: 0;
        width: 50vw;
        height: 50vh;
        margin: 0%;
        padding: 0%;
        border: 0%;
        background-color: rgb(30, 30, 30);
        display: flex;
    }

    .menu_tab {
        color: rgb(255, 255, 255);
        background-color: rgb(24, 24, 24);
        font-family: Noto Sans, sans-serif;
        font-size: 1.5vw;
        text-align: center;
        align-content: center;
        height: 4vh;
        width: 8vw;
        display: inline-flex;
    }

    .svelte_statement {
        color: rgb(255, 255, 255);
        font-family: Noto Sans, sans-serif;
        font-size: 1.25vw;
        text-align: center;
        position: fixed;
        bottom: 30vh;
        right: 45vw;
        width: 10vw;
        height: 10vh;
        margin: 0%;
        padding: 0%;
        border: 0%;
        background-color: rgba(30, 30, 30, 0);
        display: flexbox;
    }

    .fullname {
        position: fixed;
        bottom: 0;
        right: 0;
        width: 100vw;
        height: 100vh;
        margin: 0%;
        padding: 0%;
        border: 0%;
        background-color: rgba(30, 30, 30, 0);
        display: block;
    }

    .character {
        display: inline-block;
        position: relative;
        width: 0.5vw;
        background-color: rgb(30, 30, 30);
    }

    .character_span {
        position: absolute;
        bottom: -40vh;
    }
</style>
