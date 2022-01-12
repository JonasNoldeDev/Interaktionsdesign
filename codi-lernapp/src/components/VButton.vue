<template>
    <a :href="href" :class="[color, size]" @click="go">
        <slot></slot>
    </a>
</template>

<script>
    import routes from "../routes";

    export default {
        props: {
            href: {
                type: String,
                required: true,
            },
            color: {
                type: String,
                default: "orange",
            },
            size: {
                type: String,
                default: "medium",
            },
        },
        methods: {
            go(event) {
                event.preventDefault();
                this.$root.currentRoute = this.href;
                window.history.pushState(null, routes[this.href], this.href);
            },
        },
    };
</script>

<style scoped>
    a {
        line-height: 1;
        color: #fff;
        display: inline-block;
        text-decoration: none;
        padding: 1em 1.5em;
        border-radius: var(--border-radius);
    }

    .orange {
        background-color: var(--color-orange);
    }

    .blue {
        background-color: var(--color-blue);
    }

    .small {
        font-size: 1.2rem;
    }

    .xsmall {
        font-size: 0.8rem;
    }

</style>
