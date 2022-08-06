<template>
    <div class="modal" v-if="isModalOpen" @click.stop="openModal">
        <div @click.stop class="modal__content">
            <slot></slot>
        </div>
    </div>
</template>

<script>

import { mapGetters,  mapMutations } from "vuex";
export default {
    name: 'my-modal',
    computed: mapGetters({
        isModalOpen: "todo/isModalOpen"
    }),
    methods: {
        ...mapMutations({
            toggleModal: "todo/toggleModal"
        }),
      
        openModal() {
            this.toggleModal();
        },
    },
  }
</script>

<style scoped>



.modal {
top: 0;
bottom: 0;
right: 0;
left: 0;
background: rgba(0, 0, 0, 0.5);
position: fixed;
display: flex;
z-index: 99;
}

.modal__content {
    margin: auto;
    background: white;
    border-radius: 12px;
    min-height: 50px;
    min-width: 300px;
    padding: 60px;
}
</style>