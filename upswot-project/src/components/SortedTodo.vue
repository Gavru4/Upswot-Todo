<template>
    <!-- <select v-model="modelValue" @change="changeOption">
        <option disabled value="">Выберите из списка</option>
        <option v-for="option in options" :key="option.value" :value="option.value">
            {{ option.name }}
        </option>
    </select> -->
    <select >
        <option disabled>Please select one</option>
        <option v-bind:value="true">Completed</option>
        <option v-bind:value="false">Incomplete</option>

    </select>
</template>