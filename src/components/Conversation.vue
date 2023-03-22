<script setup lang="ts">
import ChatMessage from './ChatMessage.vue'
import DocumentationIcon from './icons/IconDocumentation.vue'
</script>

<template>
    
  <ChatMessage>
    <template #icon>
      <DocumentationIcon />
    </template>
    <template #heading>username</template>

    markdown here
  </ChatMessage>
</template>

<script lang="ts">
export default {
  components: {
    ChatMessage,
    DocumentationIcon,
  },
}
</script>