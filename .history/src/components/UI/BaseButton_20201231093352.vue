<template>
    <button>
        <slot></slot>
    </button>
</template>
<style scoped>
    button {                
        border: 0;
        padding: 2em;
        line-height: 0em;
        border-radius: 5px;        
        box-shadow: 0px 3px 3px -2px #aaa;
        max-height: 50px;
        cursor: pointer;
    }

    button.primary {
        background-color: rgb(105, 188, 236);
        color: white;
    }

    button.secondary {
        color: rgb(105, 188, 236);
        background-color: white;
    }
</style>