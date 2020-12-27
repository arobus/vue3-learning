<template>
    <div>
        <header v-if="$slots.header">
            <slot name="header"><h3>Default Header</h3></slot>
        </header>
        <slot></slot>
    </div>    
</template>


<style scoped>
    header {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    div {
        border-radius: 12px;
        margin: 2rem auto;
        max-width: 20rem;
        padding: 2rem;
        box-shadow: 0px 1px 6px -2px #333;
    }
</style>