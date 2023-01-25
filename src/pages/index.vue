<script setup>
import { selfTest } from '~/api'
import { anime, calendar, subjects } from '~/datas/bgm'
import { pgcReview } from '~/datas/bili'
const loadData = async () => {
  // const data = await subjects(378862)
  const data = await pgcReview(28229676)
  window.console.log(data)
}
loadData()
</script>

<template>
  <div>
    <a-image width="200"
      src="https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/a8c8cdb109cb051163646151a4a5083b.png~tplv-uwbnlip3yd-webp.webp" />
  </div>
</template>
