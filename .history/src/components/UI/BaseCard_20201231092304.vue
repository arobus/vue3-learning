<template>
    <div>
        <slot></slot>
    </div>
</template>

<style scoped>
    div {
        padding: 1rem;
        box-shadow: 0px 3px 6px -2px #333;
        border-radius: 15px;
        display: flex;
        flex-direction: column;
        max-width: 50rem;
    }
</style>