<template>
  <div>
    <span>欢迎来到聊天室</span>
    <div id="abc">
      <a>啊</a>
    </div>
  </div>
</template>
<script>
import io from 'socket.io-client';

// let socket = io.connect('http://localhost:9998');
export default {
  name: "Communicate",
  data() {
    return {}
  },
  methods: {
  },
  created() {
  }
}
</script>

<style scoped>

</style>