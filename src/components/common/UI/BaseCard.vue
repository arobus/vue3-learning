<template>
    <div>
        <header v-if="$slots.header">
            <slot name="header"><h3>Default Header</h3></slot>
        </header>
        <slot></slot>
        <section v-if="$slots.actions">
            <slot name="actions"></slot>
        </section>
        <footer v-if="$slots.footer">
            <slot name="footer"><h3>Default Footer</h3></slot>
        </footer>
    </div>
</template>

<style scoped>
    div {
        border-radius: 12px;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
        padding: 1rem;
        margin: 2rem auto;
        max-width: 40rem;
    }
</style>